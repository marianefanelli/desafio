class RegisterVehiclePage {

    el ={
        logo: () => cy.get('#tricentis_logo'),
        sectionName: () => cy.get('span#selectedinsurance')
    }

    login(){
        return cy.visit("http://sampleapp.tricentis.com/101/app.php")
    }

    validateRegisterPage(){
        this.el.logo().should('exist')
        this.el.sectionName().should('be.visible')
    }

    validateMessage(){
        cy.contains('h2', 'Sending e-mail success!').should('be.visible')
    }
}
  
module.exports = new RegisterVehiclePage();