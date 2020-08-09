import { ReactElement, ChangeEvent, SyntheticEvent } from "react"

type HeaderProps = {
  toggleDrawer?: (value: boolean) => void
}

// ************** Layout Compo Types **************
type Layout = {
  children?: ReactElement
}
// ************** SnackBar **************
type alert = {
  onClose: (event: SyntheticEvent<Element, Event>) => void
  severity: any
  children: string
}

type snackbar = {
  open: boolean
  message: string
  type: string
}

export type {
  HeaderProps,
  Layout,
  alert,
  snackbar,
}
