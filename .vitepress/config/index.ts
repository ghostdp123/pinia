import { defineConfig } from 'vitepress'
import { enConfig } from './en'
import { zhConfig } from './zh'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base: "/pinia/",
  title: "Pinia",
  description: "Intuitive, type safe, light and flexible Store for Vue",
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
  ],
  cleanUrls: true,
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/posva' },
      {
        icon: 'github',
        link: 'https://github.com/vuejs/pinia',
      },
      {
        icon: 'discord',
        link: 'https://chat.vuejs.org',
      },
    ],
    footer: {
      copyright: 'Copyright © 2019-present Eduardo San Martin Morote',
      message: 'Released under the MIT License.',
    },
  },
  locales: {
    root: { label: 'English', lang: 'en-US', link: '/', ...enConfig },
    zh: { label: '简体中文', lang: 'zh-CN', link: '/zh/', ...zhConfig },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: 'https://es-pinia.vercel.app/',
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: 'https://pinia.vuejs.kr/',
    },
    pt: {
      label: 'Português',
      lang: 'pt-PT',
      link: 'https://pinia-docs-pt.netlify.app/',
    },
    uk: {
      label: 'Українська',
      lang: 'uk-UA',
      link: 'https://pinia-ua.netlify.app',
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: 'https://pinia-ru.netlify.app',
    },
  }
})
