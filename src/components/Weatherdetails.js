import React from 'react';

const Weatherdetails = (props)=>{
              
        return(
            <div className="weather__info">
                {/* {props && <p>You can find the details of Weather Here...</p>} */}
                {props.temperature && <p>Temeparture: {props.temperature} &deg;C</p>}
                {props.city && <p>City: {props.city}</p>}
                {props.country && <p>Country: {props.country}</p>}
                {props.description && <p>Description: {props.description}</p>}
                {props.wind_speed && <p>Speed of Wind : {props.wind_speed} m/sec</p>}
                {props.humidity && <p>Humidity : {props.humidity} %</p>}
                {props.error && <p> {props.error}</p>}
            </div>
        );
    
}
export default Weatherdetails;