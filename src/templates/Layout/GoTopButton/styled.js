import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: fixed;
  right: 8vw;
  bottom: 8vh;
  z-index: 999;
  width: 35px;
  height: 35px;

  ${props =>
    (props.slidekey === 3) | (props.path === '/about')
      ? css`
          border: 1px solid #838383;
          color: #838383;
        `
      : css`
          border: 1px solid #fff;
          color: #fff;
        `}

  @media (min-width: 768px) {
    right: 10vw;
    bottom: 10vw;
    width: 45px;
    height: 45px;
  }
`;
