const path = require('path');

module.exports = {
  siteMetadata: {
    title: `BLOWW`,
    description: `불어오는 바람의 방향으로 자연스럽게 흘러가듯이 가장 자연스러운 방법으로 바꾸어갑니다.`,
    author: `imsourceboom`,
    siteUrl: `https://bloww.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-polyfill-io`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BLOWW`,
        short_name: `BLOWW`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `fullscreen`,
        orientation: `landscape`,
        icon: `src/images/favicons/favicon-96x96.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: { pathToConfigModule: `src/utils/typography` },
    // },
    {
      resolve: `gatsby-plugin-root-import`,
      options: {
        src: path.join(__dirname, `src`),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-159433715-1',
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bloww.io',
        sitemap: 'https://bloww.io/sitemap.xml',
        policy: [
          {
            userAgent: '*',
            allow: '/',
            // disallow: ["/whitepaper/", "/primer/"],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
