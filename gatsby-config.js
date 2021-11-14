/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipes site",
    author: "@johndoe",
    person: { name: "john", age: 32 },
    simpleData: ["item1", "item2"],
    complexData: [
      {
        name: "Suzan",
        age: "43",
      },
      {
        name: "George",
        age: "23",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images],
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `3aqjg4au2tox`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENFUL_API_KEY,
      },
    },
  ],
}
