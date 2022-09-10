import React from 'react'
import { StyleSheet, View } from 'react-native'

export interface ButtonGroupProps {
  children: React.ReactNode
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children }) => (
  <View style={styles.containerStyle}>
    {React.Children.map(children, (child: React.ReactNode, index: number) => (
      <View key={index} style={styles.wrapper}>
        {child}
      </View>
    ))}
  </View>
)

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  wrapper: {
    marginHorizontal: 8,
    flexGrow: 1,
    flex: 1,
  },
})

export default ButtonGroup
