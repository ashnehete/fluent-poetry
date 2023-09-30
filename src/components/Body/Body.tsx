import React from "react";
import {makeStyles, shorthands, Text, tokens} from "@fluentui/react-components";

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
})

function Body() {
    const classes = useStyles();

    return <div className={classes.root}>
        <div className={classes.stanza}>
            <Text>It's the</Text>
            <Text>Flickering Shimmering</Text>
            <Text>Endlessly unnerving</Text>
            <Text>Blue light</Text>
            <Text>That the television casts</Text>
            <Text>In the unlit room</Text>
        </div>

        <div className={classes.stanza}>
            <Text>The audio drowns</Text>
            <Text>Inside my mind</Text>
            <Text>Becomes a soup</Text>
            <Text>In a loop</Text>
            <Text>It plays forever</Text>
        </div>

        <div className={classes.stanza}>
            <Text>A box of cereal</Text>
            <Text>A gallon of milk</Text>
            <Text>A Saturday night</Text>
            <Text>Cause there was</Text>
            <Text>Nothing better</Text>
        </div>

        <div className={classes.stanza}>
            <Text>If you could see</Text>
            <Text>The darkest shadow</Text>
            <Text>Hopelessly shallow</Text>
            <Text>The eyes no life</Text>
            <Text>Has ever seen</Text>
        </div>

        <div className={classes.stanza}>
            <Text>Silently watching</Text>
            <Text>Unduly quivering</Text>
            <Text>A point of view</Text>
            <Text>To a better</Text>
            <Text>Avenue</Text>
        </div>

        <div className={classes.stanza}>
            <Text>I have a dream...</Text>
        </div>

        <div className={classes.stanza}>
            <Text>I have a dream</Text>
            <Text>To light the world</Text>
            <Text>But can I even</Text>
            <Text>End my night?</Text>
        </div>
    </div>
}

export default Body;
