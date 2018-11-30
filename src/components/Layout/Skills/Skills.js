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
                    <Card title="Frontend">React, Redux, Html 5, CSS, SASS</Card>
                </li>
                <li>
                    <Card title="Backend">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Databse">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Tools">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Brand">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Poject Management">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Poject Management">NodeJs, Express, C#, .NET MVC </Card>
                </li>
                <li>
                    <Card title="Poject Management">NodeJs, Express, C#, .NET MVC </Card>
                </li>
            </ul>
        </div>
        </div>
    </section>
)
export default Skills;
