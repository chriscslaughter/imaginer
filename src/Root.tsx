import React from 'react'
import { View, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Lander from './screens/Lander'

const Root: React.FC = () => {
  return (
    <View style={styles.container}>
      <Lander />
      <StatusBar style='light' />
    </View>
  )
}

export default Root

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
