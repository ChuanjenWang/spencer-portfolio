import React from 'react';

import classes from './Card.module.scss';

class Card extends React.Component {

    gererateIcon = () => {
        const frontend = (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                <title>file-code-o</title>
                <path d="M22.937 5.938c0.578 0.578 1.062 1.734 1.062 2.562v18c0 0.828-0.672 1.5-1.5 1.5h-21c-0.828 0-1.5-0.672-1.5-1.5v-25c0-0.828 0.672-1.5 1.5-1.5h14c0.828 0 1.984 0.484 2.562 1.062zM16 2.125v5.875h5.875c-0.094-0.266-0.234-0.531-0.344-0.641l-4.891-4.891c-0.109-0.109-0.375-0.25-0.641-0.344zM22 26v-16h-6.5c-0.828 0-1.5-0.672-1.5-1.5v-6.5h-12v24h20zM7.5 12c0.172-0.219 0.484-0.266 0.703-0.094l0.797 0.594c0.219 0.172 0.266 0.484 0.094 0.703l-2.844 3.797 2.844 3.797c0.172 0.219 0.125 0.531-0.094 0.703l-0.797 0.594c-0.219 0.172-0.531 0.125-0.703-0.094l-3.531-4.703c-0.125-0.172-0.125-0.422 0-0.594zM20.031 16.703c0.125 0.172 0.125 0.422 0 0.594l-3.531 4.703c-0.172 0.219-0.484 0.266-0.703 0.094l-0.797-0.594c-0.219-0.172-0.266-0.484-0.094-0.703l2.844-3.797-2.844-3.797c-0.172-0.219-0.125-0.531 0.094-0.703l0.797-0.594c0.219-0.172 0.531-0.125 0.703 0.094zM10.344 23.906c-0.281-0.047-0.453-0.313-0.406-0.578l2.156-12.984c0.047-0.281 0.313-0.453 0.578-0.406l0.984 0.156c0.281 0.047 0.453 0.313 0.406 0.578l-2.156 12.984c-0.047 0.281-0.313 0.453-0.578 0.406z"></path>
            </svg>
        )
        const backend = (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28">
                    <title>cogs</title>
                    <path d="M14 14c0-2.203-1.797-4-4-4s-4 1.797-4 4 1.797 4 4 4 4-1.797 4-4zM26 22c0-1.094-0.906-2-2-2s-2 0.906-2 2c0 1.109 0.906 2 2 2 1.109 0 2-0.906 2-2zM26 6c0-1.094-0.906-2-2-2s-2 0.906-2 2c0 1.109 0.906 2 2 2 1.109 0 2-0.906 2-2zM20 12.578v2.891c0 0.203-0.156 0.438-0.359 0.469l-2.422 0.375c-0.125 0.406-0.297 0.797-0.5 1.188 0.438 0.625 0.906 1.203 1.406 1.797 0.063 0.094 0.109 0.187 0.109 0.313 0 0.109-0.031 0.219-0.109 0.297-0.313 0.422-2.063 2.328-2.516 2.328-0.125 0-0.234-0.047-0.328-0.109l-1.797-1.406c-0.391 0.203-0.781 0.359-1.203 0.484-0.078 0.797-0.156 1.656-0.359 2.422-0.063 0.219-0.25 0.375-0.469 0.375h-2.906c-0.219 0-0.438-0.172-0.469-0.391l-0.359-2.391c-0.406-0.125-0.797-0.297-1.172-0.484l-1.844 1.391c-0.078 0.078-0.203 0.109-0.313 0.109-0.125 0-0.234-0.047-0.328-0.125-0.406-0.375-2.25-2.047-2.25-2.5 0-0.109 0.047-0.203 0.109-0.297 0.453-0.594 0.922-1.172 1.375-1.781-0.219-0.422-0.406-0.844-0.547-1.281l-2.375-0.375c-0.219-0.031-0.375-0.234-0.375-0.453v-2.891c0-0.203 0.156-0.438 0.359-0.469l2.422-0.375c0.125-0.406 0.297-0.797 0.5-1.188-0.438-0.625-0.906-1.203-1.406-1.797-0.063-0.094-0.109-0.203-0.109-0.313s0.031-0.219 0.109-0.313c0.313-0.422 2.063-2.312 2.516-2.312 0.125 0 0.234 0.047 0.328 0.109l1.797 1.406c0.391-0.203 0.781-0.359 1.203-0.5 0.078-0.781 0.156-1.641 0.359-2.406 0.063-0.219 0.25-0.375 0.469-0.375h2.906c0.219 0 0.438 0.172 0.469 0.391l0.359 2.391c0.406 0.125 0.797 0.297 1.172 0.484l1.844-1.391c0.094-0.078 0.203-0.109 0.313-0.109 0.125 0 0.234 0.047 0.328 0.125 0.406 0.375 2.25 2.063 2.25 2.5 0 0.109-0.047 0.203-0.109 0.297-0.453 0.609-0.922 1.172-1.359 1.781 0.203 0.422 0.391 0.844 0.531 1.281l2.375 0.359c0.219 0.047 0.375 0.25 0.375 0.469zM30 20.906v2.188c0 0.234-2.016 0.453-2.328 0.484-0.125 0.297-0.281 0.562-0.469 0.812 0.141 0.313 0.797 1.875 0.797 2.156 0 0.047-0.016 0.078-0.063 0.109-0.187 0.109-1.859 1.109-1.937 1.109-0.203 0-1.375-1.563-1.531-1.797-0.156 0.016-0.313 0.031-0.469 0.031s-0.313-0.016-0.469-0.031c-0.156 0.234-1.328 1.797-1.531 1.797-0.078 0-1.75-1-1.937-1.109-0.047-0.031-0.063-0.078-0.063-0.109 0-0.266 0.656-1.844 0.797-2.156-0.187-0.25-0.344-0.516-0.469-0.812-0.313-0.031-2.328-0.25-2.328-0.484v-2.188c0-0.234 2.016-0.453 2.328-0.484 0.125-0.281 0.281-0.562 0.469-0.812-0.141-0.313-0.797-1.891-0.797-2.156 0-0.031 0.016-0.078 0.063-0.109 0.187-0.094 1.859-1.094 1.937-1.094 0.203 0 1.375 1.547 1.531 1.781 0.156-0.016 0.313-0.031 0.469-0.031s0.313 0.016 0.469 0.031c0.438-0.609 0.906-1.219 1.437-1.75l0.094-0.031c0.078 0 1.75 0.984 1.937 1.094 0.047 0.031 0.063 0.078 0.063 0.109 0 0.281-0.656 1.844-0.797 2.156 0.187 0.25 0.344 0.531 0.469 0.812 0.313 0.031 2.328 0.25 2.328 0.484zM30 4.906v2.187c0 0.234-2.016 0.453-2.328 0.484-0.125 0.297-0.281 0.562-0.469 0.812 0.141 0.313 0.797 1.875 0.797 2.156 0 0.047-0.016 0.078-0.063 0.109-0.187 0.109-1.859 1.109-1.937 1.109-0.203 0-1.375-1.563-1.531-1.797-0.156 0.016-0.313 0.031-0.469 0.031s-0.313-0.016-0.469-0.031c-0.156 0.234-1.328 1.797-1.531 1.797-0.078 0-1.75-1-1.937-1.109-0.047-0.031-0.063-0.078-0.063-0.109 0-0.266 0.656-1.844 0.797-2.156-0.187-0.25-0.344-0.516-0.469-0.812-0.313-0.031-2.328-0.25-2.328-0.484v-2.188c0-0.234 2.016-0.453 2.328-0.484 0.125-0.281 0.281-0.562 0.469-0.812-0.141-0.313-0.797-1.891-0.797-2.156 0-0.031 0.016-0.078 0.063-0.109 0.187-0.094 1.859-1.094 1.937-1.094 0.203 0 1.375 1.547 1.531 1.781 0.156-0.016 0.313-0.031 0.469-0.031s0.313 0.016 0.469 0.031c0.438-0.609 0.906-1.219 1.437-1.75l0.094-0.031c0.078 0 1.75 0.984 1.937 1.094 0.047 0.031 0.063 0.078 0.063 0.109 0 0.281-0.656 1.844-0.797 2.156 0.187 0.25 0.344 0.531 0.469 0.812 0.313 0.031 2.328 0.25 2.328 0.484z"></path>
            </svg>
        )
        const database = (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="28" viewBox="0 0 24 28">
                    <title>database</title>
                    <path d="M12 12c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 24c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 18c4.703 0 9.422-0.844 12-2.656v2.656c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2.656c2.578 1.813 7.297 2.656 12 2.656zM12 0c6.625 0 12 1.797 12 4v2c0 2.203-5.375 4-12 4s-12-1.797-12-4v-2c0-2.203 5.375-4 12-4z"></path>
            </svg>
        )
        const tools = (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28">
                    <title>wrench</title>
                    <path d="M6 23c0-0.547-0.453-1-1-1s-1 0.453-1 1 0.453 1 1 1 1-0.453 1-1zM16.063 16.438l-10.656 10.656c-0.359 0.359-0.875 0.578-1.406 0.578s-1.047-0.219-1.422-0.578l-1.656-1.687c-0.375-0.359-0.594-0.875-0.594-1.406s0.219-1.047 0.594-1.422l10.641-10.641c0.812 2.047 2.453 3.687 4.5 4.5zM25.969 9.641c0 0.516-0.187 1.156-0.359 1.656-0.984 2.781-3.656 4.703-6.609 4.703-3.859 0-7-3.141-7-7s3.141-7 7-7c1.141 0 2.625 0.344 3.578 0.984 0.156 0.109 0.25 0.25 0.25 0.438 0 0.172-0.109 0.344-0.25 0.438l-4.578 2.641v3.5l3.016 1.672c0.516-0.297 4.141-2.578 4.453-2.578s0.5 0.234 0.5 0.547z"></path>
            </svg>
        )
        const media = (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28">
            <title>bar-chart</title>
            <path d="M10 14v8h-4v-8h4zM16 6v16h-4v-16h4zM32 24v2h-32v-24h2v22h30zM22 10v12h-4v-12h4zM28 4v18h-4v-18h4z"></path>
            </svg>
        )
        const project = (
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
            <title>list-alt</title>
            <path d="M6 18.5v1c0 0.266-0.234 0.5-0.5 0.5h-1c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h1c0.266 0 0.5 0.234 0.5 0.5zM6 14.5v1c0 0.266-0.234 0.5-0.5 0.5h-1c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h1c0.266 0 0.5 0.234 0.5 0.5zM6 10.5v1c0 0.266-0.234 0.5-0.5 0.5h-1c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h1c0.266 0 0.5 0.234 0.5 0.5zM24 18.5v1c0 0.266-0.234 0.5-0.5 0.5h-15c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h15c0.266 0 0.5 0.234 0.5 0.5zM24 14.5v1c0 0.266-0.234 0.5-0.5 0.5h-15c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h15c0.266 0 0.5 0.234 0.5 0.5zM24 10.5v1c0 0.266-0.234 0.5-0.5 0.5h-15c-0.266 0-0.5-0.234-0.5-0.5v-1c0-0.266 0.234-0.5 0.5-0.5h15c0.266 0 0.5 0.234 0.5 0.5zM26 21.5v-13c0-0.266-0.234-0.5-0.5-0.5h-23c-0.266 0-0.5 0.234-0.5 0.5v13c0 0.266 0.234 0.5 0.5 0.5h23c0.266 0 0.5-0.234 0.5-0.5zM28 4.5v17c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-17c0-1.375 1.125-2.5 2.5-2.5h23c1.375 0 2.5 1.125 2.5 2.5z"></path>
            </svg>
        )
        switch(this.props.icon) {
            case "frontend":
            return (
                <div className={classes.card__icon}>
                    <div className={classes.card__iconsrc}>{frontend}</div>
                    <div className={classes.card__iconmain}></div>
                    <div className={classes.card__iconmask}></div>
                </div>
            )
            case "backend":
            return (
                <div className={classes.card__icon}>
                    <div className={classes.card__iconsrc}>{backend}</div>
                    <div className={classes.card__iconmain}></div>
                    <div className={classes.card__iconmask}></div>
                </div>
            )
            case "database":
            return (
                <div className={classes.card__icon}>
                <div className={classes.card__iconsrc}>{database}</div>
                <div className={classes.card__iconmain}></div>
                <div className={classes.card__iconmask}></div>
            </div>
            )
            case "tools":
            return (
                <div className={classes.card__icon}>
                <div className={classes.card__iconsrc}>{tools}</div>
                <div className={classes.card__iconmain}></div>
                <div className={classes.card__iconmask}></div>
                </div>
            )
            case "media":
            return (
                <div className={classes.card__icon}>
                <div className={classes.card__iconsrc}>{media}</div>
                <div className={classes.card__iconmain}></div>
                <div className={classes.card__iconmask}></div>
                </div>
            )
            case "project":
            return (
                <div className={classes.card__icon}>
                <div className={classes.card__iconsrc}>{project}</div>
                <div className={classes.card__iconmain}></div>
                <div className={classes.card__iconmask}></div>
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
            <div className={classes.card}>
                <div className={classes.card__icon}>
                    {this.gererateIcon()}
                </div>
                <div className={classes.card__title}>
                    {this.props.title}
                </div>
                <div className={classes.card__description}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Card;