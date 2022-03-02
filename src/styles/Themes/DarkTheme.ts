import { DefaultTheme } from "styled-components";

const DarkTheme: DefaultTheme = {
    type: 'night',
    fonts: {
        family: {
            main: "'Calibre', 'Inter', 'San Francisco','SF Pro Text', -apple-system,system-ui, sans-serif",
            title: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace"
        },
        size: {
            xxs: '12px',
            xs: '13px',
            sm: '14px',
            md: '16px',
            lg: '18px',
            xl: '20px',
            xxl: '22px',
            heading: '32px'
        }
    },
    // Colors for layout
    colors: {
        background: "#0a192f",
        text: '#8892b0',
        accent: '#64ffda'
    },
    // Breakpoints for responsive design
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    },
}

export default DarkTheme;