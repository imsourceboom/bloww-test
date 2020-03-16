import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }

  .clean-o {
    margin-left: -10px;
    margin-bottom: 90px;

    @media (min-width: 1024px) {
      margin: 0;
      margin-right: 170px;
    }
  }

  .box {
    display: flex;
    justify-content: center;

    @media (min-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    figure {
      margin-right: 20px;

      @media (min-width: 1024px) {
        margin-right: 0;
        margin-bottom: 30px;
      }

      svg {
        width: 100px;

        @media (min-width: 768px) {
          width: 120px;
        }

        @media (min-width: 1024px) {
          width: 130px;
        }
      }
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      @media (min-width: 1024px) {
        align-items: center;
      }

      span {
        line-height: 1.5;
        margin-bottom: 15px;

        @media (min-width: 1024px) {
          text-align: center;
        }

        p {
          &:first-child {
            font-size: 1.5em;
          }

          &:nth-child(2) {
            font-family: 'Noto Sans KR', sans-serif;
          }
        }
      }
    }
  }

  .clean-t {
    .box {
      figure {
        display: flex;
        align-items: center;

        svg {
          width: 130px;

          @media (min-width: 768px) {
            width: 160px;
          }

          @media (min-width: 1024px) {
            width: 200px;
          }
        }
      }
    }
  }

  button {
    color: #333;
    border: 1px solid #333;
  }
`;
