import { createGlobalStyle, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        white: '#FFFFFF',
        black: '#2c353c',
        blue: '#4da6ff',
        footer: {
            primary: '#2c353c',
            linkedIn: '#0e76a8',
            twitter: '#1fa1f1',
            facebook: '#4267B2',
        },
        brand: {
            primary: '#9CCCCC',
            secondary: '#FEF000',
            tertiary: '#FDD200',
        },
        default: {
            primary: '#9CCCCC',
            secondary: '#FEF000',
            tertiary: '#FDD200',
        },
    },
    buttons: {
        primary: {
            color: '#232F3E',
            bg: '#9CCCCC',
            width: {
                small: '105px',
                large: '233px',
            },
        },
        secondary: {
            color: '#232F3E',
            bg: '#FFFFFF',
        },
    },
    border: {
        primary: '1px solid #232F3E',
        secondary: '1px solid #232F3E',
        none: 'none',
    },
    borderRadius: {
        small: '1px',
        medium: '3px',
        large: '5px',
    },
    padding: {
        small: '1rem',
        medium: '2rem',
        large: '3rem',
        other: '1rem 1.5rem 1rem 1.5rem',
    },
    fontsize: {
        xsmall: '0.6rem',
        small: '0.8rem',
        medium: '1rem',
        regular: '1.2rem',
        large: '1.4rem',
        xlarge: '1.6rem',
        xxlarge: '2.5rem',
        xxxlarge: '3.75rem',
    },
    fontFamily: {
        Poppins: `Poppins, sans-serif`,
    },
    lineHeight: {
        small: '1.1125',
        medium: '1.2',
        large: '1.4',
        xlarge: '1.8',
    },
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
      ${({ theme }) => `background-color:${theme.colors.white}`};
      ${({ theme }) => `font-family: ${theme.fontFamily.Poppins},sans-serif; `};
      line-height: 1.5;
      height: 100vh;
  }

    h1{
      ${({ theme }) => `font-size: ${theme.fontsize.xxxlarge}`};
      line-height: 1.125;
      margin: 0 0 1.875rem;
      font-weight: 700;
    }
  
   i{
     padding: 0.2rem;
     &:hover {
      ${({ theme }) => ` color: ${theme.colors.white};`};
      }
   }

   footer{
    ${({ theme }) => `font-family: ${theme.fontFamily.Poppins},sans-serif; `};
    ${({ theme }) => `font-size: ${theme.fontsize.xxlarge}`};
   }
  `;

export { theme, GlobalStyle };
