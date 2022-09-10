import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

import Spread from '../Spread'

import { Colors, Fonts } from '../styles'

export interface ButtonProps {
  disabled?: boolean
  onPress?: () => void
  variant?: 'primary' | 'secondary'
  title: string
}

const defaultProps: ButtonProps = {
  variant: 'primary',
  title: '',
}

const Button: React.FC<ButtonProps> = ({ disabled, onPress, variant, title }) => {
  const [isPressed, setIsPressed] = useState<boolean>(false)

  const buttonStyles = { ...styles.button }
  const textStyles = { ...styles.text }
  const secondary = variant === 'secondary'
  if (disabled) {
    buttonStyles.backgroundColor = Colors.midnight
    textStyles.color = Colors.powder
  } else if (isPressed) {
    buttonStyles.backgroundColor = Colors.powder
  } else {
    buttonStyles.backgroundColor = Colors.white
    textStyles.color = Colors.black
  }

  return (
    <Pressable
      style={styles.containerStyle}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false)
        !disabled && onPress && onPress()
      }}
    >
      <View style={buttonStyles}>
        <Spread horizontal space={6}>
          <Text style={textStyles}>{title}</Text>
        </Spread>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
  },
  button: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: Colors.white,
  },
  text: {
    fontFamily: Fonts.family.bold,
    fontSize: Fonts.sizes.md,
    color: Colors.black,
  },
})

Button.defaultProps = defaultProps
export default Button
