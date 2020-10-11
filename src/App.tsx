import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './styled-components';
import { history } from './lib';
import { Header, Navigation } from './components';
import Routes from './app-routes';

function App() {
    return (
        <AppContainer>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Routes history={history} />
            </ThemeProvider>
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
