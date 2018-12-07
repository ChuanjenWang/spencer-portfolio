import React from 'react';

import classes from './Skills.module.scss';
import Card from '../../UI/Card/Card';

const Skills = () => (
    <section className={classes.Skills} id="skills">
    <div className="container">
        <div className={classes.Skills__title}>My Skills</div>
        <div className={classes.Skills__list}>
            <div className={classes.Row}>
                <div>
                    <Card icon="frontend" title="Frontend">React, Redux, Jest, Enzyme, Javascript, jQuery, HTML, CSS, Sass, RWD design </Card>  
                </div>
                <div>
                    <Card icon="backend" title="Backend">Node.js, Express, C#, .NET MVC, RESTful API design </Card>
                </div> 
                <div>
                    <Card icon="database" title="Databse">MangoDB, My SQL, SQL Sevrver, Oracle, DB2</Card>
                </div>
                <div>
                    <Card icon="tools" title="Tools">Git, VS Code, Sketch</Card>
                </div>
                <div>
                    <Card icon="media" title="Media Markering">SEO, Google analytics </Card>
                </div>
                <div>
                    <Card icon="project" title="Poject Management">scrum methodology, gantt chart </Card>
                </div>
            </div>
        </div>
        </div>
    </section>
)
export default Skills;
