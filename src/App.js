import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
const API_KEY = "d08b76a2edcdebba0b2ed05be1707ba4";

class App extends React.Component {
  async getForecast(e) {
    e.preventDefault();
    const city = e.target.elements.city.value; //I'm making variable which thanks to "e" variable allows mi to target input area and get a value.
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getForecast={this.getForecast} />
        <Weather />
      </div>
    );
  }
}

export default App;
