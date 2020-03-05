import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../templates/layout';
import SEO from '../templates/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <AniLink to="/" duration={1} fade>
      Go back to the homepage
    </AniLink>
  </Layout>
);

export default SecondPage;
