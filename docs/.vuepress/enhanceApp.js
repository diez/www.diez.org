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
      ga('set', 'experiment-id', window.currentBranch);
    }
  });
};
