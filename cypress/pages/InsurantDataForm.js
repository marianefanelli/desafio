class InsurantDataForm {

    el ={
        inputFirstName: () => cy.get('input#firstname'),
        inputLastName: () => cy.get('input#lastname'),
        inputDateBirth: () => cy.get('input#birthdate'),
        labelGender: () => cy.get('label.ideal-radiocheck-label'),
        inputStreetAddress: () => cy.get('input#streetaddress'),
        selectCountry: () => cy.get('select#country'),
        inputZipCode: () => cy.get('input#zipcode'),
        selectOccupation: () => cy.get('select#occupation'),
        divCheckbox: () => cy.xpath('//*[@id="insurance-form"]/div/section[2]/div[10]/p/label[1]/span'),
        nextButton: () => cy.get('button#nextenterproductdata')
    }

    fillInsurantDataForm() {
        this.el.inputFirstName().type('Simone')
        this.el.inputLastName().type('Simaria')
        this.el.inputDateBirth().type('08/16/1995')
        this.el.labelGender().contains('Female')
        this.el.inputStreetAddress().type('Av Moema')
        this.el.selectCountry().select('Brazil')
        this.el.inputZipCode().type('058400')
        this.el.selectOccupation().select('Employee')
        this.el.divCheckbox().click()
        this.el.nextButton().click()
    }
}
  
module.exports = new InsurantDataForm();