import React, { Component } from "react";
import Input from "./components/input.jsx";
import Button from "./components/button.jsx";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  handleKeyUp = (event) => {
    if(13 === event.keyCode) {
      let value = event.target.value;
      if(!value) return false;

      event.target.value = "";
      this.props.addOne(value);
    }
  }
  handleClick = (event) => {
    let value = this.textInput.value;
    if(!value) {
      return this.textInput.focus();
    } else {
      this.textInput.value = "";
      this.props.addOne(value);
    }
  }
  render() {
    return (
      <div>
        <Input inputRef={input=>{this.textInput=input}} handleKeyUp={this.handleKeyUp}></Input>
        <Button className="primary" text="Add" handleClick={this.handleClick}></Button>
      </div>
    )
  }
}

export default Header;