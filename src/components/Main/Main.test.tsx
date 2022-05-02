import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './Main'

test('<Main />', () => {
  render(<Main />)
  const linkElement = screen.getByTestId('main')
  expect(linkElement).toBeInTheDocument()
})
