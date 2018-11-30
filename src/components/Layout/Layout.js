import React from 'react';

import BackTop  from '../BackTop/BackTop';
import Footer from '../Layout/Footer/Footer';

const Layout = (props) => (
    <div>
        <BackTop />
        <div>
            {props.children}
        </div>
        <Footer />
    </div>
)

export default Layout;
