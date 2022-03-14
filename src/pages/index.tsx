import styled from 'styled-components'
import Layout from '@components/Layout';
import Contact from '@components/sections/Contact';
import Featured from '@components/sections/Featured';
import Hero from '@components/sections/Hero';
import Projects from '@components/sections/Projects';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';
import About from '@components/sections/About';

interface HomeProps {
  Navigation?: any,
  Hero?: any,
  Featured?: any,
  Projects?: any,
  Contact?: any,
};

const Home = (props: HomeProps): JSX.Element => {

  return (
    <Layout Navigation={props.Navigation}>
      <StyledMainContainer className="fillHeight">
        <Hero Hero={props.Hero} />
        <About />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }): Promise<GetServerSidePropsResult<HomeProps>> => {
  const loc = locale == 'ru' ? 'ru' : 'en';
  const Navigation = await import(`../../content/${loc}/navlinks.json`);
  const Hero = await import(`../../content/${loc}/hero.json`);
  return {
    props: {
      Navigation: JSON.stringify(Navigation),
      Hero: JSON.stringify(Hero)
    },
  };
};


const StyledMainContainer = styled.main`
  counter-reset: section;
`;


