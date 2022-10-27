// <reference types=”Cypress” />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const registerPage = require("../../pages/RegisterVehiclePage.js")

Given("I access the Tricentis website", () => {
	return registerPage.login()
})

Given(/^I want to register my vehicle$/, () => {
	return registerPage.validateRegisterPage()
})

When(/^I fill in the "([^"]*)" form$/, (form) => {
	return registerPage.fillInForm(form)
})

When(/^I click on the Next button$/, () => {
	return true;
});

When(/^I fill in the Send Quote form$/, () => {
	return true;
});

When(/^I click on the Send button$/, () => {
	return true;
});

Then(/^I can see a successfull message$/, () => {
	return true;
});

