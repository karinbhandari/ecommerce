// import { MenuType } from '../modules/core/components/interfaces'
import { snackMessage as snackMessageType } from '../modules/core/components/SnackBar/label'

type context = {
  lang?: string
  loggedInBy?: string
  // menu?: Array<MenuType>
  snackMessage?: snackMessageType
  setSnackMessage?: (message: snackMessageType) => void
}

export type { context }
