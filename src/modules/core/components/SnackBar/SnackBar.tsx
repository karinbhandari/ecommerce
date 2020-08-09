import React, { useContext, useState, useEffect, ChangeEvent, SyntheticEvent } from 'react'
import { NextComponentType } from 'next'
import { ReactElement } from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { alert as alertType } from '../Layout/interfaces'
import Context from '../../../../context'
// import { snackMessage as snackMessageType } from '../../../interfaces'
import { context as contextType } from '../../../../context/interface'

const Alert = ({onClose, severity, children}: alertType): ReactElement => {
  return <MuiAlert elevation={6} variant="filled" onClose={onClose} severity={severity} children={children} />
}

// error, warning, success, info

const SnackBar: NextComponentType = (): ReactElement => {
  const context = useContext<contextType>(Context)
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = (event: SyntheticEvent<Element, Event>): void => {
    // if (reason === 'clickaway') {
    //   return
    // }

    context?.setSnackMessage({
      snackOpen: false,
      message: '',
      type: '',
    })
  }

  useEffect(() => {
    setOpen(context?.snackMessage?.snackOpen)
  }, [context?.snackMessage?.snackOpen])

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Alert onClose={handleClose} severity={context?.snackMessage?.type || 'success'}>
        {context?.snackMessage?.message || ''}
      </Alert>
    </Snackbar>
  )
}

export default SnackBar
