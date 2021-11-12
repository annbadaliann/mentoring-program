import { createTheme } from '@mui/material/styles';

const PRIMARY_COLOR = '#620b76';
const SECONDARY_COLOR = '#9DB6C0';


export const theme = createTheme({
    typography: {
        fontFamily: [
            'Commissioner',
            'Mardoto',
        ].join(','),
        h2: {
            color: '#202020',
            fontSize: '32px',
            fontWeight: 'bold',
            lineHeight: "46px",
            '@media (max-width:375px)': {
                fontSize: '26px',
            },
        },
        body1: {
            fontSize: '14px',
            lineHeight: '21px',
        },
        body2: {
            fontSize: '13px',
        },
        button: {
            fontSize: '15px',
            lineHeight: '18px',
            color: '#ffffff',
            textTransform: 'none',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '24px',
            boxShadow: 'none',
            height: 50,
            marginBottom: '0',
        },
    },
    overrides: {
        MuiSelect: {
            select: {
                color: PRIMARY_COLOR,
                '&:focus': {
                    backgroundColor: 'transparent',
                },
            },
           
        },
        MuiDialog: {
            paper: {
                width: '100%',
            },
        },
        MuiInput: {
            root: {
                '& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                    display: 'none',
                    margin: 80,
                },
            },
            underline: {
                '&:after': {
                    transition: 'none',
                },
            },
        },
        MuiInputLabel: {
            root: {
                color: '#5F6D7C',
                '&$focused': {
                    color: '#5BC0F7',
                },
                '&$disabled': {
                    color: '#9DB6C0',
                },
            },
        },
        MuiCheckbox: {
            colorPrimary: {
                color: '#5F6D7C',
                '&$checked': {
                    color: '#000',
                },
            },
        },
        MuiRadio: {
            colorPrimary: {
                color: '#5F6D7C',
                '&$checked': {
                    color: '#000',
                },
            },
        },
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: 'transparent',
            },
        },
        MuiInputBase: {
            root: {
                '&$disabled': {
                    '& fieldset.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#9DB6C0',
                    },
                },
                '&$focused': {
                    '& .MuiInputLabel-outlined': {
                        color: 'red !important',
                    },
                    '& fieldset.MuiOutlinedInput-notchedOutline': {
                        borderColor: '#5BC0F7',
                    },
                },
            },
            input: {
                '&::placeholder': {
                    color: '#9DB6C0',
                    opacity: 1,
                },
            },
        },
        MuiOutlinedInput: {
            root: {
                '& $notchedOutline': {
                    borderColor: '#9DB6C0',
                },
                borderWidth: 2,
                borderRadius: '0',
                position: 'relative',
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#5BC0F7',
                    borderWidth: 2,
                    '@media (hover: none)': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                },
            },
        },
        MuiButton: {
            root: {
                '&$disabled': {
                    opacity: '60%',
                    color: '#000000',
                },
            },
        },
        MuiFormLabel: {
            root: {
                '&$focused': {
                    color: PRIMARY_COLOR,
                },
            },
        },
    },
    palette: {
        background: {
            default: '#ffffff',
            paper: '#fafafa',
        },
        grey: {
            '100': '#9DB6C0',
            '200': '#5F6D7C',
        },
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        info: {
            main: '#5BC0F7',
        },
        primary: {
            main: PRIMARY_COLOR,
        },
        secondary: {
            main: SECONDARY_COLOR,
        },
        error: {
            main: '#F5004B',
        },
        text: {
            primary: '#000000',
            secondary: '#5F6D7C',
        },
    },
    spacing: 8,
});
