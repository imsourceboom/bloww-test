import React from 'react';
import { IconContext } from 'react-icons';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import Footer from 'src/components/Footer';
import SVGone from './Specification/T/SVGone';
import SVGtwo from './Specification/T/SVGtwo';
import AnimatedCleanT from 'src/components/SVG/AnimatedCleanT';
import Wind from 'src/components/SVG/Wind';
import WindTwin from 'src/components/SVG/WindTwin';
import Wave from 'src/components/SVG/Wave';

import {
  Container,
  Title,
  Wrapper,
  MaxWidth,
  Quote,
  Description,
  Issue,
  // Youtube,
  ArticleTitle,
  Specification,
  BuildMethod,
  ConstructionCase,
  Finish,
} from './styled';

import { CleanTwrapper, WindWrapper, WindTwinWrapper, WaveWrapper } from './styled-t';

var CleanTcomponent = () => {
  return (
    <>
      <Container>
        <Title>
          <h1>Clean - T</h1>
          <h2>취송류 하강 유도장치</h2>
        </Title>

        <WindWrapper>
          <Wind />
        </WindWrapper>

        <WindTwinWrapper>
          <WindTwin />
        </WindTwinWrapper>

        <Wrapper>
          <CleanTwrapper
          // initial={{ y: 7, opacity: 0.8 }}
          // animate={{ y: -7, opacity: 1 }}
          // transition={{
          //   yoyo: Infinity,
          //   duration: 2.5,
          // }}
          >
            <AnimatedCleanT />
          </CleanTwrapper>

          <WaveWrapper>
            <Wave />
          </WaveWrapper>

          <MaxWidth>
            <Quote marginbottom="30">
              <IconContext.Provider value={{ className: 'quote left' }}>
                <span className="icon-wrapper">
                  <FaQuoteLeft />
                </span>
              </IconContext.Provider>
              <p className="comment">
                수질오염으로 인한 녹조, 적조 현상은
                <br /> 매년 반복되는 심각한 문제 중 하나입니다.
              </p>
              <IconContext.Provider value={{ className: 'quote right' }}>
                <span className="icon-wrapper">
                  <FaQuoteRight />
                </span>
              </IconContext.Provider>
            </Quote>

            <Description marginbottom="30">
              우리나라뿐만 아니라 전 세계에서 발생하는 녹조 현상은 수온이 높고 일조량이
              많을 때,
              <br /> 수질 내 영양물질이 과도하게 유입되어 식물성 플랑크톤이 많아지면서,
              <br /> 물빛이 녹색으로 바뀌어 보이는 현상을 말하며, 특히 여름철에 많이
              발생합니다.
            </Description>

            <Issue marginbottom="120">
              <li>
                <img src="/images/clean-t/issue-001.jpg" alt="물 오염 1" />
              </li>
              <li>
                <img src="/images/clean-t/issue-002.jpg" alt="물 오염 2" />
              </li>
            </Issue>

            <Quote marginbottom="120">
              <IconContext.Provider value={{ className: 'quote left' }}>
                <span className="icon-wrapper">
                  <FaQuoteLeft />
                </span>
              </IconContext.Provider>
              <p className="comment">
                바람과 물의 흐름을 이용한 <br />
                친환경적인 장치로 <br />
                녹조현상을 개선할 수 있습니다.
              </p>
              <IconContext.Provider value={{ className: 'quote right' }}>
                <span className="icon-wrapper">
                  <FaQuoteRight />
                </span>
              </IconContext.Provider>
            </Quote>

            {/* <Youtube marginbottom="120">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/ouCuyQI9pXc?start=19"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Youtube> */}

            <Quote marginbottom="30">
              <p className="comment">취송류 하강 유도 장치</p>
            </Quote>

            <ArticleTitle>
              <h3>Specification</h3>
            </ArticleTitle>

            <Specification>
              <ul>
                <li>
                  {/* <img
                    src="https://d2v80xjmx68n4w.cloudfront.net/gigs/LNJ871566460774.jpg"
                    alt="clean-t 도면"
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
              <div className="caution">* 강의 넓이에 따라 제품의 규격이 변동됩니다.</div>
            </Specification>

            <Description marginbottom="120">
              취송류 하강 유도장치는 녹조현상이 반복적으로 발생하는 호수나 저수지에
              자연스러운 물의 순환이 이루어지도록 돕는 장치입니다. 지형에 따라 바람의
              방향, 물의 흐름 등을 전문적으로 분석하여 설치되며, 물의 순환과 함께 심층까지
              산소가 유입되면서 가장 친환경적인 방법으로 수질을 정화할 수 있습니다.
            </Description>

            <ArticleTitle>
              <h3>기술원리</h3>
            </ArticleTitle>

            <BuildMethod marginbottom="120">
              <ul>
                <li>
                  <figure>
                    <img src="/images/clean-t/build-001.svg" alt="clean-t 설치방법 1" />
                    <figcaption>
                      1. 전문적인 설계에 따라 저수지 또는 호수 표면에 Clean-T 장치를
                      설치합니다.
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-t/build-002.svg" alt="clean-t 설치방법 2" />
                    <figcaption>
                      2. 바람에 밀려온 물결이 설치된 T자 부교 구조를 만나면 수심 아해
                      50m까지 내려갑니다.
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-t/build-003.svg" alt="clean-t 설치방법 3" />
                    <figcaption>
                      3. 내려간 물들이 표층에 몰려있던 용존산소를 심층으로 전달합니다.
                    </figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-t/build-004.svg" alt="clean-t 설치방법 4" />
                    <figcaption>
                      4. 이 과정에서 바람과 물의 순환 원리에 따라 수질을 자연스럽게
                      정화시켜줍니다.
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </BuildMethod>

            <ArticleTitle>
              <h3>시공사례</h3>
            </ArticleTitle>

            <ConstructionCase>
              <ul>
                <li>
                  <figure>
                    <img src="/images/clean-t/case-001.jpg" alt="clean-t 시공사례 1" />
                    <figcaption>춘천 서상저수지</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-t/case-002.jpg" alt="clean-t 시공사례 2" />
                    <figcaption>아산 신휴저수지</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-t/case-003.jpg" alt="clean-t 시공사례 3" />
                    <figcaption>춘천 조연저수지</figcaption>
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="/images/clean-t/case-004.jpg" alt="clean-t 시공사례 4" />
                    <figcaption>아산 수철리저수지</figcaption>
                  </figure>
                </li>
              </ul>
            </ConstructionCase>

            <Finish>
              <p>자연을 움직이는 자연의 힘</p>
              <p>Clean - T</p>
            </Finish>
          </MaxWidth>
        </Wrapper>
      </Container>
      <Footer bg="#B1CDD9" />
    </>
  );
};

export default CleanTcomponent;
