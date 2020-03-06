import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// // import Fade from 'react-reveal/Fade';

import { Container } from './styled';

import { mobileNavigationAction } from 'src/state/nav';

var Hamburger = () => {
  var { notIndex } = useSelector(state => state.nav);
  var dispatch = useDispatch();

  var mobileToggle = useCallback(
    parameter => {
      dispatch(mobileNavigationAction(parameter));
    },
    [dispatch],
  );

  return (
    <>
      <Container onClick={() => mobileToggle(true)} notIndex={notIndex}>
        <div></div>
        <div></div>
        <div></div>
      </Container>
    </>
  );
};

export default Hamburger;
