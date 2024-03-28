import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteuser } from "./reducers/crudslice";
import Mymodal from "./Mymodal";
function Card({ content }) {

  const dispatch = useDispatch();
  const [showmodal,setshowmodal]=useState(false)
  console.log(content)
  
  let deleteuserapi =async(id)=>{
    try {
      const deleteuserrequest = await axios.delete(`https://6605376c2ca9478ea17fb6d1.mockapi.io/users/${id}`)

    } catch (error) {
      console.log(error)
    }
   
  }

  let modalclose=(bool)=>{
    setshowmodal(bool)
  }
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card mb-2" style={{ fontFamily: "sans-serif" ,fontSize:14}}>
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
              <button type="submit" className="btn btn-primary btn-sm" style={{width:100,}}onClick={()=>setshowmodal(true)}>
                Edit
              </button>
            </div>
            <div className="col-6 text-center">
              <button type="submit" className="btn btn-primary btn-sm" style={{width:100,}}onClick={()=>{
                deleteuserapi(content.id);
                dispatch(deleteuser(content))
              }}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      {showmodal&&<Mymodal content={content} modalclose={modalclose}/>}
    </div>
    
  );
}

export default Card;

