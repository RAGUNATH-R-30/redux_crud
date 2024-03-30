import React, { useState } from "react";
import Form from "./Form";

//This is the create modal
function Createmodal({ modalclose }) {
  //state
  const [showmodal, setshowmodal] = useState(true);

  return (
    <div
      className={showmodal ? "modal fade show" : "modal fade"}
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: showmodal ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Create User
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                modalclose(false);
              }}
            ></button>
          </div>
          <div className="modal-body">
            <Form modalclosing={modalclose} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createmodal;
