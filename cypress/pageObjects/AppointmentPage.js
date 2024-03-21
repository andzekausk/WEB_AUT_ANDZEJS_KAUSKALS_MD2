import { BasePage } from "./BasePage";
export class AppointmentPage extends BasePage{
    static get url(){
        return "/#appointment";
    }
    static get facilityCombo(){
        return cy.get("select#combo_facility");
    }
    static get hospitalReadmissionBox(){
        return cy.get("input#chk_hospotal_readmission");
    }
    static get medicaidRadioButton(){
        return cy.get("input#radio_program_medicaid");
    }
    static get calendarWidget(){
        return cy.get("input#txt_visit_date");
    }
    static dateDay(nmbr){
        return cy.get('[class="day"]').contains(nmbr);
    }
    static get commentField(){
        return cy.get("textarea#txt_comment");
    }
    static get bookAppointmentButton(){
        return cy.get("button#btn-book-appointment");
    }
  }
  