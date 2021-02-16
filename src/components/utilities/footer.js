import React from "react";
import { Link } from "@chakra-ui/react";
import NewsletterForm from "./newsletter-form";


const Footer = () => {
  return (
    <>
    <footer id="footer">
        {/* <!-- ======= Footer ======= --> */}

        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                <Link href="index.html" class="logo mr-auto">
                  <img src="assets/img/logo-alt.png" alt="" class="img-fluid" />
                </Link>
                <p>
                  <br/>
                  369, Borno Way <br/>
                  Alagomeji, Yaba<br/>
                  Lagos, Nigeria <br/><br/>
                  <strong>Phone:</strong> + 234-818-536-5645<br/>
                  <strong>Email:</strong> info@ifmanigeria.org<br/>
                </p>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">Home</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">About us</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">Trainings</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">Terms of service</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">Privacy policy</Link></li>
                </ul>
              </div>
    
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Courses</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">F M P Credentials</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">S P F Credentials</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">C F M Credentials</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">Emergency Preparedness</Link></li>
                  <li><i class="bx bx-chevron-right"></i> <Link href="#">Facility Management Practice</Link></li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <NewsletterForm />
              </div>

            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">

          <div class="mr-md-auto text-center text-md-left">
            <div class="copyright">
              &copy; Copyright <strong><span>IFMA Nigeria</span></strong>. All Rights Reserved
            </div>
            {/* <!-- <div class="credits"> -->
              <!-- All the links in the footer should remain intact. -->
              <!-- You can delete the links only if you purchased the pro version. -->
              <!-- Licensing information: https://bootstrapmade.com/license/ -->
              <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/company-free-html-bootstrap-template/ -->
              <!-- Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> -->
            <!-- </div> --> */}
          </div>
          <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <Link href="#" class="twitter"><i class="bx bxl-twitter"></i></Link>
            <Link href="#" class="facebook"><i class="bx bxl-facebook"></i></Link>
            <Link href="#" class="instagram"><i class="bx bxl-instagram"></i></Link>
            <Link href="#" class="google-plus"><i class="bx bxl-skype"></i></Link>
            <Link href="#" class="linkedin"><i class="bx bxl-linkedin"></i></Link>
          </div>
        </div>
      {/* <!-- End Footer --> */}
      </footer>

      <a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>
  </>
  );
};

export default Footer;
