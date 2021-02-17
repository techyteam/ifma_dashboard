import { Box } from '@chakra-ui/react';
import React from 'react';
import AboutUsTeamSection from '../../utilities/about-us/about-us-team-section';
import HomepageAboutSection from '../../utilities/homepage/homepage-about-section';
import HomepageSkillsSection from '../../utilities/homepage/homepage-skills-section';


const AboutUsPage = () => {
  return (
    <Box as='main' id='main'>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>About</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>About</li>
            </ol>
          </div>

        </div>
      </section>
      {/* <!-- End Breadcrumbs --> */}
      <HomepageAboutSection />
      <AboutUsTeamSection />
      <HomepageSkillsSection />
    </Box>
  )
}

export default AboutUsPage;
