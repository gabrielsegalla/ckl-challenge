import React, { Component } from 'react';
import Card from '../ui/Card';
import axios from 'axios'
import Enviroments from '../enviroments'

export default class Home extends Component {
    state = {
        news: []
    }

    constructor() {
        super();
        let auth_token = localStorage.getItem('auth_token');
        if (auth_token) {
            var config = {
                headers: { 'Authorization': 'Token ' + auth_token }
            };
            axios.get(Enviroments.url + 'news/', config).then(res => {
                const news = res.data;
                this.setState({ news });
            })
        } else {
            axios.get(Enviroments.url + 'news/').then(res => {
                const news = res.data;
                this.setState({ news });
            })
        }



    }

    render() {
        return (
            <div class="container" style={{marginTop: '80px'}}>
                {this.state.news.map((card, index) => {
                    index = index + 1
                    return (
                        <div className="item">
                            <Card
                                order={index}
                                title={card.title}
                                description={card.description}
                                image_url={card.image_url}
                                author={card.author}
                                category_name={card.category_name}
                                category_hex_color={card.category_hex_color} />
                        </div>
                        )
                })}
            </div>

        );
    }

}