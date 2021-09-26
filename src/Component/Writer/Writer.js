import React, { useEffect, useState } from 'react';
import List from '../list/List';
import Person from '../Person/Person';
import Name from '../Writer-Name/Name'
import './Writer.css'


// declared State
const Writer = () => {
    const [writers, setWriters] = useState([]);
    const [newWriter, setNewWriter] = useState([]);
    const [newName, setNewName] = useState([]);

    useEffect(() => {
        // fetch Data 
        fetch('./writer.JSON')
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])

    // call handler 
    const handleAddToCart = (writer) => {
        const writerNew = [...newWriter, writer];
        setNewWriter(writerNew);
        setNewName(newName);
    }



    return (
        <div className="list-container">
            <div className="cart-list">
                <div>
                    <div className="single-item">
                        {
                            // handler declared 
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
                {/* connect to a component */}
                <Person newWriter={newWriter}></Person>
                <Name writers={writers}></Name>


            </div>
        </div>
    );
};

export default Writer;