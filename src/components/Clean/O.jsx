import React, { useRef } from 'react';
import { IconContext } from 'react-icons';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import Footer from 'src/components/Footer';
import SVGone from './Specification/O/SVGone';
import SVGtwo from './Specification/O/SVGtwo';
import Tree from 'src/components/SVG/Tree';

import {
  Container,
  Title,
  Wrapper,
  MaxWidth,
  Quote,
  Description,
  Issue,
  Youtube,
  // Video,
  ArticleTitle,
  Specification,
  BuildMethod,
  Finish,
} from './styled';

import { TreeWrap } from './styled-o';

var CleanOcomponent = () => {
  var iFrame = useRef();

  var hoverHandler = () => {
    iFrame.current.style.opacity = 1;
  };

  return (
    <>
      <Container>
        <Title>
          <h1>Clean - O</h1>
          <h2>뿌리 하강 유도장치</h2>
        </Title>

        <Wrapper clean>
          <TreeWrap>
            {/* <img src="/images/clean-o/tree.svg" alt="Clean-O tree" /> */}
            <Tree />
          </TreeWrap>

          <MaxWidth>
            <Quote marginbottom="30">
              <IconContext.Provider value={{ className: 'quote' }}>
                <span className="icon-wrapper">
                  <FaQuoteLeft />
                </span>
              </IconContext.Provider>
              <p className="comment">
                보행 도로에 올라온 요철로
                <br /> 불편하게 다니신 경험이 있으신가요?
              </p>
              <IconContext.Provider value={{ className: 'quote' }}>
                <span className="icon-wrapper">
                  <FaQuoteRight />
                </span>
              </IconContext.Provider>
            </Quote>

            <Description marginbottom="30">
              길을 걷다 보면 보도블록이 솟아 있거나, 땅이 갈라져 있는 모습을 쉽게 볼 수
              있습니다.
              <br /> 일반 보행자뿐만 아니라 자전거, 유모차, 휠체어를 이용하는 사람들에게도
              많은 불편과 위험이 있죠.
            </Description>

            <Issue marginbottom="120">
              <li>
                <img src="/images/clean-o/issue-001.jpg" alt="요철 현상 1" />
              </li>
              <li>
                <img src="/images/clean-o/issue-002.jpg" alt="요철 현상 2" />
              </li>
            </Issue>

            <Quote marginbottom="30">
              <IconContext.Provider value={{ className: 'quote left' }}>
                <span className="icon-wrapper">
                  <FaQuoteLeft />
                </span>
              </IconContext.Provider>
              <p className="comment">
                가로수 뿌리로 인해 발생하는
                <br /> 요철 현상에 대해 고민했습니다.
              </p>
              <IconContext.Provider value={{ className: 'quote right' }}>
                <span className="icon-wrapper">
                  <FaQuoteRight />
                </span>
              </IconContext.Provider>
            </Quote>

            <Description marginbottom="30">
              블로우가 고민하고, 제시하는 뿌리 요철 현상에 대한 내용을 동영상으로
              확인해주세요.
            </Description>

            <Youtube marginbottom="120" onFocus={hoverHandler} onMouseOver={hoverHandler}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/-4abFsBL3pw"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="clean o information video"
                ref={iFrame}></iframe>
            </Youtube>
            {/* <Video marginbottom="120">
              <video
                src="https://www.youtube.com/embed/-4abFsBL3pw"
                type="video/mp4"></video>
            </Video> */}

            <Quote marginbottom="30">
              <p className="comment">뿌리 하강 유도 장치</p>
            </Quote>

            <ArticleTitle>
              <h3>Specification</h3>
            </ArticleTitle>

            <Specification clean>
              <ul>
                <li>
                  {/* <img
                    src="/imageshttps://d2v80xjmx68n4w.cloudfront.net/gigs/LNJ871566460774.jpg"
                    alt="clean-o 도면"
                  /> */}
                </li>

                <li>
                  <div>
                    <SVGone />
                  </div>
                </li>

                <li>
                  <div>
                    <SVGtwo />
                  </div>
                </li>
              </ul>
              <div className="caution">* 나무 크기에 따라 제품의 규격이 변동됩니다.</div>
            </Specification>

            <Description marginbottom="120">
              뿌리 하강 유도장치는 큰 원통 형태에 잔뿌리를 위한 작은 구멍으로
              디자인되었습니다.
              <br /> 나무를 지탱해주는 주요 뿌리는 땅 아래로 자랄 수 있도록 해 주고,
              <br /> 영양분과 수분을 흡수하기 위한 잔뿌리는 작은 구멍을 통해 자랄 수
              있도록 합니다.
            </Description>

            <ArticleTitle>
              <h3>설치방법</h3>
            </ArticleTitle>

            <BuildMethod>
              <ul>
                <li>
                  <figure>
                    <img src="/images/clean-o/build-001.svg" alt="clean-o 설치방법 1" />
                    <figcaption>1. 가로수 주변을 파고, 뿌리를 드러낸다.</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-o/build-002.svg" alt="clean-o 설치방법 2" />
                    <figcaption>2. 뿌리를 정리한다.</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-o/build-003.svg" alt="clean-o 설치방법 3" />
                    <figcaption>3. Clean-O를 설치한다.</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-o/build-004.svg" alt="clean-o 설치방법 4" />
                    <figcaption>
                      4. 나무를 지지하는 뿌리는 아래로 자라게 되고, 잔뿌리는 구멍을 통해
                      뻗어나가 양분을 얻을 수 있다.
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </BuildMethod>

            <Finish>
              <p>자연을 움직이는 자연의 힘</p>
              <p>Clean - O</p>
            </Finish>
          </MaxWidth>
        </Wrapper>
      </Container>
      <Footer bg="#d8c9bf" />
    </>
  );
};

export default CleanOcomponent;
