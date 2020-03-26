<template>
  <footer id="footer">
    <div class="footer-container section">
      <div class="footer-container_left">
        <div class="farewell">
          <img src="../assets/imgs/haiku.svg" class="haiku-logo" alt="">
          <p>Diez is built & maintained by the <a class="inline-link" href="https://haikuforteams.com">Haiku Team</a> and a growing community of contributors.</p>
        </div>
        <div class="social-icons">
          <a href="https://join.slack.com/t/dieznative/shared_invite/enQtNzEzNzM2OTg4NDA1LTA4NWZiMTNlZTgzNTY3Yzg2ODdjY2Y1MzBjMjdlY2FlNjljMmI3ZTgzMmQ4ODk1MDdlMTcyMTUzMjNmZWI4YjU" target="_blank"><img height="22px" width="22px" src="../assets/imgs/slack.svg" alt="slack" title="slack"></a>
          <a href="https://spectrum.chat/diez" target="_blank"><img height="20px" width="20px" src="../assets/imgs/spectrum.svg" alt="spectrum" title="spectrum"></a>
          <a href="https://medium.com/dieznative" target="_blank"><img height="22px" width="22px" src="../assets/imgs/medium.svg" alt="medium" title="medium"></a>
          <a href="https://twitter.com/dieznative" target="_blank"><img height="20px" width="24px" src="../assets/imgs/twitter.svg" alt="twitter" title="twitter"></a>
          <a href="https://github.com/diez/diez" @click="sendGitHubClickEvent" target="_blank"><img height="24px" width="24px" src="../assets/imgs/github.svg" alt="github" title="github"></a>
        </div>
      </div>
      <div class="footer-container_right">
        <h4>Sign up for our newsletter</h4>
        <p>Hear about updates, releases, new features and more.</p>
        <MailchimpForm></MailchimpForm>
      </div>
    </div>
    <div class="clear"></div>
  </footer>
</template>

<script>
import {sendGitHubClickEvent} from '../utils/analytics';
import MailchimpForm from '@theme/components/MailchimpForm.vue';

export default {
  methods: {
    sendGitHubClickEvent
  },

  components: {
    MailchimpForm
  }
};
</script>

<style lang="scss" scoped>
  @import '../styles/_utils.scss';

  .section {
    padding: 0 $spacing-xxxl-px;
  }

  footer {
    @include typography-copy();
    background-color: $palette-gray400;
    text-align: center;
    @include phone {
      flex-direction: column;
    }
  }

  #footer {
    padding: $spacing-xxl-px 0;


    a {
      @include link();
      font-size: 16px;
      padding: 0 $spacing-lg-px;

      @include phone{
        margin: 10px 0;
      }

      &.inline-link {
        padding: 0 0 0 $spacing-xs-px;
        display: inline-block;
        @include phone {
          padding: 0;
          display: inline;
          text-align: center;
        }
      }
    }
    .footer-container {
      margin: 0 auto;
      padding-bottom: 0;
      display: flex;
      justify-content: space-between;
      @include tablet {
        flex-direction: column;
        align-items: center;
      }
    }
    .footer-container_left {
      display: flex;
      flex-direction: column;
      @include tablet {
        margin-bottom: $sizing-xxs-px;
      }
    }
    .footer-container_right {
      text-align: left;

      h4 {
        margin: 16px 0;
      }
    }
    .social-icons {
      text-align: left;
      margin: 40px 0 0 52px;
    }
  }

  .farewell {
    padding-left: $spacing-sm-px;
    display: flex;

    .haiku-logo {
      align-self: center;
      margin-right: $spacing-xl-px;
    }
    p {
      text-align: left;
      max-width: 400px;
    }
  }

  .clear {
    clear: both;
  }
</style>
