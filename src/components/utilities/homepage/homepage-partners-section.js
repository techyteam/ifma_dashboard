import React from 'react';
import mem1 from '../../../assets/img/clients/mem1.png';
import mem1_2 from '../../../assets/img/clients/mem1 (2).png';
import mem2 from '../../../assets/img/clients/mem2.png';
import mem3 from '../../../assets/img/clients/mem3.png';
import mem4 from '../../../assets/img/clients/mem4.jpg';
import mem5 from '../../../assets/img/clients/mem5.png';
import mem7 from '../../../assets/img/clients/mem7.jpg';
import mem8 from '../../../assets/img/clients/mem8.png';
import ScrollAnimation from 'react-animate-on-scroll';



const HomepagePartnersSection = () => {
  return (
    <section id="clients" className="clients">
      {/* <!-- ======= Our Clients Section ======= --> */}
      <ScrollAnimation className="container" animateIn="fadeInUp" animateOnce={true}>

        <div className="section-title">
          <h2>Some Of Our Corporate Members</h2>
        </div>

        <div className="row no-gutters clients-wrap clearfix" animateIn="fadeInUp">

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem1_2} className="img-fluid" alt=""/>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem3} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem5} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem7} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem4} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-6">
            <div className="client-logo">
              <img src={mem8} className="img-fluid" alt="" />
            </div>
          </div>

        </div>

      </ScrollAnimation>
      {/* <!-- End Our Clients Section --> */}
    </section>
  )
}

export default HomepagePartnersSection;
