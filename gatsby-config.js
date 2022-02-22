module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "folio",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image", // for static images.
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // for dynamic images.
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
