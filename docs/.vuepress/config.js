module.exports = {
  base: '/vuenilla/',
  title: 'Vuenilla',
  description: 'Unstyled Vue.js component library.',
  themeConfig: {
    nav: [
      { text: 'Getting Started', link: '/pages/getting-started' },
      { text: 'Styles', link: '/pages/styles' },
      { text: 'Roadmap', link: '/pages/roadmap' },
      { text: 'FAQ', link: '/pages/faq' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/vuenilla' },
      { text: 'Github', link: 'https://github.com/phylos/vuenilla' }
    ],
    sidebar: [
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/accordion',
          '/components/alert',
          '/components/breadcrumbs',
          '/components/button',
          '/components/card',
          '/components/carousel',
          '/components/dropdown',
          '/components/hero',
          '/components/expander',
          '/components/form',
          '/components/icon',
          '/components/list',
          '/components/modal',
          '/components/pagination',
          '/components/slab',
          '/components/tabs',
          '/components/table',
          '/components/testimonial',
          '/components/tooltip'
        ]
      }
    ]
  }
}
