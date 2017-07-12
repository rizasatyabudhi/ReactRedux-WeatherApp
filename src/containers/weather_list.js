import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    return (
      <tr key={name}>
        <td> {name}</td>
      </tr>
    );
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>

        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


// function so that our WeatherList container gets the updated state
// so we can use this.props.weather in our WeatherList containers
function mapStateToProps(state) {
  return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);
