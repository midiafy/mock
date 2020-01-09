import React from "react";

const Featured = () => (
  <>
    <section className="section">
      <div className="container is-fullwidth">
        <div className="columns featured">
          <div className="column">
            <figure className="image container is-64x64">
              <img src="/static/icon_personalizado.png" alt="" />
            </figure>
            <h3>personalizado</h3>
            <p>
              tanto o conteúdo quanto a imagem são personalizados conforme sua
              logo
            </p>
            <div className="slug">
              <span>é feito pra você</span>
            </div>
          </div>
          <div className="column">
            <figure className="image container is-64x64">
              <img src="/static/icon_nahora.png" alt="" />
            </figure>
            <h3>feito na hora</h3>
            <p>
              em alguns passos você recebe seu conteúdo. E tenha acesso a
              centenas de pacotes
            </p>
            <div className="slug">
              <span>super fácil!</span>
            </div>
          </div>
          <div className="column">
            <figure className="image container is-64x64">
              <img src="/static/icon_barato.png" alt="" />
            </figure>
            <h3>muuuito mais barato</h3>
            <p>
              um serviço profissional pelo valor mais barato que você vai
              encontrar
            </p>
            <div className="slug">
              <span>pare de perder dinheiro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="hero is-small is-dark is-bold has-text-centered">
      <div className="hero-body">
        <h3 className="is-size-4">criação inteligente, feito na hora</h3>
        <p>
          nossa plataforma é muito poderosa: o conteúdo criado é 100%
          personalizado para sua empresa: imagem e legenda!
          <br />e adivinha? <b>fica pronto na hora ❤️</b>
        </p>
      </div>
    </section>
  </>
);

export default Featured;
