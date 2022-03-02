import { DefaultTheme } from "styled-components";
import DarkTheme from "../styles/Themes/DarkTheme";

export class RootStore {
    currentTheme: DefaultTheme;

    constructor() {
        this.currentTheme = DarkTheme;
    }
}