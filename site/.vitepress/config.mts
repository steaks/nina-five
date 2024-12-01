import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nina Five",
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
        text: 'Nina Five',
        items: [
          { text: 'Overview', link: '/overview' },
          { text: 'Rules', link: '/rules' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/steaks/nina-five' }
    ]
  }
})
