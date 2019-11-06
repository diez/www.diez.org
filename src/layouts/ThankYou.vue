<template>
  <div>
    <NavBar></NavBar>
    <div class="page shared">
      <section class="section-narrow">
        <h3>Thank You!</h3>
        <p>We'll be in touch with you shortly.</p>
        <router-link to="/">Home</router-link>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue';

export default {
  components: {NavBar}
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
  .block {
    margin-bottom: $spacing-xxxl-px;
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
