import React, {useState} from "react";
import {makeStyles, SelectTabEventHandler, shorthands, Tab, TabList, tokens} from "@fluentui/react-components";
import Article from "../Article/Article";
import {getAllPoems} from "../../utils";
import breakpoints from "../../breakpoints";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        ...shorthands.padding(tokens.spacingVerticalXXL, 0),
        ...shorthands.gap(tokens.spacingHorizontalXXL),
        ...breakpoints.m({
            flexDirection: 'column',
        })
    },
    tabList: {
        width: '30%',
        ...breakpoints.m({
            width: '100%',
        })
    }
});

function Body() {
    const classes = useStyles();
    const [selected, setSelected] = useState(0);

    const poems = getAllPoems();

    const onTabSelect: SelectTabEventHandler = (_, data) => {
        setSelected(data.value as number);
    };

    return <div className={classes.root}>
        <div className={classes.tabList}>
            <TabList appearance={"subtle"}
                     vertical={true}
                     size={"large"}
                     defaultSelectedValue={selected}
                     onTabSelect={onTabSelect}>
                {poems.map((poem) => <Tab value={poem.id} key={poem.title}>{poem.title}</Tab>)}
            </TabList>
        </div>

        <Article poem={poems[selected]}/>
    </div>;
}

export default Body;
