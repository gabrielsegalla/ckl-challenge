import React from 'react';
import MyInterestsForm from '../ui/MyInterestsForm';


export default class MyInterests extends React.Component {
    render() {
        return (
            <div className='container'>
                <h1>Welcome username</h1>
                <MyInterestsForm />
            </div>
        );
    }
}