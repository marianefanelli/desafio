class SelectPriceOption {

    el ={
        divIdealsSteps: () => cy.get('div.idealsteps-wrap'),
        spanGoldOption: () => cy.xpath('//*[@id="priceTable"]/tfoot/tr/th[2]/label[2]/span'),
        nextButton: () => cy.get('button#nextsendquote')
    }

    selectPriceOption() {
        this.el.divIdealsSteps().should('be.visible')
        this.el.spanGoldOption().click()
        this.el.nextButton().click()
    }    
}
  
module.exports = new SelectPriceOption();