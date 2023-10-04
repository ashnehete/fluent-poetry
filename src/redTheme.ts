import {BrandVariants, createDarkTheme, createLightTheme, Theme} from "@fluentui/react-components";

export const redTheme: BrandVariants = {
    10: "#070201",
    20: "#27100F",
    30: "#431518",
    40: "#5B181E",
    50: "#731925",
    60: "#8D192C",
    70: "#A71732",
    80: "#C21239",
    90: "#D81D43",
    100: "#E04354",
    110: "#E75E66",
    120: "#EE7579",
    130: "#F38B8C",
    140: "#F8A19F",
    150: "#FBB5B4",
    160: "#FECAC8"
};

export const lightRedTheme: Theme = {
    ...createLightTheme(redTheme),
};

export const darkRedTheme: Theme = {
    ...createDarkTheme(redTheme),
};


darkRedTheme.colorBrandForeground1 = redTheme[110];
darkRedTheme.colorBrandForeground2 = redTheme[120];
