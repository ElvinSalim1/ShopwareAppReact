import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar';
import ProductsItem from './components/products/ProductsItem';
import ProductViews from './views/products/ProductViews'
import Home from './views/Home'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className="min-height">
        <Switch>
          <Route exact path="/products" component={Home}/>
          <Route exact path="/products" component={ProductsItem}/>
          <Route exact path="/products/details/:id" component={ProductViews}/>
        </Switch>
      </div>
    </BrowserRouter>
  );

}

export default App;
