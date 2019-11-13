<template>
  <div>
    <div class="page shared">
      <NavBar></NavBar>
      <section class="hero">
        <div class="background"></div>
        <div class="section-split hero-container">
          <div class="half animation-holster">
            <div class="render-solve">Animation showing Diez in action</div>
            <HeroAnimation sizing="cover" loop="true"></HeroAnimation>
          </div>
          <div class="half align-top punch">
            <h1>Connect any codebase to a shared design language</h1>
            <h3>Create a shared repository for styles, assets, and usage guidelines—then compile to native code for iOS, Android, and Web.</h3>
            <router-link class="button left" to="/getting-started">Get Started</router-link>
            <a class="button secondary left" :href="typeformUrl">Enterprise Edition</a>
          </div>
        </div>
      </section>

      <section id="what" class="section section-narrow">
        <h1 class="center heading1">What is Diez?</h1>
        <h3 class="center">Diez is a free & open-source developer toolkit for creating codebase-ready design languages. Diez comprises three pieces:</h3>
      </section>

      <section id="dlf" class="section-split">
        <div  class="half align-top">
          <h2>1. Design language framework</h2>
          <p>Compose <a href="https://twitter.com/designtokens" target="_blank">design tokens</a> into any design language using Diez’s TypeScript framework.</p>
          <p>From colors to typography, drop shadows to border radii, gradients to usage guidelines, logos to icons — if you can imagine it, you can express it in Diez.</p>
        </div>
        <div class="half">
          <img width="100%" src="@theme/assets/imgs/dlf.png" alt="diez compiler">
        </div>
      </section>

      <section id="compiler" class="section-split">
        <div class="half mobile-reorder">
          <video width="100%" autoplay loop muted playsinline>
            <source src="@theme/assets/vids/auto-complete.mp4" type="video/mp4">
          </video>
        </div>
        <div class="half align-top">
          <h2>2. Cross-platform native compiler</h2>
          <p>Build any Diez project into pure native libraries for iOS, Android, or Web, ready for any new or existing codebase.</p>
          <p>Version your design language as code packages with first-class support for CocoaPods, Carthage, Gradle, npm, and yarn.</p>
          <p>Optimized for native-developer ergonomics — with autocomplete, inline comments, and static typing for iOS, Android, and Web, Diez makes it easy for everyone to rally around a common design language.</p>
        </div>
      </section>

      <section id="extractors" class="section-split">
        <div class="half align-top">
          <h2>3. Design file extractors</h2>
          <p>Diez Extractors compile design files into Diez-ready TypeScript, extracting colors, typography, image assets and more.</p>
          <p>Automate your design-to-development workflow by treating design files as versionable code artifacts.</p>
        </div>
        <div class="half mobile-reorder align-top">
          <div>
            <img width="100%" class="extractor-img" src="@theme/assets/imgs/extractors.jpg" alt="Design File Extractors: Sketch, Figma, InVision DSM">
          </div>
        </div>
      </section>

      <section id="enterprise-grade">
        <div class="section section-narrow no-bottom">
          <h1 class="center">Built for Enterprise</h1>
          <h3 class="center">Your Design System’s missing half</h3>
          <p class="center">Diez naturally integrates with any UI component solution in the world, including the ones your team already uses.</p>
        </div>
        <div class="section full-img">
          <img src="@theme/assets/imgs/design-system.png" alt="design system" class="mobile-img-spacer">
        </div>
      
        <div class="section-split">
          <div class="half align-top">
            <h2>Scales like a dream</h2>
            <p>Import, reuse & reference — great for composing multiple brands with shared assets & styles.</p>
            <p>Strongly typed from end-to-end, Diez scales to thousands of files, hundreds of codebases, and dozens of teams without skipping a beat.</p>
            <h3>Infinitely customizable</h3>
            <p>Diez is built around plugins — from the platforms it supports to the kinds of data you can express.  No matter the requirements of your design language or design system — whether you’re wrangling one brand or a hundred — you can customize Diez to fit your needs.</p>
          </div>
          <div class="half">
            <img width="90%" src="@theme/assets/imgs/complexity.png" alt="complexity" class="mobile-img-spacer">
          </div>
        </div>
      </section>

      <section id="docsgen" class="section-split">
        <div class="two-thirds mobile-reorder">
          <div class="video-holster card card-bordered">
            <video width="103%" style="margin-top:-6px;" autoplay loop muted playsinline preload="auto">
              <source src="@theme/assets/vids/docs.mp4" type="video/mp4">
            </video>
          </div>
        </div>
        <div class="one-third align-top">
          <h2>DocsGen</h2>
          <h3>(Enterprise Edition only)</h3>
          <p style="text-align: left;">From code comments and static analysis, Diez can automatically build customizable, ready-to-deploy documentation for your design system.</p>
        </div>
      </section>
    </div>

    <div id="enterprise" class="shared">
      <section class="section">
        <h1>Community & Enterprise Editions</h1>
        <p>Diez is open source, but has an Enterprise Edition with exclusive access to commercial add-ons, including DocsGen, Enterprise Training & Custom Integration options.</p>
        <div class="side-by-side">
          <div class="card">
            <h3>Community Edition</h3>
            <ul>
              <li>Design language framework</li>
              <li>Diez Compiler</li>
              <li>Design file extractors</li>
              <li>Open source license</li>
            </ul>
            <router-link class="button secondary" to="/getting-started">Get Started</router-link>
          </div>
          <div class="card card-w-background card-bordered">
            <h3>Enterprise Edition</h3>
            <ul>
              <li>Design language framework</li>
              <li>Diez Compiler</li>
              <li>Design file extractors <span class="primary">(Including support for InVision DSM)</span></li>
              <li class="primary">DocsGen</li>
              <li class="primary">Commercial license</li>
              <li class="primary">Support, Integration, & Training</li>
            </ul>
            <a class="button" :href="typeformUrl">
              Contact Sales
            </a>
            <div class="background"></div>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import {sendGitHubClickEvent} from '../utils/analytics';
