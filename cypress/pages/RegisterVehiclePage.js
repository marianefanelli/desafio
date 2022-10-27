class RegisterVehiclePage {
    el = {
        logo: '#tricentis_logo',
        sectionName: 'span#selectedinsurance',
        selectMake: 'select#make',
        selectModel: 'select#model',
        inputCcm: 'input[name="Cylinder Capacity"]',
        inputEngPerformance: 'input#engineperformance'

    }

    login(){
        cy.visit("http://sampleapp.tricentis.com/101/app.php")
    }

    validateRegisterPage(){
        cy
            .get(el.logo).should('exist')
            .get(el.sectionName).should('be.visible')
    }

    fillInForm(form) {
        if(form == "Enter Vehicle Data"){
            return this.fillVehicleDataForm()
        }else if(form == "Enter Insurant Data"){
            return this.fillInsurantData()
        }else if(form == "Enter Product Data"){
            return this.fillProductData()
        }else if(form == "Select Price Option"){
            return this.fillPriceOption()
        }
        return null
    }

    fillVehicleDataForm() {
        return cy
            .get(el.selectMake).select('Audi')
            .get(el.selectModel).select('Scooter')
            .get(el.inputCcm).type('2')
            .get(el.inputEngPerformance).type('20')
    }




}
  
  module.exports = new RegisterVehiclePage();