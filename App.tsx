import { useFonts } from 'expo-font'

import Root from './src/Root'

import { ComponentProvider } from './src/components'

const App: React.FC = () => {
  const [loaded] = useFonts({
    'SF Pro': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
    'SF Pro Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <ComponentProvider>
      <Root />
    </ComponentProvider>
  )
}

export default App
