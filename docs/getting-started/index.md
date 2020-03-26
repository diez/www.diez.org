## Getting Started
<h3 id="set-up">Setting up your Diez project</h3>

<h4 id="intro">Introduction</h4>

Diez makes it easy to adopt a unified design language across codebases, platforms, and teams.

This guide will get you up an running with a sample Diez project so you can see how easy it is to build a design language that supports every app &amp; website in your company.


#### Scaffold out your Diez project
The best way to get up and running with Diez is by using our official template project which comes with everything set up and ready to party.

Run the following command in your terminal and follow the prompts.

<CodeTabs>
```bash tabname-yarn
$ yarn create diez
```
```bash tabname-npm
$ npx diez create
```
</CodeTabs>

<div class="note">The above command will prompt you to choose a name for your Diez project. Please note that for the duration of the guides, your project will be referred to as <code class="inline">your-ds-name</code>.</div>

```bash
cd your-ds-name/design-language
```
That's it! You now have a Diez project set up and ready to power your apps. Let's take a look at what you just made.

By default, the `create diez` CLI functionality scaffolds out not only a Diez project, but example codebases that demonstrate how to consume your Compiler-baked Diez SDKs in real apps.

<HaiInfographic></HaiInfographic>

<div class="note">Note that the example apps are only present for demonstration purposes. They can be safely discarded when you connect your Diez project to your own apps.</div>

#### Now for the experience
Run the following command to experience the demo.

<CodeTabs>
```bash tabname-yarn
$ yarn demo
```
```bash tabname-npm
$ npm run demo
```
</CodeTabs>

This demo is running in [hot mode](/faq/#hot-mode-explained). Try modifying the contents of `src/DesignLanguage.ts` (relative to the root of the Diez project) to see changes to the design language take effect in real time.


### Next Steps

#### Explore the example app codebases

 We've written platform specific, getting started guides for walking through this new Diez project you've just created. We recommend picking your flavor(s) and jumping right in.

 <div class="cards-holster">
  <router-link class="card fourth" to="/getting-started/swift">
    <img src="@theme/assets/imgs/swift.svg" alt="Swift"><span>Swift</span>
  </router-link>
  <router-link class="card fourth" to="/getting-started/kotlin">
    <img src="@theme/assets/imgs/kotlin.svg" alt="Kotlin"><span>Kotlin</span>
  </router-link>
  <router-link class="card fourth" to="/getting-started/javascript">
    <img src="@theme/assets/imgs/javascript.svg" alt="JavaScript"><span>JavaScript</span>
  </router-link>
  <router-link class="card fourth" to="/getting-started/css-sass">
    <img src="@theme/assets/imgs/sass.svg" alt="Sass"><span>CSS & Sass</span>
  </router-link>
</div>


#### Additional guides
If you'd prefer to first learn a bit more about your Diez project and how to compose your design tokens, we have you covered with the Diez Basics guide. Want to hook your new Diez project up to design tools? We've got you there too.

<div class="cards-holster">
  <router-link class="card fourth" to="/getting-started/the-basics">
    <img src="@theme/assets/imgs/logo.svg" alt="Swift"><span>Diez Basics</span>
  </router-link>
  <router-link class="card fourth" to="/getting-started/figma">
    <img src="@theme/assets/imgs/figma.svg" alt="Figma"><span>Figma</span>
  </router-link>
  <router-link class="card fourth" to="/getting-started/sketch">
    <img src="@theme/assets/imgs/sketch.svg" alt="Sketch"><span>Sketch</span>
  </router-link>
</div>
