import React, { Component } from "react";
import "./index.css";
import Chip from "../Chip";

export default class extends Component {
  onSelect = val => {
    this.props.onChange(val);
  };

  render() {
    const data = [
      {
        title: "Github",
        type: "github"
      },
      {
        title: "Youtube",
        type: "youtube"
      },
      {
        title: "Twitter",
        type: "twitter"
      },
      {
        title: "Google",
        type: "google"
      },
      {
        title: "Android",
        type: "android"
      },
      {
        title: "Amazon",
        type: "amazon"
      },
      {
        title: "CodePen",
        type: "codepen"
      },
      {
        title: "Facebook",
        type: "facebook"
      }
    ];

    const items = data.map(item => (
      <Chip title={item.title} type={item.type} onChange={this.onSelect} />
    ));

    return <div className="chips-main">{items}</div>;
  }
}
