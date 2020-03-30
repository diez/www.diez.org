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
const strings = {
  title: 'Diez',
  caption: 'Keep your designs in sync with code',
  helper: 'Modify the contents of “src/DesignLanguage.ts” (relative to the root of the Diez project) to see changes to the design language in real time.'
}
```

Please see [The Basics Guide](/getting-started/the-basics) for more information on how to compose and edit your design tokens.

Now you are ready to start! if you want to integrate Diez with an existing project, check out [Integrating Diez with an existing web project (DocsGen)](/existing-project-integration/docsgen/)
