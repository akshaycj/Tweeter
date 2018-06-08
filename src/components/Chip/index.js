import React, { Component } from "react";
import "./index.css";
import {Icon} from 'antd'



export default class extends Component {

    onSelect= ()=>{
      var data = this.props.type;
      this.props.onChange(data);
    }
  
  
    render() {
      return (
        <div className="chip-main" onClick={this.onSelect} >
          <Icon type={this.props.type} />  {this.props.title}
        </div>
      );
    }
  }