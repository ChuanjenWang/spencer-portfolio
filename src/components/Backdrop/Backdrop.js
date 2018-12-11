import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = (props) => 
{
    const backdropClass = props.show ? [classes.backdrop, classes.open] : [classes.backdrop];
    //const contentClass = [classes.backdrop__content, classes.overlay];
    if(props.show) {
        //document.body.classList.add(classes.noscroll);
        document.body.style.overflow = 'hidden';
    }else {
        //document.body.classList.remove(classes.noscroll);
        document.body.style = '';
    }

    return (
        <div className={backdropClass.join(' ')}>
            <div className={classes.backdrop__icon} onClick={props.closeBackdrop}>
            </div>
            <div className={classes.backdrop__content}>
                {props.children}
            </div>
        </div>
    )
}
export default Backdrop;