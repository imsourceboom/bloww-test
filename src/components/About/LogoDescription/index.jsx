import React from 'react';

import LogoCyan from 'src/components/SVG/LogoCyan';
import AboutWind from 'src/components/SVG/AboutWind';
import AboutPlus from 'src/components/SVG/AboutPlus';
import AboutFlower from 'src/components/SVG/AboutFlower';

import { Wrapper, Title } from '../styled';
import { Container } from './styled';
import { FlexBox } from 'src/styles/common';

var LogoDescription = () => {
  return (
    <Wrapper margin="0 0 250px">
      <Title lang={'en'} margin="100px 0 100px">
        Logo
      </Title>
      <Container>
        <FlexBox direction="column" align="center">
          <figure className="logo">
            <LogoCyan />
            <figcaption>자연을 움직이는 자연의 힘.</figcaption>
          </figure>
          <FlexBox align="center" className="sum-box">
            <figure className="wind">
              <AboutWind />
              <figcaption>
                Wind
                <p>바람이 불다.</p>
              </figcaption>
            </figure>
            <figure className="plus">
              <AboutPlus />
            </figure>
            <figure className="flower">
              <AboutFlower />
              <figcaption>
                Flower
                <p>꽃을 피우다.</p>
              </figcaption>
            </figure>
          </FlexBox>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default LogoDescription;
