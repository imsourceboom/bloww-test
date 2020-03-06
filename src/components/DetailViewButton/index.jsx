import React from 'react';

import { Button } from './styled';

var DetailViewButton = () => {
  return (
    <Button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      data-swiper-parallax="-100"
    >
      자세히 보기
    </Button>
  );
};

export default DetailViewButton;
