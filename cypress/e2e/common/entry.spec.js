/// <reference types="cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import Utils from '../../support/utilities/Utils.js';
import LoginPage from '../../support/pageObjects/Login/LoginPage.js';

const utils = new Utils();
const login = new LoginPage();

Given('I am going to Robolog {string} Web App', (environment) => {
    let url = utils.sites(environment.toLowerCase());
    cy.visit(url);
});

When('I see login page', () => {
    login.loginButton().should('be.visible');
});

And('I press login button', () => {
    login.loginButton().click();
});

Then('I see modal message', () => {
    login.modalMessage().should('be.visible');
});

And('I close modal message', () => {
    login.modalMessageButon().click();
});
