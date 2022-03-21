import { GetStaticProps, GetStaticPropsResult } from 'next'
import React from 'react'
import Layout from '../components/Layout'

interface Custom404Props {
    NavigationLocale: string,
    Custom404Locale: string
}

export default function Custom404(props: Custom404Props): JSX.Element {
    return (
        <Layout NavigationLocale={props.NavigationLocale}>
            <div>жопа</div>
        </Layout>
    )
};


export const getStaticProps: GetStaticProps = async ({ locale }): Promise<GetStaticPropsResult<Custom404Props>> => {
    const loc = locale === 'ru' ? 'ru' : 'en';
    const NavigationLocale = await import(`../../content/${loc}/localization/navlinks.json`);
    return {
        props: {
            NavigationLocale: JSON.stringify(NavigationLocale),
            Custom404Locale: 'aboba'
        },
    };
};