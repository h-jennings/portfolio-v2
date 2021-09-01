import type * as Stitches from '@stitches/react';
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
    transitions: {
      default: 'all 225ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  media: {
    sm: '(max-width: 420px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 1024px)',
    xl: '(max-width: 1440px)',
  },
  utils: {
    m: (value: Stitches.ScaleValue<'space'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.ScaleValue<'space'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.ScaleValue<'space'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.ScaleValue<'space'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.ScaleValue<'space'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    p: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value,
    }),
    pt: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.ScaleValue<'space'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.ScaleValue<'space'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({
      flexShrink: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.ScaleValue<'colors'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.ScaleValue<'radii'>) => ({
      borderRadius: value,
    }),

    lh: (value: any) => ({ lineHeight: value }),
  },
});
