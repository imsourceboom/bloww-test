import styled from 'styled-components';
import { height } from 'src/styles/variable';

const verticalViewport = 50;

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin-top: -${height}px;
  /* background-color: rgb(185, 212, 222); */

  @media (min-width: 1024px) {
    margin-top: -${height + 10}px;
  }
  @media (min-width: 1366px) {
    margin-top: -${height + 15}px;
  }

  padding-top: ${verticalViewport}vh;

  @media (min-width: 768px) {
    padding-top: ${verticalViewport + 2}vh;
  }
`;

export const Title = styled.hgroup`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: 3;
  width: 100%;
  padding: 0 16px;
  text-align: center;

  @media (min-width: 768px) {
    top: 150px;
    padding: 0 24px;
  }
  @media (min-width: 1024px) {
    top: 160px;
    padding: 0 34px;
    text-align: left;
  }
  @media (min-width: 1366px) {
    top: 170px;
    padding: 0 54px;
  }
  @media (min-width: 1920px) {
    top: 180px;
    padding: 0;
  }

  h1,
  h2 {
    margin: 0 auto;

    @media (min-width: 1920px) {
      max-width: 1580px;
    }
  }

  h1 {
    font-size: 24px;
    font-family: 'Titillium Web', sans-serif;

    @media (min-width: 768px) {
      font-size: 34px;
    }
    @media (min-width: 1024px) {
      font-size: 36px;
      text-align: left;
    }
    @media (min-width: 1920px) {
      font-size: 40px;
    }
  }

  h2 {
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 400;

    @media (min-width: 1024px) {
      font-size: 18px;
      text-align: left;
    }
    @media (min-width: 1920px) {
      font-size: 20px;
    }
  }
`;

export const VideoBox = styled.div`
  position: absolute;
  top: 50vh;
  left: 0;
  transform: translate(0, -50%);
  z-index: 2;
  width: 100%;
  overflow: hidden;


  @media (min-width: 1024px) {
    top: 0;
    transform: translate(0, 0);
  }


  video {
    width: 100%;
    /* height: ${props => (props.device === 'Windows PC' ? 'auto' : '100%')}; */
    object-fit: cover;
    margin-top: -1px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${props => (props.clean ? '#d8c9bf' : 'rgb(185,212,222)')};
  padding-top: ${verticalViewport + 40}vh;
`;

export const MaxWidth = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 3;
  padding: 0 20px;

  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;

export const Quote = styled.div`
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  white-space: nowrap;
  margin-bottom: ${props => props.marginbottom && `${props.marginbottom}px`};

  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: ${props =>
      props.marginbottom && `${Number(props.marginbottom) + 10}px`};
  }
  @media (min-width: 1024px) {
    font-size: 28px;
  }
  @media (min-width: 1440px) {
    font-size: 30px;
  }

  br {
    @media (min-width: 1024px) {
      display: none;
    }
  }

  .comment {
    @media (min-width: 768px) {
      margin: 0 15px;
    }

    @media (min-width: 1024px) {
      margin: 0 20px;
    }
  }

  .icon-wrapper {
    display: block;

    @media (min-width: 1024px) {
      margin-top: -8px;
    }
  }

  .quote {
    width: 12px;

    @media (min-width: 768px) {
      width: 18px;
    }
  }
`;

export const Description = styled.div`
  text-align: center;
  word-break: keep-all;
  word-wrap: break-word;
  line-height: 1.5;
  margin-bottom: ${props => props.marginbottom && `${props.marginbottom}px`};

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: ${props =>
      props.marginbottom && `${Number(props.marginbottom) + 30}px`};
  }
  @media (min-width: 1024px) {
    font-size: 19px;
  }

  br {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

export const Issue = styled.ul`
  margin-bottom: ${props => props.marginbottom && `${props.marginbottom}px`};

  @media (min-width: 768px) {
    margin-bottom: ${props =>
      props.marginbottom && `${Number(props.marginbottom) + 30}px`};
  }

  li {
    margin-bottom: 15px;

    @media (min-width: 768px) {
      margin-bottom: 20px;
    }

    &:last-child {
      margin-bottom: 0;
    }

    img {
      width: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
  }
`;

export const Youtube = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  margin-bottom: ${props => props.marginbottom && `${props.marginbottom}px`};

  @media (min-width: 768px) {
    margin-bottom: ${props =>
      props.marginbottom && `${Number(props.marginbottom) + 30}px`};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-image: url('/images/clean-o/thumbnail.jpg');
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.2s;
  }

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: 0.3s;
  }
`;

export const Video = styled.div`
  margin-bottom: ${props => props.marginbottom && `${props.marginbottom}px`};

  @media (min-width: 768px) {
    margin-bottom: ${props =>
      props.marginbottom && `${Number(props.marginbottom) + 30}px`};
  }

  video {
    width: 100%;
    /* height: 100%; */
  }
`;

export const ArticleTitle = styled.hgroup`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  h3 {
    border-top: 1px solid #000;
    font-size: 18px;
    font-family: 'Titillium Web', sans-serif;

    @media (min-width: 768px) {
      font-size: 20px;
    }
    @media (min-width: 1024px) {
      font-size: 22px;
    }
    @media (min-width: 1366px) {
      font-size: 24px;
    }
    @media (min-width: 1440px) {
      font-size: 26px;
    }
  }
