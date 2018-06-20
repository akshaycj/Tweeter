import React, { Component } from "react";
import "./index.css";
import { Timeline } from "react-twitter-widgets";
import Chips from "../Chips";
import { Badge, Spin } from "antd";
import { stat } from "fs";
import Tweets from "../Tweets";
import { connect } from "react-redux";
import { getUser } from "../../utils/reducers";
import Chip from '../Chip'


//"http://tachyons.io/img/avatar_1.jpg"



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name:'',
      photo:'',
      source: this.props.user,
      loading: this.props.search ? false : true,
      search: this.props.search,
      s_data: this.props.s_data,
      uName:''
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("pp", nextProps.user.username);

    this.setState({
      search: this.props.search,
      s_data: this.props.s_data,
      source: nextProps.user.username,
      name: nextProps.user.profile.name,
      photo:nextProps.user.profile.profile_image_url,
      uName:nextProps.user.username,

    });
  }

  onItemClick = () => {
    console.log("eee");
    
  }

  onLoadd = () => {
    console.log("loaded");

    this.setState({ loading: false });
  };

  onSelect = val => {
    
    var source = val

    this.setState({ source , loading: true, search: false });

  };

  onUser = val =>{
    this.setState({ source:this.state.uName , loading: true, search: false });
  }

  render() {
    return (
      <div className="home-main">
        <div className="data">
          <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
            <div class="tc">
              <img
                src={this.state.photo||"http://tachyons.io/img/avatar_1.jpg"}
                class="br-100 h4 w4 dib ba b--black-05 pa2"
                title="Photo of a kitty staring at you"
              />
              <h1 class="f3 mb2">{this.state.name} </h1>
              <Chip title="User" type="user" onChange={this.onUser} />
            </div>
          </article>
        </div>
        <Chips onChange={this.onSelect} />

        <Spin spinning={this.state.loading} />

        {!this.state.search ? (
          <Timeline
            dataSource={{
              sourceType: "profile",
              screenName: this.state.source
            }}
            options={{
              username: "TwitterDev",
              width: 1200
            }}
            onLoad={this.onLoadd}
            onClick={this.onItemClick}
          />
        ) : (
          <Tweets ids={this.props.s_data} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ getUser }) => ({
  user: getUser.user
});

export default connect(
  mapStateToProps,
  null
)(App);
