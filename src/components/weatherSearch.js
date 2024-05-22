import React, { useState } from 'react'
import { View, Button, StyleSheet } from 'react-native'
import CustomTextInput from './customTextInput'

const WeatherSearch = ({ searchWeather }) => {
   const [location, setLocation] = useState('')

   const handleSearch = () => {
      searchWeather(location)
      setLocation('')
   }

   return (
      <View>
         <CustomTextInput
            placeholder="Cari cuaca kota Anda"
            numberOfLines={1}
            text={location}
            onChange={setLocation}
         />
         <View style={styles.buttonWrapper}>
            <Button
               title="Cari"
               onPress={handleSearch}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   buttonWrapper: {
      marginTop: 20,
   },
})

export default WeatherSearch
