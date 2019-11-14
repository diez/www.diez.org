<template>
  <div>
    <NavBar/>
    <div class="page shared">
      <section class="section-split">
        <div class="one-quarter">
          <div class="nav-wrap">
            <a href="#tokens">Design Tokens</a>
            <a href="#language">Design Language</a>
            <a href="#prefabs">Prefabs</a>
            <a href="#targets">Targets</a>
            <a href="#bindings">Native Bindings</a>
          </div>
        </div>
        <div class="three-quarters">
          <h2 id="glossary">Glossary</h2>

          <h3 id="tokens">Design Tokens</h3>
          <p>Think of design tokens as "design data": concepts like colors, typography definitions, spacings, sizings, and drop shadows—agnostic of any particular design tool or programming language.  Design tokens are the basic building blocks that compose into a design language.    
          <br><br>
          The magic of design tokens is they sit right at the gap between design and code—they're design concepts, but since they have no opinions about rendering or technologies, they're adaptable into any codebase with the right tooling (like Diez's cross-platform native compiler.)
          <br><br>
          Design tokens are a <a href="https://twitter.com/designtokens">community movement</a>.
          </p>

          <h3 id="language">Design Language</h3>
          <p>A design language is the same thing as a "visual identity" — a set of visual guidelines that comprise a "look and feel" or a "brand."  When you compose design tokens together with structure, references, and hierarchy, you are able to express a full design language (again, think of brand guidelines) in code, in a platform-agnostic way.  This is precisely what Diez makes possible.
          <br><br>
          If you have multiple native apps &amp; websites and you want to maintain a consistent brand identity in your UIs, you should consider creating a stand-alone design language that supports multiple codebases.  At the time of this writing, Diez is the most powerful solution in the world for exactly this.
          </p>

          <h3 id="prefabs">Prefabs</h3>
          <p><strong>Prefabs</strong> are Diez's design token "building blocks" that handle common design token use-cases. In addition to offering a useful and documented container for concepts like colors, typography, and shadows, Diez <strong>prefabs</strong> also do the heavy lifting of translating each concept to native platforms (e.g. "here's what `Color` means to iOS.")</p>
          <p>Though Diez ships with a useful collection of <strong>prefabs</strong>, you can build your own to suit your needs (and optionally contribute them back to the mainline). </p>
          <p>A guide for building your own <strong>prefabs</strong> will be coming soon. Ping us in our <a href="https://spectrum.chat/diez">Spectrum community</a> or <a href="https://join.slack.com/t/dieznative/shared_invite/enQtNzEzNzM2OTg4NDA1LTA4NWZiMTNlZTgzNTY3Yzg2ODdjY2Y1MzBjMjdlY2FlNjljMmI3ZTgzMmQ4ODk1MDdlMTcyMTUzMjNmZWI4YjU">Slack community</a> if you need some help.</p>

          <h3 id="targets">Targets</h3>
          <p>We loosely refer to <strong>Targets</strong> as a combination of a target platform, and a target technology that's compatible with that platform. For example, iOS and Swift, or Web and JavaScript, or Web and CSS. We've made compilers for a few platforms so far, but have also provided an extensible API for writing your own.</p>

          <h3 id="bindings">Native Bindings</h3>
          <p><strong>Native bindings</strong> provide the bridge between <a href="#prefabs">prefabs</a> and <a href="#targets">targets</a> for platform and language specific bound functionality. They enable you to glue a prefab to a specific implementation on a target inside a compiler.</p>
          <p>For example, the prefab <code class="inline">Color</code> — which is expressed abstractly as hsla — uses <strong>native bindings</strong> to become useful on native targets. (On Android colors are numbers that are represented as integers in the rgba color space; on iOS colors are objects; on Web colors are strings, hexcodes or rgba.)</p>
          <p></p>
        </div>
      </section>
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@theme/components/Footer.vue';
import NavBar from '@theme/components/NavBar.vue';

export default {
  components: {Footer, NavBar}
};
</script>

<style lang="scss" scoped>
  @import '@theme/styles/_utils.scss';

  section {
    margin-top: $sizing-xs-px !important;
    @include tablet {
      margin-top: 0 !important;
    }
  }
  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }
  h3  {
    padding-top: 68px;
    margin-top: 0;
  }
  .block {
    margin-bottom: $spacing-xxxl-px;
  }
  .one-quarter {
    position: relative;
    align-self: flex-start;
    height: 100%;
  }
  .nav-wrap {
    position: fixed;
    top: 200;
    a {
      display: block;
      margin-bottom: $spacing-lg-px;
    }
    @include tablet {
      display: none;
    }
  }
</style>
