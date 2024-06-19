// src/components/weatherInfo.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
   if (!weatherData) {
      return null;
   }

   const { name, main, weather, visibility, wind } = weatherData;
   const weatherDescription = weather[0];

   return (
      <View style={styles.container}>
         <Text style={styles.header}>Weather in {name}</Text>
         <View style={styles.row}>
            <Image
               source={{ uri: `https://openweathermap.org/img/w/${weatherDescription.icon}.png` }}
               style={styles.weatherIcon}
            />
            <Text style={styles.temp}>{main.temp}°C</Text>
         </View>
         <Text style={styles.description}>{weatherDescription.description}</Text>
         <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
               <Text style={styles.detailLabel}>Feels like:</Text>
               <Text style={styles.detailValue}>{main.feels_like}°C</Text>
            </View>
            <View style={styles.detailRow}>
               <Text style={styles.detailLabel}>Humidity:</Text>
               <Text style={styles.detailValue}>{main.humidity}%</Text>
            </View>
            <View style={styles.detailRow}>
               <Text style={styles.detailLabel}>Pressure:</Text>
               <Text style={styles.detailValue}>{main.pressure} hPa</Text>
            </View>
            <View style={styles.detailRow}>
               <Text style={styles.detailLabel}>Wind Speed:</Text>
               <Text style={styles.detailValue}>{wind.speed} km/h</Text>
            </View>
            <View style={styles.detailRow}>
               <Text style={styles.detailLabel}>Visibility:</Text>
               <Text style={styles.detailValue}>{visibility} km</Text>
            </View>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      padding: 20,
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      marginTop: 20,
   },
   header: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
   },
   row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
   },
   weatherIcon: {
      width: 50,
      height: 50,
      marginRight: 10,
   },
   temp: {
      fontSize: 48,
      fontWeight: 'bold',
   },
   description: {
      fontSize: 18,
      fontStyle: 'italic',
      textAlign: 'center',
      marginBottom: 20,
   },
   detailsContainer: {
      marginTop: 10,
   },
   detailRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
   },
   detailLabel: {
      fontSize: 16,
      fontWeight: 'bold',
   },
   detailValue: {
      fontSize: 16,
   },
});

export default WeatherInfo;
