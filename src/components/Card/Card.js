import React from 'react';

import classes from './Card.module.scss';

const Card = (props) => (
    <div className={classes.card}>
        <div className={classes.card__icon}>
        </div>
        <div className={classes.card__title}>
            {props.title}
        </div>
        <div className={classes.card__description}>
            {props.children}
        </div>
    </div>
)

export default Card;