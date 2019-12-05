module.exports = {
  siteMetadata: {
    title: `Gatsby Theme WPGraphQL Tabor Starter`,
    description: `Gatsby starter site for gatsby-theme-wpgraphql-tabor`,
    author: `@kyrelldixon`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-wpgraphql-tabor`,
      options: {
        wordPressUrl: `http://wordpress.blacknomadlife.com`,
      },
    },
  ],
};
