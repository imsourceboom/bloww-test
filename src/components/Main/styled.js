import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  overscroll-behavior-y: none;
`;

export const VerticalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300vh;
  transform: ${props => props.index === 0 && 'translateY(0)'};
  transform: ${props => props.index === 1 && 'translateY(-100vh)'};
  transform: ${props => props.index === 2 && 'translateY(-200vh)'};
  transition-property: transform;
  transition-duration: 0.6s;
`;

export const FirstSection = styled.div`
  width: 100%;
  height: 33.3333333333%;
  position: relative;
  /* background-image: url('/images/main/bg/reed.gif');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(60, 60, 60, 0.18);
  }

  .bg-video-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    video {
      height: 100%;
      /* margin: 0 auto; */
      object-fit: cover;

      @media (min-width: 768px) {
        height: auto;
      }

      @media (min-width: 1920px) {
        width: 100%;
      }
    }
  }

  .box {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    width: 100%;
    max-width: 360px;
    text-align: center;
    white-space: nowrap;

    @media (min-width: 768px) {
      max-width: 700px;
      font-size: 18px;
    }
    @media (min-width: 1024px) {
      font-size: 19px;
    }
    @media (min-width: 1440px) {
      font-size: 20px;
    }

    & > div {
      line-height: 1.2;
      margin-bottom: 10px;

      @media (min-width: 768px) {
        margin-bottom: 14px;
      }
    }

    p {
      line-height: 1.5;
      margin-bottom: 12px;

      @media (min-width: 768px) {
        margin-bottom: 16px;
      }
    }

    figure {
      margin-top: 15px;
      margin-bottom: 40px;

      @media (min-width: 768px) {
        margin-bottom: 50px;
      }

      svg {
        margin: 0 auto;
        width: 100px;

        @media (min-width: 768px) {
          width: 120px;
        }
      }
    }
  }
`;

export const SecondSection = styled.div`
  width: 100%;
  height: 33.3333333333%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  & > div {
    &.clean-o,
    &.clean-t {
      flex: 1;
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: 0.3s;
      }

      &.clean-o {
        &::before {
          background-color: rgba(26, 26, 26, 0.6);

          @media (min-width: 1024px) {
            background-color: rgba(26, 26, 26, 0);
          }
        }
      }
      &.clean-t {
        &::before {
          background-color: rgba(26, 26, 26, 0.3);

          @media (min-width: 1024px) {
            background-color: rgba(26, 26, 26, 0);
          }
        }
      }

      @media (min-width: 1024px) {
        &:hover {
          &::before {
            background-color: rgba(26, 26, 26, 0.68);
          }

          .box {
            opacity: 1;
          }
        }
      }

      .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        display: flex;
        justify-content: center;

        @media (min-width: 1024px) {
          flex-direction: column;
          align-items: center;
          opacity: 0;
          transition: 0.3s;
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
              width: 150px;
            }
          }
        }

        div {
          color: #fff;
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
    }

    &.clean-o {
      background-image: url('/images/main/bg/clean-o-bg.jpg');
    }

    &.clean-t {
      background-image: url('/images/main/bg/clean-t-bg.jpg');
    }
  }
`;

export const ThirdSection = styled.div`
  width: 100%;
  height: 33.3333333333%;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  & > div {
    flex: 1;
    padding: 0 36px;
    display: flex;
    align-items: center;
    font-family: 'Noto Sans KR', sans-serif !important;

    @media (min-width: 768px) {
      padding: 0 54px;
    }
    @media (min-width: 1024px) {
      padding: 0 94px;
    }

    .cover {
      width: 100%;
      max-width: 1300px;
      margin: 0 auto;
      line-height: 1.6;

      b {
        display: inline-block;
        margin-bottom: 30px;
        font-weight: bold;
        font-size: 22px;
      }

      p {
        &:last-child {
          font-weight: lighter;
        }
      }
    }
  }
`;

export const Footer = styled.footer`
  padding: 0 26px;
  font-family: 'Noto Sans KR', sans-serif;

  @media (min-width: 768px) {
    padding: 0 54px;
  }

  @media (min-width: 1024px) {
    padding: 0 94px;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    border-top: 1px solid #ccc;
    font-size: 12px;
    padding: 30px 0 50px;

    @media (min-width: 768px) {
      flex-direction: row;
      font-size: 13px;
      padding: 80px 0;
    }
    @media (min-width: 1024px) {
      padding: 100px 0;
    }
  }

  .information-wrapper,
  .mark-wrapper {
    flex: 1;
  }

  .information-wrapper {
    line-height: 1.8;
    margin-bottom: 30px;
    text-align: center;

    @media (min-width: 768px) {
      margin-bottom: 0;
      text-align: initial;
    }
  }

  .mark-wrapper {
    .cover {
      width: 100%;
      max-width: 400px;
      display: flex;
      justify-content: center;
      padding: 0 16px;

      margin-bottom: 26px;

      &:last-child {
        margin-bottom: 0;
      }

      @media (min-width: 768px) {
        margin-left: 20px;
      }
    }

    figure {
      flex: 1;
    }

    img {
      width: 100%;
      max-width: 70px;
      margin: 0 auto;
    }
  }
`;

export const Pagination = styled.ul`
  margin: 0;
  position: fixed;
  top: 50%;
  right: 14px;
  transform: translate(0, -50%);
  display: inline-block;
  list-style-type: none;

  @media (min-width: 768px) {
    right: 20px;
  }

  & > li {
    position: relative;
    width: 7px;
    height: 7px;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0);

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      margin-bottom: 16px;
    }

    a {
      cursor: pointer;
    }

    & > a,
    & > button,
    & > span {
      &::before {
        content: '';
        display: inline-block;
        width: 7px;
        height: 7px;
        position: absolute;
        top: 0;
        left: 0;
        /* top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); */
        border-radius: 50%;
        background-color: ${props =>
          props.index === 2 ? 'rgb(0, 0, 0)' : 'rgb(255,255,255)'};
        opacity: 0.3;
      }
    }

    ${({ index }) => {
      if (index === 0) {
        return css`
          &:first-child {
            & > a,
            & > button,
            & > span {
              &::before {
                opacity: 1;
              }
            }
          }
        `;
      } else if (index === 1) {
        return css`
          &:nth-child(2) {
            & > a,
            & > button,
            & > span {
              &::before {
                opacity: 1;
              }
            }
          }
        `;
      } else {
        return css`
          &:last-child {
            & > a,
            & > button,
            & > span {
              &::before {
                opacity: 1;
              }
            }
          }
        `;
      }
    }}
  }
`;
