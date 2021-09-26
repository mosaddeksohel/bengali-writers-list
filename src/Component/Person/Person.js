import React from 'react';

const Person = (props) => {
    console.log(props)
    const { newWriter } = props;
    let total = 0;
    for (const property of newWriter) {
        total = total + property;
    }

    return (
        <div>
            <h3>person Added: {newWriter.length}</h3>
            <h3>Total Property: ${total} </h3>
        </div>
    );
};

export default Person;