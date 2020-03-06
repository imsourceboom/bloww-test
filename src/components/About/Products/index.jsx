import React, { useCallback } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useDispatch } from 'react-redux';

import DetailViewButton from 'src/components/DetailViewButton';
import CleanOsymbol from 'src/components/SVG/CleanO';
import CleanTsymbol from 'src/components/SVG/CleanT';

import { Wrapper, Title } from '../styled';
import { Container } from './styled';

import { swiperSlideKeyAction } from 'src/state/nav';

var Products = () => {
  var dispatch = useDispatch();

  var slideKeyChange = useCallback(
    parameter => {
      dispatch(swiperSlideKeyAction(parameter));
    },
    [dispatch],
  );

  return (
    <Wrapper margin="0 0 250px">
      {/* <Fade top> */}
      <Title lang={'ko'} margin="0 0 100px">
        주요제품
      </Title>
      <Container>
        <div className="clean-o">
          <div className="box">
            <figure>
              <CleanOsymbol />
            </figure>
            <div>
              <span>
                <p>Clean - O</p>
                <p>뿌리 하강 유도 장치</p>
              </span>
              <AniLink
                to="/product/clean-o"
                fade
                onClick={() => {
                  slideKeyChange();
                }}>
                <DetailViewButton />
              </AniLink>
            </div>
          </div>
        </div>
        <div className="clean-t">
          <div className="box">
            <figure>
              <CleanTsymbol />
            </figure>
            <div>
              <span>
                <p>Clean - T</p>
                <p>취송류 하강 유도 장치</p>
              </span>
              <AniLink
                to="/product/clean-t"
                fade
                onClick={() => {
                  slideKeyChange();
                }}>
                <DetailViewButton />
              </AniLink>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Products;
