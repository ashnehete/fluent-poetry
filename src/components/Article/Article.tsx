import React, {memo} from "react";
import {Poem} from "../../types";
import {makeStyles, Text, Title1, tokens} from "@fluentui/react-components";

type ArticleProps = {
    poem: Poem
}

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',

    },
    stanza: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: tokens.spacingVerticalM,
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

export default memo(Article);
