class createtranMTT {
    eletrancurr = "p-dropdown[inputid='currency']>div";
    eletrancurrinput = "p-dropdown[inputid='currency']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input"
    eletranamt = "input[id='txnAmount']";
    eledbtrancurr = "p-dropdown[inputid='debitAccountCcy']>div";
    eledbcurrinput = "p-dropdown[inputid='debitAccountCcy']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input"

    transInfo(txncurrcode, tranamt, detxncurr) {
        //Tran info
        cy.get(this.eletrancurr).click();
        cy.get(this.eletrancurrinput)
            .clear()
            .type(txncurrcode)
            .type('{downarrow}')
            .type('{enter}')

        cy.get(this.eletranamt).type(tranamt);

        cy.get(this.eledbtrancurr).click();
        cy.get(this.eledbcurrinput)
            .clear()
            .type(detxncurr)
            .type('{downarrow}')
            .type('{enter}')
            .wait(500)

        cy.get("p-dropdown[inputid='currency']>div>span").then((element) => {
            let txncurrency = element.text().trim();

            if (txncurrency === 'Yuan Renminbi') {
                // Open the dropdown for 'purposeOfAmount'
                cy.get("p-dropdown[inputid='purposeOfAmount']>div").click();

                // Find and click on 'Goods Trade' option
                cy.get("p-dropdown[inputid='purposeOfAmount']>div>p-overlay>div>div>div>div:nth-of-type(2)>ul>p-dropdownitem")
                    .contains('Goods Trade')
                    .click({ force: true }); // Click on the 'Goods Trade' option

                cy.log('Clicked on: Goods Trade');
            }
        });
    }

    //Sender info
    Senderstart = "app-ultimate-remitter-transaction>form>div:nth-of-type(2)>div>div>div>div:nth-of-type"
    Senderend = ">input";
    eleSenderName = this.Senderstart + "(1)" + this.Senderend;
    eleSenderaccountNo = this.Senderstart + "(2)" + this.Senderend;
    eleSenderBankcountrycode = this.Senderstart + "(3)" + this.Senderend;
    eleSenderoripayerName = this.Senderstart + "(4)" + this.Senderend;
    eleSenderoripayerID = this.Senderstart + "(5)" + this.Senderend;
    eleSenderoripayerAddress1 = this.Senderstart + "(7)" + this.Senderend;
    eleSenderoripayerAddress2 = this.Senderstart + "(8)" + this.Senderend;
    eleSenderoripayerAddress3 = this.Senderstart + "(9)" + this.Senderend;

    senderInfo(
        sendName,
        sendAccno,
        sendoripayerName,
        sendoripayerID,
        sendoripayeradd1,
        sendoripayeradd2,
        sendoripayeradd3
    ) {
        cy.get(this.eleSenderName).type(sendName);
        cy.get(this.eleSenderaccountNo).type(sendAccno);
        cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(2)>div>div>div>div:nth-of-type(3)>p-dropdown>div")
            .click();
        cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(2)>div>div>div>div:nth-of-type(3)>p-dropdown>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input")
            .type("Hong Kong Limited")
            .type('{downarrow}')
            .type('{enter}');
        cy.get(this.eleSenderoripayerName).type(sendoripayerName);
        cy.get(this.eleSenderoripayerID).type(sendoripayerID);
        cy.get(this.eleSenderoripayerAddress1).type(sendoripayeradd1);
        cy.get(this.eleSenderoripayerAddress2).type(sendoripayeradd2);
        cy.get(this.eleSenderoripayerAddress3).type(sendoripayeradd3);
    }

    //Receiver Info
    RecevierStart = "app-ultimate-remitter-transaction>form>div:nth-of-type(3)>div>div>div>div:nth-of-type"
    RecevierEnd = ">input"
    eleReceiverName = this.RecevierStart + "(1)" + this.RecevierEnd;
    eleReceiveraccountNo = this.RecevierStart + "(2)" + this.RecevierEnd;
    eleReceiverBankcountrycode = this.RecevierStart + "(3)" + this.RecevierEnd;
    eleReceiverSwiftCode = this.RecevierStart + "(4)" + this.RecevierEnd;
    eleReceiverAddress1 = this.RecevierStart + "(7)" + this.RecevierEnd;
    eleReceiverAddress2 = this.RecevierStart + "(8)" + this.RecevierEnd;
    eleReceiverAddress3 = this.RecevierStart + "(9)" + this.RecevierEnd;

    receiverInfo(
        ReceiverName,
        ReceiverAccno,
        ReceiverSwiftCode,
        ReceiverAddress1,
        ReceiverAddress2,
        ReceiverAddress3) {
        cy.get(this.eleReceiverName).type(ReceiverName)
        cy.get(this.eleReceiveraccountNo).type(ReceiverAccno)

        cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(3)>div>div>div>div:nth-of-type(3)>p-dropdown>div")
            .click()
        cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(3)>div>div>div>div:nth-of-type(3)>p-dropdown>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input")
            .type("Hong Kong Limited")
            .type('{downarrow}')
            .type('{enter}')

        cy.get(this.eleReceiverSwiftCode).type(ReceiverSwiftCode)
        cy.get(this.eleReceiverAddress1).type(ReceiverAddress1)
        cy.get(this.eleReceiverAddress2).type(ReceiverAddress2)
        cy.get(this.eleReceiverAddress3).type(ReceiverAddress3)
    }

    //advise Delivery Dropdown
    eleadviseDrop = "p-dropdown[inputid='advisaryMode']>div>span";
    eleadvisedropinput = "p-dropdown[inputid='advisaryMode']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input";
    adviseDelivery(email) {
        cy.get(this.eleadviseDrop).click();
        cy.get(this.eleadvisedropinput)
            .type("Email")
            .type('{downarrow}')
            .type('{enter}')
        cy.get("input[id='advisaryEmails']").type(email)
        cy.wait(150)
        this.paymentDetails();
    }
    // Payment Details

    paymentDetails() {
        cy.get("p-dropdown[inputid='advisaryMode']>div>span")
            .then((data) => {
                const email = data.text().trim()
                if (email === 'Email') {
                    //Payment Details
                    cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(5)>div>div>div>div:nth-of-type(2)>textarea")
                        .type('Payment Details')
                    //invoice Details
                    cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(5)>div>div>div>div:nth-of-type(3)>textarea")
                        .type('invoice Details')
                }
            })
    }

    // Save Transaction
    btnsave = "app-ultimate-remitter-transaction>form>div:nth-of-type(6)>div>div>button";
    saveTran() {
        // const invalid = cy.contains('not valid.').should('be.visible');
        // const required = cy.contains('is required.').should('be.visible');
        const notinvalid = cy.contains('not valid.').should('not.be.visible');
        const notrequired = cy.contains('is required.').should('not.be.visible');
        if (invalid && required) {
            //Save Button
            cy.log("MTT transaction not created");
        } else {
            cy.get(this.btnsave).click();
            cy.log("MTT transaction successfully created");
        }
    }
}
export default createtranMTT;