import styled from 'styled-components';

export const Container = styled.div`
  & p {
    line-height: 1.8;
    font-size: 13px;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
