import React from "react";
import configApp from "./../../config/app";
import { Link } from "react-router-dom";

const StepOne = () => (
  <>
    <div className="container">
      <h1 className="title is-size-2">
        vamos começar? <span>já estamos quase prontos!</span>
      </h1>

      <div className="columns is-vcentered is-multiline">
        <div className="column is-2 has-text-centered">
          <figure className="image is-squared">
            <img src={configApp.mock.pic} alt="" className="is-rounded" />
          </figure>
          <br />
          <p>
            <span
              className="tag-color"
              style={{ backgroundColor: configApp.mock.dominant_color }}
            ></span>
            <span
              className="tag-color"
              style={{ backgroundColor: configApp.mock.accent_color }}
            ></span>
          </p>
        </div>
        <div className="column is-7">
          <>
            <p>
              · Qual seu ramo principal de atividade? ·<br />
            </p>
            <div className="control has-icons-left">
              <div className="select is-large is-rounded is-fullwidth">
                <select>
                  <option selected>select above</option>
                  {configApp.activities.map((item, i) => (
                    <option>{item}</option>
                  ))}
                </select>
              </div>
              <span className="icon is-large is-left">
                <i className="fas fa-suitcase"></i>
              </span>
            </div>
          </>
          <>
            <br />
            <p>
              · Qual o nome da sua empresa? ·<br />
            </p>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-large is-rounded"
                  type="text"
                  value={configApp.mock.name}
                />
                <span className="icon is-large is-left">
                  <i className="fas fa-arrow-right"></i>
                </span>
              </p>
            </div>
          </>
          <>
            <p>
              · Qual seu <u>melhor e-mail</u> ? ·<br />
            </p>
            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input is-large is-rounded"
                  type="text"
                  placeholder="é para onde enviaremos seu conteúdo grátis"
                />
                <span className="icon is-large is-left">
                  <i className="fas fa-at"></i>
                </span>
              </p>
            </div>
          </>
        </div>
        <div className="column">
          <Link
            className="button is-large is-warning is-rounded"
            to="/step/canvas"
          >
            Criar AGORA!
          </Link>
        </div>
      </div>
    </div>
  </>
);

export default StepOne;
