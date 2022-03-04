import 'styled-components';
import variables from '../variables';

declare module 'styled-components' {

    export interface DefaultStyledComponent {
        theme: DefaultTheme;
    }

    export interface DefaultTheme {
        type: 'day' | 'night',
        colors: {
            backgroundNormal: string,
            backgroundDark: string,
            backgroundLight: string,
            backgroundBright: string,
            textNormal: string,
            textDark: string,
            textLight: string,
            textBright: string,
            accent: string,
            accent2: string
        }
        bp: {
            mobileS: `max-width: 330px`,
            mobileM: `max-width: 400px`,
            mobileL: `max-width: 480px`,
            tabletS: `max-width: 600px`,
            tabletL: `max-width: 768px`,
            desktopXS: `max-width: 900px`,
            desktopS: `max-width: 1080px`,
            desktopM: `max-width: 1200px`,
            desktopL: `max-width: 1400px`,
        },
    }
}


