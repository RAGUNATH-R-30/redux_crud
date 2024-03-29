import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { adduser } from "./reducers/crudslice";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Form({modalclosing}) {
  const [id, setid] = useState(0);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [address, setaddress] = useState("");
  const [websiteurl, setwebsiteurl] = useState("");
  const [companyname, setcompanyname] = useState("");

  const dispatch = useDispatch();

  let addnewuser = async (user) => {
    try {
      console.log(user);
      const newuser = await toast.promise(axios.post(
        "https://6605376c2ca9478ea17fb6d1.mockapi.io/users",user),
        {
          pending:"Creatinguser",
          success:"UserCreated"
        }
        )
      // const newuser = await axios.post(
      //   "https://6605376c2ca9478ea17fb6d1.mockapi.io/users",
      //   user
      // );
      setid(newuser.data.id);
      dispatch(
        adduser({
          id: newuser.data.id,
          name: name,
          email: email,
          phonenumber: phonenumber,
          address: address,
          website: websiteurl,
          company: companyname,
        })
      );

      setname("");
      setemail("");
      setphonenumber("");
      setaddress("");
      setcompanyname("");
      setwebsiteurl("");
      modalclosing(false);

    } catch (error) {
      console.log(error);
    }
  };

  let deleteuser = async (id) => {
    try {
      const deleteuser = await axios.delete(
        `https://6605376c2ca9478ea17fb6d1.mockapi.io/users/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };


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

  let logs = () => {
    console.log(name, email, address, phonenumber, websiteurl, companyname);
    setname("");
  };

  return (
    <>
      <ToastContainer />
      <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
        
        <div className="mb-2">
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

        <div className="mb-2">
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

        <div className="mb-2">
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

        <div className="mb-2">
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

        <div className="mb-2">
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

        <div className="mb-2">
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
        
        <div className="row text-center">
          <div className="col">

        <button
          type="submit"
          className="btn btn-primary " 
          style={{backgroundColor:"#20236D",border:"none"}}
          onClick={() => {
            // idchange();
            addnewuser({
              //id:id,
              name: name,
              email: email,
              phonenumber: phonenumber,
              address: address,
              website: websiteurl,
              company: companyname,
            });
          }}
        >
          Submit
        </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
