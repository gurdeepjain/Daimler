// Module Setup screen

import React, { Component } from "react";
import ListView from "../component/moduleListView";
import { Link } from "react-router-dom";

export default class ModuleScreen extends Component {
  render() {
    return (
      <div>
        <div className="container mt-4">
          <p className="float-left module-text">
            <b>Module</b>
          </p>
          <Link to={"/addNewModule"}>
            <p className="float-right ml-2 add-Text">Add New Module</p>
            <div className="float-right image-box">
              <img src="assets/images/plus.png" alt="plus-sign" className="p-2" />
            </div>
          </Link>
        </div>
        <br />
        <div className="container moduleInputBox pb-2">
          <div className="inputBox-container">
            <label htmlFor="fname" className="searchText"> Search by short ID </label>
            <br />
            <input type="text" className="inputText" placeholder="Enter Short Id for search" />
            <br />
          </div>
        </div>

        <div className="container mt-3">
          <p className="float-right ml-2 add-Text">Download this List</p>
          <div className="float-right image-box">
            <img src="assets/images/download.png" alt="plus-sign" className="p-2" />
          </div>
        </div>

        <div className="container row statusText">
          <p className="col-sm-9 aggregateText float-left"> Aggregate</p>
          <p className=" col-sm-3 aggregateText float-right ">Status</p>
        </div>


{/* use listView Component   */}
        <div className="container">
          <ListView Name={"Fuso Value Part"}/>
          <ListView Name={"Accessories Parts"} />
          <ListView Name={"Reman Parts"} />
          <ListView Name={"Child Part Development"} />
          <ListView Name={"Engine Variant Optimization"} />
        </div>
      </div>
    );
  }
}
