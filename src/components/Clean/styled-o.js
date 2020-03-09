import styled from 'styled-components';

export const TreeWrap = styled.figure`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-57%, -31.8%);

  @media (min-width: 768px) {
    transform: translate(-55%, -31.8%);
  }

  svg {
    width: 240px;
    height: 1627.83px;

    @media (min-width: 768px) {
      width: 290px;
      height: 1966.97px;
    }
    @media (min-width: 1024px) {
      width: 240px;
      height: 1627.83px;
    }
    @media (min-width: 1080px) {
      width: 240px;
      height: 1627.83px;
    }
    @media (min-width: 1366px) {
      width: 300px;
      height: 2034.78px;
    }
    @media (min-width: 1440px) {
      width: 260px;
      height: 1763.48px;
    }
    @media (min-width: 1680px) {
      width: 290px;
      height: 1966.97px;
    }
    @media (min-width: 1920px) {
      width: 290px;
      height: 1763.48px;
    }
    @media (min-width: 1920px) and (min-height: 1050px) {
      width: 310px;
      height: 2102.61px;
    }
  }
`;
