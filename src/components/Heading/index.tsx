import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import MaskedView from '@react-native-community/masked-view'
import LinearGradient from 'react-native-linear-gradient'

import { Colors, Fonts } from '../styles'

interface HeadingProps {
  bold?: boolean
  center?: boolean
  children: string
  gradient?: boolean
  size?: 'md' | 'lg' | 'xl' | 'xxl'
}

const defaultProps: HeadingProps = {
  bold: false,
  center: false,
  children: '',
  gradient: false,
  size: 'lg',
}

const Heading: React.FC<HeadingProps> = ({ bold, center, children, gradient, size }) => {
  const style: TextStyle = {
    ...styles.text,
    fontFamily: bold ? Fonts.family.bold : Fonts.family.default,
    fontSize: Fonts.sizes[size ? size : 'lg'],
    textAlign: center ? 'center' : 'auto',
    alignSelf: center ? 'center' : 'auto',
    color: Colors.white,
  }

  return gradient ? (
    <MaskedView maskElement={<Text style={style} children={children} />}>
      <LinearGradient
        colors={[Colors.revolutionLight, Colors.revolution]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <Text style={[style, { opacity: 0 }]} children={children} />
      </LinearGradient>
    </MaskedView>
  ) : (
    <Text style={style}>{children}</Text>
  )
}

Heading.defaultProps = defaultProps
export default Heading

const styles = StyleSheet.create({
  text: {
    fontWeight: Fonts.weights.bold,
    color: Colors.black,
  },
})
