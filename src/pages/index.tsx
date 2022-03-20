import styled from 'styled-components'
import Layout from '@components/Layout';
import Contact from '@components/sections/Contact';
import Featured from '@components/sections/Featured';
import Hero from '@components/sections/Hero';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import About from '@components/sections/About';
import { AboutLocalization, ContactLocalization, HeroLocalization, NavigationLocalization } from 'src/model/Localization';
import { MarkdownReader } from 'src/lib/MarkdownReader';
import ArchiveProjects from '@components/sections/ArchiveProjects';

interface HomeProps {
  NavigationLocale: string,
  HeroLocale: string,
  FeaturedLocale: string,
  FeaturedProjects: string,
  ArchiveProjects: string,
  ArchiveLocale?: string,
  ContactLocale: string,
  AboutLocale: string,
};

const Home = (props: HomeProps): JSX.Element => {

  return (
    <Layout NavigationLocale={props.NavigationLocale}>
      <StyledMainContainer className="fillHeight">
        <Hero HeroLocale={props.HeroLocale} />
        <About AboutLocale={props.AboutLocale} />
        <Featured FeaturedProjects={props.FeaturedProjects} FeaturedLocale={props.FeaturedLocale} />
        <ArchiveProjects ArchiveProjectsContent={props.ArchiveProjects} />
        <Contact ContactLocale={props.ContactLocale} />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }): Promise<GetServerSidePropsResult<HomeProps>> => {
  const loc = locale === 'ru' ? 'ru' : 'en';
  const md = new MarkdownReader(loc);
  const NavigationLocale = await import(`../../content/${loc}/localization/navlinks.json`);
  const HeroLocale = await import(`../../content/${loc}/localization/hero.json`);
  const AboutLocale = await import(`../../content/${loc}/localization/about.json`);
  const ContactLocale = await import(`../../content/${loc}/localization/contact.json`);
  const FeaturedLocale = await import(`../../content/${loc}/localization/featured.json`);
  const FeaturedProjects = md.getAllContent('featured', [
    'title',
    'date',
    'github',
    'external',
    'tech',
    'cover',
    'content'
  ]);
  const ArchiveProjects = md.getAllContent('archive', [
    'title',
    'date',
    'github',
    'external',
    'tech',
    'cover',
    'content'
  ]);
  return {
    props: {
      NavigationLocale: JSON.stringify(NavigationLocale as NavigationLocalization),
      HeroLocale: JSON.stringify(HeroLocale as HeroLocalization),
      AboutLocale: JSON.stringify(AboutLocale as AboutLocalization),
      ContactLocale: JSON.stringify(ContactLocale as ContactLocalization),
      FeaturedProjects: JSON.stringify(FeaturedProjects),
      FeaturedLocale: JSON.stringify(FeaturedLocale),
      ArchiveProjects: JSON.stringify(ArchiveProjects)
    },
  };
};


const StyledMainContainer = styled.main`
  counter-reset: section;
`;


