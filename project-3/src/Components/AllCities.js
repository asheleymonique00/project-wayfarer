import React from 'react';
import { Link } from 'react-router-dom';
import './allcities.css'

function AllCities(props) {
    return (
        <div>
            {props.cities.map((city, id) => {
                return (
                <nav className="cityList">
                    <div key={id}>
                        <Link to={`/city/${city.id}`}><h3>{city.name}</h3></Link>
                        <br></br>
                        <img src= {city.img} alt="city picture" />
                        <br></br>
                    </div>
                </nav>
                )
                })}
        </div>
        )
    }
export default AllCities;