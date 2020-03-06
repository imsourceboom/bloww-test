import styled from 'styled-components';
import { height } from 'src/styles/variable';

export const Background = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 9999;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  transform: ${props => (props.toggle ? 'translate(-100%, 0)' : 'translate(0, 0)')};
  transition: ${props => (props.toggle ? '0.3s' : '0.6s')};

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  right: -290px;
  z-index: 10000;
  width: 100%;
  max-width: 290px;
  height: 100vh;
  background-color: white;
  font-family: 'Titillium Web', sans-serif;
  transform: ${props => (props.toggle ? 'translate(-100%, 0)' : 'translate(0, 0)')};
  transition: ${props => (props.toggle ? '0.6s' : '0.3s')};

  @media (min-width: 1024px) {
    display: none;
  }

  div {
    height: ${height}px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    button {
      svg {
        width: 26px;
        margin-top: 4px;

        @media (min-width: 768px) {
          width: 36px;
        }
      }
    }
  }

  ul {
    padding-top: 150px;
    padding-left: 60px;

    li {
      margin-bottom: 60px;

      &.active {
        border-left: 7px solid #b1cdd9;
        line-height: 0.9em;
        padding-left: 4px;

        a {
          font-weight: bold;
        }
      }
    }
  }
`;
