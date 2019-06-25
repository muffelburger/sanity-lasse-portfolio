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
                  buildHookId: '5d1216d5c099cd150695d222',
                  title: 'Sanity Studio',
                  name: 'sanity-lasse-portfolio-studio',
                  apiId: '60d5e380-9f7f-484d-9f20-dc55a4e1f1a8'
                },
                {
                  buildHookId: '5d1216d525691398a18f6eaf',
                  title: 'Portfolio Website',
                  name: 'sanity-lasse-portfolio',
                  apiId: '0378ed37-caf0-4f1a-a5fe-71348a10e967'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/muffelburger/sanity-lasse-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-lasse-portfolio.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
