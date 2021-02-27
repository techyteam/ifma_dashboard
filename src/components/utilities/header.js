import { Link } from '@chakra-ui/react';
import React from 'react';
import Logo from '../../assets/img/logo.png';

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">

        {/* <!-- <h1 className="logo mr-auto"><a href="index.html"><span>Com</span>pany</a></h1> -->
        <!-- Uncomment below if you prefer to use an image logo --> */}
        <Link
          href='/'
          className="logo mr-auto"
        >
          <img
            src={Logo}
            alt="" className="img-fluid"
          />
        </Link>

        <nav className="nav-menu d-none d-lg-block">
          <ul>
            <li className="active">
              <Link href="/">Home</Link>
            </li>

            <li className="drop-down"><a href="#">About</a>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><a href="assets/pdfdocs/financial-corporate-member.pdf">Corporate Members</a></li>
                <li><a href="assets/pdfdocs/Financial-Individual-Members.pdf">Individual Members</a></li>
                <li><Link href="/testimonials">Testimonials</Link></li>
                {/* <!-- <li className="drop-down"><a href="#">Deep Drop Down</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li> --> */}
              </ul>
            </li>

            <li className="drop-down"><a href="courses.html">Trainings</a>
              <ul>
                <li><a href="assets/pdfdocs/Revised-IFMA-Nigeria-Training-Calendar.pdf">Training Calender</a></li>
                <li><Link href="/portfolio-details">F M P Credential</Link></li>
                <li><Link href="/portfolio-details">E O F M Credential</Link></li>
                <li><Link href="/portfolio-details">C F M Credential</Link></li>
                {/* <!-- <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li> --> */}
              </ul>
            </li>
            <li><Link isExternal href="http://community.ifma.org/">Community</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li className="drop-down"><Link href="/register">Register</Link>
              <ul>
                {/* <!-- <button id="myBtn">Open Modal</button> --> */}
                <li><a role='button' id='myBtn'>Get Started</a></li>
              </ul>
            </li>

          </ul>
        </nav>
        {/* <!-- .nav-menu --> */}

        <div className="header-social-links">
          <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
          <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
          <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
          <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
        </div>

      </div>
      {/* // <!-- End Header --> */}
    </header>
  );
}

export default Header;
