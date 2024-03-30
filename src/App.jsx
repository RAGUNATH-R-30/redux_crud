import { useEffect, useState } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import Card from "./Card";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setuser } from "./reducers/crudslice";
import Mymodal from "./Mymodal";
import Navbar from "./Navbar";
import "./App.css";

//This is the main app function.
function App() {
  const data = useSelector((state) => state.app);
  const dispatch = useDispatch();

  //this function gets the data from api.
  let getData = async () => {
    try {
      const userlist = await axios.get(
        "https://6605376c2ca9478ea17fb6d1.mockapi.io/users"
      );
      dispatch(setuser(userlist.data));
    } catch (error) {
      console.log(error);
    }
  };

  //this useeffect only loads onetime when the page loads at first and stores the result in the store.
  useEffect(() => {
    if (data.userlist.length == 0) {
      getData();
    }
  }, []);

  if (data.userlist.length == 0) {
    console.log("asdsad");
  }

  return (
    <>
      <Navbar></Navbar>
      {data.userlist.length == 0 ? (
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <div style={{ height: 200 }}>
              <img
                src="https://img.freepik.com/free-vector/hand-drawn-no-data-illustration_23-2150696458.jpg?size=338&ext=jpg&ga=GA1.1.1827530304.1709510400&semt=ais"
                alt="Error"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <h3>No Users Found!!</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid" style={{ backgroundColor: "#FOFOFO" }}>
          <div className="row">
            <div className="container mt-4 ">
              <div className="row">
                {data.userlist.map((item, index) => {
                  return <Card content={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
