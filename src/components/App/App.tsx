import React from 'react';
import Header from "../Header/Header";
import {Divider, makeStyles, shorthands} from "@fluentui/react-components";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
    root: {
        width: '1024px',
        minHeight: '100vh',
        ...shorthands.margin(0, 'auto'),
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
