import React, { Component } from 'react';

import './App.scss';
import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home/Home';
import About from './components/Layout/About/About';
import Skills from './components/Layout/Skills/Skills';
import Portfolio from './components/Layout/Portfolio/Portfolio';
import Contact from './components/Layout/Contact/Contact';


class App extends Component {
  
  state = {
    loading: true,
    photoLoad: false
  }

  // componentDidMount() {
  //   //this.setState({ loading: false });
  //   //window.addEventListener('load', this.loadHandler);
  //   //console.log('Home componentDidMount');
  // };
  
  // componentWillUnmount() {
  //   //window.removeEventListener('load', this.loadHandler);
  // };

  // closeLoaderHandler = () => {
  //   //console.log('All resources finished loading!');
  //   //setTimeout(() => this.setState({ loading: false }), 1500);
  //   this.setState({ loading: false });
  // }
 

  render() {
    const renderApp = <div className="App">
                      <Layout>
                        <Home load={this.closeLoaderHandler}/>
                        <About />
                        <Skills />
                        <Portfolio />
                        <Contact />
                      </Layout>  
                      </div>
    //this.state.loading ? <div className="Loading"></div> :
    return (
      <div>
        {renderApp}
      </div>
    );
  }
}

export default App;
