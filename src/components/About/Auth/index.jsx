import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { Wrapper, Title } from '../styled';
import { Container } from './styled';

var Patent = () => {
  var params = {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1366: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
    },
  };

  return (
    <Wrapper margin="0 0 250px">
      <Title lang={'ko'} margin="0 0 40px">
        인증사항
      </Title>
      <Container>
        <Swiper {...params}>
          <div>
            <figure>
              <img src="/images/auth/auth-1.jpg" alt="ISO9001:2015 - 품질경영관리" />
              <figcaption>ISO9001:2015 - 품질경영관리</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img src="/images/auth/auth-2.jpg" alt="ISO14001:2015 - 품질경영관리" />
              <figcaption>ISO14001:2015 - 환경경영관리</figcaption>
            </figure>
          </div>
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default Patent;
