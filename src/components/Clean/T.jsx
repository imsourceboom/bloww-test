import React from 'react';
import { IconContext } from 'react-icons';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import Footer from 'src/components/Footer';
import SVGone from './Specification/T/SVGone';
import SVGtwo from './Specification/T/SVGtwo';

import {
  Container,
  Title,
  VideoBox,
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
  // Video,
} from './styled';

var CleanTcomponent = () => {
  const { isDevice, isBrowser } = useSelector(state => state.nav);

  return (
    <>
      <Container>
        <Title>
          <h1>Clean - T</h1>
          <h2>취송류 하강 유도장치</h2>
        </Title>

        <VideoBox>
          <video muted={true} autoPlay={true} loop={true} playsInline={true}>
            <source
              src="https://d33wubrfki0l68.cloudfront.net/94f15f77ac0a67d72681b367311a54c261e2ee29/1ca06/images/clean-t/bg-video.mp4"
              type="video/mp4"
            />
          </video>
        </VideoBox>

        <Wrapper device={isDevice}>
          <MaxWidth>
            <Quote marginbottom="30" browser={isBrowser}>
              <IconContext.Provider value={{ className: 'quote left' }}>
                <span className="icon-wrapper">
                  <FaQuoteLeft />
                </span>
              </IconContext.Provider>
              <p className="comment">
                수질오염은 매년 반복되는
                <br /> 심각한 사회적 문제 중 하나입니다.
              </p>
              <IconContext.Provider value={{ className: 'quote right' }}>
                <span className="icon-wrapper">
                  <FaQuoteRight />
                </span>
              </IconContext.Provider>
            </Quote>

            <Description marginbottom="30">
              {/* 우리나라뿐만 아니라 전 세계에서 발생하는 녹조 현상은 수온이 높고 일조량이
              많을 때,
              <br /> 수질 내 영양물질이 과도하게 유입되어 식물성 플랑크톤이 많아지면서,
              <br /> 물빛이 녹색으로 바뀌어 보이는 현상을 말하며, 특히 여름철에 많이
              발생합니다. */}
              우리나라 뿐만 아니라 전 세계에서 발생하는 수질오염 현상을 극복하고
              <br /> 맑고 깨끗한 물을 보존하는 것은 인류의 숙제입니다.
            </Description>

            <Issue marginbottom="120">
              <li>
                <img src="/images/clean-t/issue-001.jpg" alt="물 오염 1" />
              </li>
              <li>
                <img src="/images/clean-t/issue-002.jpg" alt="물 오염 2" />
              </li>
            </Issue>

            <Quote marginbottom="120" browser={isBrowser}>
              <IconContext.Provider value={{ className: 'quote left' }}>
                <span className="icon-wrapper">
                  <FaQuoteLeft />
                </span>
              </IconContext.Provider>
              {isBrowser === 'IE' ? (
                <p className="comment">
                  바람과 물의 흐름을 이용한 <br />
                  친환경적인 장치로 오염된 수질을 개선할 수 있습니다.
                </p>
              ) : (
                <p className="comment">
                  바람과 물의 흐름을 이용한 <br />
                  친환경적인 장치로 <br />
                  오염된 수질을 개선할 수 있습니다.
                </p>
              )}
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

            <Description marginbottom="120" style={{ visibility: 'hidden' }}>
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
                      2. 바람에 밀려온 물결이 설치된 T자 부교 구조를 만나면 수심 아래
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
              <h3>시공사진</h3>
            </ArticleTitle>

            <ConstructionCase>
              <ul>
                {/* <li>
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
                </li> */}
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(v => {
                  return (
                    <li>
                      <figure>
                        <img
                          src={`/images/clean-t/clean-t-field-${v}.jpg`}
                          alt={`clean-t 시공 ${v}`}
                        />
                      </figure>
                    </li>
                  );
                })}
              </ul>
            </ConstructionCase>

            <Finish>
              <p>자연을 움직이는 자연의 힘</p>
              <p>Clean - T</p>
            </Finish>
          </MaxWidth>
        </Wrapper>
      </Container>
      <Footer cleant />
    </>
  );
};

export default CleanTcomponent;
