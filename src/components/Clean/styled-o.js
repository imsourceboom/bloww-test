import styled from 'styled-components';

export const Tree = styled.figure`
  position: absolute;
  top: 0;
  left: 50%;
  z-index: 1;
  transform: translate(-57%, -31.8%);
  width: 240px;

  @media (min-width: 768px) {
    transform: translate(-55%, -31.8%);
    width: 290px;
  }
  @media (min-width: 1024px) {
    width: 240px;
  }
  @media (min-width: 1080px) {
    width: 240px;
  }
  @media (min-width: 1366px) {
    width: 300px;
  }
  @media (min-width: 1440px) {
    width: 260px;
  }
  @media (min-width: 1680px) {
    width: 290px;
  }
  @media (min-width: 1920px) {
    width: 290px;
  }
  @media (min-width: 1920px) and (min-height: 1050px) {
    width: 310px;
  }

  img {
    width: 100%;
  }
`;
