import {Link, makeStyles, shorthands, Text, tokens} from "@fluentui/react-components";
import {HeartFilled} from '@fluentui/react-icons';

const useStyles = makeStyles({
    root: {
        ...shorthands.padding(tokens.spacingVerticalXXXL, 0),
        display: 'flex',
        ...shorthands.gap(tokens.spacingHorizontalXS),
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function Footer() {
    const classes = useStyles();

    return <div className={classes.root}>
        <Text>Made with</Text>
        <HeartFilled primaryFill={tokens.colorPaletteRedForeground3}/>
        <Text>using</Text>
        <a href={'https://fluent2.microsoft.design/'} target={'_blank'} rel="noreferrer">
            <Link>FluentUI</Link>
        </a>
    </div>;
}

export default Footer;
