module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`
    },
    {
      resolve: 'gatsby-plugin-styled-components'
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-118401527-2",
        head: true
      },
    }
  ],
}