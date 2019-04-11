import React from 'react';
import ImageGallery from 'react-image-gallery';

import classes from './ProjectDetail.module.scss';

class ProjectDetail extends React.Component {

    constructor() {
        super();
        this.state = {
            showFullscreenButton: false,
            showGalleryFullscreenButton: false,
            showPlayButton: false,
            showIndex: true,
            showThumbnails: false
        }
    }
    
    renderContentHander = (project) => {
        const CRPimages = [
            {
                original: require('../../../images/crp.jpg')
            },
            {
                original: require('../../../images/crp_p1.jpg')
            },
            {
                original: require('../../../images/crp_p2.jpg')
            },
            {
                original: require('../../../images/crp_p3.jpg')
            }
        ]
        const CRPSimages = [
            {
                original: require('../../../images/crps1.PNG')
            },
            {
                original: require('../../../images/crps2.PNG')
            },
            {
                original: require('../../../images/crps3.PNG')
            }
        ]
        // const YTCimages = [
        //     {
        //         original: require('../../../images/crp.JPEG')
        //     },
        //     {
        //         original: require('../../../images/crp.JPEG')
        //     },
        //     {
        //         original: require('../../../images/crp.JPEG')
        //     }
        // ]
        // const TSCimages = [
        //     {
        //         original: require('../../../images/crp.JPEG')
        //     },
        //     {
        //         original: require('../../../images/crp.JPEG')
        //     },
        //     {
        //         original: require('../../../images/crp.JPEG')
        //     }
        // ]
        switch (project) {
            case "GWC":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Google Weather Clone</h1><span className={classes.porjectDetail__period}>Mar 2019 - Apr 2019</span>
                        <p>Built with React, Redux, D3, and Styled Components.</p>
                        <div className={classes.porjectDetail__imgbox}>
                                <img src={require('../../../images/weather.png')} alt="google weather clone" /> 
                        </div>
                            <h1>About this project</h1>
                            <p>The main idea of this project is to utilize React to implement Google search and weather features, 
                               features included
                            </p>
                            <div>
                                <ul>
                                    <li>Search for citys and countries with automatic suggestion keyword.</li>
                                    <li>Disply current weather information.</li>
                                    <li>Disply 5 day weather forecase.</li>
                                    <li>Area Chart with weather information per 3 hours.</li>
                                    <li>Bar Chart with clouds status per 3 hours (coming soon).</li>
                                    <li>Wind speed and direction (coming soon).</li>
                                </ul>
                            </div>
                            <h1>Technical Sheet</h1>
                           <ul>
                               <li>React</li>
                               <li>Redux</li>
                               <li>React-thunk</li>
                               <li>D3</li>
                               <li>Styled Components</li>
                           </ul>
                         <h1>Resuorce</h1>
                         <p>View site: <a href="https://chuanjenwang.github.io/google-weather-clone/" 
                                          rel="noopener noreferrer" 
                                          target="_blank">https://chuanjenwang.github.io/google-weather-clone/</a></p>
                         <p>Repository: <a href="https://github.com/ChuanjenWang/google-weather-clone"
                                           rel="noopener noreferrer" 
                                           target="_blank"
                                           >https://github.com/ChuanjenWang/google-weather-clone</a>

                         </p>
                    </div>
                )
            case "CRP":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Corporate Extra</h1><span className={classes.porjectDetail__period}>May 2018 - current</span>
                        <p>Built with jQuery, Javascript, Sass, .NET Web API, C# and DB2.
                        This website developed for more than 100,000 China Airlines's corporate members worldwide. As a full-stack engineer and project manager in this project.</p>
                        <div className={classes.porjectDetail__imgbox}>
                            <ImageGallery items={CRPimages}
                                          showBullets={this.state.showBullets}
                                          showFullscreenButton={this.state.showFullscreenButton}
                                          showPlayButton={this.state.showPlayButton}
                                          showThumbnails={this.state.showThumbnails}
                                          showNav={this.state.showNav}
                                          showIndex={this.state.showIndex}
                                        />
                        </div>
                        <h1>About this project</h1>
                        <p>This web app is developed for China Airlines's corporate member, 
                           servives included
                        </p>
                        <div>
                            <ul>
                                <li>Member rewards porgram description and the latest news.</li>
                                <li>Online registration to become a member of China Airlines.</li>
                                <li>Query historical flight records.</li>
                                <li>Query accumulated mileage and points.</li>
                                <li>Redemption award.</li>
                                <li>Member profile maintenance.</li>
                            </ul>
                        </div>
                        <p>
                            In this porject, erverything are developed from scratch to meet business requirements.
                            As a full-stack engineer and project owner, I'm responsible for the development of the front-end page
                            as well as the backend API. I also work as a project mananger to manage project progress and resource allocation.
                        </p>
                        <h1>Technical Sheet</h1>
                       
                        <ul>
                            <li>jQuery</li>
                            <li>Sass</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>.NET Web API</li>
                            <li>.NET MVC</li>
                            <li>C#</li>
                            <li>DB2</li>
                            <li>Oracle</li>
                            <li>Responsive website design</li>
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
                            <ImageGallery items={CRPSimages}
                                          showBullets={this.state.showBullets}
                                          showFullscreenButton={this.state.showFullscreenButton}
                                          showPlayButton={this.state.showPlayButton}
                                          showThumbnails={this.state.showThumbnails}
                                          showNav={this.state.showNav}
                                          showIndex={this.state.showIndex}
                                        />
                            {/* <img src={require('../../../images/crps.PNG')} alt="CRPS" />  */}
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
                           <li>React</li>
                           <li>Redux</li>
                           <li>CSS Module</li>
                           <li>Sass</li>
                           <li>Bootstrap</li>
                           <li>.NET Web API</li>
                           <li>.NET MVC</li>
                           <li>C#</li>
                           <li>DB2</li>
                           <li>Oracle</li>
                           <li>Responsive website design</li>
                       </ul>
                    </div>
                )
            case "YTC":
                return (
                    <div className={classes.porjectDetail}>
                        <h1>Youtube Clone </h1><span className={classes.porjectDetail__period}>Sep 2018 - Nov 2018</span>
                           <p>Built with React, Redux, Sass, and CSS Module.</p>
                        <div className={classes.porjectDetail__imgbox}>
                                <img src={require('../../../images/ytc.jpg')} alt="youtube clone" /> 
                        </div>
                            <h1>About this project</h1>
                            <p>The main idea of this project is to utilize React to implement various features on Youtube, 
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
                                    <li>Manage over 10,000 prodcts, sales and inventory.</li>
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