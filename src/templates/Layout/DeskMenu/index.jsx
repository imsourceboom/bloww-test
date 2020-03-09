import React, { useCallback } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useSelector, useDispatch } from 'react-redux';

import { Menu } from './styled';

import { swiperSlideKeyAction } from 'src/state/nav';

var DeskMenu = ({ path }) => {
  var { notIndex } = useSelector(state => state.nav);
  var dispatch = useDispatch();

  var slideKeyChange = useCallback(
    parameter => {
      dispatch(swiperSlideKeyAction(parameter));
    },
    [dispatch],
  );

  return (
    <>
      <Menu notIndex={notIndex}>
        <li className={path === '/about' ? 'active' : ''}>
          <AniLink to="/about" fade onClick={() => slideKeyChange()}>
            About
          </AniLink>
        </li>
        <li
          className={
            path === '/product/clean-o' || path === '/product/clean-t' ? 'active' : ''
          }>
          <AniLink to="/" fade onClick={() => slideKeyChange(1)}>
            Product
          </AniLink>
        </li>
        <li>
          <AniLink
            to="/"
            fade
            onClick={() => {
              slideKeyChange(2);
            }}>
            Contact
          </AniLink>
        </li>
      </Menu>
    </>
  );
};

export default DeskMenu;
