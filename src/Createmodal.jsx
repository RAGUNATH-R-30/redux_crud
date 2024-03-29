import React, { useState } from "react";
import Form from "./Form";

function Createmodal({modalclose}) {
    const[showmodal,setshowmodal]=useState(true)
   
  return (
    <div
    className={showmodal?"modal fade show":"modal fade"}
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{display:showmodal?"block":"none"}}
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Create User
            </h1>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>{
                    modalclose(false)
                }}
              ></button>
          </div>
          <div class="modal-body">
            <Form modalclosing={modalclose}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Createmodal;
