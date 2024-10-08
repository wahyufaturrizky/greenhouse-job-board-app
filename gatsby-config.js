module.exports = {
  siteMetadata: {
    title: 'Greenhouse Job Board',
    titleTemplate: '%s · Greenhouse',
    description: 'An example of how to use Gatsby and the Greenhouse Job Board API for your company\'s careers website',
    keywords: 'gatsby, greenhouse, jobs, careers',
    hostUrl: 'https://inspiring-hodgkin-1eba1b.netlify.com',
    embedGreenhouseForm: true,
    greenhouseBoardToken: 'f06b2b153e016f8e7c3632627af56b1d-7'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Greenhouse Job Board',
        short_name: 'Greenhouse',
        start_url: '/',
        background_color: '#ff6600',
        theme_color: '#ff6600',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-greenhouse-job-board',
      options: {
        boardToken: 'greenhouse'
      },
    },
    'gatsby-plugin-offline',
  ],
}
