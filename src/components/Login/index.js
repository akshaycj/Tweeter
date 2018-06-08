import React, { Component } from "react";
import "./index.css";
import logo from "../../icons/twitter.png";
import { Input, Button, message } from "antd";
import TwitterLogin from "react-twitter-auth";
import { Provider, auth } from "../../utils/config";
import Twit from "twit";
import { Redirect } from "react-router-dom";
import { Consumer } from "../../DataProvider";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      user: []
    };
  }
  componentDidMount() {}

  onSign = () => {
    console.log("aaas");
    var that = this;

    auth
      .signInWithPopup(Provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var secret = result.credential.secret;
        var user = result.user;

        var data = result.additionalUserInfo;

        message.success("Success!");

        that.setState({ user: data.profile, auth: true });

        console.log("user", data);
      })
      .then(function(data) {
        var then = that;
      })
      .catch(function(error) {});
  };

  render() {
    return (
      <div className="main">
        <div className="container">
          <img src={logo} width="60px" height="60px" />
          <div>
            <Button type="primary" onClick={this.onSign}>
              Connect to Twitter
            </Button>
          </div>
        </div>
        {this.state.auth ? (
          <Redirect to={"/home/user?name=" + this.state.user.username} />
        ) : null}
      </div>
    );
  }
}
