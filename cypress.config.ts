import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: ['cypress/e2e/init.cy.ts'],
    baseUrl: 'http://localhost:4200',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
    specPattern: '**/*.cy.ts',
  },
})
