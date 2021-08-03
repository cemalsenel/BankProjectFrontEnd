import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import Header from "./header/Header"
import Footer from "./footer/Footer"
import Home from "./home/Home"
import About from './about/About';
import Register from './register/Register';
import Login from './login/Login';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
