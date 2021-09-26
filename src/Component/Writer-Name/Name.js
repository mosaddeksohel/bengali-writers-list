import React from 'react';

const Name = (props) => {

    const { writers } = props;
    // add total 
    let countName = [];

    for (const name of writers) {
        countName = name.push;

    }

    return (
        <div>
            <div>
                <ul>
                    <li>{countName}</li>
                </ul>
            </div>
        </div>
    );
};

export default Name;