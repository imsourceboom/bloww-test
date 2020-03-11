import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import { useSelector } from 'react-redux';

import GlobalStyled from 'src/styles/GlobalStyled';

import Logo from './Logo';
import DeskMenu from './DeskMenu';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import GoTopButton from './GoTopButton';

import { Header, Wrapper, Main } from './styled';

const Layout = ({ children }) => {
  const { notIndex } = useSelector(state => state.nav);
  const [path, setPath] = useState();

  useEffect(() => {
    const path = window.location.pathname;
    setPath(path);
  }, [path]);

  return (
    <>
      <GlobalStyled />
      {path !== '/' && (
        <>
          <Header notIndex={notIndex}>
            <Wrapper>
              <Logo path={path} />
              <DeskMenu path={path} />
              <Hamburger />
            </Wrapper>
          </Header>
          <MobileMenu path={path} />
        </>
      )}
      <GoTopButton path={path} />
      <Main path={path}>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
