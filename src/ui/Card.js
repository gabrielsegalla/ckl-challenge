import React  from 'react';
import '../assets/css/card.css'

function chooseCard(props) {
    if (props.order === 1) {
        return <div>    
            <div className="category-container">
                <p className="category" style={{ color: props.category_hex_color }}>{props.category_name}</p>
            </div>
            <div className="first-item-image-container">
                <div className="image">
                    <img src={props.image_url} className="main-image" alt={props.title}/>
                    <div className="image-overlay"></div>
                    <button className="image-btn">Read More</button>
                </div>
            </div>
            <div className="first-item-title-container">
                <h5 className="first-item-title">{props.title}</h5>
            </div>

            <div className="author-container">
                <img src={props.author_image} alt="Avatar" className="first-item-avatar"></img>
                <p className="item-avatar-name">by {props.author}</p>
            </div>
            <div className="first-item-description-container">
                <p className="item-description">{props.description}</p>
            </div>
        </div>;
    } else if (props.order === 2 || props.order === 3) {
        return <div>
            <div className="category-container">
                <p className="category" style={{ color: props.category_hex_color }}>{props.category_name}</p>
            </div>
            <div className="item-image-container">
                <div className="image">
                        <img src={props.image_url} className="secondary-image" alt={props.title} />
                        <div className="image-overlay"></div>
                        <button className="image-btn">Read More</button>
                    </div>
            </div>
            <div className="item-title-container">
                <h5 className="item-title">{props.title}</h5>
            </div>
            <div className="author-container">
                <img src={props.author_image} alt="Avatar" className="item-avatar"></img>
                <p className="item-avatar-name">by {props.author}</p>
            </div>
            <div className="item-description-container">
                <p className="item-description">{props.description}</p>
            </div>
        </div>;
    } else {
        return <div className="item-last-row">
            <div className="category-container">
                <p className="category" style={{ color: props.category_hex_color }}>{props.category_name}</p>
            </div>
            <div className="item-title-container">
                <h5 className="item-title">{props.title}</h5>
            </div>
            <div className="author-container">
                <img src={props.author_image} alt="Avatar" className="item-avatar"></img>
                <p className="item-avatar-name">by {props.author}</p>
            </div>
            <div className="item-description-container">
                <p className="item-description">{props.description}</p>
            </div>
        </div>;
    }
}
const Card = (props) => (
    <div>
        {chooseCard(props)}
    </div>
);

export default Card;