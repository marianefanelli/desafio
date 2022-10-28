class ProductDataForm {

    el ={
        inputStartDate: () => cy.get('input#startdate'),
        selectInsuranceSum: () => cy.get('select#insurancesum'),
        selectMerit: () => cy.get('select#meritrating'),
        selectDamageInsurance: () => cy.get('select#damageinsurance'),
        spanProduct: () => cy.xpath('//*[@id="insurance-form"]/div/section[3]/div[5]/p/label[1]/span'),
        selectCar: () => cy.get('select#courtesycar'),
        nextButton: () => cy.get('button#nextselectpriceoption')
    }

    fillProductDataForm() {
        this.el.inputStartDate().type('08/20/2023')
        this.el.selectInsuranceSum().select('3.000.000,00')
        this.el.selectMerit().select('Bonus 1')
        this.el.selectDamageInsurance().select('Full Coverage')
        this.el.spanProduct().click()
        this.el.selectCar().select('Yes')
        this.el.nextButton().click()
    }
}
  
module.exports = new ProductDataForm();