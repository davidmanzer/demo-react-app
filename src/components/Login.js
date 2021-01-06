import React from 'react';
import { Link } from 'react-router-dom';

function GridContainer() {
  return (
    <div>
      <section class="grid-container usa-section">
        <div class="grid-row grid-gap">
          <div class="tablet:grid-col-4"></div>
          <div class="tablet:grid-col-4">
            <form class="usa-form">
              <fieldset class="usa-fieldset">
                <legend class="usa-legend">Sign in</legend>
                <span>or <Link to="/">create an account</Link></span>

                <label class="usa-label" for="username">Username or email address</label>
                <input class="usa-input" id="username" name="username" type="text" autocapitalize="off" autocorrect="off" />

                <label class="usa-label" for="password-sign-in">Password</label>
                <input class="usa-input" id="password-sign-in" name="password" type="password" />
                <p class="usa-form__note">
                  <Link className="usa-show-password" title="Show password" to="/" aria-controls="password-sign-in">Show password</Link>
                </p>

                <input class="usa-button" type="submit" value="Sign in" />
                <p><Link title="Forgot username">
                  Forgot username?</Link></p>
                <p><Link title="Forgot password">
                  Forgot password?</Link></p>
              </fieldset>
            </form>
          </div>
          <div class="tablet:grid-col-4"></div>
        </div>
      </section>
    </div>
  );
}

export default GridContainer;
