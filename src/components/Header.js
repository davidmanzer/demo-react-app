import React from 'react';
import smUslogo from '../img/us_flag_small.png';

function Header() {
  return (
    <div>
      <section className="usa-banner">
        <header className="usa-banner__header">
          <div className="usa-banner__inner">
            <div className="grid-col-auto">
              <img className="usa-banner__header-flag" src={smUslogo} alt="U.S. flag" />
            </div>
            <div className="grid-col-fill tablet:grid-col-auto">
              <p className="usa-banner__header-text">An official website of the United States government</p>
              <p className="usa-banner__header-action" aria-hidden="true">Here’s how you know</p>
            </div>
            <button className="usa-accordion__button usa-banner__button"
              aria-expanded="false" aria-controls="gov-banner">
              <span className="usa-banner__button-text">Here’s how you know</span>
            </button>
          </div>
        </header>
      </section>
    </div>
  );
}

export default Header;
