const manifestOptions = require('./utils/manifest-options');

module.exports = {
  siteMetadata: {
    url: "https://www.anesmarzuki.com",
    title: "anes marzuki webfolio",
    description: "portfolio of anes marzuki, a front end developer from tunisia",
    image: "/icon.png",
    twitterUsername: "@thatguyanes",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image", // for static images.
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // for dynamic images.
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: manifestOptions,
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
