'use strict';

const { store } = require('gatsby-data/dist/redux');
const bootstrap = require(`gatsby-data/dist/bootstrap`);
const nextStatic = require(`./lib`);

(async() => {
  await bootstrap({
    directory: process.cwd(),
    config: {
      siteMetadata: {
        title: `Gatsby Redux`,
      },
      plugins: [
        {
          resolve: `${__dirname}/node_modules/gatsby-source-filesystem`,
          options: {
            path: `${__dirname}/content`,
            name: `content`,
          }
        },
        {
          resolve: `${__dirname}/node_modules/gatsby-transformer-remark`
        }
      ]
    }
  });

  const conf = {
    exportPathMap: async () => await getPages(),
    schema: store.getState().schema,
    dir: '.'
  }

  // launch server
  nextStatic(conf);
})()
