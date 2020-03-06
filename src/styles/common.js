import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FlexBox = styled(motion.div)`
  display: flex;
  flex-direction: ${props => props.direction && `${props.direction}`};
  flex-wrap: ${props => props.wrap && `${props.wrap}`};
  justify-content: ${props => props.justify && `${props.justify}`};
  align-items: ${props => props.align && `${props.align}`};
`;
