import React from 'react'
import { render, screen } from '@testing-library/react'
import Layout from './index'
import CoreCompoLabel from './labels'

const lang = 'en'
describe('<Layout /> test', () => {
  test('renders correctly', () => {
    render(<Layout>{<p>{CoreCompoLabel[lang].addEditModal.test.children}</p>}</Layout>)

    const layoutChild = screen.getByText(CoreCompoLabel[lang].addEditModal.test.children)

    expect(layoutChild).toBeInTheDocument()
  })
})
