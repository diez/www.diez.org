## Figma Guide

### Getting Started

Diez has built-in ability to extract styles and images from design files and turn them into normalized, strongly-typed [Design Tokens](/glossary/#tokens). In this guide, we'll show you how to link a Figma file and extract its styles.

#### Prerequisites

If you'd like to follow along, please first [create your own Diez project using the official template project](/getting-started/#set-up) which comes with everything set up for you and includes example codebases consuming the design language.

### Linking a Figma file to your Diez project
From your Diez project root, open a file called `.diezrc`.

Every Figma file has a unique URL associated with it. Put your Figma file url in the `"services"` array. It should now look something like this:

```json
{
  "designs": {
    "services": ["https://www.figma.com/file/I1LjlbMJYa2cRVetGYgXsYhq/YourFigmaProjName?node-id=0%3A1"]
  }
}
```

<div class="note">(Be sure to put the URL in double-quotes as shown.)</div>

### Setting up your Figma file for extraction
Your Figma file will need a little bit of set up work to denote which styles you intend to extract. Diez intentionally limits the elements you can extract to the set of items you reuse across your Figma projects, libraries, files; i.e. **Components**, **Color Styles**, **Text Styles**, and **Effect Styles**.

<div class="aside"><i><strong>Gotcha Warning</strong></i>: Note that your file must have every Figma Style and Figma Component you intend to use instantiated on the canvas. This is a current limitation of the Figma API and might change in the future.</div>

#### Create Color Styles to compose your palette
Create a Figma "Color Style" and give it a name.

<video width="80%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/color-style.mp4" type="video/mp4">
</video>

#### Create Text Styles for your typography
Create a Figma "Text Style" and give it a name.

<video width="80%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/text-style.mp4" type="video/mp4">
</video>

#### Create Effect Styles for your shadows
Save any shadows you want to reuse across your project as "Effect Styles."

<video width="80%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/fig-shadow.mp4" type="video/mp4">
</video>

#### Specify images and icons by turning them into "Components"
Turn any visuals you want to use in your Diez project into Figma "Components."

<video width="80%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/images.mp4" type="video/mp4">
</video>

### Syncing your Figma file with your Diez project
Now you're all set up to sync your Figma file with your Diez project. Head back over to your Diez project folder within your terminal and run:

<CodeTabs>
```bash tabname-yarn
$ yarn diez extract
```
```bash tabname-npm
$ npx diez extract
```
</CodeTabs>

After authenticating Diez with your Figma account, you'll notice a few new updates to your Diez project.

Inside a folder called `./assets/YourFigmaProjName.figma.contents` you'll find the extracted asset files required by your Diez project — `.png`s for each Figma "component" at resolutions @1x-@4x, and any font files associated with your Figma Text Styles.

But Diez didn't _only_ extract assets for you, it crafted them into strongly-typed and composable design tokens! Take a look in `./src/designs/YourFigmaProjName.figma.ts` and you'll see your clean set of design tokens. And while this set of generated design tokens is just as pretty as the ones you'll create yourself, you won't need to edit it by hand.

#### Integrating your Figma design tokens into your Diez design language

Import your Figma design tokens into your main design language file: `./src/DesignLanguage.ts`

```typescript
import { yourFigmaProjNameTokens } from './designs/YourFigmaProjName.figma';
```

Then use it as you see fit. As shown here, we've used the Color Style from Figma named `fuss` and set it as the 'lightBackground' color in our design language.

```typescript
const palette = {
  lightBackground: yourFigmaProjNameTokens.palette.fuss
}
```

### Re-syncing a design file

Need to update your designs? Perhaps the best part, is that once you hook it up, all you need to do to resync a design is to re-run `yarn/npx diez extract`!

<video width="100%" autoplay loop muted playsinline>
    <source src="@theme/assets/vids/figma-short.mp4" type="video/mp4">
</video>
<div class="note">Shown above in the demo web app. Keep in mind that this works for iOS and Android codebases as well.</div>

### Best practices
When using Figma and Diez together there is an important best practices worth noting: **Create a separate Figma file for your design tokens**.

Don't use a single Figma file to represent your design team's entire UI kit. Diez extracts all Figma “components” — effectively turning them into reusable images. There can be quite a lot of "components" in a design file you don’t intend to use as design tokens — the UI elements such as buttons, input fields, badges, etc. **Design tool UI components ≠ coded UI components**, and it's not something Diez is designed to solve (so far).

That said, some Figma "components" _are_ useful as tokens (think icons, logos). And so the best practice here is to separate your design tokens into its own Figma file and publish it as a Figma Library (making it consumable by your other design files).

### Working with teams (designers & developers)

We think this has massive implications for product teams working together. As a designer, you just need to provide your developer with your Figma file URL and ensure she has permissions. As a developer, you just to create a free Figma account and perform the trivial setup outlined in this guide.

After that ongoing updates to your design language are as simple as running `yarn/npx diez extract`!

Want to learn more about how to use Diez? Head over to the [Basics Guide](/getting-started/the-basics).
