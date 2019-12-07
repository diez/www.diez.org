
<template>
  <div>
    <NavBar></NavBar>
    <div class="page shared">
      <section class="section-narrow">
        <h3>Thank You!</h3>
        <p>We'll be in touch with you shortly.</p>
        <h4 style="margin-bottom: 30px">Join the Diez Community</h4>
        <a href="https://join.slack.com/t/dieznative/shared_invite/enQtNzEzNzM2OTg4NDA1LTA4NWZiMTNlZTgzNTY3Yzg2ODdjY2Y1MzBjMjdlY2FlNjljMmI3ZTgzMmQ4ODk1MDdlMTcyMTUzMjNmZWI4YjU"
          target="_blank"
          class="button">
          <img class="icon" height="22px" width="22px" src="../assets/imgs/slack-alt.svg" alt="slack" title="slack">
          Slack
        </a>
        <a href="https://spectrum.chat/diez"
          target="_blank"
          class="button">
          <img class="icon" height="22px" width="22px" src="../assets/imgs/spectrum-alt.svg" alt="spectrum" title="spectrum">
          Spectrum
        </a>
        <a href="https://github.com/diez/diez"
          target="_blank"
          class="button">
          <img class="icon" height="22px" width="22px" src="../assets/imgs/Github-alt.svg" alt="Github" title="Github">
          GitHub
        </a>
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

  .button {
    margin-right: $spacing-sm-px;
  }

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
