import React, { Component } from 'react';
import './App.css';
import Pagetitle from './components/Pagetitle';
import Form from './components/Myform';
import Weather from './components/Weatherdetails';

const API_KEY = "bd5e378503939ddaee76f12ad7a97608";

class App extends Component {
  state={
    temperature: "",
    city: "",
    country: "",
    description: "",
    wind_speed:"",
    humidity:"",
    error:""

  }
  gettheweather = async (e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const apicall = await 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const req_data = await apicall.json();
    console.log(req_data);

    if(city && country){
      this.setState({
        temperature: req_data.main.temp,
        city: req_data.name,
        country: req_data.sys.country,
        description: req_data.weather[0].description,
        wind_speed: req_data.wind.speed,
        humidity: req_data.main.humidity,
        error:""
      });
      console.log(req_data.main.temp);
    }else{
      this.setState({
        temperature: "",
        city: "",
        country: "",
        description: "",
        wind_speed:"",
        humidity:"",
        error:"Please Enter Valid Data"
      });
    }
    }
  render() {
    return (
      <div className="wrapper">
      <div className="main">
      <div className="container">
      <div className="row">
      <div className="col-xs-5 title-container">
        <Pagetitle/>
      </div>
      <div className="col-xs-7 form-container">
        <Form getweather={this.gettheweather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          wind_speed={this.state.wind_speed}
          humidity={this.state.humidity}
          error={this.state.error}
        />
      </div> 
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default App;
