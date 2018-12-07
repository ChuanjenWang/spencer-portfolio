import React from 'react';
import { Link } from 'react-scroll';

import classes from './LinkMenu.module.scss';

const LinkMenu = (props) => {
    const LinkMenuClass = props.show ? [classes.LinkMenu, classes.Expanded] : [classes.LinkMenu];
    return (
        <div className={LinkMenuClass.join(' ')}>
            <ul>
                <li><Link to="home" className={classes.LinkMenu__item} 
                                                            activeClass={classes.LinkMenu__active} 
                                                            spy={true} 
                                                            smooth={true} 
                                                            duration={800}
                                                            onClick={props.clicked} >
                                                            HOME</Link></li>
                <li><Link to="about" className={classes.LinkMenu__item} 
                                                             activeClass={classes.LinkMenu__active} 
                                                             spy={true} 
                                                             smooth={true} 
                                                             duration={800} 
                                                             offset={-60}
                                                             onClick={props.clicked} >ABOUT</Link></li>
                <li><Link to="skills" className={classes.LinkMenu__item} 
                                                              activeClass={classes.LinkMenu__active} 
                                                              spy={true} 
                                                              smooth={true} 
                                                              duration={800} 
                                                              offset={-60}
                                                              onClick={props.clicked} >SKILLS</Link></li>
                <li><Link to="portfolio" className={classes.LinkMenu__item} 
                                                                 activeClass={classes.LinkMenu__active} 
                                                                 spy={true} 
                                                                 smooth={true} 
                                                                 duration={800} offset={-60}
                                                                 onClick={props.clicked} >PORTFOLIO</Link></li>
                <li><Link to="contact" className={classes.LinkMenu__item} 
                                                               activeClass={classes.LinkMenu__active} 
                                                               spy={true} 
                                                               smooth={true} 
                                                               duration={800} offset={-60}
                                                               onClick={props.clicked} >CONTACT</Link></li>
            </ul>
        </div>
    )
}

export default LinkMenu;