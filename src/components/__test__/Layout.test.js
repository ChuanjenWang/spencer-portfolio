import React from 'react';
import { shallow } from 'enzyme'; 

import Layout from '../Layout/Layout';
import BackTop from '../BackTop/BackTop';
import Footer from '../Layout/Footer/Footer';

let wrapped; 

describe('Layout Component Test', () => {
    beforeEach(() => {
        wrapped = shallow(<Layout />);
    });

    it('shows the BackTop component', () => {  
        expect(wrapped.find(BackTop).length).toEqual(1);
    });

    it('shows the Footer component', () => {  
        expect(wrapped.find(Footer).length).toEqual(1);
    });
});