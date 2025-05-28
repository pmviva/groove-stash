/**
 * Copyright (c) 2025 Pablo Martin Viva
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/* v8 ignore start -- @preserve */
import { App } from '@/app/App'
import React from 'react'
import ReactDOM from 'react-dom/client'

const rootEl = document.getElementById('root')

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
/* v8 ignore stop -- @preserve */
