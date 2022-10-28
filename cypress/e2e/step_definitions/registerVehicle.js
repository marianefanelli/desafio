// <reference types=”Cypress” />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const registerPage = require("../../pages/RegisterVehiclePage.js")
const vehicleDataForm = require("../../pages/VehicleDataForm.js")
const insurantDataForm = require("../../pages/InsurantDataForm.js")
const productDataForm = require("../../pages/ProductDataForm.js")
const priceOption = require("../../pages/SelectPriceOption.js")
const sendQuoteForm = require("../../pages/SendQuoteForm.js")


Given('I access the Tricentis website', () => {
	return registerPage.login()
})

Given('I want to register my vehicle', () => {
	return registerPage.validateRegisterPage()
})

When('I fill in the "Enter Vehicle Data" form', () =>{
	return vehicleDataForm.fillVehicleDataForm()
})

When('I fill in the "Enter Insurant Data" form', () =>{
	return 	insurantDataForm.fillInsurantDataForm()
})

When('I fill in the "Enter Product Data" form', () =>{
	return productDataForm.fillProductDataForm()
})

When('I fill in the "Select Price Option" form', () =>{
	return priceOption.selectPriceOption()
})

When('I fill in the "Send Quote" form', () =>{
	return sendQuoteForm.fillSendQuoteForm()
})

Then('I can see a successfull message', () => {
	return registerPage.validateMessage()
})

