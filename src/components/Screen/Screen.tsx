import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Spread from '../Spread'

import { Colors } from '../styles'

export interface ScreenProps {
  children?: React.ReactNode
}

const Screen: React.FC<ScreenProps> = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    padding: 20,
  },
})

export default Screen
