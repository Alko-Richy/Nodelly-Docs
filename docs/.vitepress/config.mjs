export default {
  title: 'Nodelly',
  description: 'A lightweight Node.js utility library',
  base: '/Nodelly-Docs/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'API', link: '/sorting' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Installation', link: '/installation' },
          { text: 'Sorting', link: '/sorting' },
          { text: 'Checker', link: '/checker' },
          { text: 'Validator', link: '/validator' },
          { text: 'Managers', link: '/managers' }
        ]
      }
    ]
  }
};