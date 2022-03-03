import 'styled-components';
import variables from '../variables';

declare module 'styled-components' {

    export interface DefaultStyledComponent {
        theme: DefaultTheme;
    }

    export interface DefaultTheme {
        type: 'day' | 'night',
        colors: {
            background: string,
            text: string,
            accent: string,
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


// --dark - navy: #020c1b;
// --navy: #0a192f;
// --light - navy: #112240;
// --lightest - navy: #233554;
// --navy - shadow: rgba(2, 12, 27, 0.7);
// --dark - slate: #495670;
// --slate: #8892b0;
// --light - slate: #a8b2d1;
// --lightest - slate: #ccd6f6;
// --white: #e6f1ff;
// --green: #64ffda;
// --green - tint: rgba(100, 255, 218, 0.1);
// --pink: #f57dff;
// --blue: #57cbff;