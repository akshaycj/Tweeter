import React, { Component } from 'react';

const store = {
    state :{
        profile:[],
    },
    update(cb) {
      this.state = cb(this.state);
    }
  };

const AppContext = React.createContext(store.state)

export const {Provider, Consumer} = AppContext


export default class DataProvider extends Component {

  constructor(props){
    super(props)

    this.state = {
      profile:[],
      get:'abc',
      store: (user) => {this.setState({profile:user}); console.log("done");
       }
    }
  }

  render() {

    return (
     <Provider value={store.state} >
       {this.props.children}
     </Provider>
    );
  }
}
