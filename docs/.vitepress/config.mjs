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
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Installation', link: '/installation' },
          { text: 'Sorting', link: '/sorting' },
          { text: 'Checker', link: '/checker' },
          { text: 'Validator', link: '/validator' },
          {
            text: 'Managers',
            link: '/managers',
            items: [
              { text: 'String Manager', link: '/managers/string-manager' },
              { text: 'Array Manager', link: '/managers/array-manager' },
              { text: 'Randomizer Manager', link: '/managers/randomizer-manager' },
              { text: 'File Manager', link: '/managers/file-manager' },
              { text: 'Config Manager', link: '/managers/config-manager' }
            ]
          }
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ]
  }
};