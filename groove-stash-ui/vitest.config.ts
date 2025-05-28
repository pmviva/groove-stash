import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      reporter: ['html', 'json', 'text'],
      reportsDirectory: '../coverage'
    },
    root: './src',
    setupFiles: ['./setup/setupTests.ts']
  }
})
