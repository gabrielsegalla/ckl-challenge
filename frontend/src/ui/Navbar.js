import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios'


class Navbar extends Component {
  state = {
    categories: []
  }
  constructor() {
    super();
    this.getNews()
  }
  getNews() {
    axios.get(`http://127.0.0.1:8000/category/`).then(res => {
      const categories = res.data;
      this.setState({ categories });
    })
  }

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <Link to='/' className="navbar-brand">Navbar</Link>
        <form className="form-inline">
          {this.state.categories.map((category, index) => {
            return (
              <Link to='/login' className="nav-link" style={{ color: category.hex_color }}>{category.name}</Link>
            )
          })}
        </form>
      </nav>
    );
  }
}

export default Navbar;