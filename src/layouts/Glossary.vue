<template>
  <div>
    <NavBar/>
    <div class="page shared">
      <section class="section-split">
        <div class="one-quarter">
          <div class="nav-wrap">
            <a href="#tokens">Design Tokens</a>
            <a href="#prefabs">Prefabs</a>
            <a href="#targets">Targets</a>
            <a href="#bindings">Native Bindings</a>
            <a href="#hot-mode">Hot Mode</a>
          </div>
        </div>
        <div class="three-quarters">
          <h2 id="glossary">Glossary</h2>
          
          <h3 id="tokens">Design Tokens</h3>
          <p>Design tokens are the basic building blocks that define your design system. They are the base layer that enables you to compose your UI in a uniform and consistent manner using reusable patterns.</p>
          
          <h3 id="prefabs">Prefabs</h3>
          <p><strong>Prefabs</strong> are prepared to handle common design token usecases. When you define your design tokens using <strong>prefabs</strong>, they gain the superpower of being able to be compiled to all of your selected <a href="#targets">targets</a>.</p>
          <p>Diez ships with a useful collection of <strong>prefabs</strong> but you can build your own to suit your needs (and optionally contribute them back to the mainline). </p>
          <p>A guide for building your own <strong>prefabs</strong> will be coming soon. Ping us in <a href="https://spectrum.chat/diez">the community</a> if you need some help.</p>
          
          <h3 id="targets">Targets</h3>
          <p>We loosely refer to <strong>Targets</strong> as a combination of a target platform, and a target technology that's compatible with that platform. For example, iOS and Swift, or Web and JavaScript, or Web and CSS. We've made compilers for a few platforms so far, but have also provided an extensible API for writing your own.</p>
          
          <h3 id="bindings">Native Bindings</h3>
          <p><strong>Native bindings</strong> provide the bridge between <a href="#prefabs">prefabs</a> and <a href="#targets">targets</a> for platform and language specific bound functionality. They enable you to glue a prefab to a specific implementation on a target inside a compiler.</p>
          <p>For example, the prefab <code class="inline">Color</code> — which is expressed abstractly as hsla — uses <strong>native bindings</strong> to become useful on native targets. (On Android colors are numbers that are represented as integers in the rgba color space; on iOS colors are objects; on Web colors are strings, hexcodes or rgba.)</p>
          <p></p>
          
          <h3 id="hot-mode">Hot Mode</h3>
          <p><strong>Hot mode</strong> is an optional feature that uses a hot server to observe and emit changes to your design system, then emit changes into your codebase in real time. More details on how it works can be <router-link to="/#hot-mode-explained">found here</router-link>.</p>
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
