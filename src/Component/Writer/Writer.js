import React, { useEffect, useState } from 'react';
import List from '../list/List';
import Person from '../Person/Person';
import './Writer.css'

const Writer = () => {
    const [writers, setWriters] = useState([]);
    const [newWriter, setNewWriter] = useState([]);
    useEffect(() => {
        fetch('./writer.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])


    const handleAddToCart = (writer) => {
        const writerNew = [...newWriter, writer];
        setNewWriter(writerNew)
    }


    return (
        <div className="list-container">
            <div className="cart-list">
                <div>
                    <div className="single-item">
                        {
                            writers.map(writer => <List
                                key={writers.name}
                                writer={writer}
                                handleAddToCart={handleAddToCart}
                            ></List>)
                        }
                    </div>
                </div>
            </div>
            <div className="added-list">
                <Person newWriter={newWriter}></Person>

            </div>
        </div>
    );
};

export default Writer;