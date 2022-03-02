import { DefaultTheme } from "styled-components";

const DarkTheme: DefaultTheme = {
    type: 'night',
    // Colors for layout
    colors: {
        background: "#0a192f",
        text: '#8892b0',
        accent: '#64ffda'
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