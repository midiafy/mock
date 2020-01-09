import React from "react";
import StepOne from "./Components/StepOne";

function App() {
  //   const [firstDieResult, setFirstDieResult] = useState(1);

  return (
    <>
      <section className="hero is-primary is-fullheight is-bold">
        <div className="hero-body">
          <StepOne />
        </div>
      </section>
    </>
  );
}

export default App;
