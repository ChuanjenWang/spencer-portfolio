import React from 'react';

import classes from './Portfolio.module.scss';
import Project from '../../Project/Project';
import Backdrop from '../../Backdrop/Backdrop';
import ProjectDetail from '../../Project/ProjectDetail/ProjectDetail';

class Portfolio extends React.Component {
    state = {
        showBackdrop: false,
        project: '',
        sort: 'a',
        activeIndex: 0
    }

    closeBackdropHandler = () => {
        this.setState({showBackdrop: false});
    }
    openBackdropHandler = (project) => {
        this.setState({showBackdrop: true});
        this.setState({project: project});
    }
    seletCategoryHandler = (index) => {
        this.setState({ activeIndex: index});
        if(index===0) {
            this.setState({ sort: 'a'});
        }else if(index===1) {
            this.setState({ sort: 's'});
        }else if(index===2) {
            this.setState({ sort: 'w'});
        }
    }

    render () {
        const categoryActiveClass = [classes.portfolio__category__item, classes.portfolio__category__active ];
        const listItemClass = [classes.portfolio__list__item];
        const listItemHideClass = [classes.portfolio__list__item__hide];

        const projectListData = [
            {"type": "Side Project", "desc": "Google Weather Clone (Working)", "no":"GWC", "sort": "s"},
            {"type": "Work", "desc": "Corporate Member Website", "no":"CRP", "sort": "w"},
            {"type": "Work", "desc": "Corporate Member CMS", "no":"CRPS", "sort": "w"},
            {"type": "Side Project", "desc": "Youtube Clone", "no":"YTC", "sort": "s"},
            {"type": "Word", "desc": "Supply Chain Management", "no":"TSC", "sort": "w"}
        ]
        const projectListContent = (
            projectListData.map((item, i) => {
                return (
                    <li key={i} className={ this.state.sort === 'a' ? listItemClass 
                                            : this.state.sort === item.sort ? listItemHideClass
                                            : listItemClass } >
                        <Project {...item} click={this.openBackdropHandler} filter={this.state.sort}/>
                    </li>
                )
            })
        )
    
        return (
            <section className={classes.portfolio} id="portfolio">
                <Backdrop show={this.state.showBackdrop} 
                          closeBackdrop={this.closeBackdropHandler}>
                          <ProjectDetail project={this.state.project}></ProjectDetail>
                </Backdrop>
                <div className="container">
                <div className={classes.portfolio__title}>Portfolio</div>
                    <div className={classes.portfolio__category}>
                        <ul className={classes.portfolio__category__items}>
                            <li className={this.state.activeIndex === 0 ? categoryActiveClass.join(' ') 
                                : classes.portfolio__category__item}
                                onClick={() => this.seletCategoryHandler(0)}>ALL</li>
                            <li className={this.state.activeIndex === 1 ? categoryActiveClass.join(' ') 
                                : classes.portfolio__category__item}
                                onClick={() => this.seletCategoryHandler(1)}>WORK</li>
                            <li className={this.state.activeIndex === 2 ? categoryActiveClass.join(' ') 
                                : classes.portfolio__category__item}
                                onClick={() => this.seletCategoryHandler(2)}>SIDE PROJECT</li>
                        </ul>
                    </div>
                    <div className={classes.portfolio__list}>
                        <ul className={classes.portfolio__list__items}> 
                            {projectListContent}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}
export default Portfolio;
