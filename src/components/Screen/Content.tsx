import React from 'react'
import { StyleSheet } from 'react-native'

import Spread from '../Spread'

export interface ContentProps {
  children?: React.ReactNode
  noPadding?: boolean
  space?: number
}

const defaultProps: ContentProps = {
  children: [],
  noPadding: false,
  space: 16,
}

const Content: React.FC<ContentProps> = ({ children, noPadding, space }) => (
  <Spread
    space={space}
    style={{
      ...styles.container,
      paddingHorizontal: noPadding ? 0 : 16,
      paddingVertical: noPadding ? 0 : 16,
    }}
  >
    {children}
  </Spread>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})

Content.defaultProps = defaultProps
export default Content
