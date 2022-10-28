class RegisterVehiclePage {

    el ={
        logo: () => cy.get('#tricentis_logo'),
        sectionName: () => cy.get('span#selectedinsurance'),
        successMessage: () => cy.xpath('/html/body/div[4]/h2', { timeout: 10000 })
    }

    login(){
        return cy.visit("http://sampleapp.tricentis.com/101/app.php")
    }

    validateRegisterPage(){
        this.el.logo().should('exist')
        this.el.sectionName().should('be.visible')
    }

    validateMessage(){
        cy.on('window:alert', (str) => {
            return expect(str).to.contains('Sending e-mail success!')
        })
    }
}
  
module.exports = new RegisterVehiclePage();