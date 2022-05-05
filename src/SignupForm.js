import React,  {Component} from  "react";

class SignupForm extends Component;
state = { value: "" };
 handleChange = (event) => {
     this.setState({value: event.target.value)});
 }
 render() {
   return (
    <label htmlFor="name">Name:
      <input
         id="name"
         name="name"
         onChange={this.handleChange}/>
    </label>
   );
   }
  }
  export default SignupForm;