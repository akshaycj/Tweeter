import React, { Component } from "react";
import "./index.css";
import Feeds from '../TimeLine'
import {Icon,Input} from 'antd'
import logo from '../../icons/twitter.png'
import queryString from 'query-string'


const Search = Input.Search;



export default class Home extends Component {

  constructor(props){
    super(props)

    this.state={
      data:[],
      type:'home',
      name:'You'
    }
  }

  componentDidMount(){

    const parsed = queryString.parse(this.props.location.search);

    console.log("params",parsed.name);

    this.setState({name:parsed.name})

    
  }

  searchQuery= (value)=>{
    console.log("q",value);
    
  }


  render() {
    return (
      <div >
        <div className="bar">
          <Icon type="twitter" style={{fontSize:32,alignSelf:'center'}} />
          
          <Search style={{maxWidth:180}} onSearch={this.searchQuery} />
        </div>
        <Feeds user="nodejs" name={this.state.name} />
      </div>
    );
  }
}
