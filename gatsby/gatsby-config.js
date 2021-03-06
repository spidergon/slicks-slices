import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  // pathPrefix: '/pizza', // for hosting on own server : npm run build -- --prefix-paths
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton!`,
    twitter: '@slicksSlices',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: '5ama2ufk',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
