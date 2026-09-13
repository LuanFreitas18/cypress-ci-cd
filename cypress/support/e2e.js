// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// The site under test loads third-party scripts (ads/analytics) that throw
// cross-origin errors. They are unrelated to our tests, so they should not
// fail the test run.
Cypress.on('uncaught:exception', () => false)