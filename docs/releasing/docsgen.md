## DocsGen Guide - Releasing

DocsGen is a purely static web app generated from your Diez project, in order to deploy this app in a server of your choice you need to:

1. First, compile your Diez project using the `docs` target:

<CodeTabs>
```bash tabname-yarn
$ yarn diez compile -t docs
```
```bash tabname-npm
$ npx diez compile -t docs
```
</CodeTabs>

2. Once compiled, you can build your generated app for deployment by running from the root of your design language folder:

<CodeTabs>
```bash tabname-yarn
$ cd build/diez-your-project-name-docs
$ yarn build
```
```bash tabname-npm
$ cd build/diez-your-project-name-docs
$ npm run build
```
</CodeTabs>

This will generate a `dist` folder that you can deploy to any static file server.

<div class="aside"><i><strong>Gotcha Warning</strong></i>: The <code>dist</code> directory is meant to be served by an HTTP server, so it will not work if you open <code>dist/index.html</code> directly over the <code>file://</code> protocol.</div>

The easiest way to preview your production build locally is using a static file server, for example with:

<CodeTabs>
```bash tabname-node
$ npx http-server dist
```
</CodeTabs>
