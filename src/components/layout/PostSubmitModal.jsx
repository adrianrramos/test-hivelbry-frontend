import React from "react";

import "../../styles/Modal.css";

const PostSubmitModal = ({ closePortal }) => {
  return (
    <div className="modal-bkg" onClick={() => closePortal()}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <h1>How would you like to post?</h1>
        <div className="pt-modal-btns">
          <input
            type="button"
            value="PUBLICLY"
            className="submit-post-btn"
            onClick={e => e.preventDefault()}
          />
          <input
            type="button"
            value="ANONYMOUSLY"
            className="submit-post-btn"
            onClick={e => e.preventDefault()}
          />
          <input
            type="button"
            value="SCHEDULED"
            className="submit-post-btn"
            onClick={e => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default PostSubmitModal;
