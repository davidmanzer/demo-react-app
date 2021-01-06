import React from 'react';
import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    <div>
      <section id="test-section-id" class="usa-section">
        <div class="grid-container">
          <h2 class="font-heading-xl margin-y-0">Section heading</h2>
          <p class="usa-intro">Everything up to this point should help people understand your agency or project: who you
          are, your goal or mission, and how you approach it. Use this section to encourage them to act. Describe why they
          should get in touch here, and use an active verb on the button below. “Get in touch,” “Learn more,” and so on.
      </p>
          <Link className="usa-button usa-button--big" to="/">Call to action</Link>
        </div>
      </section>
    </div>
  );
}

export default CtaSection;
