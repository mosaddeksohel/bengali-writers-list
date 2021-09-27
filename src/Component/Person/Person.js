import React from 'react';
import './Person.css'

const Person = (props) => {
    console.log(props)
    const { newWriter } = props;
    const totalBook = (previous, writer) => previous + writer.book;
    const total = newWriter.reduce(totalBook, 0)

    let totalName = [];
    for (const name of newWriter) {
        totalName.push(name.name)
    }

    return (
        <div>
            <div>
                <h3>Writer Added: {newWriter.length}</h3>
                <h3>Total Book: ${total} </h3>
            </div>
            <div className>
                {
                    totalName.map(name => <Display
                        key={name}
                        name={name}

                    >
                    </Display>)
                }
            </div>
        </div>

    );
};

const Display = (props) => {
    return (
        <div className="name">
            <div>
                <li>{props.name}</li>
            </div>
        </div>
    )
}

export default Person;