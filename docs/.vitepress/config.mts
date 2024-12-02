import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nina's Five",
  description: "A team poker game",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Overview', link: '/overview' },
      { text: 'How to Play', link: '/howToPlay' },
    ],

    sidebar: [
      {
        text: "Nina's Five",
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'How to Play', link: '/howToPlay' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/steaks/nina-five' }
    ]
  },
  base: '/nina-five/'
})
