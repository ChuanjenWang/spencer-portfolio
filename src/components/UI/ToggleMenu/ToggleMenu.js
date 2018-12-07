import React from 'react';

import classes from './ToggleMenu.module.scss';

const ToggleMenu = (props) => {
    const ToggleMenuClass = props.show ? classes.ToggleMenu__bar__active : classes.ToggleMenu__bar;
    return (
        <div className={classes.ToggleMenu} onClick={props.clicked}>
            <span className={ToggleMenuClass}></span>
            <span className={ToggleMenuClass}></span>
            <span className={ToggleMenuClass}></span>
        </div>
    );
}

export default ToggleMenu;