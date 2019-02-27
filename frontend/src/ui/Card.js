import React  from 'react';


function chooseCard(props) {
    if (props.order === 1) {
        return <div>
            
            <div className="category-container">
                <p className="category" style={{ color: props.category_hex_color }}>{props.category_name}</p>
            </div>
            <div className="first-item-image-container">
                <div class="image">
                    <img src={props.image_url} className="card-img-top" alt="..." />
                    <div className="image-overlay"></div>
                    <button className="image-btn">Read More</button>
                </div>
            </div>
            <div className="first-item-title-container">
                <h5 className="first-item-title">{props.title}</h5>
            </div>

            <div className="author-container">
                <img src="https://image-ticketfly.imgix.net/00/01/58/78/37-og.jpg?w=300&h=225.png" alt="Avatar" class="first-item-avatar"></img>
                <p className="item-avatar-name">by {props.author}</p>
            </div>
        </div>;
    } else if (props.order === 2 || props.order === 3) {
        return <div>
            <div className="category-container">
                <p className="category" style={{ color: props.category_hex_color }}>{props.category_name}</p>
            </div>
            <div className="item-image-container">
                <div class="image">
                        <img src={props.image_url} className="card-img-top" alt="..." />
                        <div className="image-overlay"></div>
                        <button className="image-btn">Read More</button>
                    </div>
            </div>
            <div className="item-title-container">
                <h5 className="item-title">{props.title}</h5>
            </div>
            <div className="author-container">
                <img src="https://image-ticketfly.imgix.net/00/01/58/78/37-og.jpg?w=300&h=225.png" alt="Avatar" class="item-avatar"></img>
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
                <img src="https://image-ticketfly.imgix.net/00/01/58/78/37-og.jpg?w=300&h=225.png" alt="Avatar" class="item-avatar"></img>
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