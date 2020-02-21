## Swift - Getting Started

#### Prerequisites

The best way to try out Diez is by using our official template project which comes with everything set up for you. Head over to the [Set Up guide](/getting-started#set-up) if you haven't already scaffolded out a template project and example codebases.

The project generated in this guide requires Xcode 9+, Cocoapods 1.7.0+, and iOS 11+. We recommend using the latest stable version of Xcode.

#### Generate your Diez project's iOS SDK and serve it in hot mode

In the template project, you'll find a sample Diez project defined for you in `design-language/src/DesignLanguage.ts` and a sample iOS app consuming it in `example-codebases/ios`.

From your Diez project root, run the following command to compile your Diez project's iOS SDK and serve it in hot mode.

<CodeTabs>
```bash tabname-yarn
$ yarn start ios
```
```bash tabname-npm
$ npm run start ios
```
</CodeTabs>

The effect of running this command is the same as running:

<CodeTabs>
```bash tabname-yarn
$ yarn diez compile -t ios --cocoapods
$ yarn diez hot -t ios
$ cd ../example-codebases/ios
$ yarn start
```
```bash tabname-npm
$ npx diez compile -t ios --cocoapods
$ npx diez hot -t ios
$ cd ../example-codebases/ios
$ npm run start
```
</CodeTabs>

Once you have the application open in Xcode, run it (click ► or hit `⌘ + r`) to see Diez in action.

#### Making Changes

Let's change the background color of our application by modifying our design language's source of truth.

Open `design-language/src/DesignLanguage.ts`, in an editor of your choice, and look for the following block of code:

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

Save your changes to see the background color update in real time! Feel free to experiment with changing other values to see Diez in action.

Note that if you make any changes to the structure of your design tokens (e.g. you add/remove a property to any collection) you will need to regenerate the SDK (`yarn start ios`), clean your Xcode project (`⌘ + shift + K`), and then build/run (`⌘ + r`).

Please see [The Basics guide](/getting-started/the-basics) for more information on how to compose and edit your design tokens.
