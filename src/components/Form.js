import React, { Component } from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.getForecast}>
          {/*onSubmit allows me to accept inputs 
        and from these inputs i can get my json file 
        due to props and async function getForecast */}
          <input type="text" name="city" placeholder="Your city..." />
          <input type="text" name="country" placeholder="Your country..." />
          <button>Get forecast</button>
        </form>
      </div>
    );
  }
}

export default Form;

{
  /*Most components can be customized when they are created, with different parameters. 
These creation parameters are called props*/
}
