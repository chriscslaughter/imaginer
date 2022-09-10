import React from 'react'
import { View } from 'react-native'

import { Button, Heading, Image, Screen, Spread, Text } from '../../components'

const Lander: React.FC = () => {
  return (
    <Screen>
      <Spread space={20}>
        <Heading bold gradient size='xxl'>
          Imaginer
        </Heading>
        <Text size='lg'>The 100% open source, community-driven AI image generation platform.</Text>
      </Spread>

      <Spread flex center space={20}>
        <Image variant='johnLennon' width={'100%'} />
        <Text center size='sm' color='powder'>
          A beautiful portrait photograph of John Lennon wearing VR glasses, dramatic lighting,
          1967.
        </Text>
      </Spread>

      <Button title='Get Started' />
    </Screen>
  )
}

export default Lander
