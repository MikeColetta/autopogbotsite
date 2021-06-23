import React, { Component } from "react";
import "./App.css";
import FeaturedCarousel from './components/FeaturedCarousel';
import Homepage from './pages/Homepage';
import { Navbar, } from 'react-bootstrap/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="customNavbar">
          <h1 className="m-auto" style={{fontSize: "72px",}}>AutoPOGBot</h1>
          <br></br>
          {/* <p className="m-auto">Eef Freef</p>          */}
        </Navbar>
        <FeaturedCarousel className="mb-5"/>
        <br></br>
        <Homepage />
      </div>
    );
  }
}

export default App;
