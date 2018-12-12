import React from 'react';

import classes from './Backdrop.module.scss';

class Backdrop extends React.Component  
{
    state = {
        clientY: 0
    }

    componentDidMount() {
        const backdrop = document.getElementById('backdrop');
        backdrop.addEventListener('touchstart', this.touchStartHandler, false);
        backdrop.addEventListener('touchmove', this.touchMoveHandler, false);
    };
      
    componentWillUnmount() {
        const backdrop = document.getElementById('backdrop');
        backdrop.removeEventListener('touchstart', this.touchStartHandler, false);
        backdrop.removeEventListener('touchmove', this.touchMoveHandler, false);
    };

    touchStartHandler = (event) => {
        if (event.targetTouches.length === 1) {
            // detect single touch
            this.setState({ clientY: event.targetTouches[0].clientY })
        }
    }
    touchMoveHandler = (event) => {
        if (event.targetTouches.length === 1) {
            // detect single touch
            this.disableRubberBand(event);
        }
    }
    disableRubberBand = (event) => {
        var clientY = event.targetTouches[0].clientY - this.state.clientY;
        const backdrop = document.getElementById('backdrop');
        
        // element is at the top of its scroll
        if (backdrop.scrollTop === 0 && clientY > 0 && event.cancelable) {
            event.preventDefault();    
        }
        // element is at the bottom of its scroll
        if ((backdrop.scrollHeight - backdrop.scrollTop <= backdrop.clientHeight) && clientY < 0 && event.cancelable) {
            event.preventDefault();    
        }
    }

    render() {
        const backdropClass = this.props.show ? [classes.backdrop, classes.open] : [classes.backdrop];
        //const contentClass = [classes.backdrop__content, classes.overlay];
        if(this.props.show) {
            document.body.classList.add(classes.noscroll);
        }else {
            document.body.classList.remove(classes.noscroll);
        }
    
        return (
            <div id="backdrop" className={backdropClass.join(' ')}>
                <div className={classes.backdrop__icon} onClick={this.props.closeBackdrop}>
                </div>
                <div className={classes.backdrop__content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Backdrop;