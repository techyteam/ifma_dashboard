import React from 'react';
import { Box } from '@chakra-ui/layout';
import Breadcrumbs from '../../utilities/breadcrumbs';
import BlogList from '../../utilities/blog/blog-list';


const BlogsPage = () => {
  return (
    <Box as='main' id='main'>
      <Breadcrumbs
        currentPage='Blog'
        routes={{
          Home: '/'
        }}
      />
      
      <section id="blog" className="blog">
        <BlogList />
      </section>
    </Box>
  )
}

export default BlogsPage;
