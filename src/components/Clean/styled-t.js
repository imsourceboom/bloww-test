// import styled, { keyframes } from 'styled-components';
// import { motion } from 'framer-motion';

// export const CleanTwrapper = styled(motion.figure)`
//   position: absolute;
//   top: 0;
//   left: -68vw;
//   z-index: 2;
//   transform: translate(0, -48.6%);
//   width: 450px;

//   @media (min-width: 768px) {
//     left: -35vw;
//     width: 600px;
//   }
//   @media (min-width: 1024px) {
//     left: -18vw;
//   }
//   @media (min-width: 1366px) {
//     left: -10vw;
//     width: 650px;
//   }
//   @media (min-width: 1440px) {
//     left: -5vw;
//   }
//   @media (min-width: 1680px) {
//     left: 5vw;
//   }
//   @media (min-width: 1920px) {
//     left: 10vw;
//     width: 700px;
//   }
//   @media (min-width: 1920px) and (min-height: 1050px) {
//     left: 15vw;
//   }

//   svg {
//     width: 100%;
//   }
// `;

// const wind = keyframes`
//     0% {
//       opacity: 0;
//       transform: translateX(40%);
//     }
//     80% {
//       opacity: 1;
//     }
//     100% {
//       opacity: 0;
//       transform: translateX(-40%);
//     }
// `;

// export const WindWrapper = styled.figure`
//   position: absolute;
//   top: 10vh;
//   left: 10vw;
//   animation: ${wind} 10s ease-in infinite;

//   @media (min-width: 1024px) {
//     top: 15vh;
//     left: 40vw;
//   }

//   svg {
//     width: 50%;

//     @media (min-width: 768px) {
//       width: 70%;
//     }
//     @media (min-width: 1024px) {
//       width: 100%;
//     }
//   }
// `;

// export const WindTwinWrapper = styled.figure`
//   position: absolute;
//   top: 15vh;
//   left: 50vw;
//   animation: ${wind} 9s 1.2s ease-in-out infinite;

//   @media (min-width: 768px) {
//     top: 20vh;
//     left: 55vw;
//   }
//   @media (min-width: 1024px) {
//     left: 65vw;
//   }
//   @media (min-width: 1920px) {
//     top: 16vh;
//   }

//   svg {
//     width: 100%;
//     max-width: 300px;

//     @media (min-width: 1920px) {
//       max-width: 400px;
//     }
//   }
// `;

// const wave = keyframes`
//   0%{
//     right: 0;
//   }
//   100%{
//     right: 140vw;
//   }
// `;

// export const WaveWrapper = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 70vw;
//   height: 40px;
//   transform: translate(0, -98%);
//   overflow-x: hidden;

//   @media (min-width: 1680px) {
//     width: 65vw;
//   }
//   @media (min-width: 1920px) {
//     width: 60vw;
//   }

//   svg {
//     position: absolute;
//     right: 0;
//     bottom: 0;
//     width: 100%;
//     min-width: 300px;
//     max-width: 600px;
//     transform: translate(100%, 0);
//     animation: ${wave} 15s infinite;

//     @media (min-width: 768px) {
//       animation: ${wave} 18s infinite;
//     }

//     @media (min-width: 1440px) {
//       animation: ${wave} 25s infinite;
//     }
//   }
// `;
