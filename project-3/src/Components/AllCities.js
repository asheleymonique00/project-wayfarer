import React from 'react';
import { Link } from 'react-router-dom';

function AllCities(props) {
console.log(props)
    return (
        <div>
            {/* <Link to="/show">Landing Page</Link> */}
            {props.cities.map((city, id) => {
                return (
                <nav className="cityList">
                    <div key={id}>
                        
                        

                    <Link to={`/city/${city.id}`}>
                        <h3>{city.name}</h3>
                        </Link>
                        

                        <br></br>
                        <img src= {city.img} alt="city picture" />
                    </div>
                </nav>
                )
            })}
        </div>
    )
}

export default AllCities;