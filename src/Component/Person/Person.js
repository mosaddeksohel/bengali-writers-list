import React from 'react';

const Person = (props) => {
    const { person } = props;
    let property = 0;
    for (const newWriter of person) {
        property = property + newWriter.property;

    }
    return (
        <div>
            <h3>person Added: {props.person.length}</h3>
            <h3>Total Property: $ {property}</h3>
        </div>
    );
};

export default Person;