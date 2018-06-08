import React, { Component } from "react";
import "./index.css";
import Feeds from "../TimeLine";
import { Icon, Input } from "antd";
import logo from "../../icons/twitter.png";
//import queryString from 'query-string'

const Search = Input.Search;

const s_url = "https://tweeter-cj.herokuapp.com/s?search=";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      type: "home",
      name: "You",
      search: false
    };
  }

  componentDidMount() {
    // const parsed = queryString.parse(this.props.location.search);
    // console.log("params",parsed.name);
    // this.setState({name:parsed.name})
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("made");

    console.log("hello", nextProps.location.search.name);
    return null;
  }

  searchQuery = value => {
    this.setState({ search: true });
    var that = this;

    fetch(s_url + value)
      .then(function(data) {
        
        
        return data.json();
      })
      .then(function(data) {
        that.setState({ data });
        console.log("data",data);
      });
  };

  render() {
    return (
      <div>
        <div className="bar">
          <div style={{ display: "flex" }}>
            <Icon
              type="twitter"
              style={{ fontSize: 32, alignSelf: "center" }}
            />
            <div
              style={{ alignSelf: "center", marginLeft: 10, color: "white" }}
            >
              <b>TweeteR</b>
            </div>
          </div>
          <Search style={{ maxWidth: 160 }} onSearch={this.searchQuery} />
        </div>
        <Feeds
          user="nodejs"
          name={this.state.name}
          search={this.state.search}
          s_data={this.state.data}
        />
      </div>
    );
  }
}
