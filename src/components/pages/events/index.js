import { Box } from '@chakra-ui/react';
import React from 'react'
import Breadcrumbs from '../../utilities/breadcrumbs';
import HomepagePortfolioSection from '../../utilities/homepage/homepage-portfolio-section';

const EventsPage = () => {
  return (
    <Box as='main'>
      <Breadcrumbs
        currentPage='Portfolio'
        routes={{
          Home: '/',
        }}
      />
      <HomepagePortfolioSection />
    </Box>
  )
}

export default EventsPage;

