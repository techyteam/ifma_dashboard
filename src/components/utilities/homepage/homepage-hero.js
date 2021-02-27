import React, { useState } from 'react';
import SlideImage3 from '../../../assets/img/slide/man.jpg';
import SlideImage1 from '../../../assets/img/slide/ifma.jpg';
import SlideImage2 from '../../../assets/img/slide/doors-1767563_1920.jpg';


const HomepageHero = () => {
  const [activeCarouselItemIndex, setactiveCarouselItemIndex] = useState(0);
  return (
    <section id="hero">
      <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

        <div className="carousel-inner" role="listbox">

          {/* <!-- Slide 1 --> */}
          <div
            className={`carousel-item${activeCarouselItemIndex === 0 ? ' active' : ''}`}
            style={{
              backgroundImage: `url(${SlideImage1})`,
            }}
          >
            <div className="carousel-container">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h2>Welcome to <span>IFMA Nigeria</span></h2>
                <p>IFMA’s core purpose is to strengthen and advance the knowledgebase essential to leading the integration and optimization of the built environment worldwide.</p>
                <div className="text-center"><a href="about.html" className="btn-get-started">Read More</a></div>
              </div>
            </div>
          </div>

          {/* <!-- Slide 2 --> */}
          <div
            className={`carousel-item${activeCarouselItemIndex === 1 ? ' active' : ''}`}
            style={{
              backgroundImage: `url(${SlideImage2})`,
            }}
          >
            <div className="carousel-container">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h2>We Are Professionals</h2>
                <p>We hold the world’s most recognized FM Certifications -Facility Management Professional (FMP) and Certified Facility Manager (CFM)</p>
                <div className="text-center"><a href="courses.html" className="btn-get-started">See Trainings</a></div>
              </div>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div
            className={`carousel-item${activeCarouselItemIndex === 2 ? ' active' : ''}`}
            style={{
              backgroundImage: `url(${SlideImage3})`,
            }}
          >
            <div className="carousel-container">
              <div className="carousel-content animate__animated animate__fadeInUp">
                <h2>We Are Collaborative</h2>
                <p>IFMA Nigeria offers the opportunity to develop contacts and exchange information with other facility management professionals locally and internationally through conferences, seminars, chapter and council programs.</p>
                <div className="text-center"><a href="register.html" className="btn-get-started">Become a Member</a></div>
              </div>
            </div>
          </div>

        </div>

        <a
          className="carousel-control-prev"
          href="#heroCarousel"
          role="button"
          data-slide="prev"
          onClick={(e) => {
            e.preventDefault();
            setactiveCarouselItemIndex(
              activeCarouselItemIndex > 0 ? activeCarouselItemIndex - 1 : 2
            );
          }}
        >
          <span className="carousel-control-prev-icon icofont-simple-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a
          className="carousel-control-next"
          href="#heroCarousel"
          role="button"
          data-slide="next"
          onClick={(e) => {
            e.preventDefault();
            setactiveCarouselItemIndex(
              activeCarouselItemIndex < 2 ? activeCarouselItemIndex + 1 : 0
            );
          }}
        >
          <span className="carousel-control-next-icon icofont-simple-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

        <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

      </div>
      {/* <!-- End Hero --> */}
    </section>
  )
}

export default HomepageHero;
