import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#222222',
      white: '#fcfcfc',
      grey: '#a0abbb',
      blue: '#3943b7',
      orange: '#c16200',
    },
    sizes: {
      auto: 'auto',
      none: 'none',
      full: '100%',
      xl: '1440px',
    },
    fonts: {
      primary:
        '"Basier Circle", -apple-system, system-ui, BlinkMacSystemFont,Segoe UI, Helvetica, Arial, sans-serif',
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    fontSizes: {
      micro: '7px',
      xsm: '12px',
      sm: '14px',
      base: '20px',
      md: '28px',
      lg: '40px',
      xl: '56px',
      xxl: '80px',
      super: '113px',
    },
    lineHeights: {
      compact: 1.1,
      default: 1.5,
    },
    space: {
      none: 0,
      xsm: '8px',
      sm: '16px',
      md: '24px',
      lg: '48px',
      xl: '64px',
      xxl: '96px',
    },
    zIndices: {
      under: -1,
      over: 1,
      init: 0,
    },
    radii: {
      none: 0,
      round: '50%',
      pill: '9999px',
    },
  },
  media: {
    sm: '(max-width: 420px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1440px)',
  },
  utils: {
    m: (value: any) => ({
      margin: value,
    }),
    mt: (value: any) => ({
      marginTop: value,
    }),
    mr: (value: any) => ({
      marginRight: value,
    }),
    mb: (value: any) => ({
      marginBottom: value,
    }),
    ml: (value: any) => ({
      marginLeft: value,
    }),
    mx: (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    p: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: any) => ({
      paddingTop: value,
    }),
    pr: (value: any) => ({
      paddingRight: value,
    }),
    pb: (value: any) => ({
      paddingBottom: value,
    }),
    pl: (value: any) => ({
      paddingLeft: value,
    }),
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    ta: (value: any) => ({ textAlign: value }),

    fd: (value: any) => ({ flexDirection: value }),
    fw: (value: any) => ({ flexWrap: value }),

    ai: (value: any) => ({ alignItems: value }),
    ac: (value: any) => ({ alignContent: value }),
    jc: (value: any) => ({ justifyContent: value }),
    as: (value: any) => ({ alignSelf: value }),
    fg: (value: any) => ({ flexGrow: value }),
    fs: (value: any) => ({ flexShrink: value }),
    fb: (value: any) => ({ flexBasis: value }),

    bc: (value: any) => ({
      backgroundColor: value,
    }),

    br: (value: any) => ({
      borderRadius: value,
    }),

    lh: (value: any) => ({ lineHeight: value }),
  },
});
