import React from 'react';
import {LargeTitle, makeStyles, shorthands, Subtitle1, Text, tokens} from "@fluentui/react-components";

const useStyles = makeStyles({
    root: {
        ...shorthands.padding(tokens.spacingVerticalXXL, 0),
        ...shorthands.borderRadius(tokens.borderRadiusMedium),
        display: 'flex',
        flexDirection: 'column'
    }
});

function Header() {
    const classes = useStyles();
    return <header className={classes.root}>
        <LargeTitle>Steps of a Ladder</LargeTitle>
        <Subtitle1>by Aashish Nehete</Subtitle1>
    </header>
}

export default Header;
