const {join, resolve} = require('path');
const DiezWebpackPlugin = require('diez-webpack-plugin');
const siteTitle = 'Diez - Connect any codebase to a shared design language';
const siteDesc = 'Create a shared repository for styles, assets, and usage guidelines—then compile to native code for iOS, Android, and Web.';

module.exports = {
  additionalPages: [

    {
      path: '/glossary/',
      frontmatter: {
        layout: 'Glossary',
      },
    },
    {
      path: '/licensing/',
      frontmatter: {
        layout: 'Licensing',
      },
    },
    {
      path: '/signed-in/',
      frontmatter: {
        layout: 'SignedIn',
      },
    },
    {
      path: '/faq/',
      frontmatter: {
        layout: 'Faq',
      },
    },
    {
      path: '/analytics/',
      frontmatter: {
        layout: 'Analytics',
      },
    },
    {
      path: '/thankyou/',
      frontmatter: {
        layout: 'ThankYou',
      },
    },
    {
      path: '/docs/',
      frontmatter: {
        layout: 'Docs',
      },
    },
  ],
  markdown: {
    anchor: {
      permalink: false,
    },
  },
  title: siteTitle,
  description: siteDesc,
  head: [
    ['meta', {charset: 'utf-8'}],
    ['meta', {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
    ['meta', {hid: 'description', name: 'description', content: siteDesc}],
    ['meta', {hid: 'og:image', property: 'og:image', content: 'http://diez.org/og.jpg'}],
    ['meta', {hid: 'og:title', property: 'og:title', content: siteTitle}],
    ['meta', {hid: 'og:description', property: 'og:description', content: siteDesc}],
    ['meta', {hid: 'og:url', property: 'og:url', content: 'http://diez.org/'}],
    ['meta', {hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image'}],
    ['link', {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    [
      'link',
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Source+Code+Pro:400,900|Source+Sans+Pro:400,400i,900&display=swap',
      },
    ],
  ],
  themeConfig: {
    docsURL: '/_api',
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-90094131-5',
      },
    ],
  ],
  configureWebpack: {
    plugins: [new DiezWebpackPlugin({sdk: 'diez-diez-site', projectPath: join(resolve(__dirname, '..', '..'), 'design-language')})],
  },
};
