import React from 'react'
import { StyleSheet } from 'react-native'

import Spread from '../Spread'

export interface BumperProps {
  children: React.ReactNode
  space?: number
}

const defaultProps: BumperProps = {
  children: [],
  space: 16,
}

const Bumper: React.FC<BumperProps> = ({ children, space }) => (
  <Spread style={styles.container} space={space}>
    {children}
  </Spread>
)

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    width: '100%',
  },
})

Bumper.defaultProps = defaultProps
export default Bumper
