import { useRouter } from 'next/router'
import React from 'react'

export default function Contact(): JSX.Element {
    const router = useRouter();

    return (
        <div>{router.locale == 'en' ? 'Aboba' : 'Абоба'}</div>
    )
}
