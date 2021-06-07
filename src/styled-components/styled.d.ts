import 'styled-components';

import theme from './theme';

declare module 'styled-components' {
    type Theme = typeof theme;
    export interface DefaultTheme extends Theme {
        colors: {
            white: string;
            black: string;
            blue: string;
            footer: {
                primary: string;
                linkedIn: string;
                twitter: string;
                facebook: string;
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
        buttons: {
            primary: {
                color: string;
                bg: string;
                width: {
                    small: string;
                    large: string;
                };
            };
            secondary: {
                color: string;
                bg: #FFFFFF;
            };
        };
        border: {
            primary: string;
            secondary: string;
            none: none;
        };
        borderRadius: {
            small: string;
            medium: string;
            large: string;
        };
        padding: {
            small: string;
            medium: string;
            large: string;
            other: string;
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
