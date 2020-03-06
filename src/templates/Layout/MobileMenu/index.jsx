import React, { useCallback } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useSelector, useDispatch } from 'react-redux';

import Close from 'src/components/SVG/Close';

import { Background, Navigation } from './styled';

import { mobileNavigationAction, swiperSlideKeyAction } from 'src/state/nav';

var MobileMenu = ({ path }) => {
  var { mobileNavigation } = useSelector(state => state.nav);
  var dispatch = useDispatch();

  var mobileToggle = useCallback(
    parameter => {
      dispatch(mobileNavigationAction(parameter));
    },
    [dispatch],
  );

  var slideKeyChange = useCallback(
    parameter => {
      dispatch(swiperSlideKeyAction(parameter));
    },
    [dispatch],
  );

  return (
    <>
      <Background toggle={mobileNavigation} onClick={() => mobileToggle(false)} />
      <Navigation toggle={mobileNavigation}>
        <div>
          <button onClick={() => mobileToggle(false)}>
            <Close />
          </button>
        </div>
        <ul>
          <li className={path === '/about' ? 'active' : ''}>
            <AniLink
              to="/about"
              fade
              onClick={() => {
                mobileToggle(false);
                slideKeyChange();
              }}>
              About
            </AniLink>
          </li>
          <li
            className={
              path === '/product/clean-o' || path === '/product/clean-t' ? 'active' : ''
            }>
            <AniLink
              to="/"
              fade
              onClick={() => {
                mobileToggle(false);
                slideKeyChange(2);
              }}>
              Product
            </AniLink>
          </li>
          <li>
            <AniLink
              to="/"
              fade
              onClick={() => {
                mobileToggle(false);
                slideKeyChange(3);
              }}>
              Contact
            </AniLink>
          </li>
        </ul>
      </Navigation>
    </>
  );
};

export default MobileMenu;