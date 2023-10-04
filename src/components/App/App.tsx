import React from 'react';
import Header from "../Header/Header";
import {Divider, makeStyles, shorthands, tokens} from "@fluentui/react-components";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import breakpoints from "../../breakpoints";

const useStyles = makeStyles({
    root: {
        maxWidth: '1024px',
        minHeight: '100vh',
        ...shorthands.margin(0, 'auto'),
        ...breakpoints.m({
            ...shorthands.padding('auto', tokens.spacingHorizontalXXL),
        })
    }
});
function App() {
    const classes = useStyles();
    return <div className={classes.root}>
        <Header/>
        <Divider/>
        <Body/>
        <Divider/>
        <Footer/>
    </div>;
}

export default App;
