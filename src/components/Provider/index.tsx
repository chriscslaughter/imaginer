import React from 'react'

import { NativeBaseProvider } from 'native-base'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return <NativeBaseProvider>{children}</NativeBaseProvider>
}

export default Provider
