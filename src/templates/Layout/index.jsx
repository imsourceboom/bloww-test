import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';

import GlobalStyled from 'src/styles/GlobalStyled';

import Logo from './Logo';
import DeskMenu from './DeskMenu';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import GoTopButton from './GoTopButton';

// import { useScroll } from 'src/utils/useScroll';

import { Header, Wrapper, Main } from './styled';
import { isDeviceAction } from '../../state/nav';

const Layout = ({ children }) => {
  const { isDevice, notIndex } = useSelector(state => state.nav);
  const [path, setPath] = useState();
  const dispatch = useDispatch();
  // const scrollValue = useScroll().scrollY;

  useEffect(() => {
    const path = window.location.pathname;
    setPath(path);
  }, [path]);

  useEffect(() => {
    const device = window.navigator.userAgent;
    let name;
    if (device.indexOf('iPhone') !== -1) {
      name = 'iPhone';
    } else if (device.indexOf('Android') !== -1) {
      name = 'Android';
    } else if (device.indexOf('Macintosh') !== -1) {
      name = 'Mac PC';
    } else if (device.indexOf('Windows') !== -1) {
      name = 'Windows PC';
    } else if (device.indexOf('iPad') !== -1) {
      name = 'iPad';
    }
    dispatch(isDeviceAction(name));
  }, [dispatch]);

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
          {/* {scrollValue >= 800 && <GoTopButton path={path} />} */}
          <GoTopButton device={isDevice} path={path} />
        </>
      )}
      <Main path={path}>{children}</Main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
