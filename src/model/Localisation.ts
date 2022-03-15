export interface HeroLocalisation {
    h1: string,
    h2: string,
    h3: string,
    p: string
}

export type navLink = {
    name: string,
    url: string
}

export type NavigationLocalisation = navLink[]


export interface AboutLocalisation {
    "h1": string,
    "p1": string,
    "p2": string,
    "p3": string
}

export interface ContactLocalisation {
    "h1": string,
    "h2": string,
    "p": string,
    "a": string
}