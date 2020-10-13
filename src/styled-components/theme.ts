import { createGlobalStyle, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        white: '#FFFFFF',
        black: '#000000',
        brand: {
            primary: '#29194F',
            secondary: '#FEF000',
            tertiary: '#FDD200',
        },
        default: {
            primary: '#29194F',
            secondary: '#FEF000',
            tertiary: '#FDD200',
        },
    },
    fontsize: {
        xsmall: '0.6rem',
        small: '0.8rem',
        medium: '1rem',
        regular: '1.2rem',
        large: '1.4rem',
        xlarge: '1.6rem',
        xxlarge: '2.5rem',
        xxxlarge: '3.75rem'
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
  }

  body {
      ${({ theme }) => `background-color:${theme.colors.white}`};
      font-family: Lato,sans-serif;
      
      ${({ theme }) => `font-size: ${theme.fontsize.medium}`};
      line-height: 1.5;
  }

    h1{
      ${({ theme }) => `font-size: ${theme.fontsize.xxxlarge}`};
      line-height: 1.125;
      margin: 0 0 1.875rem;
      ${({ theme }) => `font-family: ${theme.fontFamily.Poppins},sans-serif; `};
      font-weight: 700;
    }
  
   i{
     padding: 0.2rem;
     &:hover {
      padding-top: 2px;
      color: white;
      border-bottom: 2px solid #9ccccc;
      }
   }

   span {
    ${({ theme }) => `font-size: ${theme.fontsize.medium}`};
    font-weight: 700;
   }

   footer{
    ${({ theme }) => `font-family: ${theme.fontFamily.Poppins},sans-serif; `};
    ${({ theme }) => `font-size: ${theme.fontsize.xxlarge}`};
   }
  `;

export { theme, GlobalStyle };
