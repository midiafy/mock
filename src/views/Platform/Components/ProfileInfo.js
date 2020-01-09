import React from "react";
import configApp from "./../../../config/app";

const ProfileInfo = () => (
  <>
    <div className="columns is-multiline">
      <div className="column is-12 has-text-centered">
        <img src="/logo.png" alt="" />
      </div>
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
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="text"
              value={configApp.mock.name}
            />
            <span className="icon is-left">
              <i className="fas fa-arrow-right"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="text"
              value={configApp.mock.email}
            />
            <span className="icon is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input is-rounded"
              type="text"
              value={configApp.mock.ig}
            />
            <span className="icon is-left">
              <i className="fab fa-instagram"></i>
            </span>
          </p>
        </div>
      </div>
      <div className="column">
        <span className="is-size-7">ACCOUNT TYPE</span>
        <br />
        <span className="is-size-3">FREE</span>
        <br />
        <span className="is-size-7">
          &gt; try <u>Prime</u> for 7-day free!
        </span>
      </div>
    </div>
  </>
);

export default ProfileInfo;
