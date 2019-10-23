import Docs from '@theme/layouts/Docs.vue';
import '@theme/styles/shared.scss';

export default ({router}) => {
  router.addRoutes([
    {
      name: 'docs-*',
      path: '/docs/:version/*',
      component: Docs,
    },
  ]);
  router.afterEach(() => {
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
      // window.currentBranch is set by Netlify via the 'snippet injection' functionality
      // dimension1 maps to 'experiment-id' in GA, you can edit or add more dimensions via the
      // GA interface.
      ga('set', 'dimension1', window.currentBranch);
    }
  });
};
