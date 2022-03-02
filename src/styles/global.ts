import { createGlobalStyle, DefaultStyledComponent } from "styled-components";

interface GlobalProps extends DefaultStyledComponent {

}

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: black;
    }
`