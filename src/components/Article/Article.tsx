import React from "react";
import {Poem} from "../../types";
import {makeStyles, shorthands, Text, Title1, tokens} from "@fluentui/react-components";

type ArticleProps = {
    poem: Poem
}

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

function Article({poem}: ArticleProps) {
    const classes = useStyles();

    return <div className={classes.root}>
        <Title1>{poem.title}</Title1>

        {poem.stanzas.map(stanza => <div className={classes.stanza}>
            {stanza.lines.map(line => <Text>{line}</Text>)}
        </div>)}
    </div>;
}

export default Article;
