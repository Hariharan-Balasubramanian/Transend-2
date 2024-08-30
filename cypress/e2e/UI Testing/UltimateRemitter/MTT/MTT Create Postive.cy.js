import Login from "../../../../PageObjects/LoginPage";
import ultimateRemitter from "../../../../PageObjects/Navigation UR/ultimateRemitter";
import createtranMTT from "../../../../PageObjects/MTT/CreateTransaction";

describe('Ultimate Remitter - MTT', () => {
    beforeEach('Login Process', () => {
        cy.CacheCookies();
        cy.log('Login TestScript Start')
        cy.fixture('login_cred_details').then((e) => {
            const ln = new Login();
            ln.logincred(e.username, e.password);
        })
        cy.log('Login TestScript End')
        const ln = new ultimateRemitter();
        ln.createTransaction();
        ln.transTypeDrowdown();
    });
    afterEach('Clear Cache and Cookies', () => {
        cy.CacheCookies();
    });
    const lx = new createtranMTT
    it("Create Transaction MTT - Postive", () => {
        cy.fixture('MTT_txn_details').then((data) => {
            lx.transInfo(
                data.txnCurr,
                data.txnAmt,
                data.dbCurr
            );
            cy.wait(500)
            lx.senderInfo(
                data.sndName,
                data.sndAccno,
                data.sendoripayerName,
                data.sendoripayerID,
                data.sendoripayeradd1,
                data.sendoripayeradd2,
                data.sendoripayeradd3
            );
            cy.wait(500)
            lx.receiverInfo(
                data.receiverName,
                data.receiverAccno,
                data.ReceiverSwiftCode,
                data.ReceiverAddress1,
                data.ReceiverAddress2,
                data.ReceiverAddress3
            )
            cy.wait(500)
            lx.adviseDelivery(data.Email); // If Email Provide Payment details function is call
            cy.wait(500)
            lx.saveTran();
        })


    });
})