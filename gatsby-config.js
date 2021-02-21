require("dotenv").config()
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Strike Job Application",
    author: "Gabriel Loubier",
    description: "",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Loubier: Strike Resume",
        short_name: "Loubier: Strike Resume",
        start_url: "/",
        icon: "static/icon.svg",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },

      {
        resolve: "gatsby-plugin-web-font-loader",
        options: {
          typekit: {
            id: `npa4sch`,
          },
        },
      },

  ],
}
