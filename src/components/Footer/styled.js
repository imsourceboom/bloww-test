import styled from 'styled-components';

export const FooterContainer = styled.footer`
  /* padding: 0 26px; */
  font-family: 'Noto Sans KR', sans-serif;
  border-top: 1px solid #707070;
  background-color: ${props => (props.bg ? `${props.bg}` : '#fff')};

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
    font-size: 12px;
    padding: 60px 0 70px;

    @media (min-width: 768px) {
      flex-direction: row;
      font-size: 13px;
      padding: 70px 0 80px;
    }
    @media (min-width: 1024px) {
      padding: 90px 0 100px;
    }
  }

  .information-wrapper,
  .mark-wrapper {
    flex: 1;
  }

  .information-wrapper {
    line-height: 1.8;
    margin-bottom: 40px;
    text-align: center;

    @media (min-width: 768px) {
      margin-bottom: 0;
      text-align: initial;
      border-right: 1px solid #707070;
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
      width: 70px;
      margin: 0 auto;
    }
  }
`;
