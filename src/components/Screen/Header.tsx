import React from 'react'
import { StyleSheet, View } from 'react-native'

import Heading from '../Heading'

export interface HeaderProps {
  title?: string | React.ReactNode
  left?: React.ReactNode
  right?: React.ReactNode
  logo?: boolean
}

const Header: React.FC<HeaderProps> = ({ title, left, right }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <>{left}</>
      </View>
      <View style={styles.center}>
        {typeof title === 'string' ? <Heading size='lg'>{title}</Heading> : <>{title}</>}
      </View>
      <View style={styles.right}>
        <>{right}</>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 48,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  left: {
    justifyContent: 'center',
    height: '100%',
    width: 100,
    flexGrow: 1,
  },
  center: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  right: {
    justifyContent: 'center',
    height: '100%',
    width: 100,
    alignItems: 'flex-end',
    flexGrow: 1,
  },
})
