import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 56px;

    @media (min-width: 768px) {
      width: 91px;
    }

    path {
      fill: ${props => (props.notIndex ? '#000' : '#fff')};
    }
  }
`;
