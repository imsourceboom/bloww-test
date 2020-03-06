import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import CleanOcomponent from 'src/components/Clean/O';

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
      <SEO title="Clean-O" />

      {/* <CleanOcomponent /> */}
    </Layout>
  );
};

export default CleanO;
