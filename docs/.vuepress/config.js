module.exports = {
  base: '/vuenilla/',
  title: 'Vuenilla',
  description: 'Unstyled Vue.js component library.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Phylos Bioscience', link: 'http://phylos.bio/' },
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        children: [
          '/pages/install',
          '/pages/styles',
          '/pages/roadmap',
          '/pages/faq'
        ]
      },
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
          '/components/toast',
          '/components/tooltip'
        ]
      }
    ]
  }
}
