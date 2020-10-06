// Component "set project name"

import React from 'react';

class DocumentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: '',
    }
  }

  render() {

    return (
      <div className="row">
        <p className="col-lg-2 set-inputText"> <b> Input {this.props.index} </b></p>
        <div className="col-lg-4 " >
          <label htmlFor="Input" className="searchText">Input Name <b style={{ color: 'red' }}>*</b></label>
          <br />
          <input type="text" className="set-inputField" placeholder="Project Name" autoComplete="off" required />
          <br />
        </div>

        <div className="col-lg-4 ml-4" >
          <label htmlFor="dropdownName" className="searchText">Input Type <b style={{ color: 'red' }}>*</b></label>
          <br />
          <select className="set-inputField">
            <option value="text" >Text</option>
            <option value="number" >Number</option>
            <option value="dropdown" >Dropdown</option>
          </select>
        </div>
      </div>
    )
  }
}


// Main Screen 
class SetProjectInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: [],
      count: 1,
    }

    this.add = this.add.bind(this);
  }

  add() {
    const documents = this.state.documents.concat(DocumentInput);
    this.setState({ documents });

  }

  render() {
    const documents = this.state.documents.map((Element, index) => {
      return <Element key={index} index={index + 5} />
    });
    return (
      <div className="container containerColor py-2">
        <DocumentInput index={this.state.count + 0} />
        <DocumentInput index={this.state.count + 1} />
        <DocumentInput index={this.state.count + 2} />
        <DocumentInput index={this.state.count + 3} />
        { documents}
        <div className="row">
          <button onClick={this.add} className="set-AddInput" >
            <img src="assets/images/plus.png" alt="plus-sign" className="image-box p-2" />
          </button>
          <p className=".set-addText mt-4" ><b>Add Input</b></p>
        </div>
      </div>
    )
  }
}
export default SetProjectInput








