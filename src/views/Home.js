import React from "react";
import Navbar from "./Components/Navbar";
import HomeHero from "./Components/HomeHero";
import Featured from "./Components/Featured";
import WhatCanWeDo from "./Components/WhatCanWeDo";
import Activities from "./Components/Activities";
import Pricing from "./Components/Pricing";

function App() {
  //   const [firstDieResult, setFirstDieResult] = useState(1);

  return (
    <>
      <section className="hero is-primary is-fullheight is-bold">
        <div className="hero-head">
          <Navbar />
        </div>
        <div className="hero-body">
          <HomeHero />
        </div>
      </section>
      <Featured />
      <WhatCanWeDo />
      <Activities />
      <Pricing />
    </>
  );
}

export default App;
