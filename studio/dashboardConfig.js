export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622c65e00deada43e025a7a1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5qga3y2d',
                  apiId: 'c1fedf8b-e1e3-4ef6-8a04-99c8f6031d8f'
                },
                {
                  buildHookId: '622c65e0da4a5539ebc175fe',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-3zyz6xw9',
                  apiId: 'f70371b2-883b-411a-a2fb-499137224f83'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hoanganh1296/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-3zyz6xw9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
