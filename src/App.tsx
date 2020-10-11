import React from "react";
import styled from "styled-components";
import { Header, Navigation } from "./components";

function App() {
    return (
        <AppContainer>
            <Header />
            <Navigation />
        </AppContainer>
    );
}

export default App;

const AppContainer = styled.div`
    display: flex; 
    flex-direction: column;
`;
