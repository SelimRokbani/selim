import React, { Component } from 'react'
import WalletCardEthers from'../Wallet';

class Navbar extends Component {

    render() {
        return (
            <nav className="navbar" style={{ backgroundImage: "url(/bg.jpg)" }}>
                <a
                    className="navbar-brand col-sm-3 col-md-2 mr-0" style={{ color: "white" }}>
                    CryptoBetting
                </a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
                        <small className="text-white">Metamask Account Adress:  <span  id="account">{this.props.account}</span></small>
                        
                    </li>
                </ul>
            </nav>
        );
    }   
}

export default Navbar;