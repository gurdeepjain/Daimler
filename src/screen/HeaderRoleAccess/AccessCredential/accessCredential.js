import React, { Component } from 'react';
import SideNavBar from '../../../component/sideNavBar'
import './accessCredential.css'
import { Link } from 'react-router-dom'

// json data
const user = [
    { id: 1, fName: "Gurdeep", lName: "Jain", sId: "Kuma", Email: "jaingurdeep@gmail.com", Company: "BMW", Department: "IT", Function: "Developer", Module: "IT", Role: "Admin" },
    { id: 2, fName: "Akshay", lName: "kumar", sId: "Kuma", Email: "akshayrajput@gmail.com", Company: "BMW", Department: "Digitalization", Function: "Fuso", Module: "IT", Role: "Admin" },
    { id: 2, fName: "Rohit", lName: "Rajput", sId: "Kuma", Email: "akshayrajput@gmail.com", Company: "BMW", Department: "Digitalization", Function: "Fuso", Module: "IT", Role: "Admin" },
    { id: 2, fName: "Akshay", lName: "kumar", sId: "Kuma", Email: "akshayrajput@gmail.com", Company: "BMW", Department: "IT", Function: "Fuso", Module: "IT", Role: "Admin" },
]

export default class AccessCredential extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div id="access">
                <div className="row">
                    <SideNavBar />
                    <div id="role" className="col-lg boxMargin" >
                        <div className="container mt-4">
                            <p className="float-left role-text">
                                <b>Access Credential</b>
                            </p>
                            <Link to="/accessAddRole">
                                <p className="float-right ml-2 add-Text">Add Role</p>
                                <div className="float-right image-box">
                                    <img src="assets/images/plus.png" alt="plus-sign" className="p-2" />
                                </div>
                            </Link>
                        </div>
                        <br />
                        <div className="container moduleInputBox ">
                            <div className="inputBox-container">
                                <label htmlFor="fname" className="searchText"> Search by short ID </label>
                                <br />
                                <input type="text" className="inputText" placeholder="Enter Short ID to search" />
                                <br />
                            </div>
                        </div>

                        <div className="container mt-3">
                            <p className="float-right ml-2 add-Text">Download this List</p>
                            <div className="float-right image-box">
                                <img src="assets/images/download.png" alt="plus-sign" className="p-2" />
                            </div>
                        </div>

                        <table className="container containerList mb-4">
                            <thead>
                                <tr className="col-lg">
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Short Id</th>
                                    <th>Email</th>
                                    <th>Company</th>
                                    <th>Department</th>
                                    <th>Function</th>
                                    <th>Module</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            {user.map(item => (
                                <tbody>
                                    <tr id="item">
                                        <td> {item.fName} </td>
                                        <td> {item.lName} </td>
                                        <td> {item.sId} </td>
                                        <td> {item.Email} </td>
                                        <td> {item.Company} </td>
                                        <td> {item.Department} </td>
                                        <td> {item.Function} </td>
                                        <td> {item.Module} </td>
                                        <td> {item.Role} </td>
                                        <td><img src="assets/images/edit.png" alt="edit" className="editImage" />
                                            <img src="assets/images/delete.png" alt="delete" className="deleteImage" />
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
