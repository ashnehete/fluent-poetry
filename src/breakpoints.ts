// Shamelessly copied from @AkiraVoid
// https://github.com/microsoft/fluentui/issues/24289#issuecomment-1228622982

import { GriffelStyle } from '@fluentui/react-components';

type BreakpointFunction = (
    styles: GriffelStyle
) => Record<string, GriffelStyle>;

interface IBreakpoints {
    /**
     * X-Small devices (portrait phones, less than 576px).
     *
     * @type {BreakpointFunction}
     * @memberof IBreakpoints
     */
    xs: BreakpointFunction;
    /**
     * Small devices (landscape phones, less than 768px).
     *
     * @type {BreakpointFunction}
     * @memberof IBreakpoints
     */
    s: BreakpointFunction;
    /**
     * Medium devices (tablets, less than 992px).
     *
     * @type {BreakpointFunction}
     * @memberof IBreakpoints
     */
    m: BreakpointFunction;
    /**
     * Large devices (desktops, less than 1200px).
     *
     * @type {BreakpointFunction}
     * @memberof IBreakpoints
     */
    l: BreakpointFunction;
    /**
     * X-Large devices (large desktops, less than 1400px).
     *
     * @type {BreakpointFunction}
     * @memberof IBreakpoints
     */
    xl: BreakpointFunction;
}

const breakpoints: IBreakpoints = {
    xs: style => {
        return { '@media (max-width: 575.98px)': style };
    },
    s: style => {
        return { '@media (max-width: 767.98px)': style };
    },
    m: style => {
        return { '@media (max-width: 991.98px)': style };
    },
    l: style => {
        return { '@media (max-width: 1199.98px)': style };
    },
    xl: style => {
        return { '@media (max-width: 1399.98px)': style };
    },
};

export default breakpoints;
