import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import {
    Card,
    Navigation,
    HeaderNavigation,
    Footer,
    BurgerMenu,
    Menu,
} from '../../components';
import { ShapeFour, ShapeThree } from '../../components/image/svg';
import { IPagesProps } from '../../interfaces';
import { homepage } from '../../lib/website-content';

export const Services = ({ history }: IPagesProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Navigation history={history}>
                <HeaderNavigation />
                {<BurgerMenu open={open} setOpen={setOpen} />}
                <Menu open={open} setOpen={setOpen} />
            </Navigation>
            <CardContainer>
                {homepage.map((content: any) => {
                    return (
                        content.title && (
                            <Card
                                title={content.title}
                                component={
                                    content.title === 'Web Consulting' ? (
                                        <ShapeFour width="10rem" />
                                    ) : (
                                        <ShapeThree width="10rem" />
                                    )
                                }
                                paragraph={content.paragraph}
                            />
                        )
                    );
                })}
            </CardContainer>
            <Footer />
        </>
    );
};

const CardContainer = styled.section`
    display: flex;
    padding: 2rem;
    margin: 2rem;
    flex-direction: row;
    justify-content: center;
    ${media.lessThan('small')`
       padding: 1rem 1rem 1rem 1rem;
       margin: 0;
       flex-direction: column;
        h1{
            ${({ theme }) => `font-size:${theme.fontsize.xxlarge}`};
        }
  `}
`;
