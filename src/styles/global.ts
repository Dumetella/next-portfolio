import { createGlobalStyle, DefaultStyledComponent } from "styled-components";
import fonts from "./fonts";
import variables from "./variables";

interface GlobalProps extends DefaultStyledComponent {

}

export const GlobalStyle = createGlobalStyle`
    ${variables};
    ${fonts};
    body {
        font-family: var(--font-sans);
        background-color: ${(props) => props.theme.colors.background};
    }
`