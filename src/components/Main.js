import React from 'react';
import Hero from './Hero';
import GridContainer from './GridContainer';
import GraphicList from './GraphicList';
import CtaSection from './CtaSection';
// import Login from './Login';

function Main() {
  return (
    <div>
      <main id="main-content">
        <Hero />
        <GridContainer />
        <GraphicList />
        <CtaSection />
      </main>
    </div>
  );
}

export default Main;
