import styled from 'styled-components';

export const Menu = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    width: 350px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-family: 'Titillium Web', sans-serif;
    color: ${props => (props.notIndex ? '#000' : '#fff')};
  }

  @media (min-width: 1366px) {
    width: 500px;
    font-size: 17px;
  }

  li.active {
    border-bottom: 3px solid #b1cdd9;
    font-weight: bold;
  }
`;
