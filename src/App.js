import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import AboutUs from './components/Information/AboutUs';
import FAQ from './components/Information/FAQ';
import Shipping from './components/Information/Shipping';
import Help from './components/Information/Help';
import Terms_Conditions from './components/Information/Terms_Conditions';
import Privacy from './components/Information/Privacy';
import Blog from './components/Information/Blog';
import Calendar from './components/Information/Calendar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <React.Fragment> 

        <Navbar />
        <Switch>
          <Route exact path = "/" component={Home}></Route>
          <Route path="/products" component={ProductList} > </Route>
          <Route path="/details" component={Details} > </Route>
          <Route path="/cart" component={Cart} > </Route>
          <Route path="/aboutus" component={AboutUs} > </Route>
          <Route path="/faq" component={FAQ} > </Route>
          <Route path="/shipping" component={Shipping} > </Route>
          <Route path="/help" component={Help} > </Route>
          <Route path="/terms" component={Terms_Conditions} > </Route>
          <Route path="/privacy" component={Privacy} > </Route>
          <Route path="/calendar" component={Calendar} > </Route>
          <Route path="/blog" component={Blog} > </Route>
          <Route  component={Default} > </Route>

        </Switch>
        <Footer />
        <Modal />
        
      </React.Fragment>

    );
  }
}

export default App;
