import React from "react";
import {makeStyles, shorthands, Tab, TabList, tokens} from "@fluentui/react-components";
import {getAllPoems} from "../../utils";

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

type NavProps = {
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
}

function Nav({selected, setSelected}: NavProps) {
    const classes = useStyles();
    const poems = getAllPoems();

    const onTabSelect = (tabId: number) => {
        setSelected(tabId);
    };

    return <TabList vertical={true}
                    defaultSelectedValue={selected}
                    onTabSelect={(_, data) => onTabSelect(data.value as number)}>
        {poems.map((poem) => <Tab value={poem.id} key={poem.title}>{poem.title}</Tab>)}
    </TabList>;
}

export default Nav;
