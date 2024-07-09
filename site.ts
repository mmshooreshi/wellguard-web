// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'WellGuard',
  description: 'Empowering Families with AI-Driven Elder Care',
  logo: 'i-noto:elderly-man',
  author: 'WellGuard Team',
  url: 'https://WellGuard-ai-healthcare.netlify.app',
  github: 'https://github.com/WellGuard-ai-healthcare',
  defaultLocale: 'en', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@WellGuard_ai',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'Home', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Features', link: '/features', type: 'primary', icon: 'i-mdi-star' },
    { text: 'Contact', link: '/contact', type: 'primary', icon: 'i-mdi-email' },
    { text: 'About Us', link: '/about', type: 'secondary', icon: 'i-mdi-information' },
    { text: 'Blog', link: '/blog', type: 'secondary', icon: 'i-mdi-blogger' },
    { text: 'Support', link: '/support', type: 'secondary', icon: 'i-mdi-help-circle' },
  ],
}
