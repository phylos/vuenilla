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
          'Install',
          'Styles',
          'Roadmap',
          'FAQ'
        ]
      },
      {
        title: 'Components',
        collapsable: false,
        children: [
          '/components/Card'
        ]
      }
    ]
  }
}
