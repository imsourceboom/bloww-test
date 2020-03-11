import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CleanOcomponent from 'src/components/Clean/O';

import SEO from 'src/templates/seo';
import Layout from 'src/templates/Layout';

import { notIndexAction } from 'src/state/nav';

var CleanO = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(notIndexAction(true));
  }, [dispatch]);

  return (
    <Layout>
      <SEO
        title="BLOWW | Clean-O"
        description="뿌리 하강 유도 장치"
        image="/images/opengraph/clean-o.jpg"
      />

      <CleanOcomponent />
    </Layout>
  );
};

export default CleanO;
