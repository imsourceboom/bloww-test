import React from 'react';

import { Wrapper, Title } from '../styled';
import { Container } from './styled';
import { FlexBox } from 'src/styles/common';

var Introduce = () => {
  return (
    <Wrapper viewport>
      <Title lang={'ko'} margin="0 0 30px">
        회사소개
      </Title>
      <Container>
        <FlexBox direction="column" align="center">
          <p>자연과 가장 가까운 방법을 고민했습니다.</p>
          <p>그렇게 자연과 가까운 방법으로 바꾸고 싶습니다.</p>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default Introduce;
