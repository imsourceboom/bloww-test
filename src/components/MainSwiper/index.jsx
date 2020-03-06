import React, { useCallback } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Swiper from 'react-id-swiper';
import { useSelector, useDispatch } from 'react-redux';
import 'swiper/css/swiper.css';

import DetailViewButton from 'src/components/DetailViewButton';
import Logo from 'src/templates/Layout/Logo';
import DeskMenu from 'src/templates/Layout/DeskMenu';
import Hamburger from 'src/templates/Layout/Hamburger';
import MobileMenu from 'src/templates/Layout/MobileMenu';

import MainLogo from 'src/components/SVG/Logo';
import CleanOsymbol from 'src/components/SVG/CleanO';
import CleanTsymbol from 'src/components/SVG/CleanT';

import { Header, Wrapper } from 'src/templates/Layout/styled';

import { Container, Slide, Footer } from './styled';

import { swiperSlideKeyAction } from 'src/state/nav';

var MainSwiper = () => {
  var { notIndex, swiperSlideKey } = useSelector(state => state.nav);
  var dispatch = useDispatch();

  var slideKeyChange = useCallback(
    parameter => {
      dispatch(swiperSlideKeyAction(parameter));
    },
    [dispatch],
  );

  var params = {
    direction: 'vertical',
    activeSlideKey: String(swiperSlideKey),
    slidesPerView: 1,
    // parallax: true,
    speed: 600,
    // grabCursor: true,
    mousewheel: true,
    // mousewheelSensitivity: 3000,
    // mousewheelReleaseOnEdge: true,
    mousewheelForceToAxis: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // on: {
    //   slideChangeTransitionEnd: function() {
    //     dispatch(swiperSlideKeyAction(this.activeIndex + 1));
    //   },
    // },
  };

  return (
    <Container index={swiperSlideKey}>
      <Swiper {...params}>
        {/* first Slide */}
        <Slide key="1">
          <Header notIndex={notIndex}>
            <Wrapper>
              <Logo />
              <DeskMenu />
              <Hamburger />
            </Wrapper>
          </Header>
          <MobileMenu />
          <div className="box">
            <div>
              불어오는 바람의 방향으로 자연스럽게 흘러가듯이
              <br />
              가장 자연스러운 방법으로 바꾸어갑니다.
            </div>
            <p>자연을 움직이는 자연의 힘.</p>
            <figure>
              <MainLogo />
            </figure>
            <AniLink
              fade
              to="/about"
              onClick={() => {
                slideKeyChange();
              }}>
              <DetailViewButton />
            </AniLink>
          </div>
        </Slide>

        {/* second Slide */}
        <Slide key="2">
          <div className="clean-o">
            <div className="box">
              <figure>
                <CleanOsymbol />
              </figure>
              <div>
                <span>
                  <p>Clean - O</p>
                  <p>뿌리 하강 유도 장치</p>
                </span>
                <AniLink
                  fade
                  to="/product/clean-o"
                  onClick={() => {
                    slideKeyChange();
                  }}>
                  <DetailViewButton />
                </AniLink>
              </div>
            </div>
          </div>
          <div className="clean-t">
            <div className="box">
              <figure>
                <CleanTsymbol />
              </figure>
              <div>
                <span>
                  <p>Clean - T</p>
                  <p>취송류 하강 유도 장치</p>
                </span>
                <AniLink
                  to="/product/clean-t"
                  fade
                  onClick={() => {
                    slideKeyChange();
                  }}>
                  <DetailViewButton />
                </AniLink>
              </div>
            </div>
          </div>
        </Slide>

        {/* third Slide */}
        <Slide key="3">
          <div>
            <div className="cover">
              <b className="title">Contact</b>
              <div>
                <p>제품상담 및 문의사항</p>
                <p>bloww@bloww.io</p>
              </div>
            </div>
          </div>
          <Footer>
            <div className="container">
              <div className="information-wrapper">
                <p>상호명 : 주식회사 블로우(BLOWW Co.,Ltd.)</p>
                <p>대표자명 : 김동범</p>
                <p>사업자 번호 : 187-86-01483</p>
                <p>주소 : 대전광역시 유성구 상대서로 11, 3층(상대동)</p>
                {/* <p>대표번호 : 미정</p> */}
                <p>Copyright © BLOWW. All rights Reserved.</p>
              </div>
              <div className="mark-wrapper">
                <div className="cover">
                  <figure>
                    <img src="/images/mark/mark-001.png" alt="조달청 인증마크" />
                  </figure>
                  <figure>
                    <img src="/images/mark/mark-005.png" alt="중소기업청 성능 인증마크" />
                  </figure>
                  <figure>
                    <img src="/images/mark/mark-006.png" alt="신기술 인증마크" />
                  </figure>
                </div>
                <div className="cover">
                  <figure>
                    <img src="/images/mark/mark-002.png" alt="환경부 인증마크" />
                  </figure>
                  <figure>
                    <img src="/images/mark/mark-003.png" alt="특허청 인증마크" />
                  </figure>
                  <figure>
                    <img src="/images/mark/mark-004.png" alt="기획재정부 인증마크" />
                  </figure>
                </div>
              </div>
            </div>
          </Footer>
        </Slide>
      </Swiper>
    </Container>
  );
};

export default React.memo(MainSwiper);
