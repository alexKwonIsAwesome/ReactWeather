var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>Welcome to the about page!</p>
      <p>To use the weather app, type your city name in the form then push submit.
      <br/>The temperature will appear under the form.</p>
      <p>The main purpose of creating this application is to practice using react.</p>
      <p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework used.
          </li>
          <li>
            <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.
          </li>
        </ul>
      </p>
    </div>
  )
};

module.exports = About;
