import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 15px;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 30px;
    height: 22px;
  }

  @media (min-width: 1024px) {
    display: none;
  }

  div {
    width: 22px;
    height: 1px;
    background-color: ${props => (props.notIndex ? '#000' : '#fff')};
    border-radius: 2px;

    @media (min-width: 768px) {
      width: 30px;
      height: 2px;
    }
  }
`;
