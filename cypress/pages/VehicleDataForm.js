class VehicleDataForm {

    el ={
        selectMake: () => cy.get('select#make'),
        selectModel: () => cy.get('select#model'),
        inputCcm: () => cy.get('input[name="Cylinder Capacity"]'),
        inputEngPerformance: () => cy.get('input#engineperformance'),
        inputDate: () => cy.get('input#dateofmanufacture'),
        selectSeats: () => cy.get('select#numberofseats'),
        selectFuel: () => cy.get('select#fuel'),
        inputListPrice: () => cy.get('input#listprice'),
        selectSeatsMot: () => cy.get('select#numberofseatsmotorcycle'),
        inputMileage: () => cy.get('input#annualmileage'),
        inputPayload: () => cy.get('input#payload'),
        inputWeight: () => cy.get('input#totalweight'),
        nextButton: () => cy.get('button#nextenterinsurantdata')
    }

    fillVehicleDataForm() {
        this.el.selectMake().select('Audi')
        this.el.selectModel().select('Scooter')
        this.el.inputCcm().type('2')
        this.el.inputEngPerformance().type('20')
        this.el.inputDate().type('02/22/2020')
        this.el.selectSeats().select(2)
        this.el.selectFuel().select('Diesel')
        this.el.inputListPrice().type('20000')
        this.el.selectSeatsMot().select(2),
        this.el.inputMileage().type(2000),
        this.el.inputPayload().type(100),
        this.el.inputWeight().type(350)
        this.el.nextButton().click()
    }
}
  
module.exports = new VehicleDataForm();