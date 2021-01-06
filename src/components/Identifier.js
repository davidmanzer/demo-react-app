import React from 'react';
import agencyLogo from '../img/circle-gray-20.svg';
import { Link } from 'react-router-dom';

function Identifier() {
  return (
    <div>
      <div class="usa-identifier">
        <section class="usa-identifier__section usa-identifier__section--masthead" aria-label="Agency identifier">
          <div class="usa-identifier__container">
            <div class="usa-identifier__logos">
              <Link className="usa-identifier__logo" to="/">
                <img class="usa-identifier__logo-img" src={agencyLogo} alt="logo" />
              </Link>
            </div>
            <div class="usa-identifier__identity" aria-label="Agency description">
              <p class="usa-identifier__identity-domain">domain.gov</p>
              <p class="usa-identifier__identity-disclaimer">An official website of the
              &nbsp;<Link>Government</Link></p>
            </div>
          </div>
        </section>
        <nav class="usa-identifier__section usa-identifier__section--required-links" aria-label="Important links">
          <div class="usa-identifier__container">
            <ul class="usa-identifier__required-links-list">
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link" to="/">
                  About project
                </Link>
              </li>
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link" to="/">
                  Accessibility support
                </Link>
              </li>
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link usa-link" to="/">
                  FOIA requests
                </Link>
              </li>
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link usa-link" to="/">
                  No FEAR Act data
                </Link>
              </li>
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link usa-link" to="/">
                  Office of the Inspector General
                </Link>
              </li>
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link usa-link" to="/">
                  Performance reports
                </Link>
              </li>
              <li class="usa-identifier__required-links-item">
                <Link className="usa-identifier__required-link usa-link" to="/">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <section class="usa-identifier__section usa-identifier__section--usagov"
          aria-label="U.S. government information and services">
          <div class="usa-identifier__container">
            <div class="usa-identifier__usagov-description">Looking for U.S. government information and services?</div>
            &nbsp;<Link className="usa-link" to="https://www.usa.gov/">Privacy policy</Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Identifier;
