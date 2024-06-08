const API_KEY = '4057aebf6e144908be950926240606';

const getCurrentWeather = () =>
    fetch(`https://api.weatherapi.com/v1/current.json?q=sydney&key=${API_KEY}`)
        .then((res) => res.json());

export default getCurrentWeather;