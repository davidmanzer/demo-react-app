import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Hero.css';

function Hero() {
  return (
    <div>
      <section class="usa-hero" aria-label="Introduction">
        <div class="grid-container">
          <div class="usa-hero__callout">
            <h1 class="usa-hero__heading"><span class="usa-hero__heading--alt">Hero callout:</span>Bring attention to a project priority</h1>
            <p>Support the callout with some short explanatory text. You don’t need more than a couple of sentences.</p>
            <Link class="usa-button" to="/">Call to action</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
