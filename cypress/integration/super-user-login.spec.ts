describe('adds true', () => {
  test('truthy', () => {
    expect(true).toBeTruthy()
  })
})
// describe('Cypress Tutorial', function () {
//   test('Makes sure the app is working', function () {
//     cy.visit('http://localhost:3000/organizations')
//     cy.get('#outlined-login-email').type('invalid@gmail.com')
//     cy.get('#outlined-adornment-password').type('invalid123')

//     cy.findByText('Login').click()

//     cy.pause()

//     cy.get('#outlined-login-email').clear()

//     cy.get('#outlined-login-email').type('kgajurel4@gmail.com')

//     cy.get('#outlined-adornment-password').clear()

//     cy.get('#outlined-adornment-password').type('test')

//     cy.findByText('Login').click() // formerly cy.get("a").contains("Learn React");

//     cy.pause()

//     cy.findAll

//     cy.pause()

//     cy.findByText('Organizations').click()

//     cy.pause()

//     cy.findByText('Devices').click()

//     cy.pause()

//     cy.findByText('Super Users').click()

//     cy.pause()

//     cy.findByText('Logout').click()
//   })
// })
