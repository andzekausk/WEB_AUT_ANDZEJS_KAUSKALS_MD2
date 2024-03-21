import { BasePage } from "./BasePage";
export class AppointmentPage extends BasePage{
    static get url(){
        return "/#appointment";
    }
    static get appointmentButton(){
        return cy.get("a#btn-make-appointment");
    }
    static get usernameField(){
        return cy.get("input#txt-username");
    }
    static get passwordField(){
        return cy.get("input#txt-password");
    }
    static get loginButton(){
        return cy.get("button#btn-login");
    }
  }
  