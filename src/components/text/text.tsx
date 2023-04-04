import { View, Text as NativeText } from 'react-native'
import React from 'react'

export default function Text({children, style}) {
  return (
    
        <NativeText style={[{fontFamily: "DeliusUnicase_700Bold"},style]}>
            {children}
        </NativeText>
    
  )
}