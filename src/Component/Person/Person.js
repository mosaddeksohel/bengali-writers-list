import React from 'react';

const Person = (props) => {
    console.log(props)
    const { newWriter } = props;
    // add total 
    let total = 0;

    for (const book of newWriter) {
        total = total + book;

    }

    return (
        <div>
            <h3>Writer Added: {newWriter.length}</h3>
            <h3>Total Book: ${total} </h3>

        </div>
    );
};

export default Person;