import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  width: 100px;
  height: 30px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 13px;

  @media (min-width: 768px) {
    width: 120px;
    height: 33px;
    font-size: 14px;
  }
`;
