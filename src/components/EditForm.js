import React, { Component } from "react";

class EditForm extends Component {
  state = {
    newName: ""
  };

  render() {
    return (
      <div>
        <p>
          Name: <input type="text" value={""} onChange={""} />
        </p>
        <button onClick={this.props.handleSubmitBUtton}>Submit</button>
      </div>
    );
  }
}

export default EditForm;
