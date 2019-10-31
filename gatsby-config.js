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
    title: 'Pinegrove',
    siteUrl: 'https://www.pinegroveband.com',
    image: '/img/home-social.png',
    titleTemplate: '%s | Amperland',
    description: 'Pinegrove',
    twitterUsername: 'PinegroveBand',
    url: 'https://www.pinegroveband.com',
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
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/my-site-map.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        sitemapPath: `/my-site-map.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151106885-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        // head: true,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // // Any additional optional fields
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: "pinegroveband.com",
      }
    }
    // `gatsby-plugin-styled-components`,
  ],
}
