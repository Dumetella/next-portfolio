import styled from 'styled-components'
import Layout from '@components/Layout';
import Contact from '@components/sections/Contact';
import Featured from '@components/sections/Featured';
import Hero from '@components/sections/Hero';
import Projects from '@components/sections/Projects';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import About from '@components/sections/About';
import { AboutLocalisation, ContactLocalisation, HeroLocalisation, NavigationLocalisation } from 'src/model/Localisation';

interface HomeProps {
  Navigation: string,
  Hero: string,
  Featured?: string,
  Projects?: string,
  Contact: string,
  About: string,
};

const Home = (props: HomeProps): JSX.Element => {

  return (
    <Layout NavigationLocale={props.Navigation}>
      <StyledMainContainer className="fillHeight">
        <Hero HeroLocale={props.Hero} />
        <About AboutLocale={props.About} />
        {/* <Featured FeaturedProjects={props.Featured} />
        <Projects ArchivePropjects={props.Projects} /> */}
        <Contact ContactLocale={props.Contact} />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }): Promise<GetServerSidePropsResult<HomeProps>> => {
  const Navigation = await import(`../../content/${locale}/localisation/navlinks.json`);
  const Hero = await import(`../../content/${locale}/localisation/hero.json`);
  const About = await import(`../../content/${locale}/localisation/about.json`);
  const Contact = await import(`../../content/${locale}/localisation/contact.json`);
  return {
    props: {
      Navigation: JSON.stringify(Navigation as NavigationLocalisation),
      Hero: JSON.stringify(Hero as HeroLocalisation),
      About: JSON.stringify(About as AboutLocalisation),
      Contact: JSON.stringify(Contact as ContactLocalisation)
    },
  };
};


const StyledMainContainer = styled.main`
  counter-reset: section;
`;


