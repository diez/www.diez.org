## CSS & Sass - Getting Started

#### Prerequisites

The best way to try out Diez is by using our official template project which comes with everything set up for you. Head over to the [Set Up guide](/getting-started#set-up) if you haven't already scaffolded out a template project and example codebases.

#### Generate your Diez project's web SDK and serve it in hot mode

In the template project, you'll find a sample Diez project defined for you in `src/DesignLanguage.ts` and a sample web project consuming it in `example-codebases/web`.

From your Diez project root, run the following command to compile your Diez project's JavaScript SDK and serve it in hot mode.

<CodeTabs>
```bash tabname-yarn
$ yarn start web
```
```bash tabname-npm
$ npm run start web
```
</CodeTabs>

The effect of running this command is the same as running:

<CodeTabs>
```bash tabname-yarn
$ yarn diez compile -t web
$ yarn diez hot -t web
$ cd ../example-codebases/web
$ yarn start
```
```bash tabname-npm
$ npx diez compile -t web
$ npx diez hot -t web
$ cd ../example-codebases/web
$ npm run start
```
</CodeTabs>

If you take a look at the code in `example-codebases/web/App.module.scss`, you'll find that the design tokens are used across the app in sections of the code like this:

```scss
.caption {
  @include typography-caption();
  margin-top: $layout-values-spacing-small-px;
}
```

As you can see, the app is **directly** consuming your design language!

### Making Changes

Due to your Diez project being served in hot mode, any time you make changes to it, it will recompile on the fly.

For example, you can change the background color of the web app by modifying your design language's source of truth.

First, open `design-language/src/DesignLanguage.ts` in an editor of your choice. Look for the following block of code:

```typescript
const palette = {
  contentBackground: colors.white,
  text: colors.black,
  caption: colors.purple,
  headerBackground: LinearGradient.make(Toward.Bottom, colors.darkPurple, colors.black),
}
```

In this example, the `palette` object maps semantic names to `color`'s color definitions.

Change `contentBackground` to `colors.black` like so:

```Diff
- contentBackground: colors.white,
+ contentBackground: colors.black,
```

Go back to your browser and see the web app hot update! You can update and hot reload **any** value defined in your design language: strings, colors, images, fonts, etc.

Please see [The Basics Guide](/getting-started/the-basics/) for more information on how to compose and edit your design tokens.


Now you are ready to start! if you want to integrate Diez with an existing project, check out [Integrating Diez with an existing web project (CSS/Sass)](/existing-project-integration/css-sass/)
