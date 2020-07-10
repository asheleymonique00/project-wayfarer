import React from 'react';

function SingleCity(props) {
    console.log(props.city)
const singleCity = props.city.filter(cities => {
    console.log(singleCity);
    return props.id === cities.id;
})
    return(
        <div>
            <h1> Welcome to {singleCity[0].name}</h1>

        </div>
    )
}

export default SingleCity;