import React, { Component } from 'react';

import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home/Home';
import About from './components/Layout/About/About';
import Skills from './components/Layout/Skills/Skills';
import Portfolio from './components/Layout/Portfolio/Portfolio';
import Contact from './components/Layout/Contact/Contact';


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Layout>  
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </Layout>
      </div>
    );
  }
}

export default App;
