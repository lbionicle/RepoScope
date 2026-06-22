import { palette } from './palette';

function lightDark(lightColor: string, darkColor: string): string {
  return `light-dark(${lightColor}, ${darkColor})`;
}

export const theme = {
  colors: {
    background: {
      primary: lightDark(palette.gray[50], palette.gray[950]),
      secondary: lightDark(palette.white, palette.gray[900]),
      tertiary: lightDark(palette.gray[100], palette.gray[800]),
    },

    surface: {
      primary: lightDark(palette.white, palette.gray[900]),
      secondary: lightDark(palette.gray[50], palette.gray[800]),
      interactive: lightDark(palette.gray[100], palette.gray[700]),
    },

    text: {
      primary: lightDark(palette.gray[950], palette.gray[50]),
      secondary: lightDark(palette.gray[700], palette.gray[300]),
      tertiary: lightDark(palette.gray[500], palette.gray[500]),
      inverse: lightDark(palette.white, palette.gray[950]),
      link: lightDark(palette.blue[600], palette.blue[300]),
    },

    border: {
      primary: lightDark(palette.gray[200], palette.gray[700]),
      secondary: lightDark(palette.gray[300], palette.gray[600]),
      focus: lightDark(palette.blue[600], palette.blue[500]),
    },

    action: {
      primary: palette.blue[600],
      primaryHover: palette.blue[500],
      primaryActive: palette.blue[700],
      disabled: lightDark(palette.gray[300], palette.gray[700]),
    },

    status: {
      success: lightDark(palette.green[600], palette.green[500]),
      error: lightDark(palette.red[600], palette.red[500]),
      warning: palette.yellow[500],
    },
  },

  spacing: {
    xs2: '2px',
    xs: '4px',
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    xl2: '32px',
    xl3: '48px',
  },

  fontSizes: {
    xs2: '10px',
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xl2: '24px',
    xl3: '32px',
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    compact: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  borderRadius: {
    xs2: '2px',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    xl2: '20px',
    xl3: '24px',
  },

  transitions: {
    fast: '150ms ease',
    normal: '250ms ease',
  },
} as const;

export type Theme = typeof theme;
