export const sendGitHubClickEvent = () => {
  if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
    window.ga('send', 'event', 'GitHub', 'github-click');
  }
}
