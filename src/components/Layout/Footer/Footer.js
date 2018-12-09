import React from 'react';

import classes from './Footer.module.scss';

const Footer = () => (
    <footer className={classes.footer}>
        <div className={classes.footer__content}>
            <div className={classes.footer__iconList}>
                        <span className={classes.footer__icon}>
                            <a href="https://www.linkedin.com/in/chuanjenwang/" rel="noopener noreferrer" target="_blank">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                                    <title>linkedin</title>
                                    <path d="M5.453 9.766v15.484h-5.156v-15.484h5.156zM5.781 4.984c0.016 1.484-1.109 2.672-2.906 2.672v0h-0.031c-1.734 0-2.844-1.188-2.844-2.672 0-1.516 1.156-2.672 2.906-2.672 1.766 0 2.859 1.156 2.875 2.672zM24 16.375v8.875h-5.141v-8.281c0-2.078-0.75-3.5-2.609-3.5-1.422 0-2.266 0.953-2.641 1.875-0.125 0.344-0.172 0.797-0.172 1.266v8.641h-5.141c0.063-14.031 0-15.484 0-15.484h5.141v2.25h-0.031c0.672-1.062 1.891-2.609 4.672-2.609 3.391 0 5.922 2.219 5.922 6.969z">                                    
                                    </path>
                                </svg>
                            </a>    
                        </span>
                        <span className={classes.footer__icon}>
                            <a href="https://github.com/ChuanjenWang" rel="noopener noreferrer" target="_blank">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                                <title>github</title>
                                <path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path>
                            </svg>
                            </a>
                        </span>
                        <span className={classes.footer__icon}>
                        <a href="https://medium.com/@chuanjen.wang" rel="noopener noreferrer" target="_blank">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                            <title>medium</title>
                            <path d="M9.328 6.578v18.328c0 0.484-0.234 0.938-0.766 0.938-0.187 0-0.359-0.047-0.516-0.125l-7.266-3.641c-0.438-0.219-0.781-0.781-0.781-1.25v-17.813c0-0.391 0.187-0.75 0.609-0.75 0.25 0 0.469 0.125 0.688 0.234l7.984 4c0.016 0.016 0.047 0.063 0.047 0.078zM10.328 8.156l8.344 13.531-8.344-4.156v-9.375zM28 8.437v16.469c0 0.516-0.297 0.875-0.812 0.875-0.266 0-0.516-0.078-0.734-0.203l-6.891-3.437zM27.953 6.563c0 0.063-8.078 13.172-8.703 14.172l-6.094-9.906 5.063-8.234c0.172-0.281 0.484-0.438 0.812-0.438 0.141 0 0.281 0.031 0.406 0.094l8.453 4.219c0.031 0.016 0.063 0.047 0.063 0.094z"></path>
                        </svg>
                        </a>
                        </span>
            </div>
            <div className={classes.footer__copyright}>2018 © Spencer. All rights reserved.</div>
        </div>
    </footer>
)

export default Footer;