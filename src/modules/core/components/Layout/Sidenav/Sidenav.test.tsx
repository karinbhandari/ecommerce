describe('adds true', () => {
  test('truthy', () => {
    expect(true).toBeTruthy()
  })
})
// import React, { useContext } from 'react'
// import { render, screen } from '@testing-library/react'
// import Sidenav from './Sidenav'
// import CoreCompoLabel from '../../labels'
// import Context from '../../../../../context'

// const lang = 'en'
// describe('<Sidenav /> test', () => {
//   test('renders correctly with navigation list items', () => {
//     render(<Sidenav />)
//     const context = useContext(Context)

//     const sidenavHeadAvatar = screen.getByTestId('sidenav-head-avatar')

//     const sidenavListItem1 = screen.getByText(context.menu[0][lang].name)

//     const sidenavListItem2 = screen.getByText(context.menu[1][lang].name)

//     // const sidenavListItem1 = screen.getByTestId('sidenav-list-item-0')

//     // const sidenavListItem2 = screen.getByTestId('sidenav-list-item-1')

//     const logoutButton = screen.getByText(CoreCompoLabel[lang].layout.logout)

//     expect(sidenavHeadAvatar).toBeInTheDocument()

//     expect(sidenavListItem1).toBeInTheDocument()

//     expect(sidenavListItem2).toBeInTheDocument()

//     expect(logoutButton).toBeInTheDocument()
//   })
//    // TestLeft
// const context = useContext(Context)
// I want to toogle menu with context
//   // test('Routes correctly when clicked on navigation list items', () => {

//   // })
// })
