import React, { useCallback } from 'react';
import Scroll from 'react-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { IconContext } from 'react-icons';
import { FiChevronUp } from 'react-icons/fi';

import { Button } from './styled';

import { swiperSlideKeyAction } from 'src/state/nav';

var GoTopButton = ({ path }) => {
  var scroll = Scroll.animateScroll;
  var { swiperSlideKey } = useSelector(state => state.nav);
  var dispatch = useDispatch();

  var slideKeyChange = useCallback(
    parameter => {
      dispatch(swiperSlideKeyAction(parameter));
    },
    [dispatch],
  );

  return (
    <>
      <Button
        onClick={() => {
          scroll.scrollToTop({ duration: 700, smooth: true });
          slideKeyChange(0);
        }}
        slidekey={swiperSlideKey}
        path={path}
        // whileHover={{ scale: 1.05 }}
        // whileTap={{ scale: 0.95 }}
      >
        <IconContext.Provider value={{ className: 'icon', size: '26px' }}>
          <div>
            <FiChevronUp />
          </div>
        </IconContext.Provider>
      </Button>
    </>
  );
};

export default GoTopButton;
