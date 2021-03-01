import { Box } from '@chakra-ui/react';
import React from 'react';
import AboutUsTeamSection from '../../utilities/about-us/about-us-team-section';
import Breadcrumbs from '../../utilities/breadcrumbs';
import HomepageAboutSection from '../../utilities/homepage/homepage-about-section';
import HomepageSkillsSection from '../../utilities/homepage/homepage-skills-section';


const AboutUsPage = () => {
  return (
    <Box as='main' id='main'>
      <Breadcrumbs
        currentPage='About'
        routes={{
          Home: '/'
        }}
      />
      <HomepageAboutSection />
      <AboutUsTeamSection />
      <HomepageSkillsSection />
    </Box>
  )
}

export default AboutUsPage;
