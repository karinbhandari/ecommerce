import React, { ReactElement } from 'react'
import { NextComponentType } from 'next'
import { Box } from '@material-ui/core'
import theme from '../../../../styles/theme'

type TabPanelProps = {
  children: ReactElement
  value: number
  index: number
}

const TabPanel = ({ value, index, children }: TabPanelProps): ReactElement => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
    >
      {value === index && <Box p={1}>{children}</Box>}
    </div>
  )
}

export default TabPanel
