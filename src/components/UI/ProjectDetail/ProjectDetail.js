import React from 'react';

import classes from './ProjectDetail.module.scss';

class ProjectDetail extends React.Component {

    renderContentHander = (project) => {
        switch (project) {
            case "GWC":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Google Weather Clone</h1><span className={classes.porjectDetail__period}>Dec 2018 - current</span>
                        <h1>Coming soon...</h1>
                    </div>
                )
            case "CRP":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Corporate Extra</h1><span className={classes.porjectDetail__period}>May 2018 - current</span>
                        <p>Built with jQuery, Javascript, Sass, .NET Web API, C# and DB2.
                        This website developed for more than 100,000 China Airlines's corporate members worldwide. As a full-stack engineer and project manager in this project.</p>
                        <div className={classes.porjectDetail__imgbox}>
                            <img src={require('../../../images/crp.png')} alt="CRP" /> 
                        </div>
                        <h1>About this project</h1>
                        <p>This web app is developed for China Airlines's corporate member, 
                           servives included
                        </p>
                        <div>
                            <ul>
                                <li>Accounce the member rewards porgram and the latest news.</li>
                                <li>Online registration to become a member of China Airlines.</li>
                                <li>Query historical flight records.</li>
                                <li>Query accumulated mileage and points.</li>
                                <li>Redemption award.</li>
                                <li>Member profile maintenance.</li>
                            </ul>
                        </div>
                        <p>
                            In this porject, erverything are developed from scratch to meet business requirements.
                            As a full-stack engineer and proejct owner, I'm responsible for the development of the front-end page
                            as well as the backend api. I also work as a project mananger to manage project progress and resource allocation.
                        </p>
                        <h1>Technical Sheet</h1>
                       
                        <ul>
                            <li>
                                Frontend - jQuery, HTML, Sass, CSS 
                            </li>
                            <li>
                                Backend - .NET Web API, .NET MVC, C#
                            </li>
                            <li>
                                Database - DB2, Oracle
                            </li>
                            <li>
                                Responsive website design
                            </li>
                        </ul>
                       
                        <h1>Resuorce</h1>
                        <p>view site: <a href="https://calec.china-airlines.com/crp/" 
                                         rel="noopener noreferrer" 
                                         target="_blank">https://calec.china-airlines.com/crp/</a></p>
                    </div>
                )
            case "CRPS":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Corporate Member CMS</h1><span className={classes.porjectDetail__period}>Mar 2018 - current</span>
                        <p>Built with React, Redux, Sass, .NET Web API, C# and DB2.
                        This website developed for China Airlines's employee to maintain member profile and web page content. As a full-stack engineer and project manager in this project.</p>
                        <div className={classes.porjectDetail__imgbox}>
                            <img src={require('../../../images/crps.PNG')} alt="CRPS" /> 
                        </div>
                        <h1>About this project</h1>
                        <p>This web app is developed for China Airlines's corporate program managers, 
                           features included
                        </p>
                        <div>
                            <ul>
                                <li>Website content management.</li>
                                <li>Review membership qualifications.</li>
                                <li>Query and edit member data.</li>
                                <li>Redemption award management and review.</li>
                                <li>Responsibility and management transformation.</li>
                                <li>Web app user setting.</li>
                            </ul>
                        </div>
                        <h1>Technical Sheet</h1>
                       <ul>
                           <li>
                               Frontend - React, Redux, CSS Module, Sass, Bootstrap
                           </li>
                           <li>
                               Backend - .NET Web API, .NET MVC, C#
                           </li>
                           <li>
                               Database - DB2, Oracle
                           </li>
                           <li>
                               Responsive website design
                           </li>
                       </ul>
                    </div>
                )
            case "YTC":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Youtube Clone </h1><span className={classes.porjectDetail__period}>Sep 2018 - Nov 2018</span>
                           <p>Built with React, Redux, Sass, and CSS Module.</p>
                        <div className={classes.porjectDetail__imgbox}>
                                <img src={require('../../../images/ytc.png')} alt="youtube clone" /> 
                        </div>
                            <h1>About this project</h1>
                            <p>The main idea of this project is to utilize the technology of React to implement various features on Youtube, 
                               features included
                            </p>
                            <div>
                                <ul>
                                    <li>Search for Youtube videos with automatic suggestion keyword.</li>
                                    <li>Display top related video and its information.</li>
                                    <li>Display associated video list.</li>
                                    <li>Infinite scroll and fetch user comments.</li>
                                    <li>Sort comments by related or latest.</li>
                                    <li>Menu sidedrawer.</li>
                                    <li>RWD design</li>
                                </ul>
                            </div>
                            <h1>Technical Sheet</h1>
                           <ul>
                               <li>Youtube Data API v3</li>
                               <li>React</li>
                               <li>Redux</li>
                               <li>React-thunk</li>
                               <li>ES6</li>
                               <li>CSS Module</li>
                               <li>Sass</li>
                           </ul>
                         <h1>Resuorce</h1>
                         <p>View site: <a href="https://chuanjenwang.github.io/youtube-clone/" 
                                          rel="noopener noreferrer" 
                                          target="_blank">https://chuanjenwang.github.io/youtube-clone/</a></p>
                         <p>Repository: <a href="https://github.com/ChuanjenWang/youtube-clone"
                                           rel="noopener noreferrer" 
                                           target="_blank"
                                           >https://github.com/ChuanjenWang/youtube-clone</a>

                         </p>
                    </div>
                )
            case "TSC":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Tenergy Supply Chain Management App </h1><span className={classes.porjectDetail__period}>Sep 2017 - Mar 2018</span>
                           <p>Built with React, chart.js, Sass and .NET MVC.
                           This web app developed for Tenergy (an e-commerce compony located in Fremont, CA) product team to manage inventory and sales. 
                           {/* As a full-stack engineer and product owner in this project. */}
                           </p>
                        <div className={classes.porjectDetail__imgbox}>
                                <img src={require('../../../images/tsc.png')} alt="Tenergy supply chain app" /> 
                        </div>
                        <h1>About this project</h1>
                            <p>
                               This web app is developed for project team to monitor every day sales on Amazon as well as manege FBA inveroty. 
                               features included
                            </p>
                            <div>
                                <ul>
                                    <li>Fetch every day inventory, order, and customer data on Amazon.</li>
                                    <li>Manage over 10,000 prodcts sales and inventory.</li>
                                    <li>Dispay visal chart data.</li>
                                    <li>Low inventory alert.</li>
                                    <li>Generate daily, weekly, monthly and yearly report.</li>
                                </ul>
                            </div>
                            <h1>Technical Sheet</h1>
                           <ul>
                               <li>Amazon Marketplace Web Services</li>
                               <li>React</li>
                               <li>Redux</li>
                               <li>React-thunk</li>
                               <li>Chart.js</li>
                               <li>Sass</li>
                               <li>.NET MVC</li>
                               <li>.NET Web API</li>
                               <li>C#</li>
                               <li>SQL Server</li>
                           </ul>
                    </div>
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