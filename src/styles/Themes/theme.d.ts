import 'styled-components';

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
        breakpoints: {
            sm: 'screen and (max-width: 640px)',
            md: 'screen and (max-width: 768px)',
            lg: 'screen and (max-width: 1024px)',
            xl: 'screen and (max-width: 1280px)'
        },
        fonts: {
            family: {
                title: string,
                main: string,
            }
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
    }
}