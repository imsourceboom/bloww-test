import React from 'react';

import FooterContainer from 'src/components/Footer';

import Introduce from './Introduce';
import LogoDescription from './LogoDescription';
import Products from './Products';
import Patent from './Patent';
import Loadmap from './Loadmap';

import { PageMotionTransition } from './styled';

var AboutComponent = () => {
  return (
    <>
      <PageMotionTransition
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {/* 회사소개 */}
        <Introduce />

        {/* Logo */}
        <LogoDescription />

        {/* 주요제품 */}
        <Products />

        {/* 특허등록 */}
        <Patent />

        {/* Load map */}
        <Loadmap />

        <FooterContainer />
      </PageMotionTransition>
    </>
  );
};

export default AboutComponent;
