## Sketch Guide

### Getting Started

Diez has built-in ability to extract styles and images from design files and turn them into normalized, strongly-typed [Design Tokens](/glossary/#tokens). In this guide, we'll show you how to link a Sketch file and extract its styles.

#### Prerequisites

If you'd like to follow along, please first [create your own Diez project using the official template project](/getting-started/#set-up) which comes with everything set up for you and includes example codebases consuming the design language.

### Linking a Sketch file to your Diez project
From your Diez project root, open the empty `./designs/` folder and drop in your Sketch file.

### Setting up your Sketch file for extraction
Your Sketch file will need a little bit of set up work to denote which styles you intend to extract. Diez intentionally limits the elements you can extract to the set of items you reuse across your Sketch file: **Text Styles**, **Document Colors**, **Document Gradients**, **Layer Styles** and **Slices**.

#### Create Document Colors & Gradients to compose your palette
Create a **Document Color** and give it a name. Repeat the same step for all of your colors and gradients.

<video width="27%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/sketch-color.mp4" type="video/mp4">
</video>

#### Create Text Styles for your typography
Create a **Text Style** and give it a name.

<video width="70%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/sketch-text-style.mp4" type="video/mp4">
</video>

#### Create Layer Styles for your shadows
Create a **Text Style** and give it a name.

<video width="70%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/sketch-shadow.mp4" type="video/mp4">
</video>

#### Specify images and icons by marking them for export
Mark any visuals you want to use in your Diez project for export (or create slices of them).

<video width="70%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/sketch-export.mp4" type="video/mp4">
</video>


### Syncing your Sketch file with your Diez project
Make sure to save your changes. Now you're all set up to sync your Sketch file with your Diez project. Head back over to your terminal and within your Diez project folder run:

<CodeTabs>
```bash tabname-yarn
$ yarn diez extract
```
```bash tabname-npm
$ npx diez extract
```
</CodeTabs>

You'll notice a few new updates to your Diez project.

Inside a folder called `./assets/YourSketchFileName.sketch.contents` you'll find the extracted asset files required by your Diez project — `.png`s for each sliced visual at resolutions @1x-@4x, and any font files associated with your Text Styles.

But Diez didn't _only_ extract assets for you, it crafted them into strongly-typed and composable collections of design tokens! Take a look in `./src/designs/YourSketchFileName.sketch.ts` and you'll see your clean set of design tokens. And while this set of generated design tokens is just as pretty as the ones you'll create yourself, you won't need to edit it by hand.

#### Integrating your Sketch design tokens into your Diez design language

Import your Sketch design tokens into your main design language file: `./src/DesignLanguage.ts`

```typescript
import { yourSketchFileNameTokens } from './designs/YourSketchFileName.sketch';
```

Then use it as you see fit. As shown here, we've used the Document Color from Sketch named `fuss` and set it as the 'lightBackground' color of our design language.

```typescript
const palette = {
  lightBackground: yourSketchFileNameTokens.palette.fuss
}
```

### Re-syncing a design file

Need to update your designs? Perhaps the best part, is that once you hook it up, all you need to do to resync a design is to re-run `yarn diez extract`!

### Working with teams (designers & developers)

We think this has massive implications for product teams working together. As a designer, you just need to provide your developer with your Sketch file and this guide.

#### Wishing for Sketch Cloud support?
We are too. When the Sketch Cloud API becomes available, we will implement a workflow much like we have for [Figma](/getting-started/figma). Until then you have a couple options:

1. Each time you want to update your design tokens, download your latest cloud document from your team's page at www.sketch.cloud/your-team/. Save it to your Diez project's `designs/` folder; extract it from there.

2. Use InVision DSM and Sketch in conjunction. Check out the [InVision DSM Guide](/getting-started/dsm) for more details.

Want to learn more about how to use Diez? Head over to the [Basics Guide](/getting-started/the-basics).
