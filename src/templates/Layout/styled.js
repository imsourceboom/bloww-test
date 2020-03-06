import styled from 'styled-components';
import { height } from 'src/styles/variable';

export const Header = styled.header`
  position: relative;
  z-index: 3;
  width: 100%;
  height: ${height}px;
  color: red !important;

  @media (min-width: 1024px) {
    height: ${height + 10}px;
  }
  @media (min-width: 1366px) {
    height: ${height + 15}px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    padding: 0 34px;
  }
  @media (min-width: 1366px) {
    padding: 0 54px;
  }
  @media (min-width: 1920px) {
    max-width: 1580px;
    padding: 0;
  }
`;

export const Main = styled.main`
  position: relative;
  /* min-height: 100vh; */
  font-family: 'Noto Sans KR', 'Titillium Web', sans-serif;
`;
