import React from "react";

import "../../styles/Modal.css";

const LoginModal = ({ closePortal }) => {
  return (
    <div className="modal-bkg" onClick={() => closePortal()}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <h1>Login</h1>
        <form action="" className="login-form">
          <div className="form-input">
            <i class="fas fa-at"></i>
            <input
              type="text"
              className="login-inp"
              placeholder="Enter Username"
            />
          </div>
          <div className="login-btns">
            <input
              type="button"
              value="LOGIN USING KEYCHAIN"
              className="submit-login"
              onClick={e => e.preventDefault()}
            />
            <input
              type="button"
              value="LOGIN USING HIVESIGNER"
              className="submit-login"
              onClick={e => e.preventDefault()}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
