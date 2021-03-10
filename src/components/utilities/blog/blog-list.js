import { Link } from '@chakra-ui/layout';
import React from 'react';
import { format } from 'date-fns';
import ScrollAnimation from 'react-animate-on-scroll';
import blog1 from '../../../assets/img/blog-1.jpg';
import blog2 from '../../../assets/img/blog-2.jpg';
import blog3 from '../../../assets/img/blog-3.jpg';
import blog4 from '../../../assets/img/blog-4.jpg';
import styled from '@emotion/styled';
import BlogSidebar from './blog-sidebar';


const Wrapper = styled.section`
  .entry-title a {
    text-decoration: none;
  }
`;


const BlogList = () => {
  return (
    <Wrapper id="blog" className="blog">
      <div className="container">

        <div className="row">
          <div className="col-lg-8 entries">
            {
              [
                {
                  link: 'blog-single',
                  title: 'Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia reiciendis',
                  author: 'John Doe',
                  date: new Date('2020-01-01'),
                  commentCount: 12,
                  image: blog1,
                  content: `Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta.
                  Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.`,
                }, {
                  link: 'blog-single',
                  title: 'Nisi magni odit consequatur autem nulla dolorem',
                  author: 'Mary Jane',
                  date: new Date('2020-01-01'),
                  commentCount: 12,
                  image: blog2,
                  content: `Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.
                  Ad impedit qui officiis est in non aliquid veniam laborum. Id ipsum qui aut. Sit aliquam et quia molestias laboriosam. Tempora nam odit omnis eum corrupti qui aliquid excepturi molestiae. Facilis et sint quos sed voluptas. Maxime sed tempore enim omnis non alias odio quos distinctio.`
                }, {
                  link: 'blog-single',
                  title: 'Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.',
                  author: 'John Doe',
                  date: new Date('2020-01-01'),
                  commentCount: 12,
                  image: blog3,
                  content: `Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur sunt omnis.
                  Doloremque est saepe laborum aut. Ipsa cupiditate ex harum at recusandae nesciunt. Ut dolores velit.`
                }, {
                  link: 'blog-single',
                  title: 'Non rem rerum nam cum quo minus. Dolor distinctio deleniti explicabo eius exercitationem. Veniam eius velit ab ipsa quidem rem.',
                  author: 'John Doe',
                  date: new Date('2020-01-01'),
                  commentCount: 12,
                  image: blog4,
                  content: `Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem. Saepe atque cum eligendi eaque iste omnis a qui.
                  Quia sed sunt. Ea asperiores expedita et et delectus voluptates rerum. Id saepe ut itaque quod qui voluptas nobis porro rerum. Quam quia nesciunt qui aut est non omnis. Inventore occaecati et quaerat magni itaque nam voluptas. Voluptatem ducimus sint id earum ut nesciunt sed corrupti nemo.`
                }
              ].map((blog, index) => {
                return (
                  <ScrollAnimation key={index} as='article' className="entry" animateIn="fadeInUp" animateOnce={true}>
                    <div className="entry-img">
                      <img src={blog.image} alt="" className="img-fluid" />
                    </div>

                    <h2 className="entry-title">
                      <Link href={blog.link}>{blog.title}</Link>
                    </h2>

                    <div className="entry-meta">
                      <ul>
                        <li className="d-flex align-items-center">
                          <i className="icofont-user"></i>
                          <Link href={blog.link}>{blog.author}</Link>
                        </li>
                        <li className="d-flex align-items-center">
                          <i className="icofont-wall-clock"></i>
                          <Link href={blog.link}><time datetime={format(blog.date, 'yyyy-MM-dd')}>{format(blog.date, 'LLL dd, yyyy')}</time></Link></li>
                        <li className="d-flex align-items-center"><i className="icofont-comment"></i> <a href="blog-single">{blog.commentCount} Comments</a></li>
                      </ul>
                    </div>

                    <div className="entry-content">
                      <p>
                        {blog.content}
                      </p>
                      <div className="read-more">
                        <a href="blog-single">Read More</a>
                      </div>
                    </div>
                    {/* <!-- End blog entry --> */}
                  </ScrollAnimation>
                );
              })
            }
            <div className="blog-pagination">
              <ul className="justify-content-center">
                <li className="disabled"><i className="icofont-rounded-left"></i></li>
                <li><Link href="#">1</Link></li>
                <li className="active"><Link href="#">2</Link></li>
                <li><Link href="#">3</Link></li>
                <li><Link href="#"><i className="icofont-rounded-right"></i></Link></li>
              </ul>
            </div>
          </div>

          <BlogSidebar />
        </div>
      </div>
    </Wrapper>
  );
}

export default BlogList;
