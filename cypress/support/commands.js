// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';

Cypress.on('uncaught:exception', (err) => {
    if (err.message.includes('TrustLogo is not defined')) {
        // returning false here prevents Cypress from
        // failing the test
        cy.log('TrustLogo is not defined');
        return false;
    }

    if (err.message.includes('OneSignal.getUserId')) {
        cy.log('OneSignal.getUserId is not a function');
        return false;
    }

    if (err.message.includes(' clevertap is not defined')) {
        cy.log(' clevertap is not defined');
        return false;
    }
});
