import React, { Component } from 'react';

import {Consumer} from './DataProvider';

class Test extends Component {

  constructor(props){
    super(props)

 
  }

  render() {

    return (
      <div >
       <Consumer>
           {(context) => (<div>{context.get}</div>)}
       </Consumer>
      </div>
    );
  }
}

export default Test;
