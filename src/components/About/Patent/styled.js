import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    /* padding: 0 84px; */
  }
  @media (min-width: 1366px) {
    padding: 0;
  }

  .swiper-container {
    padding-top: 60px;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;

    img {
      width: 270px;
      object-fit: contain;
      border: 1px solid #666;
      background-color: #fff;

      @media (min-width: 768px) {
        width: 300px;
      }
    }

    figcaption {
      position: relative;
      text-align: center;
      padding: 30px 0 45px;
      margin-top: 30px;
      font-size: 16px;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, 0);
        display: inline-block;
        width: 40px;
        border-top: 1px solid #aaa;
      }

      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #666;

    @media (min-width: 768px) {
      display: none;
    }

    &::after {
      font-size: 22px;
    }
  }

  .swiper-pagination-bullets {
    bottom: 3px !important;

    @media (min-width: 768px) {
      opacity: 0;
    }

    span {
      margin: 15px 0;

      &.swiper-pagination-bullet-active {
        background-color: #666;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
      }

      @media (min-width: 1024px) {
        margin: 25px 0;
      }
    }
  }
`;
