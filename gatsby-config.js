require("dotenv").config()
const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Gatsby Starter Tailwind CSS",
    author: "Melanie Nolan",
    description: "A Gatsby starter to set you up with Tailwind CSS",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Gatsby Starter Tailwind CSS",
        short_name: "Gatsby Starter Tailwind CSS",
        start_url: "/",
        icon: "static/icon.svg",
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
