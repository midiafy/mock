import React from "react";
import configApp from "./../../config/app";
import { Link } from "react-router-dom";

const Upsell = () => (
  <>
    <div class="container">
      <div class="has-text-centered">
        <h1 className="title is-size-2">tuuuuudo pronto!</h1>
        <p className="is-size-6">
          &gt; sinta-se a vontade para usar como quiser ¹.
          <br />
          esperamos que isso ajude você a aumentar suas vendas e agregar valor
          ao seu cliente.
        </p>
        <br />

        <div className="columns is-vcentered">
          <div className="column is-half has-text-centered">
            <h1 className="title has-text-warning">
              que tal mais 49+ posts para{" "}
              <span className="has-text-white">@{configApp.mock.ig}</span>?
              <br />
              <br />
              🔥🔥🔥
            </h1>
          </div>
          <div className="column is-half">
            <div className="pricing-table">
              <div className="pricing-plan is-active  is-warning">
                <div className="plan-header">
                  pack <u>Seguros Tops!</u>{" "}
                  <span className="tag is-danger is-rounded">· 30% OFF ·</span>
                  <br />
                  <small>50 posts + BRINDE surpresa</small>
                </div>
                <div className="plan-price">
                  <span className="plan-price-amount">
                    <span className="plan-price-currency">
                      R${" "}
                      <s>
                        <b>97</b>
                      </s>
                    </span>
                    67
                  </span>
                  .00
                </div>
                <div className="plan-items">
                  <div className="plan-item">pronto em instantes</div>
                  <div className="plan-item">guardamos para você por 1 ano</div>
                  <div className="plan-item">até 3 revisões / pacote</div>
                  <div className="plan-item">
                    pagamento <b>único</b>!
                  </div>
                </div>
                <div className="plan-footer">
                  <Link to="/app/" className="button is-fullwidth">
                    QUERO GARANTIR AGORA!
                  </Link>

                  <img
                    src="/static/paypal.png"
                    alt=""
                    style={{ maxHeight: 30, marginTop: 20 }}
                  />
                </div>
              </div>
            </div>
            <br />
            <p className="is-size-7">
              Também enviamos para seu e-mail suas credenciais de acesso à
              plataforma Midiafy.
            </p>
            <Link to="/app/" className="button is-text">
              Me leve à plataforma
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Upsell;
