import React from 'react'

import { default as _Button, ButtonProps } from './Button'

import { default as _ButtonGroup } from './ButtonGroup'

class Button extends React.Component<ButtonProps> {
  public static ButtonGroup: typeof _ButtonGroup = _ButtonGroup
  render() {
    return <_Button {...this.props} />
  }
}

export default Button
