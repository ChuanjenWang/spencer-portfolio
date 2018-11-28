import React from 'react';

import classes from './About.module.scss';
const About = () => (
    <section className={classes.About} id="about">
        <div className="container">    
            <div className={classes.About__title}>About Me</div>
            <div className={classes.About__content}>
                <div className={classes.About__left}>
                    <div className={classes.About__photo}>
                    </div>
                </div>
                <div className={classes.About__right}>
                    <div className={classes.About__description}>
                        <p>
                        Hi! I'm Spencer Wang (Chuanjen). I have experienced in Web / Visual Design 
                        for more than 6 years and participated in many high quality projects.
                        I fell comfortable working in a team or individually and have 
                        an in-depth understanding of emerging technologies.
                        </p>
                        <p>
                        Hi! I'm Spencer Wang (Chuanjen). I have experienced in Web / Visual Design 
                        for more than 6 years and participated in many high quality projects.
                        I fell comfortable working in a team or individually and have 
                        an in-depth understanding of emerging technologies.
                        </p>
                        <p>
                        Hi! I'm Spencer Wang (Chuanjen). I have experienced in Web / Visual Design 
                        for more than 6 years and participated in many high quality projects.
                        I fell comfortable working in a team or individually and have 
                        an in-depth understanding of emerging technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default About;
