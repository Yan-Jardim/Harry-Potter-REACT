import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    // Fonts
    --ff-default: 'Arial ', sans-serif;

// Colors
    --primary: #A6955A;
    --dark: #041b29;
    --light: #D9D9D9;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        outline: none;
        border: none;
    }
    body {
        width: 100%;
        //max-width: 1920px;
        background-color: var(--dark);
    }
    textarea, button, a, h1, h2, h3 {
        font-family: var(--ff-default);
        color: var(--primary);
    }
    h1, h2 {
        font-family: var(--ff-default);
    }
    p {
        font-family: var(--ff-default);
    }
    a {
        color: inherit;
    }
    .container {
        width: 100%;
        margin: 0 auto;
    }
`;