<template>
  <div>
    <div class="page shared">
      <NavBar></NavBar>
      <section class="hero">
        <div class="background"></div>
        <div class="section-split hero-container">
          <div class="half animation-holster">
            <div class="render-solve">Animation showing Diez in action</div>
            <HeroAnimation sizing="cover"></HeroAnimation>
          </div>
          <div class="half align-top punch" style="padding-left: 30px">
            <h1>Adopt a unified design language across codebases, platforms, and teams</h1>
            <h3>Diez is an open-source developer toolkit for managing design systems at scale</h3>
              <router-link class="button left" to="/getting-started">Get Started</router-link>
              <a class="button secondary left" href="https://github.com/diez/diez/">
                <img height="22px" width="22px" src="../assets/imgs/github-light.svg" class="icon" alt="github" title="github">
                GitHub
              </a>
          </div>
        </div>
      </section>

      <section id="cross-platform" class="section-split">
        <div class="half align-top">
          <h2>Design Language Framework</h2>
          <p>Use TypeScript to compose <a target="_blank" href="https://www.lightningdesignsystem.com/design-tokens/">design tokens</a> into deeply customizable, reusable, and developer-friendly Design Token Components.</p>
          <p>Design Token Components enable a "write once, use anywhere" paradigm for your design language, across codebases.</p>
        </div>
        <div class="half">
          <div class="cards-holster">
            <div class="card third mono"><img src="@theme/assets/icons/color.svg" alt="Color">Color</div>
            <div class="card third mono"><img src="@theme/assets/icons/number.svg" alt="Number">Number</div>
            <div class="card third mono"><img src="@theme/assets/icons/font.svg" alt="Font">Font</div>
            <div class="card third mono"><img src="@theme/assets/icons/typograph.svg" alt="Text Style">Text Style</div>
            <div class="card third mono"><img src="@theme/assets/icons/image.svg" alt="Image">Image</div>
            <div class="card third mono"><img src="@theme/assets/icons/animation.svg" alt="Animation">Animation</div>
          </div>
        </div>
      </section>

      <section id="compiler" class="section-split">
        <div class="half mobile-reorder">
          <img src="@theme/assets/imgs/handle.svg" class="handle-it" alt="handle">
          <div class="card half">
            <img src="@theme/assets/imgs/logo.svg" alt="diez compiler">
            Diez Compiler
          </div>
          <img src="@theme/assets/imgs/outputs.svg" class="output-it" alt="output-arms">
          <div class="cards-holster">
            <div class="card fourth-alt"><img src="@theme/assets/imgs/swift.svg" alt="Swift"><span>Swift</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/kotlin.svg" alt="Kotlin"><span>Kotlin</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/javascript.svg" alt="JavaScript"><span>JavaScript</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/objc.svg" alt="ObjectiveC"><span>Objective-C</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/java.svg" alt="Java"><span>Java</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/typescript.svg" alt="TypeScript"><span>TypeScript</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/sass.svg" alt="Sass"><span>Sass</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/storybook.svg" alt="Storybook"><span>Storybook</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/vue.svg" alt="Vue"><span>Vue</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/react.svg" alt="React"><span>React</span></div>
            <div class="card fourth-alt"><img src="@theme/assets/imgs/angular.svg" alt="Angular"><span>Angular</span></div>

            <div class="card fourth-alt extensible"><img src="@theme/assets/icons/plus.svg" alt="Extensible"><span>Extensible</span></div>
          </div>
        </div>
        <div class="half align-top">
          <h2>Cross-Platform Native Compiler</h2>
          <p>More precisely a <i>transpiler</i>: Diez builds your TypeScript component definitions into pure native SDKs for iOS, Android, and the Web — complete with type definitions and autocomplete.</p>
          <p><strong>Diez works with your codebase(s):</strong>  Diez carries zero opinions about rendering, requires no runtime or VMs, and is designed for progressive adoption.</p>
          <h3>Hot Updates</h3>
          <p>The Diez compiler ships with a <code class="inline">hot</code> mode, which allows for hot updates at development time — even inside native iOS and Android apps.</p>
        </div>
      </section>

      <section id="extractors" class="section-split">
        <div class="half align-top">
          <h2>Design File Extractors</h2>
          <p>Diez includes command-line tools for extracting normalized, strongly typed styles and images from many modern design tools.</p>
        </div>
        <div class="half mobile-reorder">
          <div class="cards-holster">
            <img width="100%" height="100%" src="@theme/assets/imgs/design-tool-extractors-1x.png" alt="Design File Extractors: Sketch, Figma, InVision DSM">
          </div>
        </div>
      </section>

      <section id="enterprise" class="section">
        <h2>Community & Enterprise Editions</h2>
        <p>Diez is open source, but has an Enterprise Edition with exclusive access to commercial add-ons, including DocsGen, Enterprise Training & Custom Integration options.</p>
        <div class="side-by-side">
          <div class="card">
            <h3>Community Edition</h3>
            <ul>
              <li>Design Language Framework</li>
              <li>Diez Compiler</li>
              <li>Design-File Extractors</li>
            </ul>
            <router-link class="button secondary" to="/getting-started">Get Started</router-link>
          </div>
          <div class="card card-w-background card-bordered">
            <h3>Enterprise Edition</h3>
            <ul>
              <li>Design Language Framework</li>
              <li>Diez Compiler</li>
              <li>Design-File Extractors</li>
              <li class="primary">Diez DocsGen</li>
              <li class="primary">Commercial License</li>
              <li class="primary">Support, Integration, & Training</li>
            </ul>
            <a class="button" href="mailto:sales@diez.org?subject=Enterprise Edition">
              Contact Sales
            </a>
            <div class="background"></div>
          </div>
        </div>
      </section>

      <section id="docsgen" class="section-split">
        <div class="one-third align-top">
          <h2>DocsGen</h2>
          <h3>(Available as part of Enterprise Edition)</h3>
          <p>From code comments and static analysis, Diez can automatically build customizable, ready-to-deploy documentation for your design system.</p>
        </div>
        <div class="two-thirds">
          <div class="video-holster card card-bordered">
            <video width="103%" style="margin-top:-6px;" autoplay loop muted playsinline preload="auto">
                <source src="@theme/assets/vids/docs.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </section>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@theme/components/Footer.vue';
import NavBar from '@theme/components/NavBar.vue';

export default {
  components: {
    Footer,
    NavBar,
    HeroAnimation: () => import('@haiku/tina-diezhero2/vue')
  }
};
</script>

<style lang="scss" scoped>
  @import '@theme/styles/_utils.scss';

  .hero {
    position: relative;
    width: 100vw;
    height: 86vh;
    min-height: 400px;
    max-height: 1200px;
    overflow: hidden;
    perspective: 1200px;
    border-bottom: 1px solid $palette-gray400;
    @include phone {
      height: auto;
      max-height: auto;
      margin-bottom: $spacing-xxxl-px;
    }
    h1 {
      font-size: 2.8rem;
      margin-top: 0;
    }
    .hero-container {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: $spacing-xxxl-px auto 0;
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
    margin-bottom: 0;
  }

  li {
    font-weight: 700;
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
    @include tablet-large {
      width: 100%;
    }
  }

  .render-solve {
    opacity: 0;
    pointer-events: none;
  }

  #enterprise {
    h2 { text-align: center;}
    p {
      text-align: center;
      max-width: $sizing-xxl-px;
      margin: 0 auto;
      margin-bottom: $spacing-xxl-px;
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
    }
    .primary {
      color: $palette-primary;
    }
    @include tablet {
      margin-top: $spacing-lg-px !important;
    }
  }

</style>
