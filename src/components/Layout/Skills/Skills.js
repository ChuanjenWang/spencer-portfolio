import React from 'react';

import classes from './Skills.module.scss';
import Card from '../../Card/Card';

const Skills = () => (
    <section className={classes.Skills} id="skills">
    <div className="container">
        <div className={classes.Skills__title}>My Skills</div>
        <div className={classes.Skills__list}>
            <ul>
                <li>
                    <Card icon="frontend" title="Frontend">React, Redux, Jest, Enzyme, Javascript, jQuery, HTML, CSS, Sass, RWD design</Card>
                </li>
                <li>
                    <Card icon="backend" title="Backend">Node.js, Express, C#, .NET MVC, RESTful API design </Card>
                </li>
                <li>
                    <Card icon="database" title="Databse">MangoDB, My SQL, SQL Sevrver, Oracle, DB2</Card>
                </li>
                <li>
                    <Card icon="tools" title="Tools">Git, VS Code, Sketch</Card>
                </li>
                <li>
                    <Card icon="media" title="Media Markering">SEO, Google analytics </Card>
                </li>
                <li>
                    <Card icon="project" title="Poject Management">scrum methodology, gantt chart </Card>
                </li>
                {/* <li>
                    <Card title="Poject Management">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Poject Management">NodeJs, Express, C#, .NET MVC </Card>
                </li> */}
            </ul>
        </div>
        </div>
    </section>
)
export default Skills;
