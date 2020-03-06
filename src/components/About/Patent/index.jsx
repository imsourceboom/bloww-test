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
        특허등록
      </Title>
      <Container>
        <Swiper {...params}>
          <div>
            <figure>
              <img src="/images/patent/clean-o-001.jpg" alt="가로수 뿌리 관리용 장치" />
              <figcaption>가로수 뿌리 관리용 장치</figcaption>
            </figure>
          </div>
          <div>
            <figure>
              <img
                src="/images/patent/clean-t-001.jpg"
                alt="풍향에 대응하는 수질 정화 장치"
              />
              <figcaption>풍향에 대응하는 수질 정화 장치</figcaption>
            </figure>
          </div>
        </Swiper>
      </Container>
    </Wrapper>
  );
};

export default Patent;
