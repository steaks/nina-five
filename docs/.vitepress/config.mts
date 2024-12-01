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
      { text: 'Rules', link: '/rules' },
    ],

    sidebar: [
      {
        text: "Nina's Five",
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Rules', link: '/rules' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/steaks/nina-five' }
    ]
  },
  base: '/nina-five'
})
