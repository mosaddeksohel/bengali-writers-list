import React, { useEffect, useState } from 'react';
import List from '../list/List';
import './Writer.css'

const Writer = () => {
    const [writers, setWriters] = useState([]);
    useEffect(() => {
        fetch('./writer.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])
    return (
        <div className="list-container">
            <div className="cart-list">
                <div>
                    <h4>Total Person: {writers.length}</h4>
                    <div className="single-item">
                        {
                            writers.map(writer => <List writer={writer}></List>)
                        }
                    </div>
                </div>
            </div>
            <div className="added-list">
                <h3>person Added: </h3>
                <h3>Total Property: $</h3>
            </div>
        </div>
    );
};

export default Writer;