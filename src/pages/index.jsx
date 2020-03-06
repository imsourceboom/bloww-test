import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SEO from 'src/templates/seo';
import { notIndexAction } from 'src/state/nav';

import Layout from 'src/templates/Layout';

import MainSwiper from 'src/components/MainSwiper';

var Index = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(notIndexAction(false));
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="Home" image="/images/opengraph/bloww.jpg" />
      <MainSwiper />
    </Layout>
  );
};

export default Index;