import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import SkillProgress from '../skill-progress';

const HomepageSkillsSection = () => {
  return (
    <section id="skills" className="skills">
      {/* <!-- ======= Our Skills Section ======= --> */}
      <div className="container">

        <ScrollAnimation className="section-title" animateIn="fadeInUp" animateOnce={true}>
          <h2>Our <strong>Achievements</strong></h2>
          <p>IFMA is the world's largest and most widely recognized international association for facility management professionals, supporting 24,000 members in more than 10​0 countries. Over 3,500 Certified Facility Managers have been designated through IFMA Nigeria’s certification program</p>
        </ScrollAnimation>

        <div className="row skills-content">

            {
              [
                [
                  {
                    text: 'FMP',
                    progress: 100,
                  },
                  {
                    text: 'CFM',
                    progress: 90,
                  },
                  {
                    text: 'E0FM',
                    progress: 75,
                  }
                ],
                [
                  {
                    text: 'SFP',
                    progress: 80,
                  },
                  {
                    text: 'Project Managment Professional',
                    progress: 90,
                  },
                  {
                    text: 'Risk Management',
                    progress: 55,
                  }
                ],
              ].map((innerArr, index) => (
                <ScrollAnimation
                  key={index}
                  className='col-lg-6'
                  animateIn='fadeInUp'
                  animateOnce={true}
                  {...(() => {
                    return index === 1 ? {delay: '100'} : {}
                  })()}
                >
                  {
                    innerArr.map((obj, index2) => (
                      <SkillProgress key={index2} {...obj} />
                    ))
                  }
                </ScrollAnimation>
              ))
            }
        </div>

        {/* </section><!-- End Our Skills Section --> */}
      </div>
    </section>
  );
}

export default HomepageSkillsSection
