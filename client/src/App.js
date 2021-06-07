import React, { Component } from "react";
import "./App.css";
import FeaturedCarousel from './components/FeaturedCarousel';
import Homepage from './pages/Homepage';
import Navbar from 'react-bootstrap/Navbar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="customNavbar">
          <h1 className="m-auto" style={{fontSize: "72px"}}>AutoPOGBot</h1>
        </Navbar>
        <FeaturedCarousel />
        <Homepage />
      </div>
    );
  }
}

export default App;
