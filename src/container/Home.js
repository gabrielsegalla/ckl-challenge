import React, { Component } from 'react';
import Card from '../ui/Card';
import axios from 'axios'
import Enviroments from '../enviroments'
import '../assets/css/home.css';

export default class Home extends Component {
    state = {
        news: []
    }
    isLoading = true;
    
    constructor() {
        super();
        this.getNews();
        
    }

    getNews(){
        axios.get(Enviroments.url + 'news/').then(res => {
            const news = res.data;
            this.isLoading = false;
            this.setState({ news });
        })
    }

    render() {
        return (
            <div className="container home-container" style={{marginTop: '77.33px'}}>
                { this.isLoading && <div className="text-center loading-div">
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div> }
                {this.state.news.map((card, index) => {
                    index = index + 1
                    return (
                        <div className="item">
                            <Card
                                order={index}
                                title={card.title}
                                description={card.description}
                                image_url={card.image_url}
                                author={card.author.name}
                                author_image={card.author.image_url}
                                category_name={card.category.name}
                                category_hex_color={card.category.hex_color} />
                        </div>
                        )
                })}
            </div>

        );
    }
}
