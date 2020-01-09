import React from "react";
import Typed from "react-typed";
import configApp from "./../../config/app";
import { Link } from "react-router-dom";

const HomeHero = () => (
  <>
    <div className="container">
      <h1 className="title is-size-2">
        conteúdo pronto e 100% personalizado
        <br />
        <span>feito para o seu negócio, na hora!.</span>
      </h1>
      <h2 className="subtitle">
        &gt; a plataforma de criação de conteúdo feita para{" "}
        <b>
          <Typed
            strings={configApp.activities}
            typeSpeed={80}
            backSpeed={40}
            backDelay={1000}
            loop
            shuffle
          />
        </b>
      </h2>

      <div className="columns ">
        <div className="column is-8">
          <p>
            · Quer testar? Vamos te dar um post GRÁTIS para Instagram{" "}
            <i className="fab fa-instagram"></i>! ·<br />
            <br />
          </p>
          <div className="columns">
            <div className="column is-8">
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input is-large is-rounded"
                    type="text"
                    placeholder="Qual seu perfil do Instagram?"
                  />
                  <span className="icon is-large is-left">
                    <i className="fab fa-instagram"></i>
                  </span>
                </p>
              </div>
            </div>
            <div className="column">
              <p className="control">
                <Link
                  to="/step/profile"
                  className="button is-warning is-large is-rounded"
                >
                  Ganhar meu conteúdo GRÁTIS
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default HomeHero;
