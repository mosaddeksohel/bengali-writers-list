import React from 'react';
import Writer from '../Writer/Writer';
import './List.css'

const List = (props) => {
    const { img, name, property, death, age, career } = props.writer;
    return (
        <div className="person-detail">
            <div>
                <img className="img" src={img} alt="" />
                <h3>Name: {name}</h3>
                <h4>Career: {career}</h4>
                <h4>Property: {property}</h4>
                <h4>Age: {age}</h4>
                <h4>Death: {death}</h4>
                <button className="btn">Add to cart</button>
            </div>
        </div>
    );
};

export default List;