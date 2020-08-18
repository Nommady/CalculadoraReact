import React from 'react';

import Main from './components/Main'
import {initialState} from './components/funcoes/funcoes'



class App extends React.Component{
  state=({...initialState})
  render(){

    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;
