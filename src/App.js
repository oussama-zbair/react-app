import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout } from './components';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
    </div>
  );
}

export default App;
