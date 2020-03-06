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
      <SEO
        title="Clean-T"
        description="취송류 하강 유도 장치"
        image="/images/opengraph/clean-t.jpg"
      />

      <CleanTcomponent />
    </Layout>
  );
};

export default CleanT;
