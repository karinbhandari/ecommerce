import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('<Header /> test', () => {
  test('renders correctly', () => {
    render(<Header showSidenav={false} />)

    const menuOff = screen.getByTestId('menu-off-icon')

    const supportIcon = screen.getByTestId('support-icon')

    const notiIcon = screen.getByTestId('noti-icon')

    const headerAvatar = screen.getByTestId('header-avatar')

    expect(menuOff).toBeInTheDocument()

    expect(supportIcon).toBeInTheDocument()

    expect(notiIcon).toBeInTheDocument()

    expect(headerAvatar).toBeInTheDocument()
  })

  test('available click events should works', () => {
    render(<Header showSidenav={true} />)

    const menuOn = screen.getByTestId('menu-on-icon')

    const headerAvatar = screen.getByTestId('header-avatar')

    expect(menuOn).toBeInTheDocument()

    fireEvent.click(headerAvatar)

    const avatarPopoverDrop = screen.getByTestId('avatar-popover-drop')

    expect(avatarPopoverDrop).toBeInTheDocument()

    fireEvent.click(headerAvatar)
  })
})
