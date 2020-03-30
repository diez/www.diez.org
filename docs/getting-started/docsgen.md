## DocsGen Guide - Getting Started

#### Prerequisites

The best way to try out Diez is by using our official template project which comes with everything set up for you. Head over to the [Set Up guide](/getting-started#set-up) if you haven't already scaffolded out a template project and example codebases.

#### Generate your Diez project's docs

From your Diez project root, run the following command to compile your Diez project's docs.

<CodeTabs>
```bash tabname-yarn
$ yarn start docs
```
```bash tabname-npm
$ npm run start docs
```
</CodeTabs>

The effect of running this command is the same as running:

<CodeTabs>
```bash tabname-yarn
$ yarn diez compile -t docs
$ cd build/diez-your-project-name-docs/
$ yarn start
```
```bash tabname-npm
$ npx diez compile -t docs
$ cd build/diez-your-project-name-docs/
$ npm run start
```
</CodeTabs>

#### Making Changes

First, open `design-language/src/DesignLanguage.ts` in an editor of your choice. Look for the following block of code:

```typescript
const palette = {
  contentBackground: colors.white,
  text: colors.black,
  caption: colors.purple,
}
```

In this example, the `palette` object maps semantic names to `Color`s.

Change the value of `contentBackground` to something of your choice, for example:

```Diff
- contentBackground: colors.white,
+ contentBackground: colors.purple,
```

Go back to your terminal, and stop the server (`cmd + c` or `ctrl + c`) and start the docs app again. You can update **any** value defined in your design language: strings, colors, images, fonts, etc.

<div class="aside"><i><strong>Gotcha Warning</strong></i>: You need to restart your DocsGen server after every change for the app to update, we plan to change this and introduce a <code>hot</code> mode soon. Stay tuned!</div>

Please see [The Basics Guide](/getting-started/the-basics) for more information on how to compose and edit your design tokens.

Now you are ready to start! if you want to integrate Diez with an existing project, check out [Integrating Diez with an existing web project (DocsGen)](/existing-project-integration/docsgen/)
