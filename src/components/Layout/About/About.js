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
                        {/* <p className={classes.About__description__greeting}>
                        </p> */}
                        <p>Hi! I'm Spencer Wang (Chuanjen). I have more than 10 yeaers as a full-stack engineer in airlines, 
                        e-commerce, travel, financial, and medical industries. 
                        </p>
                        <p>
                        I have rich experience in web app development with frontend, backend, RESTful API, and database.
                        In additon, with strong business sense in e-commerce, supply chain management, customer relationship management, and B2B services, 
                        I can always meet business requirements and delivery result within the scheduled time frame.
                        {/* I love to use technology and data to slove business proplems. */}
                        </p>
                        <p>
                        Currently, I am fascinated by hot front-end technology. As you can see, this page is developed with React.
                        Morevoer, I'm using react to clone some famous online services, which you can find some of them in my protfolio.    
                        If you have any questions or opportunities, please don't hesitate to contact me :)   
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
export default About;
