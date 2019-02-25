import React, { Component } from 'react';
import Card from '../ui/Card';
import {hashHistory} from 'react-router'
import axios from 'axios'

export default class Home extends Component {
    state = {
        news: []
    }

    constructor(){
        super();
        let user = localStorage.getItem('user');
        if (user) {
            console.log("logado")
        }else{
            hashHistory.push('/login')
        }
        this.getNews()
        
        
    }

    getNews() {
        axios.get(`http://127.0.0.1:8000/news/`).then(res => {
            const news = res.data;
            this.setState({ news });
        })
    }

    render(){
        return (
            <div className="container text-center">
                <div className="row">
                
                    {this.state.news.map((card, index) => {
                        return(
                        <Card
                        title={card.title}
                        description={card.description}
                        image_url={card.image_url}/>)
                    })}
                  </div>  
            </div>
        );
    }

}