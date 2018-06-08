import React, { Component } from "react";
import "./index.css";
import { Timeline } from "react-twitter-widgets";
import Chips from "../Chips";
import { Badge,Spin } from "antd";
import { stat } from "fs";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: this.props.user,
      loading: true
    };
  }

  onLoadd = () => {
    console.log("loaded");
    
    this.setState({ loading: false });
  };

  onSelect = val => {
    console.log("val", val);
    this.setState({ source: val, loading: true });
  };

  render() {
    return (
      <div className="home-main">
        <div className="data">
          <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
              <img
                src="http://tachyons.io/img/avatar_1.jpg"
                class="br-100 h4 w4 dib ba b--black-05 pa2"
                title="Photo of a kitty staring at you"
              />
              <h1 class="f3 mb2">{this.props.name} </h1>
              <h2 class="f5 fw4 gray mt0">CCO (Chief Cat Officer)</h2>
            </div>
          </article>
        </div>
        <Chips onChange={this.onSelect} />

        <Spin spinning={this.state.loading}  />

        <Timeline
            id="abc"
            dataSource={{
              sourceType: "profile",
              screenName: this.state.source
            }}
            options={{
              username: "TwitterDev",
              width: 1200
            }}
            onLoad={this.onLoadd}
          />

      </div>
    );
  }
}