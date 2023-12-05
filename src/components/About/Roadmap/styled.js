import styled from 'styled-components';

export const ItemBox = styled.li`
  display: flex;
  flex-direction: column;
  line-height: 1.3;
  margin-top: ${props =>
    props.margintop ? `${Number(props.margintop) + 50}px` : '50px'};

  @media (min-width: 768px) {
    line-height: 1.5;
    margin-top: ${props =>
      props.margintop ? `${Number(props.margintop) + 60}px` : '60px'};
  }

  b {
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 22px;
    }
  }

  br {
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  p {
    font-size: 14px;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Container = styled.div`
  .wrapper {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  .horizontal-line {
    height: 1px;
    width: 90px;
    background-color: #aaa;
    margin: 8px 0;

    @media (min-width: 768px) {
      width: 120px;
    }
  }

  .left {
    flex: 1;
    text-align: right;
    padding: 40px 8px 60px 0;
    margin-right: 8px;
    border-right: 1px solid #666;

    @media (min-width: 768px) {
      padding: 40px 15px 100px 0;
      margin-right: 15px;
    }

    ${ItemBox} {
      align-items: flex-end;
    }
  }

  .right {
    flex: 1;
  }
`;

export const RoadMapTitle = styled.h2`
  text-align: center;
  font-size: 22px;
  font-family: ${props => props.lang === 'ko' && '"Noto Sans KR", sans-serif'};
  font-family: ${props => props.lang === 'en' && '"Titillium Web", sans-serif'};
  margin: ${props => props.margin && `${props.margin}`};
  margin-bottom: 0px;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 70px;
  }

  @media (min-width: 1366px) {
    font-size: 26px;
  }
`;

export const ImgWarp = styled.figure`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  img {
    min-width: 1500px;
    // width: 100%;
    // flex: 0 0 auto;
  }
`;
