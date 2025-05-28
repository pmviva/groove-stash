/**
 * Copyright (c) 2025 Pablo Martin Viva
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { App } from '@/app/App'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

describe('App component', () => {
  it('should render', () => {
    render(<App />)

    expect(screen.getByText('Rsbuild with React')).toBeInTheDocument()
    expect(
      screen.getByText('Start building amazing things with Rsbuild.')
    ).toBeInTheDocument()
  })
})
