import React from "react";
import configApp from "./../../config/app";
import { Link } from "react-router-dom";

const StepOne = () => (
  <>
    <div className="container">
      <h1 className="title is-size-2">
        vói-la... <span>bem legal, né?!</span>
      </h1>

      <div className="columns is-multiline">
        <div className="column is-6">
          <figure className="is-squared">
            <img src="/static/demo.png" alt="" />
          </figure>
        </div>
        <div className="column">
          <div className="field">
            <label className="label has-text-white">Legenda</label>
            <div className="control">
              <textarea
                className="textarea is-medium"
                rows="10"
                value={configApp.mock.legend}
              ></textarea>
            </div>
          </div>

          <div className="has-text-italic">
            <small>
              &gt; 🌟 <b>Dica Pro:</b> você pode melhorar esta postagem usando
              os anúncios do Instagram que alcançam mais seguidores nas
              proximidades da sua cidade.{" "}
            </small>
          </div>
          <div className="field">
            <input
              className="is-small"
              type="checkbox"
              checked="checked"
            />
            <label>
              Inscreva-me na newsletter <em>Midiafy ProTips</em>. Sem spam,
              somente conteúdos incríveis.
            </label>
          </div>

          <br />

          <div className="field has-text-right">
            <div className="control">
              <Link to="/step/done" className="button is-large is-warning">
                Envie para mim!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default StepOne;
