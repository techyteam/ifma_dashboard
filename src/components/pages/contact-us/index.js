import { Box, Link } from '@chakra-ui/react';
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import Breadcrumbs from '../../utilities/breadcrumbs';
import ContactForm from '../../utilities/contact-us/contact-form';
import contactForm from '../../utilities/contact-us/contact-form';

const ContactUsPage = () => {
  return (
    <Box as='main'>
      <Breadcrumbs currentPage='Contact' routes={{
        Home: '/'
      }} />
      {/* <!-- ======= Contact Section ======= --> */}
      <div className="map-section">
        <iframe
          style={{border:0, width: '100%', height: '350px'}}
          src="https://maps.google.com/maps?q=369%2C%20Borno%20Way%2C%20Alagomeji%2C%20Yaba%2C%20Lagos%20State.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" allowfullscreen
        />
      </div>

      <section id="contact" className="contact">
        <div className="container">

          <ScrollAnimation className="row justify-content-center" animateIn="fadeInUp" animateOnce>

            <div className="col-lg-10">

              <div className="info-wrap">
                <div className="row">
                  <div className="col-lg-4 info">
                    <i className="icofont-google-map"></i>
                    <h4>Location:</h4>
                    <p>369 Borno Way,<br/>Alagomeji Yaba, Lagos</p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="icofont-envelope"></i>
                    <h4>Email:</h4>
                    <p><Link href="mailto:info@ifmanigeria.org">info@ifmanigeria.org</Link><br/>
                      <Link href="mailto:ifmanigeria@yahoo.co.uk">ifmanigeria@yahoo.co.uk</Link></p>
                  </div>

                  <div className="col-lg-4 info mt-4 mt-lg-0">
                    <i className="icofont-phone"></i>
                    <h4>Call:</h4>
                    <p><Link href="tel:(+234) 818-536-5645">(+234) 818-536-5645</Link><br/>
                      <Link href="tel:(+234) 818-536-5645">(+234) 818-536-5645</Link></p>
                  </div>
                </div>
              </div>

            </div>

          </ScrollAnimation>

          <ScrollAnimation className="row mt-5 justify-content-center" animateIn="fadeInUp" animateOnce>
            <div className="col-lg-10">
              <ContactForm />
            </div>

          </ScrollAnimation>

        </div>
      </section>
      {/* <!-- End Contact Section --></div> */}
    </Box>
  )
}

export default ContactUsPage;
