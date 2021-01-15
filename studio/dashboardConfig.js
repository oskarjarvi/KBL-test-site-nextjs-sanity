export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6001a27675dde50a8e1052dc',
                  title: 'Sanity Studio',
                  name: 'kbl-test-site-nextjs-sanity-studio',
                  apiId: '519756a2-74fe-40e1-a070-6d1eb234b59d'
                },
                {
                  buildHookId: '6001a27614eaf31f7dab80b7',
                  title: 'Landing pages Website',
                  name: 'kbl-test-site-nextjs-sanity',
                  apiId: 'e3dc15ae-d765-4c38-a422-4e0ba16edc44'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oskarjarvi/KBL-test-site-nextjs-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kbl-test-site-nextjs-sanity.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
