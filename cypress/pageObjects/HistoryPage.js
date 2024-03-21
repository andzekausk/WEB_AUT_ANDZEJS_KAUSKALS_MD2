import { BasePage } from "./BasePage";
export class HistoryPage extends BasePage{
    static get url(){
        return "/history.php#history";
    }
    static validateNoAppoitments(){
        return cy.get("section#history").should("contain", "No appointment.");
    }
  }
  