import Footer from '@theme/components/Footer.vue';
import NavBar from '@theme/components/NavBar.vue';

export default {
  data () {
    return {
      typeformUrl: 'https://design-code.typeform.com/to/JnOi9o'
    };
  },
  mounted () {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        if (window.currentBranch) {
          this.$data.typeformUrl = `${this.$data.typeformUrl}?sitevariant=${window.currentBranch}`;
          clearInterval(interval);
        }
      });
    }
  },
  methods: {
    sendGitHubClickEvent
  },
  components: {
    Footer,
    NavBar,
    HeroAnimation: () => import('@haiku/tina-diezheroinstancesyntax/vue')
  }
};
</script>

<style lang="scss" scoped>
  @import '@theme/styles/_utils.scss';

  .hero {
    position: relative;
    width: calc(100vw + 2px);
    margin: 0 auto;
    max-width: 1480px;
    height: 86vh;
    min-height: 400px;
    max-height: 800px;
    overflow: hidden;
    perspective: 1200px;
    border-bottom: 1px solid $palette-gray400;
    border-right: 1px solid $palette-gray400;
    border-left: 1px solid $palette-gray400;
    @include phone {
      height: auto;
      max-height: auto;
      margin-bottom: $spacing-xxxl-px;
      padding-bottom: $spacing-xxl-px;
    }
    h1 {
      font-size: 2.8rem;
      margin-top: 0;
      margin-bottom: 0;
    }
    .hero-container {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: $spacing-xxxl-px auto 0;
      
      h3 {
        font-size: 28px;
      }
    }
    .background {
      background-image: url("../assets/imgs/tileable@2x.png");
      width: 230%;
      height: 230%;
      position: absolute;
      left: 0;
      right: 0;
      opacity: .09;
      pointer-events: none;
      transform: rotateY(9deg) rotateX(20deg) rotateZ(-33deg) scale(.9) translateY(-59%)
    }
  }

  h1 {
    margin-bottom: $spacing-xxl-px;
  }

  h3 {
    margin-bottom: $spacing-lg-px;
  }

  li {
    font-weight: 700;
  }

  .heading1 {
    margin-top: $sizing-xs-px;
    @include phone {
      margin-top: $spacing-xl-px;
    }
  }

  .early-access h2 {
    color: $palette-primary;
  }

  .cta {
    @include typography-copy();
    background-color: $palette-purple;
    color: $palette-white;
    text-align: center;
    @include phone {
      flex-direction: column;
      a.button {
        margin-top: $spacing-lg-px !important;
      }
    }
  }

  .cta {
    margin-top: $spacing-xxxl-px;
    padding: $spacing-xxxl-px $spacing-xxxl-px $spacing-xxl-px;
  }

  .handle-it {
    $handle-height: 83px;
    margin: -$handle-height auto 0;
    display: block;
    width: 70px;
    z-index: -1;
    @include tablet {
      margin-top: $handle-height / 2;
    }
  }

  .output-it {
    display: block;
    margin: 0 auto;
    width: 210px;
    z-index: -1;
  }

  .card.half {
    position: relative;
    width: 35%;
    overflow: visible;
    margin: 0 auto;
    img {
      margin: 30px 30px 10px;
    }
    font-weight: 700;
    text-align: center;
    padding-bottom: 30px;
  }

  .img-outline {
    border: 1px solid $palette-gray400;
  }

  .cta-holster {
    margin-top: $spacing-xs-px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $sizing-md-px;
  }

  .video-holster {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
  }

  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .bottom-spacer {
    margin-bottom: $sizing-xs-px;
  }

  .temp-img {
    transform: translate(-240px, 20px);
  }

  .animation-holster {
    min-width: 50%;
    min-height:100%;
    padding-left: 0;
    @include tablet-large {
      display: none;
    }
  }

  .punch {
    padding-left: 30px;
    @include tablet-large {
      width: 100%;
    }
    @include phone {
      text-align: center;
      padding: $spacing-lg-px;

      .button.left {
        float: none;
      }
    }
  }

  .render-solve {
    opacity: 0;
    pointer-events: none;
  }

  #enterprise-grade {
    margin-top: $spacing-xxxl-px;
  }

  #docsgen {
    h2 {
      margin-bottom: $spacing-lg-px;
    }
    h3 {
      margin-top: 0;
    }
  }

  #enterprise {
    font-family: "Source Sans Pro",sans-serif;
    font-size: 20px;
    background-color: $palette-mauve;
    h1 {
      text-align: center;
      color: $palette-white;
      margin-bottom: $spacing-lg-px;
    }
    h2 {
      color: $palette-white;
      margin-bottom: $spacing-xs-px;
    }
    h3 {
      margin-top: $spacing-xs-px;
    }
    p {
      text-align: center;
      max-width: $sizing-xxl-px;
      margin: 0 auto;
      margin-bottom: $spacing-xxl-px;
    }
    section {
      margin-bottom: 0;
      margin-top: $sizing-xs-px;
      padding-bottom: $sizing-xs-px;
    }
  }

  .side-by-side {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    .card {
      margin: 0 $spacing-lg-px;
      padding: $spacing-lg-px $spacing-xxxl-px $spacing-xl-px;
      text-align: center;
      max-width: 37%;
      @include phone {
        padding: $spacing-lg-px $spacing-lg-px $spacing-xl-px;
      }
      h3 {
        text-align: center;
        margin: $spacing-lg-px;
      }
      ul {
        text-align: left;
        margin-bottom: $spacing-xxl-px;
      }
      @include tablet {
        width: 100%;
      }
    }
  }

  .card-bordered {
    border: 1px solid $palette-card-color;
  }

  .card-w-background {
    perspective: 1200px;
    position: relative;
    overflow: hidden;
    background-color: $palette-white;
    .background {
      background-image: url("../assets/imgs/tileable@2x.png");
      width: 230%;
      height: 230%;
      position: absolute;
      left: 0;
      right: 0;
      opacity: .09;
      pointer-events: none;
      transform: rotateY(9deg) rotateX(20deg) rotateZ(-33deg) scale(.9) translate(12%, -80%);
      @include phone {
        transform: rotateY(9deg) rotateX(20deg) rotateZ(-33deg) scale(.9) translate(55%, -80%);
      }
    }
    .primary {
      color: $palette-primary;
    }
    @include tablet {
      margin-top: $spacing-lg-px !important;
    }
  }

  .code-block {
    width: 100%;
  }

  #what {
    margin-bottom: 0;
  }

  .full-img {
    text-align: center;
    padding-top: 0;

    img {
      width: 67%;
      @include tablet {
        width: 100%;
      }
    }
  }

  .mobile-img-spacer {
    @include tablet {
      padding-top: $spacing-lg-px;
    }
  }

  .section-split {
    margin-bottom: $spacing-lg-px;
  }

  @include phone {
    .shared.page {
      padding-top: $spacing-xl-px;
    }

    h3 {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .extractor-img {
    margin-top: 25px;
    @include phone {
      margin-top: 0;
    }
  }

</style>
