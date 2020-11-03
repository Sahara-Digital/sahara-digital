import { createBrowserHistory } from 'history';
import { generateMedia } from 'styled-media-query';

export const background = 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1127&q=80';

export const customMedia = generateMedia({
    laptop: '1300px',
    slaptop: '1024',
    tablet: '767.99px',
    medium: '736px',
    regular: '667px',
    mobile: '568px',
    small: '414px',
    xsmall: '375px',
    xxsmall: '320px',
});
export const history = createBrowserHistory();
