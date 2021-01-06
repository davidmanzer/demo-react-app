import React from 'react';
import close from '../img/close.svg';
import { Link } from 'react-router-dom';

function HeaderExtended() {
  return (
    <div>
      <header className="usa-header usa-header--extended">
        <div className="usa-navbar">
          <div className="usa-logo" id="extended-logo">
            <em className="usa-logo__text"><Link to="/">Gov React Demo</Link></em>
          </div>
          <button className="usa-menu-btn">Menu</button>
        </div>
        <nav aria-label="Primary navigation" className="usa-nav">
          <div className="usa-nav__inner"><button className="usa-nav__close"><img src={close}
            alt="close" /></button>
            <ul className="usa-nav__primary usa-accordion">
              <li className="usa-nav__primary-item">
                <Link className="usa-nav__link" to="/">
                  <span>Simple link</span>
                </Link>
              </li>
              <li className="usa-nav__primary-item">
                <Link className="usa-nav__link" to="/">
                  <span>Simple link</span>
                </Link>
              </li>
              <li className="usa-nav__primary-item">
                <Link className="usa-nav__link" to="/">
                  <span>Simple link</span>
                </Link>
              </li>
            </ul>
            <div className="usa-nav__secondary">
              <ul className="usa-nav__secondary-links">
                <li className="usa-nav__secondary-item">
                  <Link>Secondary link</Link>
                </li>
                <li className="usa-nav__secondary-item">
                  <Link>Another secondary link</Link>
                </li>
              </ul>
              <form className="usa-search usa-search--small " role="search">
                <label className="usa-sr-only" for="extended-search-field-small">Search small</label>
                <input className="usa-input" id="extended-search-field-small" type="search" name="search" />
                <button className="usa-button" type="submit"><span className="usa-sr-only">Search</span></button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderExtended;
