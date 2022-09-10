import React from 'react'
import { ViewStyle } from 'react-native'

import { HStack, VStack } from 'native-base'

interface SpreadProps {
  center?: boolean
  children: React.ReactNode
  flex?: boolean
  horizontal?: boolean
  space?: number
  style?: ViewStyle
}

const Spread: React.FC<SpreadProps> = ({ center, children, flex, horizontal, space, style }) => {
  if (horizontal) {
    return (
      <HStack
        space={space ? space / 4 : 4}
        style={{
          justifyContent: center ? 'center' : undefined,
          flex: flex ? 1 : undefined,
          ...style,
        }}
      >
        {children}
      </HStack>
    )
  } else {
    return (
      <VStack
        space={space ? space / 4 : 4}
        style={{
          justifyContent: center ? 'center' : undefined,
          flex: flex ? 1 : undefined,
          ...style,
        }}
      >
        {children}
      </VStack>
    )
  }
}

export default Spread
