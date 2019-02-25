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
      <nav className="navbar navbar-light bg-light">
        <Link to='/' className="navbar-brand" style={{ marginLeft: '131px' }}>
          <img src={logo} width="45" height="45" alt="" />
        </Link>
        <form className="form-inline" style={{ marginRight: '139px' }}>
          {this.state.categories.map((category, index) => {
            return (
              <Link to='/' className="nav-link navbar-link">{category.name}</Link>
            )
          })}
          <Link to='/login' className="nav-link navbar-link navbar-link-login" >LOGIN</Link>
        </form>
      </nav>
    );
  }
}

export default Navbar;