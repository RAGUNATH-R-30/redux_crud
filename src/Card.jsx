import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteuser } from "./reducers/crudslice";
import Mymodal from "./Mymodal";
import { toast } from "react-toastify";
import DeleteModal from "./DeleteModal";
function Card({ content }) {
  const dispatch = useDispatch();
  const [showmodal, setshowmodal] = useState(false);
  const [deletemodal, setdeletemodal] = useState(false);


  let deleteuserapi = async (id) => {
    try {
      const deleteuserrequest = await axios.delete(
        `https://6605376c2ca9478ea17fb6d1.mockapi.io/users/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  let modalclose = (bool) => {
    setshowmodal(bool);
  };

  let deletemodalclose = (bool) => {
    setdeletemodal(bool);
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div
        className="card mb-2"
        style={{
          fontFamily: "sans-serif",
          fontSize: 14,
          backgroundColor: "white",
        }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <p>Name:</p>
            </div>
            <div className="col-6">
              <p>{content.name}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Email:</p>
            </div>
            <div className="col-6">
              <p>{content.email}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>PhoneNumber:</p>
            </div>
            <div className="col-6">
              <p>{content.phonenumber}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Address:</p>
            </div>
            <div className="col-6">
              <p>{content.address}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>CompanyName:</p>
            </div>
            <div className="col-6">
              <p>{content.company}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>WebsiteUrl:</p>
            </div>
            <div className="col-6">
              <p>{content.website}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-sm"
                style={{
                  width: 100,
                  backgroundColor: "#66C6BA",
                  border: "none",
                }}
                onClick={() => setshowmodal(true)}
              >
                Edit
              </button>
            </div>
            <div className="col-6 text-center">
              <button
                type="submit"
                className="btn btn-outline-danger btn-sm"
                style={{ width: 100 }}
                onClick={() => {
                  setdeletemodal(true);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {showmodal && <Mymodal content={content} modalclose={modalclose} />}
      {deletemodal && (
        <DeleteModal content={content} deletemodalclose={deletemodalclose} />
      )}
    </div>
  );
}

export default Card;
