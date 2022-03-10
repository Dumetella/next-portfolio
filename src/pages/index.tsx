import type { GetStaticProps, NextPage } from 'next'
import styled from 'styled-components'
import Layout from '@components/Layout';
import Contact from '@components/sections/Contact';
import Featured from '@components/sections/Featured';
import Hero from '@components/sections/Hero';
import Projects from '@components/sections/Projects';

interface HomeProps {

}

const Home = () => {

  return (
    <Layout>
      <StyledMainContainer className="fillHeight">
        <Hero />
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {},
  }
}

const StyledMainContainer = styled.main`
  counter-reset: section;
`;
