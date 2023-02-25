import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/temperature-blanket",
  siteMetadata: {
    title: `Temperature-blanket-app`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Tempestry`,
      short_name: `Tempestry`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#a2466c`,
      display: `standalone`,
      icon: `./src/images/logo.png`,
      icons: [
        {
          src: `./src/images/logo.png`,
          sizes: `192x192`,
          type: `image/png`,
          purpose: "any maskable"
        },
      ],
    },
  },
  {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/`],
      },
  },
  `gatsby-plugin-pwainstall`
]
};

export default config;
