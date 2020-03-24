import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  position: fixed;
  right: 24px;
  bottom: 20px;
  z-index: 999;
  width: 35px;
  height: 35px;
  transition: 0.15s;
  color: rgba(0, 0, 0, 0);

  ${props =>
    (props.slidekey === 2) | (props.path === '/about') &&
    css`
      border: 1px solid #838383;
      color: #838383;

      &:hover {
        background-color: #838383;

        svg {
          stroke: #fff;
        }
      }
    `};

  ${props =>
    (props.path === '/product/clean-o') | (props.path === '/product/clean-t') &&
    css`
      border: 1px solid #fff;
      color: #fff;

      &:hover {
        background-color: #fff;

        svg {
          stroke: #838383;
        }
      }
    `};

  display: ${props => props.path === '/' && 'none'};

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
