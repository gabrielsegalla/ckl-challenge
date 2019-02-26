import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios'
import logo from '../assets/logo.png'
import Enviroments from '../enviroments'

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
    return (
      <nav className="navbar-expand-lg navbar navbar-light bg-light">
        <div class="container">
          <Link to='/' className="navbar-brand" >
            <img src={logo} width="45" height="45" alt="" />
          </Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-auto">
              {this.state.categories.map((category) => {
                return (
                  <Link to='/' className="nav-item nav-link navbar-link dropdown-item">{category.name}</Link>
                )
              })}
              <Link to='/login' className="nav-item nav-link navbar-link navbar-link-login" >LOGIN</Link>
            </ul>
          </div>
        </div>

      </nav >
    );
  }
}

export default Navbar;