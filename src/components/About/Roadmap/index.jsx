import React from 'react';
// // import Fade from 'react-reveal/Fade';

import { Wrapper, Title } from '../styled';
import { Container, ItemBox, RoadMapTitle, ImgWarp } from './styled';
import { FlexBox } from 'src/styles/common';

var Roadmap = () => {
  return (
    <Wrapper margin="0 0 150px">
      {/* <Fade top> */}
      <RoadMapTitle lang={'en'} margin="0 0 50px">
        Road map
      </RoadMapTitle>
      {/* </Fade> */}
      <Container>
        <FlexBox justify="center">
          <ImgWarp>
            <img src="/images/roadmap/road_map.png" alt="roadmap" />
          </ImgWarp>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default Roadmap;
