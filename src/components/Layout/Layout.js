import React from 'react';

import BackTop  from '../BackTop/BackTop';
//import Header from '../Header/Header';

const Layout = (props) => (
    <div>
        <BackTop />
        <div>
            {props.children}
        </div>
    </div>
)

export default Layout;
