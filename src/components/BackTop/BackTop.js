import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import classes from './BackTop.module.scss';

class BackTop extends React.Component {
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
        const h = window.innerHeight
        const startScroll = window.scrollY;

        if(startScroll > h - 100) {
            this.setState({scrollToTop :false})
        }else {
            this.setState({scrollToTop :true})
        }
    }
    
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render () {
        const BackTopClasses = this.state.scrollToTop ? [classes.BackTop] : [classes.BackTop, classes.Show];
        return (
            <div className={BackTopClasses.join(' ')} onClick={this.scrollToTop}>
                <i className={classes.BackTop__icon}>
                    <svg className={classes.BackTop__iconsvg} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <title>chevron-up</title>
                        <path d="M6.582 12.141c-0.271 0.268-0.709 0.268-0.978 0s-0.272-0.701 0-0.969l3.908-3.83c0.27-0.268 0.707-0.268 0.979 0l3.908 3.83c0.27 0.267 0.27 0.701 0 0.969s-0.709 0.268-0.979 0l-3.42-3.141-3.418 3.141z"></path>
                    </svg>
                    
                </i>
            </div>
        )
    }
}

export default BackTop;