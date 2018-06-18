import React, { Component } from "react";
import "./index.css";
import logo from "../../icons/twitter.png";
import { Input, Button, message } from "antd";
import TwitterLogin from "react-twitter-auth";
import { Provider, auth } from "../../utils/config";
import Twit from "twit";
import { Redirect } from "react-router-dom";
import { Consumer } from "../../DataProvider";
import { connect } from "react-redux";
import { setUser } from "../../utils/reducers";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: false,
      user: []
    };
  }
  componentDidMount() {}

  async getdata() {
    var that = this;

    function onSuccess(result) {
      var token = result.credential.accessToken;
      var secret = result.credential.secret;
      var user = result.user;

      var data = result.additionalUserInfo;

      console.log("user", data);

      message.success("Success!");

      that.setState({ user: data.profile, auth: true });

      console.log("auth", that.state.auth);

      that.props.onUser(data);
    }

    try {
      const authData = await auth.signInWithPopup(Provider);

      return onSuccess(authData);
    } catch (error) {}
  }

  onSign = () => {
    this.getdata();
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
        {this.state.auth ? <Redirect to={"/home"} /> : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onUser: user => {
    dispatch(setUser(user));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
