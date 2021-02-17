import React from 'react';

import tea4 from '../../../assets/img/team/tea-4.jpg';
import segunAdebayo from '../../../assets/img/team/segun-adebayo.jpg';
import lekanAkinwunmi from '../../../assets/img/team/lekan-Akinwunmi.png';
import sherriff from '../../../assets/img/team/sherriff.jpeg';
import Solomon from '../../../assets/img/team/Solomon-Olusola-Fatoki.jpg';
import tea1 from '../../../assets/img/team/tea-1.jpg';
import team5 from '../../../assets/img/team/team-5.jpg';
import iyabo from '../../../assets/img/team/iyabo-aboaba.jpg';
import ezeaku from '../../../assets/img/team/ezeaku.jpg';
import soetan from '../../../assets/img/team/soetan.jpg';
import jagun from '../../../assets/img/team/mr-jagun.jpg';
import ScrollAnimation from 'react-animate-on-scroll';


const AboutUsTeamSection = () => {
  return (
    <section id="team" className="team section-bg">
      {/* <!-- ======= Our Team Section ======= --> */}
      <div className="container">

        <ScrollAnimation className="section-title" animateOnce={true} animateIn="fadeInUp">
          <h2>Council <strong>Members</strong></h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </ScrollAnimation>

        <div className="row">
          {
            [
              {
                name: 'MRS. ABIMBOLA OLUSEGUN-ADAMOLEKUN',
                role: 'PRESIDENT',
                animationDelay: 0,
                img: tea4
              },
              {
                name: 'MR. SEGUN ADEBAYO',
                role: 'VICE PRESIDENT',
                animationDelay: 100,
                img: segunAdebayo
              },
              {
                name: 'ENGR. SHERIFF DARAMOLA',
                role: 'GENERAL SECRETARY',
                animationDelay: 200,
                img: sherriff
              },
              {
                name: 'MR. OLALEKAN AKINWUMI',
                role: 'TREASURER',
                animationDelay: 300,
                img: lekanAkinwunmi,
              },
              {
                name: 'MR. SOLA FATOKI',
                role: 'LEGAL ADVISER',
                animationDelay: 300,
                img: Solomon
              },
              {
                name: 'ENGR. PIUS IWUNDU',
                role: 'IMMEDIATE PAST PRESIDENT',
                animationDelay: 100,
                img: team5,
              },
              {
                name: 'MR. TUNJI OKESOLA',
                role: 'PAST PRESIDENT',
                animationDelay: 200,
                img: tea1,
              },
              {
                name: 'MISS. IYABO ABAOBA',
                role: 'PAST PRESIDENT',
                animationDelay: 300,
                img: iyabo,
              },
              {
                name: 'ENGR. ANTHONY EZEAKU',
                role: 'PAST PRESIDENT',
                animationDelay: 0,
                img: ezeaku,
              },
              {
                name: 'ENGR. E.O. SOETAN',
                role: 'PAST PRESIDENT',
                animationDelay: 100,
                img: soetan,
              },
              {
                name: 'MR. STEPHEN O. JAGUN',
                role: 'PAST PRESIDENT',
                animationDelay: 300,
                img: jagun
              },
            ].map(({name, role, animationDelay, img}, index) => (
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch" key={index}>
                <ScrollAnimation className="member" animateOnce={true} animateIn="fadeInUp" delay={animationDelay}>
                  <div className="member-img">
                    <img src={img} className="img-fluid" alt={name}/>
                    <div className="social">
                      <a href=""><i className="icofont-twitter"></i></a>
                      <a href=""><i className="icofont-facebook"></i></a>
                      <a href=""><i className="icofont-instagram"></i></a>
                      <a href=""><i className="icofont-linkedin"></i></a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{name}</h4>
                    <span>{role}</span>
                  </div>
                </ScrollAnimation>
              </div>
            ))
          }`
        </div>

      </div>
      {/* <!-- End Our Team Section --> */}
    </section>
  )
}

export default AboutUsTeamSection
