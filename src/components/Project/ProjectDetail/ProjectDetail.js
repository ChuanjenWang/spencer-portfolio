import React from 'react';

import classes from './ProjectDetail.module.scss';

class ProjectDetail extends React.Component {

    renderContentHander = (project) => {
        switch (project) {
            case "GWC":
                return (
                    <div className={classes.porject1}>Project 1</div>
                )
            case "CRP":
                return (
                    <div>Project 2</div>
                )
            case "CRPS":
                return (
                    <div>Project 3</div>
                )
            case "YTC":
                return (
                    <div>Project 4</div>
                )
            case "TSC":
                return (
                    <div>Project 5</div>
                )
            default:
            return (
                <div></div>
            );
        }
    }

    render() {
       
        return (
            <div className={classes.projectdetail}>
                <div className="container">
                    { this.renderContentHander(this.props.project)}
                </div>
            </div>
        )
    }
}

export default ProjectDetail;