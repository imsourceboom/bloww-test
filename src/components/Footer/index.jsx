import React from 'react';
// // import Fade from 'react-reveal/Fade';

import { FooterContainer } from './styled';

var Footer = ({ bg }) => {
  return (
    <FooterContainer bg={bg}>
      <div className="container">
        <div className="information-wrapper">
          <p>상호명 : 주식회사 블로우(BLOWW Co.,Ltd.)</p>
          <p>대표자명 : 김동범</p>
          <p>사업자 번호 : 187-86-01483</p>
          <p>주소 : 대전광역시 유성구 상대서로 11, 3층(상대동)</p>
          {/* <p>대표번호 : 미정</p> */}
          <p>Copyright © BLOWW. All rights Reserved.</p>
        </div>
        <div className="mark-wrapper">
          <div className="cover">
            <figure>
              <img src="/images/mark/mark-001.png" alt="조달청 인증마크" />
            </figure>
            <figure>
              <img src="/images/mark/mark-005.png" alt="중소기업청 성능 인증마크" />
            </figure>
            <figure>
              <img src="/images/mark/mark-006.png" alt="신기술 인증마크" />
            </figure>
          </div>
          <div className="cover">
            <figure>
              <img src="/images/mark/mark-002.png" alt="환경부 인증마크" />
            </figure>
            <figure>
              <img src="/images/mark/mark-003.png" alt="특허청 인증마크" />
            </figure>
            <figure>
              <img src="/images/mark/mark-004.png" alt="기획재정부 인증마크" />
            </figure>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};
export default Footer;
