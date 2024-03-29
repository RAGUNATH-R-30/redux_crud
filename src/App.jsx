import { useEffect, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Card";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setuser } from "./reducers/crudslice";
import Mymodal from "./Mymodal";
import Navbar from "./Navbar";
import "./App.css"



function App() {
const data = useSelector((state)=>state.app)
const dispatch = useDispatch();

let getData =async()=>{
  try {
    const userlist = await axios.get("https://6605376c2ca9478ea17fb6d1.mockapi.io/users")
    dispatch(setuser(userlist.data))
  } catch (error) {
    console.log(error)
  }
}

useEffect(()=>{
  if(data.userlist.length==0){
    getData()
    
  }
  
},[])

  return (
    <>
    {/* <Mymodal></Mymodal> */}
    <Navbar></Navbar>
      <div className="container-fluid" style={{backgroundColor: "#FOFOFO"}}>
        
        <div className="row">
          {/* <div className="col-lg-3 position">
            <Form></Form>

          </div> */}
          
{/* 
          <div className="col-lg-9"> */}
            
            <div className="container mt-4 ">
              <div className="row">
              {data.userlist.map((item,index)=>{
                return<Card content={item}key={index}/>
              })}
              </div>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
