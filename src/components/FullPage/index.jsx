import React, { useCallback } from 'react';
import { Pager } from 'react-bootstrap';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useSelector, useDispatch } from 'react-redux';

import ReactPageScroller from './logic';

import DetailViewButton from 'src/components/DetailViewButton';
import Logo from 'src/templates/Layout/Logo';
import DeskMenu from 'src/templates/Layout/DeskMenu';
import Hamburger from 'src/templates/Layout/Hamburger';
import MobileMenu from 'src/templates/Layout/MobileMenu';

import MainLogo from 'src/components/SVG/Logo';
import CleanOsymbol from 'src/components/SVG/CleanO';
import CleanTsymbol from 'src/components/SVG/CleanT';

import { Header, Wrapper } from 'src/templates/Layout/styled';

import { Container, Page, Footer, Pagination } from './styled';

import { swiperSlideKeyAction } from 'src/state/nav';

export default () => {
  const { notIndex, swiperSlideKey } = useSelector(state => state.nav);

  const dispatch = useDispatch();

  const slideKeyChange = useCallback(
    parameter => {
      dispatch(swiperSlideKeyAction(parameter));
    },
    [dispatch],
  );

  const handlePageChange = useCallback(
    number => {
      dispatch(swiperSlideKeyAction(number));
    },
    [dispatch],
  );

  const getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 3; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={handlePageChange}>
          {i}
        </Pager.Item>,
      );
    }

    return [...pageNumbers];
  };

  const pagesNumbers = getPagesNumbers();

  return (
    <Container>
      <ReactPageScroller
        pageOnChange={handlePageChange}
        customPageNumber={swiperSlideKey}
        animationTimer={800}
        renderAllPagesOnFirstRender={true}>
        <Page className="one-page">
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
              to="/about"
              onClick={() => {
                slideKeyChange();
              }}>
              <DetailViewButton />
            </AniLink>
          </div>
        </Page>

        <Page className="two-page">
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
                  onClick={() => {
                    slideKeyChange();
                  }}>
                  <DetailViewButton />
                </AniLink>
              </div>
            </div>
          </div>
        </Page>

        <Page className="three-page">
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
        </Page>
      </ReactPageScroller>

      <Pagination index={swiperSlideKey}>{pagesNumbers}</Pagination>
    </Container>
  );
};
