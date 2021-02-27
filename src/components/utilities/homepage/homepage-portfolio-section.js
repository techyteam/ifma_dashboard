import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import FMD01 from '../../../assets/img/portfolio/FMD 01.jpeg';
import FMD02 from '../../../assets/img/portfolio/FMD 02.jpeg';
import FMD03 from '../../../assets/img/portfolio/FMD 03.jpeg';
import EVS from '../../../assets/img/portfolio/EVS.jpg';
import EVS6945 from '../../../assets/img/portfolio/EVS_6945.jpg';
import EVS7289 from '../../../assets/img/portfolio/EVS_7289.jpg';
import PIC1 from '../../../assets/img/portfolio/pic1.JPG';
import PIC2 from '../../../assets/img/portfolio/pic2.JPG';
import PIC3 from '../../../assets/img/portfolio/pic3.jpeg';


const HomepagePortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('*');
  return (
    <section id="portfolio" className="portfolio">
      {/* <!-- ======= Portfolio Section ======= --> */}
      <div className="container">

        <ScrollAnimation className="section-title" animateIn="fadeInUp" animateOnce={true}>
          <h2>Events</h2>
        </ScrollAnimation>

        <ScrollAnimation className="row" animateIn="fadeInUp">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              {
                [
                  {
                    selector: '*',
                    text: 'All',
                  },
                  {
                    selector: '.filter-app',
                    text: 'World FM Day',
                  },
                  {
                    selector: '.filter-card',
                    text: 'Advocacy Day 2020',
                  },
                  {
                    selector: '.filter-web',
                    text: 'FMA Dinner',
                  }
                ].map(({ selector, text }, index) => {
                  const activeClass = 'filter-active';
                  return (
                    <li
                      data-filter={selector}
                      style={{
                        marginLeft: index === 0 ? '0px' : '10px',
                      }}
                      className={selector === activeFilter ? activeClass : ''}
                      onClick={({target}) => {
                        const { dataset: { filter } } = target;
                        setActiveFilter(filter);
                      }}
                    >
                      {text}
                    </li>
                  );
                })
              }
              {/* <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">World FM Day</li>
              <li data-filter=".filter-card">Advocacy Day 2020</li>
              <li data-filter=".filter-web">FMA Dinner</li> */}
            </ul>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="row portfolio-container" animateIn="fadeInUp" animateOnce={true}>
          {
            [

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={FMD01} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 1</h4>
                  <p>App</p>
                  <a href={FMD01} data-gall="portfolioGallery" className="venobox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={EVS} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href={EVS} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={FMD02} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 2</h4>
                  <p>App</p>
                  <a href={FMD02} data-gall="portfolioGallery" className="venobox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src={PIC2} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 2</h4>
                  <p>Card</p>
                  <a href={PIC2} data-gall="portfolioGallery" className="venobox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={EVS7289} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 2</h4>
                  <p>Web</p>
                  <a href={EVS7289} data-gall="portfolioGallery" className="venobox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <img src={FMD03} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>App 3</h4>
                  <p>App</p>
                  <a href={FMD03} data-gall="portfolioGallery" className="venobox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src={PIC1} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 1</h4>
                  <p>Card</p>
                  <a href={PIC1} data-gall="portfolioGallery" className="venobox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <img src={PIC3} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Card 3</h4>
                  <p>Card</p>
                  <a href={PIC3} data-gall="portfolioGallery" className="venobox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>,

              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <img src={EVS6945} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href={EVS6945} data-gall="portfolioGallery" className="venobox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                  {/* <!-- <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a> --> */}
                </div>
              </div>
            ].filter(el => {
              console.log(el.props.className, activeFilter);
              return activeFilter === '*' ? true : el.props.className.includes(activeFilter.substr(1));
            })
          }

        </ScrollAnimation>

      </div>
      {/* <!-- End Portfolio Section --> */}
    </section>
  )
}

export default HomepagePortfolioSection
