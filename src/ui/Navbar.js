import React, { Component } from 'react';
import { Link } from 'react-router';
import NavbarItem from '../ui/NavbarItem'
import axios from 'axios'
import logo from '../assets/images/logo.png'
import menu from '../assets/images/menu.png'
import Enviroments from '../enviroments'
import '../assets/css/navbar.css';

class Navbar extends Component {
  state = {
    categories: []
  }
  constructor() {
    super();
    this.getNews()
  } 
  getNews() {
    let token = localStorage.getItem('auth_token');
    var config = {
      headers: { 'Authorization': 'Token ' + token }
    };
    axios.get(Enviroments.url + `categories/`, config).then(res => {
      const categories = res.data;
      this.setState({ categories });
    })
  }

  render() {
    var menuStyle = {
      backgroundImage: 'url(' + menu + ')',
      width: 24,
      height: 19,
    }
    return (
      <nav className="navbar-expand-lg navbar navbar-light" >
        <div className="container navbar-container">
          <Link to='/' className="navbar-brand" >
            <img src={logo} width="45" height="45" alt="" />
            
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span style={menuStyle} className="navbar-toggler-icon" ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav ml-auto navbar-pages-list">
              {this.state.categories.map((category) => {
                return (
                  <NavbarItem path='/' name={category.name}></NavbarItem>
                )
              })}
              <Link to='/login' className="nav-item nav-link navbar-link navbar-link-login login-link" >LOGIN</Link>
            </ul>
          </div>
        </div>

      </nav >
    );
  }
}

export default Navbar;