## Integrating a Diez Project into an existing Web application (JavaScript)

### Requirements and installation

Diez works in macOS, Windows, and Linux and only requires Node.js >= 7.10.1. For specific instructions on how to install Diez please refer to the [Set Up guide](/getting-started/#set-up).

This guide assumes that you already have a Diez project. If you don't have one, you can generate a starter project by running:

<CodeTabs>
```bash tabname-yarn
$ yarn create diez my-project
$ cd my-project
```
```bash tabname-npm
$ npx diez create my-project
$ cd my-project
```
</CodeTabs>


### Diez as a library

For a simple setup, you can have a folder that contains your Diez project (design token definitions) and a separate folder with your web project.

### Diez as a stand-alone repository

In a more robust setup, you should create a stand-alone repository for your Diez project and a separate repository for your JavaScript project.  This is the recommended pattern when you have multiple codebases consuming a single Diez design language.

### Compiling & consuming your design tokens

After you [compile](#compiling) your Diez project, a Node package containing your design tokens will be generated inside your Diez project.  You can use this package like any Node dependency: you can link it, publish it to NPM, or deploy it to Git.  We recommend using GitHub's recently launched [package registry](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages) for versioning and distributing your built modules to consuming codebases, though you can also use solutions like symlinking or `../../relative-paths`.

After that, you can consume your design language by `import`ing it.

```js
// Import your DesignLanguage and Diez
import {DesignLanguage, Diez} from 'diez-my-project-web';

// Create a new Diez instance providing your DesignLanguage as a source
const diezDs = new Diez(DesignLanguage);

// Listen to changes in the design language
diezDs.attach((ds) => {
  // The ds has been updated!
});
```

<div class="aside">We are building frameworks adapters to integrate Diez more semantically with your codebase, check back soon!</div>

##### Optional: applying prototype extensions

Many built-in prefabs can add methods to the prototype of DOM interfaces to make integrating with the codebase more easier, for example `Typograph` adds `applyTypograph` to `HTMLElement` which can be used to apply typography styles to elements, for example:

```js
const title = document.querySelector('h1');
title.applyTypograph(ds.typography.headerOne);
```

Since you may not want to modify DOM interfaces, these prototype extensions are completely optional and you have to explicitly opt-in by calling `applyHTMLExtensions` somewhere in your code:

```js
import {Diez} from 'diez-my-project-web';
Diez.applyHTMLExtensions();
```

You can find what prefabs have extensions in [Interacting with Prefabs](#interacting-with-prefabs) below.

### Compiling

The Diez compiler can compile your design tokens in two modes: _normal_ and _hot_.

#### Development flow

`hot` mode is used for development and will watch your Diez project for file changes and hot reload your code.

`hot` mode also comes with an integrated development server that will take care of serving assets like images and fonts for you.

To start your development server you can run:

```bash
$ diez hot -t web
```

#### Build flow

Once you are ready to build your application, you need to compile your files:

```bash
$ diez compile
```

You can always inspect the output by digging into the `build` folder after building.

### Interacting with Prefabs

Diez comes packaged with many prefabs that you can use to define your [Design Tokens](/glossary#tokens). All of the properties defined on prefabs are available to you along with a number of extensions and helpers to make interacting with them as seamless as possible.

#### [Color](/docs/latest/classes/prefabs.color.html)

`Color`s can be consumed in many ways. To get a valid hsla string, you can use the `.color` getter:

```javascript
myDiv.backgroundColor = ds.purple.color;
```

You can also get individual values from the color:

```javascript
const hue = ds.purple.h;
const saturation = ds.purple.s;
```

Or you can take advantage of built-in getters that return object styles.

<CodeTabs>
```jsx tabname-React
<div style={ds.purple.backgroundColorStyle} />
```
```vue tabname-Vue
<div :style="ds.purple.backgroundColorStyle"></div>
```
</CodeTabs>

All available helpers for `Color` are `colorStyle`, `backgroundColorStyle`, `borderColorStyle` and `outlineColorStyle`.

#### [LinearGradient](/docs/latest/classes/prefabs.lineargradient.html)

You can get a valid CSS string (`linear-gradient(...)`) with the value of the `LinearGradient` via the `linearGradient` helper:

```javascript
const domRef = document.querySelector('div');
domRef.background = ds.myGradient.linearGradient;
```

Alternatively, `backgroundImageStyle` and `backgroundStyle` can be used to get an object with valid CSS declarations:

<CodeTabs>
```jsx tabname-React
<div style={ds.myGradient.backgroundStyle} />
```
```vue tabname-Vue
<div :style="ds.myGradient.backgroundStyle"></div>
```
</CodeTabs>

#### [Image](/docs/latest/classes/prefabs.image.html)

You also have many ways to consume `Image`s:

Via the `url` getter, which returns a URL with an image that has an adequate resolution based on device pixel ratio:

<CodeTabs>
```js tabname-Vanilla
const siteImage = document.createElement('img');
siteImage.url = ds.myImage.url;
```
```jsx tabname-React
<img url={ds.myImage.url} alt="..." />
```
```vue tabname-Vue
<img :url="ds.myImage.url" alt="" />
```
</CodeTabs>

Or you can also use other getters to get style objects:

<CodeTabs>
```jsx tabname-React
<div style={ds.myImage.backgroundImageStyle} />
```
```vue tabname-Vue
<div :style="ds.myImage.backgroundImageStyle"></div>
```
</CodeTabs>

#### [Lottie](/docs/latest/classes/prefabs.lottie.html)

To integrate `Lottie` animations, you can use the `mount` method:

<CodeTabs>
```javascript tabname-Vanilla
const domRef = document.getElementById('lottie-container');
ds.lottie.mount(domRef);
```
```jsx tabname-React
ds.lottie.mount(this.refs.lottieContainer);
```
```vue tabname-Vue
ds.lottie.mount(this.$refs.lottieContainer);
```
</CodeTabs>

If you have enabled [prototype extensions](#optional-applying-prototype-extensions), you also have available the `mountLottie` method on `HTMLElements`:

```js
const domRef = document.getElementById('lottie-container');
domRef.mountLottie(ds.lottie);
```

#### [Typograph](/docs/latest/classes/prefabs.typograph.html)

You can access `Typograph` properties individually:

```javascript
ds.headingOne.fontFamily
```

Or you can apply all the styles associated with the `Typograph` at once via:

- The `applyStyle` method, which takes an element and applies styles to it.
- The `style` getter, which returns an object containing valid CSS declarations.

<CodeTabs>
```javascript tabname-Vanilla
const domRef = document.querySelector('h1');
ds.headingOne.applyStyle(domRef);
```
```jsx tabname-React
<h1 style={ds.headingOne.style}>Title</h1>
```
```vue tabname-Vue
<h1 :style="ds.headingOne.style">Title</h1>
```
</CodeTabs>

If you have enabled [prototype extensions](#optional-applying-prototype-extensions), you also have available the `applyTypograph` method on `HTMLElements`:

```js
const domRef = document.querySelector('h1');
domRef.applyTypograph(ds.headingOne);
```
