import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CleanTcomponent from 'src/components/Clean/T';

import SEO from 'src/templates/seo';
import Layout from 'src/templates/Layout';

import { notIndexAction } from 'src/state/nav';

var CleanT = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(notIndexAction(true));
  }, [dispatch]);

  return (
    <Layout>
      <SEO title="Clean-T" />

      <CleanTcomponent />
    </Layout>
  );
};

export default CleanT;
