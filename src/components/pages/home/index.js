import React from 'react';
import { Box } from '@chakra-ui/react';
import HomepageHero from '../../utilities/homepage/homepage-hero';
import HomepageAboutSection from '../../utilities/homepage/homepage-about-section';
import HomepageServicesSection from '../../utilities/homepage/homepage-services-section';
import HomepageSkillsSection from '../../utilities/homepage/homepage-skills-section';
import HomepagePortfolioSection from '../../utilities/homepage/homepage-portfolio-section';
import HomepagePartnersSection from '../../utilities/homepage/homepage-partners-section';


const HomePage = () => {
  return (
    <Box as='main' id='main'>
      <HomepageHero />
      <HomepageAboutSection />
      <HomepageServicesSection />
      <HomepageSkillsSection />
      <HomepagePortfolioSection />
      <HomepagePartnersSection />
    </Box>
  );
}

export default HomePage;
