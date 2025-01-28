import { css } from "../../../../../../styled-system/css";

export const headingStyle = css({
    '&[data-level="1"]': {
        margin: '4',
        bgColor: 'blue.500',
        fontSize: '2rem',
    },
    '&[data-level="2"]': {
        margin: '4',
        bgColor: 'blue.900',
        fontSize: '1.5rem',
    },
});