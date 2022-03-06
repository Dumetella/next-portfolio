import { DefaultTheme } from "styled-components";
import DarkTheme from "../styles/Themes/DarkTheme";

export class RootStore {
    darkTheme: boolean;

    constructor() {
        this.darkTheme = true;
    }
}