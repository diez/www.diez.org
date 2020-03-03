<template>
  <div>
    <NavBar/>
    <div id="faq" class="shared">
      <section class="section-split">
        <div id="design-language-explained" class="one-third question">
          <h3>What's the difference between design tokens and a design language?</h3>
        </div>
        <div class="two-thirds answer">
          <p>A design language is made out of design tokens — but it's more than "just a list" of design tokens.
          Think of your body — it's a collection of cells, but more than "just a bunch" of cells.  The whole is greater than the sum of the parts.
          <br><br>
          When your design tokens are connected with structure, hierarchy, reusability, and modularity — built on the skeleton of a full programming language —
          you can express more than just data.  You can express any visual identity, any look &amp; feel: any design language.</p>
        </div>
        <div id="cross-platform-explained" class="one-third question">
          <h3>What platforms does Diez support?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Diez has no intrinsic limitations in terms of target platforms or technologies. Diez currently includes compiler <router-link to="/glossary#targets">targets</router-link> for <strong>iOS SDKs</strong> written in Swift with Objective-C bridging, <strong>Android SDKs</strong> written in Kotlin, and <strong>Web SDKs</strong> written in JavaScript, TypeScript, CSS, and Sass. Most essentially, these are useful reference implementations of the Diez compiler API, which is arbitrarily extensible — our roadmap already includes additional configuration options for these compiler targets, and entirely new compiler targets.</p>
        </div>
        <div class="one-third question">
          <h3>How is this different from React Native, Flutter, et al?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Diez doesn't force your app to work within its paradigm or have opinions on how you design, develop, and structure your app's code. It simply provides you with SDKs for use in your existing codebases. Your generated Diez SDKs are libraries <strong>not frameworks</strong> — they are intended to complement, but not replace, your design workflow.</p>
        </div>
        <div class="one-third question">
          <h3>How can I contribute to Diez?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Diez is open source — check out the <a href="https://github.com/diez/diez/blob/master/CONTRIBUTING.md">contributing guidelines</a>!</p>
        </div>
        <div class="one-third question">
          <h3>Do I have to use the components provided by Diez?</h3>
        </div>
        <div class="two-thirds answer">
          <p>No. You can use as many or as few of them as you want. You can design your own — Diez is designed for extensibility. Diez currently includes a number of <router-link to="/glossary#prefabs">prefab</router-link> components implementing the most common <router-link to="/glossary#tokens">design tokens</router-link> we've observed in the wild. We'll certainly be adding more, and you can too.</p>
        </div>
        <div class="one-third question" id="where-it-lives">
          <h3>Where does the Diez source of truth live?</h3>
        </div>
        <div class="two-thirds answer">
          <p>This is up to you. We've found success with this pattern: The Diez project lives in a stand-alone GitHub repo and compiles SDKs into its consumer codebases. We recommend GitHub's new <a href="https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages" target="_blank">package manager</a> as an excellent way to distribute &amp; version your native packages between projects.</p>
        </div>
        <div class="one-third question" id="typescript">
          <h3>What is TypeScript and what does it have to do with Diez?</h3>
        </div>
        <div class="two-thirds answer">
          <p>TypeScript is a well-designed language with excellent tooling created by Anders Heiljberg (the programming language designer who also created C# and Delphi). The Diez compiler uses its type system to emit SDKs that are compatible with strongly typed languages such as Swift, Kotlin, and Java. It has a flexible compiler API, and because it's a web language, it enables us to build excellent reactive tooling on top of it which enables us to achieve things that were previously unattainable. (<a href="https://spectrum.chat/diez">Ask us</a> about our explorations into Rust, WASM, LLVM.) And because TypeScript is a superset of JavaScript, you probably already know how to code in it!</p>
          <p><router-link to="/glossary#tokens">Design tokens</router-link> such as colors and fonts look the same whether you're building them in Sketch, Figma, or any other tool. Diez chose to use a popular, accessible programming language with an expressive type system and excellent IDE support to capture the essential properties of design tokens while remaining agnostic to the idiosyncrasies of the platforms being targeted.</p>
        </div>
        <div class="one-third question">
          <h3>Does TypeScript mean I'm stuck with a web runtime?</h3>
        </div>
        <div class="two-thirds answer">
          <p>No! In production, Diez does not use a web runtime. Diez completely ejects into your codebase using pure native code SDKs.</p>
        </div>
        <div class="one-third question">
          <h3>Am I locked into Diez once I start using it for my team's design system?</h3>
        </div>
        <div class="two-thirds answer">
          <p>In production mode, you already are ejected from Diez.  Diez design languages simply boil down to data and code. You own your design language, you own your SDK, and don't have to continue using Diez to update it if at any point you decide that it's not the right fit.</p>
        </div>
        <div class="one-third question">
          <h3>How do I manage my UI components with Diez?</h3>
        </div>
        <div class="two-thirds answer">
            <p>You don't. Diez integrates seamlessly with existing UI component libraries and solutions (like Storybook), but is not intended to replace them.</p>
        </div>
        <div class="one-third question">
          <h3>Is Diez for designers as well as developers?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Diez is built on TypeScript, which is a programming language.  That said, we've carefully designed the API to be as JSON-like as possible for most authoring cases.  Generally, you'll want to be at least a "low-coder" to get a project set up, but anyone who's comfortable editing JSON or YAML should feel at home editing Diez.</p>
        </div>
        <div class="one-third question">
          <h3>How does Diez work with design files? (Sketch, Figma, etc.)</h3>
        </div>
        <div class="two-thirds answer">
          <p>Diez's Extractors pull design tokens out of design files.  What this means is you can collect design files & code into a holistic "source of truth" — where the common denominator is code.  Another way to put that is you can treat design files as "code artifacts," e.g. as packages you might install and import from a package manager like npm.</p>
        </div>
        <div id="hot-mode-explained" class="one-third question">
          <h3>How does hot updating work?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Hot updating uses TypeScript's powerful ability to watch, typecheck, and hot-compile a codebase (in the case of Diez, a codebase containing Diez components) to observe and emit changes to your design tokens, then emit changes into your codebase. Under the hood, we are running a hot server based on the popular and powerful ability for web applications to implement “hot module reloading”, which basically means that we can react to and emit changes in real time, even if you're targeting a native codebase.</p>
          <p>As a convenience for emitting changes to your design language into a native app while it's still running on your device or simulator, we are using webviews in hot mode, <em>only</em>. We plan to revise this approach in the future, but it's perfectly suitable for development and “melts away” in production builds.</p>
        </div>
        <div class="one-third question">
          <h3>Does hot updating (hot mode) affect App Store acceptability?</h3>
        </div>
        <div class="two-thirds answer">
          <p>No. The hot updating mechanism “melts away” for production builds.</p>
        </div>
        <div class="one-third question">
          <h3>Is hot updating necessary or required?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Hot mode is a completely optional feature.</p>
        </div>
        <div class="one-third question">
          <h3>Why would you want to use hot updating in development?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Hot updating enables you to design live in context. While this is helpful on your own, it has the potential to really shine in team settings — unlocking unprecedented cross-discipline collaboration. Imagine a world where your designers can design live on their machines while you have demo builds running on client machines.</p>
        </div>
        <div class="one-third question">
          <h3>Who's stewarding Diez?</h3>
        </div>
        <div class="two-thirds answer">
          <p>Diez was created and is maintained by <a href="http://www.haikuforteams.com/">the Haiku Team</a>.</p>
        </div>
      </section>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@theme/components/Footer.vue';
import NavBar from '@theme/components/NavBar.vue';

export default {
  components: {
    Footer,
    NavBar
  }
};
</script>

<style lang="scss" scoped>
  @import '@theme/styles/_utils.scss';

  #faq {
    .question, .answer {
      align-self: flex-start;
    }
    .question {
      padding-top: 52px;
    }
    .answer {
      padding-top: 65px;
    }
  }
  p, li {
    line-height: 32px;
  }
  .section-split {
    margin-bottom: 0;
  }
</style>
