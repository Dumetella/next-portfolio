import { GetStaticProps, GetStaticPropsResult } from 'next';
import React from 'react'
import Layout from '../components/Layout';

interface ArchiveProps {
    NavigationLocale: string,
}

export default function Archive(props: ArchiveProps): JSX.Element {
    return (
        <>
            <Layout NavigationLocale={props.NavigationLocale} >
                <div>АРХИВ ЕПТА</div>
            </Layout>
        </>
    )
}


export const getStaticProps: GetStaticProps = async ({ locale }): Promise<GetStaticPropsResult<ArchiveProps>> => {
    const loc = locale === 'ru' ? 'ru' : 'en';
    const NavigationLocale = await import(`../../content/${loc}/localization/navlinks.json`);
    return {
        props: {
            NavigationLocale: JSON.stringify(NavigationLocale),
        },
    };
};