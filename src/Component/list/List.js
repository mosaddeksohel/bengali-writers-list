import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './List.css'

const List = (props) => {
    const { img, name, book, death, age, career } = props.writer;
    return (
        <div className="person-detail">
            <div>
                <div className="img-item">
                    <img className="img" src={img} alt="" />
                </div>

                {/* writer Description */}
                <h3>Name: {name}</h3>
                <h4>Career: {career}</h4>
                <h4>Book: {book}</h4>
                <h4>Age: {age}</h4>
                <h4>Death: {death}</h4>
                <div className="bye-button">
                    {/* add Button  */}
                    <button
                        onClick={() => props.handleAddToCart(props.writer)}
                        // icon
                        className="btn"><FontAwesomeIcon icon={faShoppingCart} /> Buy Book</button>
                </div>

            </div>
        </div>
    );
};

export default List;