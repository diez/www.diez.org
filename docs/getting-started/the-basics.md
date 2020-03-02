## Diez basics

### A walk-through
Want to get a feel for how Diez fits into your team's workflow? Check out the end-to-end video we've put together for those purposes.
<iframe style="margin-top:30px" width="100%" height="500" src="https://www.youtube.com/embed/41xMXV52Uwo" frameborder="0" allow="accelerometer, autoplay, encrypted-media, gyroscope, picture-in-picture" allowfullscreen></iframe>

<div class="aside">Note that this video demonstrates design token composition using TypeScript classes, which can be a more intimidating syntax for some. Diez also supports a more familiar JSON-like syntax, which is shown throughout the examples on this page.</div>

### The moving pieces

#### Your Diez Project

Your Diez project represents a design language: a collection of design token definitions in TypeScript.

#### Diez Complier

The Diez Complier transpiles your project's design tokens into versioned SDKs for each target you specify.

#### Your Diez SDKs

Your Diez SDKs are the output of your Diez project after compilation. For each target you specify, you'll receive a library full of structured, self-documenting, and statically typed design tokens as a *native code package*, ready to use within your app's or website's codebase.  Native developers, rejoices.

#### Diez CLI

The Diez CLI is used to generate your Diez project, cut new versions of your Diez SDKs, initiate the optional hot mode during development, and to extract assets from design files.

### Using design tokens to compose your Diez design language

In your Diez project you will use TypeScript (Read more about that choice [here](/faq/#typescript)) and Diez's [prefabs](/glossary#prefabs) to compose design tokens that are deeply customizable, reusable, and developer-friendly.


```typescript
export const designLanguage = {
  layoutValues = {
    spacingSmall: 5
  },
  strings = {
    title: 'Living source of truth'
  }
}
```

For convenience, Diez comes packaged with many prefabs that you can use as building blocks to put together your design tokens. The prefabs cover common use cases for design tokens like colors, typography, shadows, images, primitive values, etc.

After compilation the tokens defined in your design language are available to you along with a number of extensions and helpers to make interacting with them in your host codebase(s) a seamless experience.

Below we'll show how to use prefabs to define your design tokens and compose your Diez design language.

#### Colors

Use the `Color` prefab to create color palettes.

```typescript
import {Color} from '@diez/prefabs';

const myColors = {
  purple: Color.rgb(86, 35, 238)
}
```

View the full `Color` API [here](/docs/latest/classes/prefabs.color.html).

#### Images

```typescript
import {Image} from '@diez/prefabs';

const images = {
  logo: Image.responsive('assets/logo.png')
}
```

View the full `Image` API [here](/docs/latest/classes/prefabs.image.html).

#### Typography

Typography can be a bit more complex. You'll need to _compose_ two prefabs (`Font` and `Typograph`) in order to create a text style with a custom font.

```typescript
import {Font, Typograph} from '@diez/prefabs';

const textStyles = {
  heading1: new Typograph({
    font: Font.fromFile('assets/SourceSansPro-Regular.ttf'),
    fontSize: 24,
    color: colors.text
  })
}
```

There are several more prefabs available [here](/docs/latest/modules/prefabs.html), and we will be adding more in due time. Best of you're able to extend them or contribute back to the mainline as well.

#### Creating your own prefabs

Have something else in mind? You're in luck — Diez was carefully designed with extensibility and customizability as core principles. You're able to use Diez without leveraging _any_ of its prefabs if you so choose — you'll just need to define your own custom prefabs.

An example of a custom prefab is demonstrated in an example project [here](https://github.com/diez/diez/blob/master/examples/lorem-ipsum/design-language/src/components/Margin.ts).

### Next steps

After composing your Diez project you'll need to hook it up to your codebase(s). Platform specific guides are available in the side menu. Technical documentation is available [here](/docs/).

Want to learn more about how to set a Diez workflow for your team? Check out the [Diez + Your Codebase](/getting-started/your-codebase) guide.
