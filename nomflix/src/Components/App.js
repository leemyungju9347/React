import React, { Component,Fragment } from 'react';
import Router from 'Components/Router';
import { Helmet } from 'react-helmet-async'
import GlobalStyles from 'Components/GlobalStyles';



class App extends Component {
  render() {
    return (
      <>
        <Router/>
        <GlobalStyles />
        <Helmet/>
      </>
    );
  }
}

export default App;