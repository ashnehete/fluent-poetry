import React, {useState} from "react";
import {makeStyles, shorthands, tokens} from "@fluentui/react-components";
import Nav from "../Nav/Nav";
import Article from "../Article/Article";
import {getPoemById} from "../../utils";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        ...shorthands.padding(tokens.spacingVerticalXXL, 0)

    },
    stanza: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: tokens.spacingVerticalM,
    },
});

function Body() {
    const classes = useStyles();
    const [selected, setSelected] = useState(0);

    return <div>
        <Nav selected={selected} setSelected={setSelected}/>
        <Article poem={getPoemById(selected)}/>
    </div>;
}

export default Body;
