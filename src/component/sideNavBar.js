// side navigation bar of role and access screen

import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class SideNavBar extends Component {
    render() {
        return (
            <div className="col-md-2" >
                <div style={body}>
                    <nav className="nav flex-column" style={itemList}>
                        <Link className="nav-link active" style={itemStyle} to="/"><img src="assets/images/team.png" alt="Role" style={roleImg} ></img>Roles</Link>
                        <Link className="nav-link" to="/accessCredential" style={itemStyle1}><img src="assets/images/lock.png" alt="lock" style={lockImg} ></img>Access Credential</Link>
                    </nav>
                </div>
            </div>
        );
    }
}

const body = {
    backgroundColor: "#F5F5F5",
    height: "100%",
},

    itemList = {
        paddingTop: 100
    },

    itemStyle = {
        color: '#A0A7B4',
        fontSize: 14,
    },

    itemStyle1 = {
        color: '#A0A7B4',
        fontSize: 14,
    },
    roleImg = {
        width: 17,
        height: 14.5,
        marginRight: 10
    },
    lockImg = {
        width: 11,
        height: 14,
        marginRight: 10
    }
