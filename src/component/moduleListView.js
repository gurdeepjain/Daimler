// Component of module setup screen

import React from 'react'

function ListView(props) {
   const { noIcon } = props
   return (
      <div className="container">
         <div id="list" className="listContainer">
            <p style={{ fontSize: 13 }}> <b>{props.Name}</b></p>
            <div>
               <select name="list" id="list" className="dropdownContainer">
                  <option value="Active" className="dropdownList">Active</option>
                  <option value="InActive" className="dropdownList">In-Active</option>
               </select>

               {/* conditional rendering */}
               {
                  noIcon ? null
                     :
                     <> 
                        <img src="assets/images/edit.png" alt="edit" style={editImage} />
                        <img src="assets/images/delete.png" alt="delete" style={deleteImage} />
                     </>
               }
            </div>
         </div>
      </div>
   )
}
export default ListView




const editImage = {
   width: 17, 
   height: 17, 
   marginLeft: 50, 
   paddingBottom: 1 
},
deleteImage = {
   width: 14, 
   height: 16, 
   marginLeft: 20, 
   paddingBottom: 1
}

