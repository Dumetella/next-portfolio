import React from "react";

function usePrefersReducedMotion() {
    // Default to no-animations, since we don't know what the
    // user's preference is on the server.
    const QUERY = '(prefers-reduced-motion: no-preference)';

    const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true);

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);
        // Set the true initial value, now that we're on the client:
        setPrefersReducedMotion(
            !window.matchMedia(QUERY).matches
        )
        // Register our event listener
        const listener = (e: any) => {
            setPrefersReducedMotion(!e.matches);
        };
        mediaQueryList.addEventListener('change', listener);
        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, []);
    return prefersReducedMotion;
}

export default usePrefersReducedMotion;