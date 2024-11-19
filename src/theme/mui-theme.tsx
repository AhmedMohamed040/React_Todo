import { ThemeOptions, createTheme,alpha } from "@mui/material/styles";
import { filledInputClasses } from '@mui/material/FilledInput';
import { CheckboxCheckedIcon, CheckboxIcon, CheckboxIndeterminateIcon } from "./theme-icons";
import { CheckboxProps, checkboxClasses } from '@mui/material/Checkbox';
import font400 from '../../public/fonts/baloo-bhaijaan2-regular.ttf';
import font500 from '../../public/fonts/baloo-bhaijaan2-medium.ttf';
import font600 from '../../public/fonts/baloo-bhaijaan2-semi-bold.ttf';
import font700 from '../../public/fonts/baloo-bhaijaan2-bold.ttf';
import font800 from '../../public/fonts/baloo-bhaijaan2-extra-bold.ttf';


export function remToPx(value: string) {
    return Math.round(parseFloat(value) * 16);
  }
  
  export function pxToRem(value: number) {
    return `${value / 16}rem`;
  }
  
export function responsiveFontSizes({ sm, md, lg }: { sm: number; md: number; lg: number }) {
    return {
      '@media (min-width:600px)': {
        fontSize: pxToRem(sm),
      },
      '@media (min-width:900px)': {
        fontSize: pxToRem(md),
      },
      '@media (min-width:1200px)': {
        fontSize: pxToRem(lg),
      },
    };
  };

const typography = {
  fontFamily:'Baloo_Bhaijaan_2',
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightSemiBold: 600,
  fontWeightBold: 700,
  h1: {
    fontWeight: 800,
    lineHeight: 80 / 64,
    fontSize: pxToRem(40),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
  },
  h2: {
    fontWeight: 800,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    fontWeight: 500,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  body2: {
    fontWeight: 400,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: pxToRem(12),
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: 'uppercase',
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: 'unset',
  },
};

const theme = createTheme(

  {
    typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Baloo_Bhaijaan_2';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: url(${font400}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Baloo_Bhaijaan_2';
            font-style: normal;
            font-display: swap;
            font-weight: 500;
            src: url(${font500}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Baloo_Bhaijaan_2';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: url(${font600}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Baloo_Bhaijaan_2';
            font-style: normal;
            font-display: swap;
            font-weight: 700;
            src: url(${font700}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
          @font-face {
            font-family: 'Baloo_Bhaijaan_2';
            font-style: normal;
            font-display: swap;
            font-weight: 800;
            src: url(${font800}) format('truetype');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
      MuiContainer: {
        styleOverrides: {
          maxWidthXs: "1110px",
          maxWidthSm: "1110px",
          maxWidthMd: "1110px",
          maxWidthLg: "1110px",
          maxWidthXl: "1110px",
        },
        defaultProps: { style: { marginInline: "auto" } },
      }, 
      MuiCheckbox: {
        defaultProps: {
          size: 'small',
          icon: <CheckboxIcon />,
          checkedIcon: <CheckboxCheckedIcon />,
          indeterminateIcon: <CheckboxIndeterminateIcon />,
        },
        styleOverrides: {
            root: ({ ownerState }: { ownerState: CheckboxProps }) => {
              const { color } = ownerState;
    
              return {
                padding: theme.spacing(1),
                ...(color === 'default' && {
                  [`&.${checkboxClasses.checked}`]: {
                    color: theme.palette.text.primary,
                  },
                }),
                [`&.${checkboxClasses.disabled}`]: {
                  color: theme.palette.action.disabled,
                },
              };
            },
          },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            borderRadius: 3,
            backgroundColor: alpha('#919EAB', 0.08),
            '&:hover': {
              backgroundColor: alpha('#919EAB', 0.16),
            },
            [`&.${filledInputClasses.focused}`]: {
              backgroundColor: alpha('#919EAB', 0.16),
            },
            [`&.${filledInputClasses.error}`]: {
              backgroundColor: alpha('#FF5630', 0.08),
              [`&.${filledInputClasses.focused}`]: {
                backgroundColor: alpha('#FF5630', 0.16),
              },
            },
            [`&.${filledInputClasses.disabled}`]: {
              backgroundColor: alpha('#919EAB', 0.24),
            },
          },
        },
      },
    },

  } as ThemeOptions);

const modifiedTheme = {
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      ...theme.palette.primary,
      lightest: "#EBF8F8",
      light: "#B8D0DF",
      main: '#84A7C5',
      dark: "#1D5691",
      darkest: "#1D5691"
    },
    warning: {
     
        ...theme.palette.warning,
        lightest: "#FEEFD1",
        light: "#FCCF76",
        main: '#faaf1b',
        dark: "#E39F19",
        darkest: "#CE9117"
      
    }, 
    grey: {
        0: '#FFFFFF',
        100: '#F9FAFB',
        200: '#F4F6F8',
        300: '#DFE3E8',
        400: '#C4CDD5',
        500: '#919EAB',
        600: '#637381',
        700: '#454F5B',
        800: '#212B36',
        900: '#161C24',
  }
  },
  breakpoints: {
    ...theme.breakpoints,
    values: { ...theme.breakpoints.values, sm: 545 },
  },
};

export default modifiedTheme;

