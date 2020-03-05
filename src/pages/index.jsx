import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../templates/layout';
import Image from '../components/image';
import SEO from '../templates/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <AniLink to="/page-2/" duration={1} fade>
      Go to page 2
    </AniLink>
  </Layout>
);

export default IndexPage;
