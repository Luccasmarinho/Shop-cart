import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }

    :root {
        --size-container: 900px
    }

    body {
        min-height: 100vh;
        background-color: #EDEDED;
    }
`

export default GlobalStyle