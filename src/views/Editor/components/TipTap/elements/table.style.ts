import { css } from "../../../../../../styled-system/css";

export const tableStyle = css({
    margin: '0.25rem 0',
    padding: '0.25rem 0',
    textAlign: 'left',
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'auto',
    borderCollapse: 'separate',
    borderRadius: 'md',
    borderSpacing: 0,
    

    '&  td , th': {
        color: 'slate.300',
        padding: '0.25rem 0.75rem'
    },

    '& td, th': {
        borderRight: '1.6px solid token(colors.gray.200)',
        borderBottom: '1.6px solid token(colors.gray.200)',
    },
    '& th:first-child, & td:first-child': {
        borderLeft: '1.6px solid token(colors.gray.200)',
    },
    '& th': {
        borderTop: '1.6px solid token(colors.gray.200)',
        backgroundColor: '#e5e7eb1a'
    },
    '& tr:first-child th:first-child': {
        borderTopLeftRadius: '6px'
    },
    '& tr:last-child td:first-child': {
        borderBottomLeftRadius: '6px'
    },
    '& tr:last-child td:last-child': {
        borderBottomRightRadius: '6px'
    },
    '& tr:first-child th:last-child': {
        borderTopRightRadius: '6px'
    },
    // '& *': {
    //     border: 'solid 5px token(colors.gray.200)'
    // },
    '& p': {
        all: 'unset'
    }
    // '& > td > *': {
    //     color: 'inherit'
    // }

})

