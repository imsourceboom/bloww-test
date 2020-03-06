import React from 'react';
// // import Fade from 'react-reveal/Fade';

import { Wrapper, Title } from '../styled';
import { Container, ItemBox } from './styled';
import { FlexBox } from 'src/styles/common';

var Loadmap = () => {
  return (
    <Wrapper margin="0 0 150px">
      {/* <Fade top> */}
      <Title lang={'en'} margin="0 0 100px">
        Load map
      </Title>
      {/* </Fade> */}
      <Container>
        <FlexBox justify="center" className="wrapper">
          <ul className="left">
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2007.12</b>
              <div className="horizontal-line"></div>
              <p>
                ISO9001, 14001 인증, <br />
                &nbsp;기업부연구소 설립
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox margintop="10">
              <b>2008.09</b>
              <div className="horizontal-line"></div>
              <p>KBS1 TV 전국, 뉴스 방영</p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2008.12</b>
              <div className="horizontal-line"></div>
              <p>
                - 제 8회 디지털 이노베이션
                <br />
                &nbsp;100대 기업 선정
              </p>
              <p>
                - 제 8회 디지털 이노베이션
                <br />
                &nbsp;기술표준원장상 수상
              </p>
              <p>
                - 한국수자원공사와 기술협약
                <br />
                &nbsp;(녹조제어 기술)
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2009.05</b>
              <div className="horizontal-line"></div>
              <p>녹조제거용 특수선박 기술개발</p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2009.07</b>
              <div className="horizontal-line"></div>
              <p>
                녹조제거용 특수선박 납품
                <br />
                &nbsp;(한국수자원공사)
              </p>
              <p>SBS, YTN 등 TV 전국뉴스 방영</p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2009.10</b>
              <div className="horizontal-line"></div>
              <p>
                국가녹색기술대상 신청
                <br />
                &nbsp;('Clean-T')
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2010.03</b>
              <div className="horizontal-line"></div>
              <p>
                환경신기술 인증
                <br />
                &nbsp;(환경부 312호)
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2010.12</b>
              <div className="horizontal-line"></div>
              <p>
                2010 녹색 기술 대상,
                <br />
                &nbsp;국토해양부 환경기술상
              </p>
            </ItemBox>
            {/* </Fade> */}
          </ul>
          <ul className="right">
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2007.08</b>
              <div className="horizontal-line"></div>
              <p>(주) 상승글로벌 법인 설립</p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2008.02</b>
              <div className="horizontal-line"></div>
              <p>벤처 기업 인증</p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2008.11</b>
              <div className="horizontal-line"></div>
              <p>
                미생물 담체 수질정화장치&nbsp;
                <br />
                'Bio-MCT' 개발
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2009.01</b>
              <div className="horizontal-line"></div>
              <p>
                긴급방제용 황토살포선박&nbsp;
                <br />
                기술 개발
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox margintop="40">
              <b>2009.06</b>
              <div className="horizontal-line"></div>
              <p>
                'Clean-T' 기술,&nbsp;
                <br />
                한국수자원공사와 공동
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2009.08</b>
              <div className="horizontal-line"></div>
              <p>
                행복도시 호수공원&nbsp;
                <br />
                수질 정화 기술선정
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2009.11</b>
              <div className="horizontal-line"></div>
              <p>
                새만금 'Clean-T'&nbsp;
                <br />
                시범사업 선정
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2010.06</b>
              <div className="horizontal-line"></div>
              <p>
                지식경제부 장관상,&nbsp;
                <br />
                수자원공사 신기술 등록선정
              </p>
            </ItemBox>
            {/* </Fade> */}
            {/* <Fade bottom> */}
            <ItemBox>
              <b>2012</b>
              <div className="horizontal-line"></div>
              <p>
                중소기업청 성능인증,&nbsp;
                <br />
                조달청 우수제품인증
              </p>
            </ItemBox>
            {/* </Fade> */}
          </ul>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default Loadmap;
