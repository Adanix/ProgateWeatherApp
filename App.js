// App.js
import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constant';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('');

  const searchWeather = (location) => {
    setWeatherData(null);
    setError(null);
    setStatus('loading');

    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000; // Convert visibility from meters to kilometers
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Convert temperature from Kelvin to Celsius
        data.main.temp = data.main.temp.toFixed(2);
        data.main.feels_like -= 273.15; // Convert feels_like temperature from Kelvin to Celsius
        data.main.feels_like = data.main.feels_like.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          setError('Data not found. Please try another location.');
        } else {
          setError('An error occurred. Please try again.');
        }
        setStatus('error');
      });
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      {status === 'loading' && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {weatherData && <WeatherInfo weatherData={weatherData} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default App;
