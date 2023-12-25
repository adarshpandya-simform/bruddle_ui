import { LinkProps, createTheme } from '@mui/material';

import { SmartLink } from '../components';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary'];
  }

  interface PaletteOptions {
    black?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true;
  }

  interface ButtonPropsVariantOverrides {
    raised: true;
  }
}

const PRIMARY_COLOR = '#AE7AFF';
const SECONDARY_COLOR = '#98E9AB';

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    black: {
      main: '#000',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: SmartLink,
      } as LinkProps,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: SmartLink,
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'large',
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '0.2rem',
          fontWeight: 700,
          fontSize: 16,
          textTransform: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'raised' },
          style: {
            border: '1px solid black',
            boxShadow: '4px 4px 0px black',
          },
        },
        {
          props: { variant: 'raised', color: 'primary' },
          style: {
            backgroundColor: PRIMARY_COLOR,
            ':hover': {
              backgroundColor: PRIMARY_COLOR,
            },
          },
        },
      ],
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        wrapper: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        root: {
          '::before': {
            borderColor: 'black',
          },
          '::after': {
            borderColor: 'black',
          },
        },
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'h3' },
          style: {
            fontSize: 48,
            fontWeight: 800,
          },
        },
        {
          props: { variant: 'body1' },
          style: {
            fontSize: 14,
            fontWeight: 400,
          },
        },
        {
          props: { variant: 'body2' },
          style: {
            fontSize: 12,
            fontWeight: 700,
          },
        },
      ],
    },
  },
});
