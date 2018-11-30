import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'; 

import App from './App';
import Layout from './components/Layout/Layout';
import Home from './components/Layout/Home/Home';
import About from './components/Layout/About/About';
import Skills from './components/Layout/Skills/Skills';
import Portfolio from './components/Layout/Portfolio/Portfolio';
import Contact from './components/Layout/Contact/Contact';

let wrapped; 

describe('App Component Test', () => {
beforeEach(() => {
  wrapped = shallow(<App />);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('shows the layout component', () => {  
  expect(wrapped.find(Layout).length).toEqual(1);
});

it('shows the Home component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Home).length).toEqual(1);
});

it('shows the About component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(About).length).toEqual(1);
});

it('shows the Skills component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Skills).length).toEqual(1);
});

it('shows the Portfolio component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Portfolio).length).toEqual(1);
});

it('shows the Footer component', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(Contact).length).toEqual(1);
});

});
