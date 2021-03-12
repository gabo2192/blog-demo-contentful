require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Blog Demo",
    siteUrl: "https://blog-demo-contentful.netlify.app",
    author: "Gabriel Rojas",
    description: "This is a demo site using Contentful, Gatsby and TailwindCSS",
    image: "/images/blog-demo.jpg",
    twitterUsername: "@gab_rojasar",
    titleTemplate: "%s · Blog Demo",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "63zenyq5xa5q",
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
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
