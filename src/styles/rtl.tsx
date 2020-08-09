import React from 'react'
import { create } from 'jss'
import rtl from 'jss-rtl'
import { StylesProvider, jssPreset } from '@material-ui/core/styles'
import { NextComponentType } from 'next'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

type RTLProps = {
  children: JSX.Element
}

const RTL: NextComponentType<RTLProps> = ({ children }): JSX.Element => {
  return <StylesProvider jss={jss}>{children}</StylesProvider>
}

export default RTL
