const { AppointmentPage } = require("../pageObjects/AppointmentPage");
const { AppointmentSummaryPage } = require("../pageObjects/AppointmentSummaryPage");
const { HomePage } = require("../pageObjects/HomePage")

describe('katalon-demo-cura scenarios', () => {
  it('Scenario 1 - Make an Appointment', () => {
    // i. Open https://katalon-demo-cura.herokuapp.com/
    HomePage.visit();
    // ii. Click - Make Appointment
    HomePage.appointmentButton.click();
    // iii. Set username and password fields with the demo account credentials
    const username = `John Doe`;
    const password = `ThisIsNotAPassword`;
    HomePage.usernameField.type(username);
    HomePage.passwordField.type(password);
    // iv. Click - Login
    HomePage.loginButton.click();
    // v. Set the following values:
    //  1. Facility - Seoul CURA Healthcare Center
    const facility = `Seoul CURA Healthcare Center`;
    AppointmentPage.facilityCombo.select(facility);
    //  2. Check - Apply for hospital readmission
    AppointmentPage.hospitalReadmissionBox.check();
    //  3. Select - Medicaid
    AppointmentPage.medicaidRadioButton.check();
    //  4. Set Date value by using the widget - 30
    AppointmentPage.calendarWidget.click();
    const day = `30`;
    AppointmentPage.dateDay(day).click();
    //  5. Set comment - CURA Healthcare Service
    const comment = `CURA Healthcare Service`;
    AppointmentPage.commentField.type(comment);
    //  6. Click - Book Appointment
    AppointmentPage.bookAppointmentButton.click();
    // vi. Validate that previously set values are correct
    AppointmentSummaryPage.facility.should("contain",facility);
    AppointmentSummaryPage.hospitalReadmission.should("contain","Yes");
    AppointmentSummaryPage.healthcareProgram.should("contain","Medicaid");
    AppointmentSummaryPage.visitDate.should("contain",day);
    AppointmentSummaryPage.comment.should("contain",comment);
  });

  it('Scenario 2 - Appointment history empty', () => {
    // i. Open https://katalon-demo-cura.herokuapp.com/
    HomePage.visit();
    // ii. Click - Make Appointment
    // iii. Set username and password fields with the demo account credentials
    // iv. Click - Login
    // v. Click - Menu/Stack/Burger icon
    // vi. Validate that the sidebar is active
    // vii. Click - History
    // viii. Validate that - No appointment - is visible
  });
})