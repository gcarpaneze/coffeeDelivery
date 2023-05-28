import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${(props) => props.theme.colors.background};
    }
    
    body, input, button {
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 1px ${(props) => props.theme.colors.purple};
    }

    button {
        cursor: pointer;
    }

    
`
