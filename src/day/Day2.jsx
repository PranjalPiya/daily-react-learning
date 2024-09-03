
//WE WILL LEARN HOW TO FETCH DATA FROM THE API USING DIFFERENT METHODS.

// FREE API :- "https://jsonplaceholder.typicode.com/photos"

import React from 'react';
import { useState, useEffect } from 'react';

//we will use fetch() method first

const Day2 = () => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                setItem(data);
            });
    }, []);
    return (<div>
        {item.map((data) => {
            return <p key={data.id}>{data.title}</p>
        })}
    </div>)

}

export default Day2