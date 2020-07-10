import React from 'react';

function SingleCity(props) {
    console.log(props.city)
    console.log(props.id)
const hello = props.city.filter(cities => {
    
    return parseInt(props.id) === cities.id;
})
console.log(hello)
    return(
        <div>
            <h1> Welcome to {hello[0].name}</h1>
        </div>

       
    )
}

export default SingleCity;