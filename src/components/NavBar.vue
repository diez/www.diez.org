<template>
  <div class="navbar">
    <div @click="toggleMenu" class="menu-icon show-on-mobile">
      <img v-show="isMobileMenuOpen" width="25px" src="../assets/icons/menu.svg" alt="close">
    </div>
    <div class="nav" :class="{'hide' : isMobileMenuOpen}">
      <div class="holster">
        <router-link to="/" class="logo" @click.native="scrollToSelector('body')">
          Diez
          <img width="34" src="../assets/imgs/logo.svg"/>
        </router-link>

        <div class="holster-right">
          <!-- Desktop navigation -->
          <span
            class="dd-link hide-on-mobile"
            @mouseover="isLearnHovered = true"
            @mouseleave="isLearnHovered = false"
          >
            Learn
            <span class="dd-container" v-show="isLearnHovered">
              <router-link to="/getting-started">Guides</router-link>
              <router-link to="/docs">Docs</router-link>
              <router-link to="/glossary">Glossary</router-link>
              <router-link to="/licensing">Licensing</router-link>
              <router-link to="/faq">FAQ</router-link>
            </span>
          </span>
          <span
            class="dd-link hide-on-mobile"
            @mouseover="isSocialHovered = true"
            @mouseleave="isSocialHovered = false"
          >
            Social
            <span class="dd-container" v-show="isSocialHovered">
              <a href="https://join.slack.com/t/dieznative/shared_invite/enQtNzEzNzM2OTg4NDA1LTA4NWZiMTNlZTgzNTY3Yzg2ODdjY2Y1MzBjMjdlY2FlNjljMmI3ZTgzMmQ4ODk1MDdlMTcyMTUzMjNmZWI4YjU" target="_blank"><img height="22px" width="22px" src="../assets/imgs/slack.svg" alt="slack" title="slack">Slack</a>
              <a href="https://spectrum.chat/diez" target="_blank"><img height="20px" width="20px" src="../assets/imgs/spectrum.svg" alt="spectrum" title="spectrum">Spectrum</a>
              <a href="https://twitter.com/dieznative" target="_blank"><img height="20px" width="24px" src="../assets/imgs/twitter.svg" alt="twitter" title="twitter">Twitter</a>
              <a href="https://medium.com/dieznative" target="_blank"><img height="22px" width="22px" src="../assets/imgs/medium.svg" alt="medium" title="medium">Medium</a>
              <a href="https://github.com/diez/diez" @click="sendGitHubClickEvent" target="_blank"><img height="24px" width="24px" src="../assets/imgs/github.svg" alt="github" title="github">GitHub</a>
            </span> 
          </span>
          <a href="https://github.com/diez/diez" target="_blank" class="hide-on-mobile" @click="sendGitHubClickEvent">Github</a>
          <a href="https://www.producthunt.com/posts/haiku-animator?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-haiku-animator" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=147781&theme=dark" alt="Haiku Animator - Create powerful animations for any app or website | Product Hunt Embed" class="ph hide-on-mobile" width="192px" height="42px" /></a>
          <router-link class="button hide-on-mobile" to="/getting-started">Get started</router-link>

          <!-- Moble navigation -->
          <router-link class="show-on-mobile" to="/">Home</router-link>
          <router-link class="show-on-mobile" to="/getting-started">Get Started</router-link>
          <router-link class="show-on-mobile" to="/docs">Docs</router-link>
          <router-link class="show-on-mobile" to="/glossary">Glossary</router-link>
          <router-link class="show-on-mobile" to="/faq">FAQ</router-link>
          <router-link class="show-on-mobile" to="http://twitter.com/dieznative">Twitter</router-link>
          <a href="https://spectrum.chat/diez" class="show-on-mobile">Spectrum</a>
          <a href="https://github.com/diez/diez" class="show-on-mobile" @click="sendGitHubClickEvent">Github</a>
          <div @click="toggleMenu" class="menu-icon show-on-mobile">
            <img v-show="!isMobileMenuOpen" width="25px" src="../assets/icons/close.svg" alt="close">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {sendGitHubClickEvent} from '../utils/analytics';

export default {
  data () {
    return {
      isMobileMenuOpen: true,
      isLearnHovered: false,
      isSocialHovered: false
    };
  },

  methods: {
    sendGitHubClickEvent,

    scrollToSelector (selector) {
      const el = typeof window !== 'undefined' && window.document.querySelector(selector);
      if (el) {
        window.scrollTo({
          top: el.offsetTop
        });
      }
    },

    toggleMenu () {
      this.$data.isMobileMenuOpen = !this.$data.isMobileMenuOpen;
    },

    showChange(val){
      this.show = val;
    },

    open(){
      if(!this.show) this.$refs.drop.$emit('show', this.$refs.caller);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '@theme/styles/_utils.scss';
  $mobile-toggle-height: 25px;
  $mobile-toggle-margin: 20px;
  .navbar {
    @include nav();
    @include tablet {
      position: fixed;
      width: 100%;
      z-index: 999;
      top: 0;
      padding-top: 2 * $mobile-toggle-margin + $mobile-toggle-height;
      background-color: $palette-white;
      border-bottom: 1px solid $palette-gray700;
    }
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: $palette-white;
    z-index: 1000;
    border-bottom: 1px solid $palette-gray700;
    @include tablet {
      background-color: $palette-purple;
      color: $palette-white;
      bottom: 0;
    }
  }
  .hide {
     @include hide-mobile;
  }
  .holster {
    max-width: $page-width;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: $spacing-md-px 60px;
    @include tablet {
      flex-direction: column;
      height: 100%;
    }
  }
  .logo {
    @include typography-logo();
    display: flex;
    padding-left: 0 !important;
    align-items: center;
    @include tablet {
      display: none;
    }
  }
  a, .dd-link {
    @include link();
  }
  a:not(.button), .dd-link {
    padding: 0 $spacing-lg-px;
    color: $palette-black;
    @include tablet {
      color: $palette-white;
      font-size: 26px;
    }
  }
  .dd-link {
    position: relative;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }

    .dd-container {
      z-index: 10000;
      transform: translateZ(1px);
      position: absolute;
      box-shadow: 0 7px 20px rgba(0,0,0, .16);
      width: 170px;
      top: 25px;
      right: 0;
      border-radius: 4px;
      background-color: $palette-white;
      padding: 12px 0;

      img {
        margin-right: $spacing-sm-px;
      }
      
      a {
        padding: 8px 20px;
        display: block;
        text-align: right;
      }
    }
  }
  .button {
    @include button();
    margin-left: $spacing-lg-px;
    padding: 8px 20px 6px !important;
    letter-spacing: .4px !important;
  }
  .logo img {
    margin-left: 10px;
    margin-top: 1px;
  }
  .holster-right {
    display: flex;
    align-items: center;
    @include tablet {
      flex-direction: column;
      height: 100%;
      justify-content: space-evenly;
    }
    img {
      transform: translateY(3px);
    }
  }
  .menu-icon {
    position: fixed;
    top: $mobile-toggle-margin;
    right: $mobile-toggle-margin;
    cursor: pointer;
  }
  
  .ph {
    width: 192px;
    height: 42px;
  }
</style>
