import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';


const HomepageAboutSection = () => {
  const animationDelay = 1000;
  return (
    <section id="about-us" className="about-us">
      {/* <!-- ======= About Us Section ======= --> */}
      <ScrollAnimation className='container' animateIn='fadeInUp' animationDelay={animationDelay} animateOnce={true}>
        {/* <div className="container"> */}

          <div className="section-title">
            <h2><strong>About Us</strong></h2>
          </div>

          <div className="row content">
            <ScrollAnimation animateIn='fadeInRight' animationDelay={animationDelay} className="col-lg-6" animateOnce={true}>
            {/* <div className="col-lg-6" data-aos="fade-right"> */}
              <h2>IFMA NIGERIA TODAY</h2>
              <h3>IFMA Nigeria was registered and incorporated as a not-for-profit organisation in 1997 and is an affiliate of IFMA Worldwide.....</h3>
              <hr/>
              <p className="font-italic">
                IFMA Nigeria has pulled together a good number of facility management professionals who today have through their individual and corporate membership ensured a relationship that is gradually shaping the future of IFMA’s high quality activities through training, lectures, facility tours, interactive seminars, education and research. 
              </p>
            </ScrollAnimation>
            <ScrollAnimation className="col-lg-6 pt-4 pt-lg-0" animateIn='fadeInLeft' animateOnce={true}>
            {/* <div className="col-lg-6 pt-4 pt-lg-0" data-aos="fade-left"> */}
              <h2>WHY JOIN IFMA</h2> 
                <ul>
                  <li><i className="ri-check-double-line"></i> IFMA Provide superior facility-related education, information and interaction.</li>
                  <li><i className="ri-check-double-line"></i> Create greater awareness and recognition for facility management.</li>
                  <li><i className="ri-check-double-line"></i> Guide the growth of the facility management industry.</li>
                  <li><i className="ri-check-double-line"></i> Work with government authorities to improve the environment.</li>
                  {/* <!-- <li><i className="ri-check-double-line"></i> Over 3,500 Certified Facility Managers have been designated through IFMA’s certification program</li> --> */}
                </ul> 
              <p>
                IFMA membership is open to anyone actively engaged in the application, practice, teaching and researching of facility management, its principles and techniques.
              </p>
              {/* <!-- <ul>
                <li><i className="ri-check-double-line"></i> We recently introduced the Facility Management Training Series</li>
                <li><i className="ri-check-double-line"></i> Continuous professional development and solid foundation training to develop careers in the right direction</li>
                <li><i className="ri-check-double-line"></i> It is aimed to equip relevant officers with current skills, knowledge and techniques to increase effective practice of facility management in private and public sector.</li>
              </ul> --> */}
            </ScrollAnimation>
          </div>

        {/* </div> */}
      </ScrollAnimation>
      { /* <!-- End About Us Section --> */}
    </section>
  )
}

export default HomepageAboutSection;
