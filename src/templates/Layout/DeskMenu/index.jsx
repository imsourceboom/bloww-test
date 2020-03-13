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
          <AniLink fade to="/about" onClick={() => slideKeyChange(0)}>
            About
          </AniLink>
        </li>
        <li
          className={
            path === '/product/clean-o' || path === '/product/clean-t' ? 'active' : ''
          }>
          <AniLink fade to="/" onClick={() => slideKeyChange(1)}>
            Product
          </AniLink>
        </li>
        <li>
          <AniLink
            fade
            to="/"
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
