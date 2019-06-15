import React, { Component } from "react";
import "./styles.css";

class Die extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    const {
      idx,
      handleClick
    } = this.props;

    handleClick(idx);
  }

  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
