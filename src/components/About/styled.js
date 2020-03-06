import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import { height } from 'src/styles/variable';

export const PageMotionTransition = styled(motion.div)`
  margin-top: -${height}px;

  @media (min-width: 1024px) {
    margin-top: -${height + 10}px;
  }
  @media (min-width: 1366px) {
    margin-top: -${height + 15}px;
  }
`;

export const Wrapper = styled(motion.article)`
  width: 100%;
  height: ${props => props.viewport && '100vh'};
  margin: ${props => props.margin && `${props.margin}`};

  ${props =>
    props.viewport &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
    `}

  font-size: 14px;
`;

export const Title = styled(motion.h2)`
  text-align: center;
  font-size: 22px;
  font-family: ${props => props.lang === 'ko' && '"Noto Sans KR", sans-serif'};
  font-family: ${props => props.lang === 'en' && '"Titillium Web", sans-serif'};
  margin: ${props => props.margin && `${props.margin}`};

  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1366px) {
    font-size: 26px;
  }
`;