`;

export const Specification = styled.article`
  @media (min-width: 768px) {
    margin: 0 -32px;
  }

  @media (min-width: 1024px) {
    margin: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    img {
      width: 100%;
      object-fit: contain;
      margin: 0 auto;
    }

    li {
      margin-bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media (min-width: 768px) {
        margin-bottom: 50px;
      }
      @media (min-width: 1366px) {
        margin-bottom: 80px;
      }

      &:first-child {
        width: 100%;
        margin-bottom: 0;
      }

      &:nth-child(2) {
        width: 100%;

        & > div {
          margin-right: ${props => props.clean && '-20px'};
        }

        @media (min-width: 768px) {
          margin-bottom: 0;
          width: 50%;

          & > div {
            margin-right: ${props => props.clean && '-80px'};
          }
        }

        img {
          width: 100%;
          object-fit: contain;
        }

        svg {
          /* width: 100%; */
          min-width: ${props => (props.clean ? '270px' : '340px')};
          max-width: ${props => (props.clean ? '270px' : '340px')};
          height: ${props => (props.clean ? '294.516px' : '300.953px')};

          @media (min-width: 768px) {
            min-width: ${props => props.clean && '320px'};
            max-width: ${props => props.clean && '320px'};
            height: ${props => props.clean && '349.047px'};
          }

          @media (min-width: 1024px) {
            min-width: ${props => (props.clean ? '350px' : '400px')};
            max-width: ${props => (props.clean ? '350px' : '400px')};
            height: ${props => (props.clean ? '381.781px' : '354.078px')};
          }

          text {
            font-size: ${props => (props.clean ? '20px' : '22px')};

            @media (min-width: 768px) {
              font-size: ${props => (props.clean ? '18px' : '21px')};
            }
          }
        }
      }

      &:last-child {
        margin-bottom: 0;
        width: 100%;

        & > div {
          margin-right: ${props => props.clean && '-10px'};

          @media (min-width: 768px) {
            margin-right: 0;
          }
        }

        @media (min-width: 768px) {
          margin-right: 0;
          width: 50%;
        }

        img {
          width: 100%;
          object-fit: contain;
        }

        svg {
          width: 100%;
          min-width: ${props => (props.clean ? '240px' : '320px')};
          max-width: ${props => (props.clean ? '240px' : '320px')};
          height: ${props => (props.clean ? '352.062px' : '244.328px')};

          @media (min-width: 1024px) {
            min-width: ${props => (props.clean ? '255px' : '390px')};
            max-width: ${props => (props.clean ? '255px' : '390px')};
            height: ${props => (props.clean ? '374.062px' : '297.781px')};
          }

          text {
            font-size: ${props => (props.clean ? '17px' : '22px')};

            &.height {
              transform: translate(440.434px, 240.19px) !important;
            }

            @media (min-width: 768px) {
              font-size: ${props => (props.clean ? '18px' : '20px')};

              &.height {
                transform: translate(446.434px, 240.19px) !important;
              }
            }
          }
        }
      }
    }
  }

  .caution {
    color: #ea2027;
    font-size: 13px;
    text-align: center;
    padding: 30px 0 50px;

    @media (min-width: 768px) {
      font-size: 14px;
      padding: 32px 0 70px;
    }
  }
`;

export const BuildMethod = styled.article`
  width: 100%;
  max-width: 840px;
  margin: 0 auto;
  margin-bottom: ${props => props.marginbottom && `${props.marginbottom}px`};

  @media (min-width: 768px) {
    margin-bottom: ${props =>
      props.marginbottom && `${Number(props.marginbottom) + 30}px`};
  }

  ul {
    display: flex;
    flex-wrap: wrap;

    li {
      width: 50%;
      margin-bottom: 50px;

      @media (min-width: 768px) {
        margin-bottom: 70px;
      }

      &:nth-child(3),
      &:last-child {
        margin-bottom: 0;
      }

      figure {
        width: 90%;
        margin: 0 auto;

        img {
          margin: 0 auto;
          width: 100%;
          max-width: 300px;
          /* border-radius: ${props => props.radius && '100%'}; */
        }

        figcaption {
          max-width: 350px;
          text-align: center;
          font-size: 14px;
          line-height: 1.5;
          padding-top:  20px ;
          margin: 0 auto;

          @media (min-width: 768px) {
            font-size: 16px;
            padding-top:  32px;
            word-break: keep-all;
            word-wrap: break-word;
          }
        }
      }
    }
  }
`;

export const ConstructionCase = styled.article`
  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    width: 100%;
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    @media (min-width: 768px) {
      margin-bottom: 60px;
      width: 50%;

      &:nth-child(3) {
        margin-bottom: 0;
      }
    }

    figure {
      max-width: 445px;
      margin: 0 auto;

      @media (min-width: 768px) {
        padding: 0 8px;
      }

      @media (min-width: 1024px) {
        padding: 0;
      }
    }

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 4px;
    }

    figcaption {
      text-align: center;
      font-size: 15px;
      line-height: 1.5;
      padding-top: 10px;

      @media (min-width: 768px) {
        font-size: 18px;
      }
    }
  }
`;

export const Finish = styled.div`
  padding: 180px 0;

  @media (min-width: 1024px) {
    padding: 200px 0;
  }

  p {
    font-size: 20px;
    color: #fff;
    text-align: center;
    line-height: 1.8;
    font-weight: bold;

    &:last-child {
      font-family: 'Titillium Web', sans-serif;
      color: #6fb1b9;
    }

    @media (min-width: 768px) {
      font-size: 22px;
    }
    @media (min-width: 1024px) {
      font-size: 24px;
    }
    @media (min-width: 1440px) {
      font-size: 26px;
    }
    @media (min-width: 1680px) {
      font-size: 28px;
    }
  }
`;
