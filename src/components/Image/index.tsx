import React from 'react'
import { Image as RNImage, StyleSheet, View, ViewStyle } from 'react-native'

import { variants } from './variants'

interface ImageProps {
  width?: number | string
  height?: number | string
  variant: string
}

const Image: React.FC<ImageProps> = ({ width, height, variant }) => {
  const container: ViewStyle = {
    ...styles.container,
    width: width ? width : undefined,
    maxHeight: width && !height ? '100%' : undefined,
    height: height ? height : undefined,
    maxWidth: height && !width ? '100%' : undefined,
    aspectRatio: width && height ? undefined : variants[variant].aspectRatio,
  }

  return (
    <View style={container}>
      <RNImage source={variants[variant].source} style={styles.image} />
    </View>
  )
}

export default Image

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: '100%',
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
})
