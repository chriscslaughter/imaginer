import React from 'react'

import { default as _Screen, ScreenProps } from './Screen'

import { default as _Bumper } from './Bumper'
import { default as _Content } from './Content'
import { default as _Header } from './Header'

class Screen extends React.Component<ScreenProps> {
  public static Bumper: typeof _Bumper = _Bumper
  public static Content: typeof _Content = _Content
  public static Header: typeof _Header = _Header
  render() {
    return <_Screen {...this.props} />
  }
}

export default Screen
