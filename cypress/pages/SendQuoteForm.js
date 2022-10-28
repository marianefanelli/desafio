class SendQuoteForm {

    el ={
        inputEmail: () => cy.get('input#email'),
        inputUsername: () => cy.get('input#username'),
        inputPassword: () => cy.get('input#password'),
        inputConfirmPass: () => cy.get('input#confirmpassword'),
        buttonSendEmail: () => cy.xpath('//*[@id="sendemail"]')
    }

    fillSendQuoteForm() {
        this.el.inputEmail().type('test@test.com')
        this.el.inputUsername().type('test123')
        this.el.inputPassword().type('Testando123')
        this.el.inputConfirmPass().type('Testando123')
        this.el.buttonSendEmail().click()
    }    
}
  
module.exports = new SendQuoteForm();