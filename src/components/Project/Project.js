import React from 'react';

import classes from './Project.module.scss';

const Project = (props) => { 
    //console.log("props.sort:" + props.sort);
    //console.log("props.filter:" + props.filter);
    const projectPhoto = {
        'GWC': classes.project__gwc,
        'CRP': classes.project__crp,
        'CRPS': classes.project__crps,
        'YTC': classes.project__ytc,
        'TSC': classes.project__tsc
    }
    const projectClass = (props.filter === 'a') ? [classes.project, projectPhoto[props.no]] 
                         : (props.sort !== props.filter) ? [classes.project, projectPhoto[props.no], classes.project__hide]
                         : [classes.project, projectPhoto[props.no]];
    return (
        <div className={projectClass.join(' ')} onClick={() => props.click(props.no)}>
            <div className={classes.project__contain}>
                <div className={classes.project__photo}>
                </div>
                <div className={classes.project__description}>
                    <div className={classes.project__type}>{props.type}</div>
                    <div>{props.desc}</div>
                </div>
            </div>
        </div>  
    )
}

export default Project;