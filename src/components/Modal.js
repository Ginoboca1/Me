import React from "react";
import "../styles/Modal.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Modal = ({ setShowModal }) => {
  return (
    <div className="container">
      <div className="modal-container">
        <div className="content">
          <p>
            Hi! This webpage is under development, so in the next few weeks I
            will be making changes
          </p>
          <AiOutlineCloseCircle
            className="icon"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="buttons-container">
          <button
            className="button button-cancel"
            onClick={() => setShowModal(false)}
          >
            cancel
          </button>
          <button className="button button-accept" onClick={() => setShowModal(false)}>accept</button>
        </div>
      </div>
    </div>
  );
};
