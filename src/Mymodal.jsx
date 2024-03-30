import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { edituser } from "./reducers/crudslice";
import { toast } from "react-toastify";

function Mymodal({ content, modalclose }) {
  //states
  const [id, setid] = useState(content.id);
  const [name, setname] = useState(content.name);
  const [email, setemail] = useState(content.email);
  const [phonenumber, setphonenumber] = useState(content.phonenumber);
  const [address, setaddress] = useState(content.address);
  const [websiteurl, setwebsiteurl] = useState(content.website);
  const [companyname, setcompanyname] = useState(content.company);
  const [showmodal, setshowmodal] = useState(true);

  const dispatch = useDispatch();

  //This function update the user.
  let updateuser = async (editeddata) => {
    try {
      let updateduser = await axios.put(
        `https://6605376c2ca9478ea17fb6d1.mockapi.io/users/${editeddata.id}`,
        editeddata
      );
    } catch (error) {
      console.log(error);
    }
  };

   //below functions are used for formfield changes
  let namechange = (name) => {
    setname(name.target.value);
  };

  let emailchange = (email) => {
    setemail(email.target.value);
  };

  let phonenumberchange = (phonenumber) => {
    setphonenumber(phonenumber.target.value);
  };

  let addresschange = (address) => {
    setaddress(address.target.value);
  };

  let websiteurlchange = (websiteurl) => {
    setwebsiteurl(websiteurl.target.value);
  };

  let companynamechange = (companyname) => {
    setcompanyname(companyname.target.value);
  };

  return (
    <>
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
                Edit Changes
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setshowmodal(false);
                  modalclose(false);
                }}
              ></button>
            </div>
            <div className="modal-body">
              <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={namechange}
                    value={name}
                  />
                </div>

                <div className="">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={emailchange}
                    value={email}
                  />
                </div>

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    PhoneNumber
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={phonenumberchange}
                    value={phonenumber}
                  />
                </div>

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={addresschange}
                    value={address}
                  />
                </div>

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Website Url
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={websiteurlchange}
                    value={websiteurl}
                  />
                </div>

                <div className="">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={companynamechange}
                    value={companyname}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setshowmodal(false);
                  modalclose(false);
                }}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#20236D", border: "none" }}
                onClick={() => {
                  updateuser({
                    id: id,
                    name: name,
                    email: email,
                    phonenumber: phonenumber,
                    address: address,
                    website: websiteurl,
                    company: companyname,
                  });
                  dispatch(
                    edituser({
                      id: id,
                      name: name,
                      email: email,
                      phonenumber: phonenumber,
                      address: address,
                      website: websiteurl,
                      company: companyname,
                    })
                  );
                  modalclose(false);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mymodal;
