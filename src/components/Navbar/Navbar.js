import React from 'react';
import { Link } from 'react-scroll';

import classes from './Navbar.module.scss';

class Navbar extends React.Component {
    state = {
        scrollToTop: true
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
    }
    smoothScrollhandler = (e) => {
        e.preventDefault();
        const hash = e.target.hash;
        const elId = hash.substring(1, hash.length); 
        document.getElementById(elId).scrollIntoView({behavior: 'smooth', block: 'start'})
    }
    

    render() {
        const NavClasses = this.state.scrollToTop ? [classes.Navbar] : [classes.Navbar, classes.Scroll];
        const NavItemsClasses = this.state.scrollToTop ? [classes.NavbarItems] : [classes.NavbarItems, classes.ScrollItems];
        return (
            <div>
                <nav className={NavClasses.join(' ')}>
                    <div className="container">
                    <div className={NavItemsClasses.join(' ')}>
                        <div className={classes.NavbarItems__Logo}>SPENCER</div>
                        <div>
                            <ul>
                                {/* <li>
                                    <a href="#home" onClick={(event) => this.smoothScrollhandler(event)}>HOME</a>
                                </li>
                                <li>
                                    <a href="#about" onClick={(event) => this.smoothScrollhandler(event)}>ABOUT</a>
                                </li>
                                <li>
                                    <a href="#skills" onClick={(event) => this.smoothScrollhandler(event)}>SKILLS</a>
                                </li>
                                <li>
                                    <a href="#portfolio" onClick={(event) => this.smoothScrollhandler(event)}>PORTFOLIO</a>
                                </li>
                                <li>
                                    <a href="#contact" onClick={(event) => this.smoothScrollhandler(event)}>CONTACT</a>
                                </li> */}
                                <li><Link to="home" className={classes.NavbarItems__item} activeClass={classes.NavbarItems__active} spy={true} smooth={true} duration={800}>HOME</Link></li>
                                <li><Link to="about" className={classes.NavbarItems__item} activeClass={classes.NavbarItems__active} spy={true} smooth={true} duration={800} offset={-60}>ABOUT</Link></li>
                                <li><Link to="skills" className={classes.NavbarItems__item} activeClass={classes.NavbarItems__active} spy={true} smooth={true} duration={800} offset={-60}>SKILLS</Link></li>
                                <li><Link to="portfolio" className={classes.NavbarItems__item} activeClass={classes.NavbarItems__active} spy={true} smooth={true} duration={800} offset={-60}>PORTFOLIO</Link></li>
                                <li><Link to="contact" className={classes.NavbarItems__item} activeClass={classes.NavbarItems__active} spy={true} smooth={true} duration={800} offset={-60}>CONTACT</Link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}
    
export default Navbar;