const path = require(`path`);

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "24ekogroszek",
    titleTemplate: "%s · Twój dystrybutor ekogroszku na Opolszczyźnie",
    description:
      "Zapewniamy najwyższej jakości ekogroszek od renomowanych producentów. Znajdziesz u nas towar dostosowany specjalnie do twojego pieca na ekogroszek w niskich cenach.",
    image: "/src/assets/background.jpg",
    url: "https://24ekogroszek.pl",
  },
  plugins: [
    "gatsby-transformer-remark",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL,
        contentTypes: ["ekogroszeks", "producents"],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
  ],
};
