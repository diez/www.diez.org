## Kotlin Guide - Getting Started

#### Prerequisites

The best way to try out Diez is by using our official template project which comes with everything set up for you. Head over to the [Set Up guide](/getting-started#set-up) if you haven't already scaffolded out a template project and example codebases.

The generated Android project has been tested with Android Studio 3.4 on Android Q (10). We recommend using the latest stable version of Android Studio.

#### Generate your Diez project's Android SDK and serve it in hot mode

In the template project, you'll find a sample Diez project defined for you in `design-language/src/DesignLanguage.ts` and a sample Android app consuming it in `example-codebases/android`.

From your Diez project root, run the following command to compile your Diez project's Android SDK and serve it in hot mode.

```bash
yarn start android
```

The effect of running this command is the same as running:
```bash
yarn diez compile -t android
yarn diez hot -t android
```

#### Open the project in Android Studio

`yarn start android` attempts to open the example project in Android Studio. If this does not work for any reason, in Android Studio, select the option to "Open an exiting Android Studio project" from the welcome screen. (If you already have a project open in Android Studio, you can use the `Open...` option from the File menu.) Then open the project in `example-codebases/android`.

After Gradle dependencies sync, run the `app` target with `Ctrl + R`.

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

Note that if you make any changes to the structure of your design tokens (e.g. you add/remove a property to any component) you will need to regenerate the SDK with `yarn diez compile -t android`. Due to the use of a dynamically linked Android module in the example project, you may also need to close and reopen your Android project after regenerating the SDK.

Please see [The Basics Guide](/getting-started/the-basics) for more information on how to compose and edit your design tokens.
