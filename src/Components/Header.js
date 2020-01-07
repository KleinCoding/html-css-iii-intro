import React from 'react'
import './Header.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            menuStatus: 'drop-down-menu'
        }
    }

    onClick = () => {
        if (this.state.menuStatus === 'drop-down-menu-open') {
            this.setState({ menuStatus: 'drop-down-menu-closed'})
        } else {
            this.setState({ menuStatus: 'drop-down-menu-open'})
        }
    }

    render() {
        return (
            <header>
                <link href="https://fonts.googleapis.com/css?family=Kaushan+Script|Montserrat:400,400i,900|Roboto+Slab&display=swap" rel="stylesheet"></link>
                <h2 className = "site_name" class ="site_name">Start Bootstrap</h2>
                <ul id='site-nav' class ='site-nav'>
                    <li className='menu-text'>Services</li>
                    <li className='menu-text'>Portfolio</li>
                    <li className='menu-text'>About</li>
                    <li className='menu-text'>Team</li>
                    <li className='menu-text'>Contact</li>
                    <li>
                        
                    </li>
                    <ul className={this.state.menuStatus}>
                    <li className='menu-text1'>Portfolio</li>
                    <li className='menu-text1'>About</li>
                    <li className='menu-text1'>Team</li>
                    <li className='menu-text1'>Contact</li>
                    </ul>
                </ul>
                <div></div>
                <button 
                onClick={this.onClick}
                class="menu-button">
        Menu
      </button>
            </header>
        )
    }
}
