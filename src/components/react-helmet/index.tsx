import React from 'react';
import { Helmet } from 'react-helmet';

export const ReactHelmet: React.FunctionComponent = (): JSX.Element => {
    return (
        <Helmet defer={false}>
            <meta charSet="utf-8" />
            <title itemProp="name">Sahara Digital</title>
            <link rel="icon" type="image/png" href={`${require('../../img/favicon.png')} `}   />
            <link rel="file?name=manifest.json" href={`${require('../../lib/manifest.json')}`} />
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1, maximum-scale=1.0, user-scalable=0"
            />
            <meta name="theme-color" content="#000000" />
            <meta name="Sahara Digital" content="Web development specialists" />
            <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
                integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
                crossOrigin="anonymous"
            />
        </Helmet>
    );
};
