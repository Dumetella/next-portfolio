import { DefaultTheme } from "styled-components";

const DarkTheme: DefaultTheme = {
    type: 'night',
    // Colors for layout
    colors: {
        backgroundNormal: "#0a192f",
        backgroundDark: '#020c1b',
        backgroundLight: '#112240',
        backgroundBright: '#233554',
        textNormal: '#8892b0',
        textDark: '#495670',
        textLight: '#a8b2d1',
        textBright: '#ccd6f6',
        accent: '#64ffda',
        accent2: 'rgba(100, 255, 218, 0.1)',
        shadow: 'rgba(2, 12, 27, 0.7)',
        white: '#e6f1ff'
    },
    // Breakpoints for responsive design
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

export default DarkTheme;

// --dark - navy: #020c1b;
// --navy: #0a192f; background
// --light - navy: #112240;
// --lightest - navy: #233554;
// --navy - shadow: rgba(2, 12, 27, 0.7);
// --dark - slate: #495670; text darker
// --slate: #8892b0; text normal
// --light - slate: #a8b2d1; text light
// --lightest - slate: #ccd6f6; text bright
// --white: #e6f1ff;
// --green: #64ffda;
// --green - tint: rgba(100, 255, 218, 0.1);
// --pink: #f57dff;
// --blue: #57cbff;