import styled from 'styled-components';

export const Container = styled.div`
  figure.logo {
    position: relative;
    padding-bottom: 40px;
    margin-bottom: 50px;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      display: inline-block;
      width: 20px;
      height: 1px;
      background-color: #aaa;
    }

    img {
      width: 100px;
      margin: 0 auto;

      @media (min-width: 768px) {
        width: 120px;
      }
    }

    figcaption {
      padding-top: 15px;
    }
  }

  .sum-box {
    /* margin-left: -10px; */

    @media (min-width: 768px) {
      margin-left: -5px;
    }
  }

  figure.wind,
  figure.flower {
    figcaption {
      text-align: center;
      padding-top: 25px;
      font-weight: bold;

      @media (min-width: 768px) {
        font-size: 16px;
      }

      p {
        font-weight: normal;
        font-size: 0.9em;
        padding-top: 15px;
      }
    }
  }

  figure.wind {
    svg {
      @media (min-width: 768px) {
        width: 81px;
      }
    }
  }

  figure.plus {
    margin: 0 50px;

    @media (min-width: 768px) {
      margin: 0 80px;
    }
  }

  figure.flower {
    svg {
      display: block;
      margin: 0 auto;
      width: 31px;

      @media (min-width: 768px) {
        width: 39px;
      }
    }
  }
`;
