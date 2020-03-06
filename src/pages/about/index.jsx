import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AboutComponent from 'src/components/About';

import SEO from 'src/templates/seo';
import Layout from 'src/templates/Layout';

import { notIndexAction } from 'src/state/nav';

var About = () => {
  var dispatch = useDispatch();

  useEffect(() => {
    dispatch(notIndexAction(true));
  }, [dispatch]);

  return (
    <Layout>
      <SEO
        title="About"
        description="자연과 가장 가까운 방법을 고민했습니다. 그렇게 자연과 가까운 방법으로 바꾸고 싶습니다."
      />

      <AboutComponent />
    </Layout>
  );
};

export default About;
