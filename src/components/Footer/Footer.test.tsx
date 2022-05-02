import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

test('<Footer />', () => {
  render(<Footer />)
  const linkElement = screen.getByText(/Anselmo Cabral/)
  expect(linkElement).toBeInTheDocument()
})
