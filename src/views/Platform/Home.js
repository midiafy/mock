import React from "react";
import ProfileInfo from "./Components/ProfileInfo";
import Carousel from "./Components/Carousel";

const Home = () => (
  <div className="is-platform">
    <section className="section">
      <ProfileInfo />
    </section>
    <section className="section">
      <Carousel title="stored by you" subtitle="you can add up to 4 packs" />
      <Carousel title="new in 🏋️ gyms" />
      <Carousel title="🔥 hot in igtv" />
      <Carousel title="spring deals" subtitle="50% OFF until Friday!" />
    </section>
  </div>
);

export default Home;
