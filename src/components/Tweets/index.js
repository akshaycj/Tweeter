import React, { Component } from "react";

import { Tweet } from "react-twitter-widgets";

export default class extends Component {
  render() {
    const ids = this.props.ids;
    const items = [];
    for (let i = 0; i < ids.length; i++) {
      items.push(<Tweet tweetId={ids[i]} />);
    }
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto"
        }}
      >
        {items}
      </div>
    );
  }
}
