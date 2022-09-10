import React from 'react'
import { StyleSheet, Text as _Text, TextStyle } from 'react-native'

import { Colors, Fonts } from '../styles'

interface TextProps {
  center?: boolean
  children: React.ReactNode
  color?: 'black' | 'midnight' | 'powder' | 'white'
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const defaultProps: TextProps = {
  center: false,
  children: '',
  color: 'white',
  size: 'md',
}

const Text: React.FC<TextProps> = ({ center, children, color, size }) => {
  const style: TextStyle = {
    ...styles.text,
    fontSize: Fonts.sizes[size ? size : 'lg'],
    textAlign: center ? 'center' : 'auto',
    alignSelf: center ? 'center' : 'auto',
    color: color ? Colors[color] : Colors.white,
  }

  return (
    <_Text style={style}>
      <>{children}</>
    </_Text>
  )
}

Text.defaultProps = defaultProps
export default Text

const styles = StyleSheet.create({
  text: {
    fontFamily: Fonts.family.default,
    color: Colors.black,
  },
})
