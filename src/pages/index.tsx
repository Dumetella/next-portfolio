import styled from 'styled-components'
import Layout from '@components/Layout';
import Contact from '@components/sections/Contact';
import Featured from '@components/sections/Featured';
import Hero from '@components/sections/Hero';
import Projects from '@components/sections/Projects';
import { GetServerSideProps, GetServerSidePropsResult } from 'next';

interface HomeProps {
  Hero?: any,
  Featured?: any,
  Projects?: any,
  Contact?: any,
};

const Home = (props: HomeProps): JSX.Element => {

  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
};

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }): Promise<GetServerSidePropsResult<HomeProps>> => {
  return {
    props: {}, // will be passed to the page component as props
  };
};


const StyledMainContainer = styled.main`
  counter-reset: section;
`;
