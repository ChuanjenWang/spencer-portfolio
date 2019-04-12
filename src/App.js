import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

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
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  };

  render() {
    const loaderWrapCalss = this.state.loading ? ['LoaderWrap'] : ['LoaderWrap', 'FadeOut'];
    const loading =  <div className={loaderWrapCalss.join(' ')}><div className='Loader'></div></div>;
    
    return (
      <div className="App">
        <Helmet>
          <meta property="og:title" content="Spencer Wang Portfolio"/>
          <meta property='og:image' content={require('./images/origin/banner-adventure.jpg')}/>
          <meta property='og:description' content="Description that will show in the preview"/>
          <meta property='og:url' content="https://spencerwang.netlify.com/" />
        </Helmet>
        {loading}
        <Layout>
          <Home load={this.closeLoaderHandler}/>
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
