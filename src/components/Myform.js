import React from 'react';

const Myform = (props) =>{
        return(
            <div>
                <form onSubmit={props.getweather}>
                    <input type="text" name="city" placeholder="Enter the City"/>{" "}
                    <input type="text" name="country" placeholder="Enter the Country"/>{"  "}
                    <button type="submit">Click to get the weather Conditions</button>
                </form>
            </div>
        );
}

export default Myform;