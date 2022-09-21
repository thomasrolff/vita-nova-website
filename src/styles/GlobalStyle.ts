import { createGlobalStyle } from 'styled-components';
import { colors } from '../constants';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }

    body {
        font-family: 'Karla', sans-serif;
        margin: 0;
        padding: 0;
        background-color: ${colors.offWhite};
        color: ${colors.offBlack};
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        list-style-type: none;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    h1, h2 {
        font-family: 'Playfair Display', serif;
        color: ${colors.blue};
    }

    h2 {
        font-size: 2.2rem;
        line-height: 1.1;
    }

    p {
        line-height: 2;
    }

    a {
        text-decoration: none;
        color: ${colors.offBlack};
    }
`;
