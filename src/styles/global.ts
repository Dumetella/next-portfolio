import { createGlobalStyle, DefaultStyledComponent } from "styled-components";
import variables from "./variables";

interface GlobalProps extends DefaultStyledComponent {

}

export const GlobalStyle = createGlobalStyle`
    ${variables};
    
    body {
        background-color: black;
    }
`