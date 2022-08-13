const defaultTheme = {
  grid: {
    container: '120rem',
    gutter: '3.2rem'
  },
  font: {
    family:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  },
  fontSizes: {
    ss: '1rem',
    s: '1.1rem',
    xs: '1.2rem',
    xxs: '1.3rem',
    xxxs: '1.4rem',
    sm: '1.5rem',
    m: '1.6rem',
    xm: '1.7rem',
    xxm: '1.8rem',
    xxxm: '1.9rem',
    sl: '2rem',
    l: '2.1rem',
    xl: '2.4rem',
    xxl: '2.7rem',
    xxxl: '3rem'
  },
  space: {
    ss: '0.2rem',
    s: '0.5rem',
    xs: '0.7rem',
    xxs: '1rem',
    xxxs: '1.3rem',
    sm: '1.5rem',
    m: '1.7rem',
    xm: '2rem',
    xxm: '2.3rem',
    xxxm: '2.5rem',
    sl: '2.8rem',
    l: '3.1rem',
    xl: '3.4rem',
    xxl: '3.7rem',
    xxxl: '4rem',
    g: '6rem'
  },
  radii: {
    ss: '0.2rem',
    s: '0.5rem',
    xs: '0.8rem',
    sm: '1.1rem',
    m: '1.4rem',
    xm: '1.7rem',
    sl: '2rem',
    l: '2.3rem',
    xl: '2.5rem'
  },
  zIndices: {
    base: 5,
    menu: 10,
    overlay: 20,
    modal: 30,
    onTop: 40,
    alwaysOnTop: 50
  },
  colors: {
    primary: '#E6007A',
    secondary: '#6745D2',
    secondaryBackground: 'rgba(139,161,190,0.2)',
    secondaryBackgroundOpacity: 'rgba(139,161,190,0.1)',
    teriaryBackgroundOpacity: 'rgba(139,161,190,0.05)',
    transparent: 'transparent',
    gradient: 'linear-gradient(47.94deg, #e6007a 0%, #6745d2 98.88%)',
    none: 'none',
    green: '#0CA564',
    blue: '#0090E1',
    gradientGreen:
      'linear-gradient(90deg, #0CA564 0.04%, rgba(2, 192, 118, 0.3) 99.92%)',
    gradientRed:
      'linear-gradient(90deg, #E6007A 0.04%, rgba(230, 0, 225, 0.3) 92.26%)',
    white: '#ffffff',
    black: '#000000',
    orange: '#F2994A',
    purple: '#6745D2',
    popupBackground: '#1c1c26e5',
    overlayOpacity: '#00000030'
  },
  sizes: {
    maxBox: '80rem'
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  }
}

const light = {
  title: 'light',
  colors: {
    primaryBackground: '#F9FBFC',
    primaryBackgroundOpacity: '#F9FBFC99',
    gradientBackground:
      'linear-gradient(62.3deg, #FFFFFF 13.21%, #F9FBFC99 98.01%)',
    tertiaryBackground: '#EEF0F6',
    secondaryBackgroundSolid: '#E8ECF2',
    quaternaryBackground: '#272934',
    text: '#000000',
    inverse: '#ffffff'
  },
  shadows: {
    primary:
      'rgba(50, 50, 93, 0.25) 0px 0 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 0 -30px',
    secondary:
      'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 0 -30px',
    tertiary:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.02) 0px 0px 0px 1px',
    quaternary: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
    top: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'
  },
  skeleton: {
    default: `linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.12) 25%,
      rgba(0, 0, 0, 0.20) 50%,
      rgba(0, 0, 0, 0.14) 75%,
      rgba(0, 0, 0, 0.1) 100%
    )`
  }
}

const dark = {
  title: 'dark',
  colors: {
    primaryBackground: '#1C1C26',
    primaryBackgroundOpacity: '#1C1C2699',
    gradientBackground: '#1F2029',
    tertiaryBackground: '#2E303C',
    secondaryBackgroundSolid: '#2F3340',
    quaternaryBackground: '#272934',
    gradient: 'linear-gradient(47.94deg, #e6007a 0%, #6745d2 98.88%)',
    text: '#f5f5f5',
    inverse: '#000000'
  },
  shadows: {
    primary:
      'rgba(0, 0, 0, 0.25) 0px 0 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 0 -30px',
    secondary:
      'rgba(0, 0, 0, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 0 -30px',
    tertiary:
      'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    quaternary: 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px',
    top: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;'
  },

  skeleton: {
    default: `linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.12) 25%,
      rgba(255, 255, 255, 0.20) 50%,
      rgba(255, 255, 255, 0.14) 75%,
      rgba(255, 255, 255, 0.1) 100%
    )`
  }
}

export const lightTheme = {
  ...defaultTheme,
  ...light,
  colors: {
    ...light.colors,
    ...defaultTheme.colors
  }
}

export const darkTheme = {
  ...defaultTheme,
  ...dark,
  colors: {
    ...dark.colors,
    ...defaultTheme.colors
  }
}
