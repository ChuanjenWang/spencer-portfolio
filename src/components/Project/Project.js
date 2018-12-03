import React from 'react';

import classes from './Project.module.scss';

const Project = (props) => { 
    //console.log("props.sort:" + props.sort);
    //console.log("props.filter:" + props.filter);

    const projectClass = (props.filter === 'a') ? [classes.project] 
                         : (props.sort !== props.filter) ? [classes.project, classes.project__hide]
                         : [classes.project];
    return (
        <div className={projectClass.join(' ')} onClick={() => props.click(props.no)}>
            <div className={classes.project__contain}>
                <div className={classes.project__description}>
                    <div className={classes.project__type}>{props.type}</div>
                    <div>{props.desc}</div>
                </div>
            </div>
        </div>  
    )
}

export default Project;