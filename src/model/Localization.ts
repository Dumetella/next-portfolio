export interface HeroLocalization {
    h1: string,
    h2: string,
    h3: string,
    p: string
}

export type navLink = {
    name: string,
    url: string
}

export type NavigationLocalization = navLink[]


export interface AboutLocalization {
    "h2": string,
    "p1": string,
    "p2": string,
    "p3": string,
    "p4": string
}

export interface ContactLocalization {
    "h1": string,
    "h2": string,
    "p": string,
    "a": string
}

export interface FeaturedLocalization {
    "h2": string,
    "p": string,
}