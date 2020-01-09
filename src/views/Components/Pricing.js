import React from "react";
import PricingTable from "./PricingTable";

const Pricing = () => (
  <>
    <section className="section">
      <div className="container is-fullwidth">
        <h1 className="title has-text-centered has-text-purple">
          pague quando usar <span className="has-text-grey-light">ou</span>{" "}
          <span className="has-text-brand">
            conheça o midiafy <u>Prime</u>
          </span>
        </h1>
        <h2 className="subtitle has-text-grey has-text-centered">
          não se preocupe! adaptamos ao seu negócio
        </h2>
        <div className="columns">
          <div className="column is-half">
            <PricingTable />
          </div>
          <div className="column">
            <figure className="image container">
              <img src="static/new_can_create.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Pricing;
