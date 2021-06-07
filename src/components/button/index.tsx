import styled, { css } from 'styled-components';
import { theme } from '../../styled-components/theme';

type ButtonVariants = 'primary' | 'secondary';

interface IButtonProps {
    variant: ButtonVariants;
}

const buttonOptions = {
    primary: {
        backgroundColor: theme.buttons.primary.bg,
        color: theme.buttons.primary.color,
        border: theme.border.none,
        borderradius: theme.borderRadius.medium,
        padding: theme.padding.small,
        width: theme.buttons.primary.width.small,
    },
    secondary: {
        backgroundColor: theme.buttons.secondary.bg,
        color: theme.buttons.secondary.color,
        border: theme.border.primary,
        borderradius: theme.borderRadius.medium,
        padding: theme.padding.small,
        width: theme.buttons.primary.width.small,
    },
};

export const Button = styled.button<IButtonProps>`
    margin: 0.2rem;
    border: none;
    border-radius: 3px;
    display: block;
    ${({ theme }) => `font-family: ${theme.fontFamily.Poppins}`};
    ${({ variant }) =>
        variant &&
        buttonOptions[variant] &&
        css`
            background-color: ${buttonOptions[variant].backgroundColor};
            color: ${buttonOptions[variant].color};
            border: ${buttonOptions[variant].border};
            padding: ${buttonOptions[variant].padding};
            width: ${buttonOptions[variant].width};
        `}
    &:hover {
        color: white;
        width: 100px;
    }
`;
