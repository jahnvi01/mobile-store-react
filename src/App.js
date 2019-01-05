import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Prolist from './components/Prolist';
import Cart from './components/Cart';
import Detail from './components/Detail';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
    <div className="wrapper">
    <Navbar />
    <Switch>

      <Route exact path="/" component={Prolist} />

      <Route path="/cart" component={Cart} /> 
      <Route path="/details" component={Detail} />
    </Switch>
    
    </div>
    );
  }
}

export default App;
