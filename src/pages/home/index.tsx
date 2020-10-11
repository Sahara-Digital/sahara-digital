import React from "react";
import { Header, Navigation } from "../../components";
import { IPagesProps } from "../../interfaces";

export const Home = ({ history }: IPagesProps) => {
    return (
        <>
            <Header />
            <Navigation history={history} />
            Home
        </>
    );
};
