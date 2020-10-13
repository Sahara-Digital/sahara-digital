// import original module declarations
import 'styled-components';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { DefaultTheme } from 'styled-components';

import theme from '../theme';

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {
        colors: {
            white: string;
            black: string;
            footer: {
                primary: string;
                linkedIn: string;
                twitter: string;
            };
            brand: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
            default: {
                primary: string;
                secondary: string;
                tertiary: string;
            };
        };
        fontsize: {
            xsmall: string;
            small: string;
            medium: string;
            regular: string;
            large: string;
            xlarge: string;
            xxlarge: string;
            xxxlarge: string;
        };
        fontFamily: {
            Poppins: string;
        };
        lineHeight: {
            small: string;
            medium: string;
            large: string;
            xlarge: string;
        };
    }
}
