<template>
  <div>
    <NavBar/>
    <div class="page shared layout-default">
      <section class="section-split">
        <div class="one-quarter">
          <GettingStartedNav/>
        </div>
        <div class="three-quarters">
          <Content />
          <div class="contribute-cta">
            <p>Is there anything missing or worth improving? <a class="inline-link" href="https://github.com/diez/www.diez.org">Contribute to this documentation on GitHub</a></p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GettingStartedNav from '@theme/components/GettingStartedNav.vue';
import NavBar from '@theme/components/NavBar.vue';

export default {
  components: {NavBar, GettingStartedNav}
};
</script>

<style lang="scss">
  @import '@theme/styles/_utils.scss';

  .layout-default {
    section {
      margin-top: $sizing-xs-px !important;
      @include tablet {
        margin-top: 0 !important;
      }
    }
    h1, h2 {
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
    .contribute-cta {
      padding: $spacing-xxl-px 0 ;
      margin-top: $sizing-xs-px;
      border-top: 1px solid $palette-gray700;
    }
  }
</style>
