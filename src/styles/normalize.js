import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0,
                fontFamily: "sans-serif !important"
            },
            html: {
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                minHeight: '100%',
                height: '100%',
                overflowX: 'hidden'
            },
            body: {
                height: '100%',
                width: '100%',
                position: 'relative',
                overflowX: 'hidden',
                minHeight: '100vh',
            },
            a: {
                color: '#000000',
                textDecoration: "underline",

                '&:hover': {
                    color: '#5BC0F7',
                },
            },
            button: {
                outline: 'none',
                '&:focus': {
                    outline: 'none',
                },
            },
            ul: {
                listStyle: "none"
            },
            input: {
                '&:focus': {
                    outline: 'none',
                },

                '&::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                },
                '&::-webkit-inner-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0,
                },
                '&:-webkit-autofill': {
                    WebkitBoxShadow: '0 0 0 1000px white inset',
                },
            },
        },
    }),
);

const NormalizeStyles = (): null => {
    useStyles();

    return null;
};

export default NormalizeStyles;
