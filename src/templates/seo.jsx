/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { withPrefix } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      // titleTemplate={`${site.siteMetadata.title} | %s`}
      meta={[
        {
          name: `robots`,
          content: `index, follow`,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: `친환경, 환경, 블로우, bloww, 물, 묘목, 나무, 가로수길, environment`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `630`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}>
      {/* <link rel="preload" href="/images/main/bg/reed.mov" as="video" /> */}
      <link rel="canonical" href="https://bloww.io/" />
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-141901804-1"
      /> */}
      {/* <script src={withPrefix("google.js")} /> */}
      <script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
      <script src={withPrefix('naver.js')} />
      <link
        rel="preload"
        href="//fonts.googleapis.com/css?family=Titillium+Web:400,700|Noto+Sans+KR:300,400,500"
        as="font"
        crossorigin="crossorigin"
      />
      {/* <link rel="preload" href="/images/main/bg/clean-o-bg.jpg" as="image" />
      <link rel="preload" href="/images/main/bg/clean-t-bg.jpg" as="image" /> */}
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `ko`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
