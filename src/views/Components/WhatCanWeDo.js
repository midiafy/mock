import React from "react";

const WhatCanWeDo = () => (
  <>
    <section className="section">
      <div className="container is-fullwidth">
        <h1 className="title has-text-centered has-text-purple">
          o que você pode criar com{" "}
          <span className="has-text-brand">midiafy</span>
        </h1>
        <h2 className="subtitle has-text-grey has-text-centered">
          de posts a artigos, podemos criar para você.
        </h2>
        <div className="columns">
          <div className="column is-half">
            <ul className="panel">
              <li className="panel-block">posts para facebook</li>
              <li className="panel-block">posts para instagram</li>
              <li className="panel-block">stories para instagram</li>
              <li className="panel-block">vídeos para o IGTV</li>
              <li className="panel-block">artigos para blogs</li>
              <li className="panel-block">posts para linkedin</li>
              <li className="panel-block">
                vídeos de anúncios para youtube&nbsp;
                <span className="tag is-warning is-rounded">em breve</span>
              </li>
              <li className="panel-block">
                anúncios para instagram&nbsp;
                <span className="tag is-warning is-rounded">em breve</span>
              </li>
              <li className="panel-block">
                e-books&nbsp;
                <span className="tag is-warning is-rounded">em breve</span>
              </li>
              <li className="panel-block">
                playlists Spotify®&nbsp;
                <span className="tag is-warning is-rounded">em breve</span>
              </li>
            </ul>
            <div className="content">
              <blockquote>
                <b>⭐ somos criativos e queremos criar ⭐</b>
                <br />
                todos os dias nossos especialistas e desenvolvedores trabalham
                para aproximar mais sua empresa do seu cliente ❤️
              </blockquote>
            </div>
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

export default WhatCanWeDo;
