import React from "react";
import Upsell from "./Components/Upsell";

function App() {
  return (
    <>
      <section className="hero is-primary is-fullheight is-bold">
        <div className="hero-body">
          <Upsell />
        </div>
        <div className="hero-foot">
          <div className="container">
            <div className="has-text-centered is-size-7" style={{paddingBottom: 25}}>
              ¹ Your free content will be stored for free for 365
              calendar days
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
