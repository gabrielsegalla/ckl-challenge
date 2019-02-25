import React, { Component } from 'react';
import Card from '../ui/Card';
import { hashHistory } from 'react-router'
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
            <div className="container text-center">
                <div className="row">

                    {this.state.news.map((card, index) => {
                        return (
                            <Card
                                title={card.title}
                                description={card.description}
                                image_url={card.image_url} />)
                    })}
                </div>
            </div>
        );
    }

}