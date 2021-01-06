import React from 'react';
import logo from '../img/logo-img.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer class="usa-footer">
        <div class="grid-container usa-footer__return-to-top">
          <Link to="/">Return to top</Link>
        </div>
        <div class="usa-footer__primary-section">
          <nav class="usa-footer__nav" aria-label="Footer navigation">
            <ul class="grid-row grid-gap">
              <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/">
                  Primary link
                </Link>
              </li>
              <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/">
                  Primary link
                </Link>
              </li>
              <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/">
                  Primary link
                </Link>
              </li>
              <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/">
                  Primary link
                </Link>
              </li>
              <li class="mobile-lg:grid-col-4 desktop:grid-col-auto usa-footer__primary-content">
                <Link className="usa-footer__primary-link" to="/">
                  Primary link
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="usa-footer__secondary-section">
          <div class="grid-container">
            <div class="grid-row grid-gap">
              <div class="usa-footer__logo grid-row mobile-lg:grid-col-6 mobile-lg:grid-gap-2">
                <div class="mobile-lg:grid-col-auto">
                  <img class="usa-footer__logo-img" src={logo} alt="" />
                </div>
                <div class="mobile-lg:grid-col-auto">
                  <h3 class="usa-footer__logo-heading">React Demo</h3>
                </div>
              </div>
              <div class="usa-footer__contact-links mobile-lg:grid-col-6">
                <div class="usa-footer__social-links grid-row grid-gap-1">
                  <div class="grid-col-auto">
                    <Link className="usa-social-link usa-social-link--facebook" to="/">
                      <span>Facebook</span>
                    </Link>
                  </div>
                  <div class="grid-col-auto">
                    <Link className="usa-social-link usa-social-link--twitter" to="/">
                      <span>Twitter</span>
                    </Link>
                  </div>
                  <div class="grid-col-auto">
                    <Link className="usa-social-link usa-social-link--youtube" to="/">
                      <span>YouTube</span>
                    </Link>
                  </div>
                  <div class="grid-col-auto">
                    <Link className="usa-social-link usa-social-link--rss" to="/">
                      <span>RSS</span>
                    </Link>
                  </div>
                </div>
                <h3 class="usa-footer__contact-heading">Agency Contact Center</h3>
                <address class="usa-footer__address">
                  <div class="usa-footer__contact-info grid-row grid-gap">
                    <div class="grid-col-auto">
                      <Link to="tel:1-800-555-5555">
                        (800) CALL-GOVT
                    </Link>
                    </div>
                    <div class="grid-col-auto">
                      <Link to="mailto:info@agency.gov">
                        info@agency.gov
                    </Link>
                    </div>
                  </div>
                </address>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
