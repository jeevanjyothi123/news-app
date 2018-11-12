import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Newschannel from './components/newschannel';
import Bbcnews from './components/bbcnews';
import Bloomberg from './components/bloomberg';
import Cnbc from './components/cnbc';
import Cnn from './components/cnn';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
     <Switch>
        <Route path="/" exact component={Newschannel} />
        <Route path="/cnn" exact component={Cnn} />
        <Route path="/cnbc" exact component={Cnbc} />
        <Route path="/bloomberg" exact component={Bloomberg} />
        <Route path="/bbc-news" exact component={Bbcnews} />
    </Switch>
     </BrowserRouter>
    );
  }
}
{/* <img src={logo} className="App-logo" alt="logo" /> */}

export default App;
