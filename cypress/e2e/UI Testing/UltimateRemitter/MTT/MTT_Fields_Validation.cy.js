import Login from "../../../../PageObjects/LoginPage";
import ultimateRemitter from "../../../../PageObjects/Navigation UR/ultimateRemitter";

describe("MTT Fields Type Validation", () => {
    beforeEach('Login Process', () => {
        cy.CacheCookies();
        cy.log('Login TestScript Start')
        cy.fixture('login_cred_details').then((e) => {
            const ln = new Login();
            ln.logincred(e.username, e.password);
        })
        cy.log('Login TestScript End')
        const ln = new ultimateRemitter();
        //Navigate
        ln.createTransaction();
        ln.transTypeDrowdown();
    });
    afterEach('Clear Cache and Cookies', () => {
        cy.CacheCookies();
    });

    it("Transaction Info Fields", () => {

        // Transaction Amount - N(11).N(2)

        // Debit Account Amount - N(11).N(2)

        // Debit Account For Bank Charges - AN (35)

        // charge Bearer - A (4) - DropDown
        
    });

    it("Sender Info Fields", () => {

        // Sender Name

        // Sender Account Number

        // Ori Player Name

        // Ori Player ID

        // Ori Payer Bic

        // Ori Payer Address 1

        // Ori Payer Address 2

        // Ori Payer Address 3

    });

    it("Receiver Info Fields", () => {

        // Receiver Name

        // Account Number

        // Swift Bic

        // Receiver Address 1

        // Receiver Address 2

        // Receiver Address 3

        // Intermediary Swift Bic
    });

    it("Payment details Fields", () => {

        // Client Reference

        // Payment Detail

        // Invoice Detail

    });
});