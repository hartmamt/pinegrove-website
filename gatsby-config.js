require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

const queries = require("./src/utils/algolia")

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
}

const {
  spaceId,
  accessToken
} = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: {
    title: 'Amperland',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID || '6NF0KDY4N8',
        apiKey: process.env.ALGOLIA_ADMIN_KEY || 'f6e0a6927130f0e28447995468efff0e',
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `content`,
        remote: `https://github.com/hartmamt/pinegrove-content.git`,
        // Multiple patterns and negation supported. See https://github.com/mrmlnc/fast-glob
        patterns: [`*`, `!*.md`]
        //patterns: ['docs/authors/*.md', 'docs/editorials/*.md', 'docs/about/*.md', 'docs/articles/*.md'],
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/.cache/gatsby-source-git/`,
      },
    },
    // `gatsby-plugin-styled-components`,
  ],
}
