import React from 'react';
import { Link } from '@chakra-ui/layout';
import { format } from 'date-fns';
import image1 from '../../../assets/img/blog-recent-posts-1.jpg';
import image2 from '../../../assets/img/blog-recent-posts-2.jpg';
import image3 from '../../../assets/img/blog-recent-posts-3.jpg';
import image4 from '../../../assets/img/blog-recent-posts-4.jpg';
import image5 from '../../../assets/img/blog-recent-posts-5.jpg';
import ScrollAnimation from 'react-animate-on-scroll';


const BlogSidebar = () => {
  return (
    <div className="col-lg-4">
      <ScrollAnimation className="sidebar" animateIn="fadeInLeft" animateOnce>
        <h3 className="sidebar-title">Search</h3>
        <div className="sidebar-item search-form">
          <form action="">
            <input type="text" />
            <button type="submit"><i className="icofont-search"></i></button>
          </form>
          {/* <!-- End sidebar search formn--> */}
        </div>

        <h3 className="sidebar-title">Categories</h3>
        <div className="sidebar-item categories">
          <ul>
            {
              [
                {
                  label: 'General',
                  count: 25,
                }, {
                  label: 'Lifestyle',
                  count: 12,
                },
                {
                  label: 'Travel',
                  count: 5,
                },
                {
                  label: 'Design',
                  count: 22,
                }, {
                  label: 'Creative',
                  count: 8,
                }, {
                  label: 'Education',
                  count: 14,
                }
              ].map(({ label, count }, index) => (
                <li key={index}><Link href="#">{label} <span>({count})</span></Link></li>
              ))
            }
          </ul>

          {/* <!-- End sidebar categories--> */}
        </div>

        <h3 className="sidebar-title">Recent Posts</h3>
        <div className="sidebar-item recent-posts">
          {
            [
              {
                link: 'blog-single',
                title: 'Nihil blanditiis at in nihil autem',
                date: new Date('2020-01-01'),
                image: image1,
              }, {
                link: 'blog-single',
                title: 'Quidem autem et impedit',
                date: new Date('2020-01-01'),
                image: image2,
              }, {
                link: 'blog-single',
                title: 'Id quia et et ut maxime similique occaecati ut',
                date: new Date('2020-01-01'),
                image: image3,
              }, {
                link: 'blog-single',
                title: 'Laborum corporis quo dara net para',
                date: new Date('2020-01-01'),
                image: image4,
              }, {
                link: 'blog-single',
                title: 'Et dolores corrupti quae illo quod dolor',
                date: new Date('2020-01-01'),
                image: image5,
              }
            ].map(({ link, title, date, image }, index) => {
              return (
                <div className="post-item clearfix">
                  <img src={image} alt="" />
                  <h4><Link href={link}>{title}</Link></h4>
                  <time datetime={format(date, 'yyyy-MM-dd')}>{format(date, 'LLL dd, yyyy')}</time>
                </div>
              );
            })
          }
          {/* <!-- End sidebar recent posts--> */}
        </div>

        <h3 className="sidebar-title">Tags</h3>
        <div className="sidebar-item tags">
          <ul>
            {
              [
                {
                  tag: 'App',
                }, {
                  tag: 'IT',
                }, {
                  tag: 'Business',
                }, {
                  tag: 'Mac',
                }, {
                  tag: 'Office',
                }, {
                  tag: 'Creative',
                }, {
                  tag: 'Studio',
                }, {
                  tag: 'Smart',
                }, {
                  tag: 'Tips',
                }, {
                  tag: 'Marketing',
                },
              ].map(({ tag }, index) => (
                <li key={index}><Link href="#">{tag}</Link></li>
              ))
            }
          </ul>

        </div>
        {/* <!-- End sidebar tags--> */}

      </ScrollAnimation>
      {/* <!-- End sidebar --> */}

      {/* <!-- End blog sidebar --> */}
    </div>
  );
}

export default BlogSidebar;
