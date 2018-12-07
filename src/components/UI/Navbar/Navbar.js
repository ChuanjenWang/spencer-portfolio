import React from 'react';

import classes from './Navbar.module.scss';
import ToggleMenu from '../ToggleMenu/ToggleMenu';
import LinkMenu from '../LinkMenu/LinkMenu';

class Navbar extends React.Component {
    state = {
        scrollToTop: true,
        showMobileMenu: false
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollHandler);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    };

    scrollHandler = () => {
        const startScroll = window.scrollY;
        if(startScroll > 0) {
            this.setState({scrollToTop :false})
        }else {
            this.setState({scrollToTop :true})
        }
    };

    clickToggleMenuHandler = () => {
        this.setState(preState => {
            return {showMobileMenu: !preState.showMobileMenu}
        });
    };

    closeMobileMenuHandler = () => {
        if(this.state.showMobileMenu) {
            this.setState({showMobileMenu: false})
        }
    };
    
    render() {
        const NavClasses = this.state.scrollToTop ? [classes.Navbar] : [classes.Navbar, classes.Scroll];
        const NavItemsClasses = this.state.scrollToTop ? [classes.NavbarItems] : [classes.NavbarItems, classes.ScrollItems]; 
        return (
            <div>
                <nav className={NavClasses.join(' ')}>
                    <div className={classes.NavbarContainer}>
                    <div className={classes.NavbarHeader}>
                        <div className={NavItemsClasses.join(' ')}>
                            <div className={classes.NavbarItems__Logo}>SPENCER</div>       
                            <div className={classes.NavbarItems__togglemenu}>
                                <ToggleMenu show={this.state.showMobileMenu} clicked={this.clickToggleMenuHandler} />
                            </div>
                        </div>
                    </div>
                    <div className={classes.NavLink}>
                        <LinkMenu show={this.state.showMobileMenu} clicked={this.closeMobileMenuHandler} />    
                    </div>  
                    </div>
                </nav>
            </div>
        )
    }
}
    
export default Navbar;