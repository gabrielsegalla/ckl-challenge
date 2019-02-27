import React, { Component } from 'react';
import Category from './Category';
import axios from 'axios'

class MyInterestsForm extends Component {
    state = {
        categories: []
    }
    categories_to_edit = [];
    constructor() {
        super();
        this.getNews()
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
       if(event.target.checked){
            this.categories_to_edit.push(event.target.value)
       }else{
            this.categories_to_edit.splice(this.categories_to_edit.indexOf(event.target.value),1)
       }
       console.log(this.categories_to_edit)
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    getNews() {
        axios.get(`http://127.0.0.1:8000/category/`).then(res => {
            const categories = res.data;
            this.setState({ categories });
        })
    }
    render() {
        return (
            <form onChange={this.handleChange}>
                {this.state.categories.map((category, index) => {
                    return (
                        <Category id={category.id} name={category.name} hex_color={category.hex_color} />
                    )
                })}
            </form>
        );
    }
}

export default MyInterestsForm;