import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './Header'

test('<Header />', () => {
  render(<Header />)
  const linkElement = screen.getByText(/Get current local time using latitude/)
  expect(linkElement).toBeInTheDocument()
})
