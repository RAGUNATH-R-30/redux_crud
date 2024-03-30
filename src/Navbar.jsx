import React, { useState } from "react";
import Createmodal from "./Createmodal";

function Navbar() {
  const [showmodal, setshowmodal] = useState(false);
  let modalclose = (bool) => {
    setshowmodal(bool);
  };
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#649DAD" }}
    >
      <div className="container-fluid" style={{ backgroundColor: "#649DAD" }}>
        <span
          className="navbar-brand"
          style={{ backgroundColor: "#649DAD", color: "#FEFDED" }}
        >
          Users Dashboard
        </span>
        <button
          className="btn btn-success"
          style={{ backgroundColor: "#20236D", border: "none" }}
          type="submit"
          onClick={() => setshowmodal(true)}
        >
          Create User
        </button>
      </div>
      {showmodal && <Createmodal modalclose={modalclose} />}
    </nav>
  );
}

export default Navbar;
