import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '15px',
  baseLineHeight: 1.5,
  googleFonts: [
    // {
    //   name: 'Oswald',
    //   styles: ['700'],
    // },
    // {
    //   name: 'Roboto',
    //   styles: ['100', '300', '400', '700'],
    // },
    {
      name: 'Titillium Web',
      styles: ['400', '700'],
    },
    {
      name: 'Noto Sans KR',
      styles: ['300', '400', '500'],
    },
  ],
  headerFontFamily: ['Noto Sans KR', 'sans-serif'],
  bodyFontFamily: ['Titillium Web', 'Noto Sans KR', 'sans-serif'],
  headerColor: 'rgba(45, 52, 54,1.0)',
  bodyColor: 'rgba(30, 39, 46, 1.0)',
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'body,h1,h2,h3,h4,h5,h6,div,section,article,div,p,span,b,strong,ul,li,figure,figcaptioin,a,img': {
      margin: 0,
      padding: 0,
    },
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.5,
    },
    a: {
      color: 'inherit',
      textDecoration: 'none',
    },
    // 'a:hover,a:active': {
    //   color: options.bodyColor,
    // },
  }),
});

export default typography;
