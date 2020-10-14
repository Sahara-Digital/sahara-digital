import { createBrowserHistory } from 'history';
import { generateMedia } from 'styled-media-query';

export const customMedia = generateMedia({

    laptop: '1300px',
    slaptop: '1024',
    tablet: '767.99px',
    medium: '736px',
    regular: '667px',
    mobile: '568px',
    small: '414px',
    xsmall: '375px',
    xxsmall: '320px'
});
export const history = createBrowserHistory();
