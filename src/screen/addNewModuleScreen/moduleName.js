// Module Name Screen

import React, { Component } from 'react';

export default class ModuleName extends Component {
  render() {
    return (
      <div className="container p-4  containerColor" > 
        <div className="inputBoxContainer input-margin">
             <label htmlFor="fname" className="searchText">Module Name <b style={{color:'red'}}>*</b></label>
             <br />
             <input type="text" id="searchId" name="searchId" className="boxInput" placeholder="Enter Short ID to search" autoComplete="off" required/>
             <br />
          </div>
          <div className="inputBoxContainer input-margin" >
             <label htmlFor="fname" className="searchText">Module Picture</label>
             <br />
             <input type="text" id="modulePic" name="modulePic" className="boxInput mb-3" style={{backgroundImage:'url(assets/images/upload.png)'}} placeholder="Enter Short Id to search" autoComplete="off" />
             <br />
           </div>
      </div>  
    );
  }
}
