import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SEO from 'src/templates/seo';
import { notIndexAction } from 'src/state/nav';

import Layout from 'src/templates/Layout';

import FullPage from 'src/components/FullPage';

var Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notIndexAction(false));
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="BLOWW" image="/images/opengraph/bloww.jpg" />
      <FullPage />
    </Layout>
  );
};

export default Index;
