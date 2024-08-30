class MandatoryValidation {
    //Transaction Info
    TransInfoStart = 'validation-message[propertyname="';
    TransInfoEnd = '"]>div>span';
    eletranscurrvali = this.TransInfoStart + "Transaction Currency" + this.TransInfoEnd;
    eletransamtvali = this.TransInfoStart + 'Transaction Amount' + this.TransInfoEnd;
    eledebitcurrvali = this.TransInfoStart + 'Debit Currency' + this.TransInfoEnd;

    transInfomandatory() {
        cy.get(this.eletranscurrvali).should('contain.text', 'Transaction Currency is required.');
        cy.get(this.eletransamtvali).should('contain.text', 'Transaction Amount is required.');
        cy.get(this.eledebitcurrvali).should('contain.text', 'Debit Currency is required.');
    }

    //Send Info
    Senderstart = "app-ultimate-remitter-transaction>form>div:nth-of-type(2)>div>div>div>div:nth-of-type"
    Senderend = ">validation-message>div>span";
    eleSenderName = this.Senderstart + "(1)" + this.Senderend;
    eleSenderaccountNo = this.Senderstart + "(2)" + this.Senderend;
    eleSenderBankcountrycode = this.Senderstart + "(3)" + this.Senderend;
    eleSenderoripayerName = this.Senderstart + "(4)" + this.Senderend;
    eleSenderoripayerID = this.Senderstart + "(5)" + this.Senderend;
    eleSenderoripayerAddress1 = this.Senderstart + "(7)" + this.Senderend;
    eleSenderoripayerAddress2 = this.Senderstart + "(8)" + this.Senderend;
    eleSenderoripayerAddress3 = this.Senderstart + "(9)" + this.Senderend;

    senderInfo() {
        cy.get(this.eleSenderName).should('contain.text', 'Name is required.')
        cy.get(this.eleSenderaccountNo).should('contain.text', 'Account Number is required.')
        cy.get(this.eleSenderBankcountrycode).should('contain.text', 'Bank Country Code is required.')
        cy.get(this.eleSenderoripayerName).should('contain.text', 'Ori Payer Name is required.')
        cy.get(this.eleSenderoripayerID).should('contain.text', 'Ori Payer ID is required.')
        cy.get(this.eleSenderoripayerAddress1).should('contain.text', 'Ori Payer Address 1 is required.')
        cy.get(this.eleSenderoripayerAddress2).should('contain.text', 'Ori Payer Address 2 is required.')
        cy.get(this.eleSenderoripayerAddress3).should('contain.text', 'Ori Payer Address 3 is required.')
    }
    //Receiver Info
    RecevierStart = "app-ultimate-remitter-transaction>form>div:nth-of-type(3)>div>div>div>div:nth-of-type"
    RecevierEnd = ">validation-message>div>span"
    eleReceiverName = this.RecevierStart + "(1)" + this.RecevierEnd;
    eleReceiveraccountNo = this.RecevierStart + "(2)" + this.RecevierEnd;
    eleReceiverBankcountrycode = this.RecevierStart + "(3)" + this.RecevierEnd;
    eleReceiverSwiftCode = this.RecevierStart + "(4)" + this.RecevierEnd;
    eleReceiverAddress1 = this.RecevierStart + "(7)" + this.RecevierEnd;
    eleReceiverAddress2 = this.RecevierStart + "(8)" + this.RecevierEnd;
    eleReceiverAddress3 = this.RecevierStart + "(9)" + this.RecevierEnd;

    receiverInfo() {
        //cy.get(this.eleReceiverName).should('contain.text', 'Name is required.')
        cy.get(this.eleReceiveraccountNo).invoke('text').then((text) => {
            const normalizedText = text.replace(/\s+/g, ' ').trim();
            expect(normalizedText.trim()).to.equal('Account Number is required.')
        })
        cy.get(this.eleReceiverBankcountrycode).should('contain.text', 'Bank Country Code is required.')
        cy.get(this.eleReceiverSwiftCode).should('contain.text', 'Swift Bic is required.')
        cy.get(this.eleReceiverAddress1).should('contain.text', 'Receiver Address 1 is required.')
        cy.get(this.eleReceiverAddress2).should('contain.text', 'Receiver Address 2 is required.')
        cy.get(this.eleReceiverAddress3).should('contain.text', 'Receiver Address 3 is required.')
    }
    //advise Delivery Dropdown
    eleadviseDrop = "p-dropdown[inputid='advisaryMode']>div>span";
    eleadvisedropinput = "p-dropdown[inputid='advisaryMode']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input";
    eleemail = "app-ultimate-remitter-transaction>form>div:nth-of-type(4)>div>div>div>div:nth-of-type(2)>validation-message>div>span";
    adviseDelivery() {
        cy.get(this.eleadviseDrop).click();
        cy.get(this.eleadvisedropinput)
            .type('Email')
            .type('{downarrow}')
            .type('{enter}')
        cy.get(this.eleemail).should('contain.text', 'Enter Emails is required.')
    }


    TransactionCurrency() {
        cy.get("p-dropdown[inputid='currency']>div").click();
        cy.get("p-dropdown[inputid='currency']>div>p-overlay>div>div>div>div:nth-of-type(2)>ul>p-dropdownitem>li>div>div")
            .contains('CNY (YUAN RENMINBI)')
            .click();
        //save button
        cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(6)>div>div>button").click()
        // Payment of Purpose
        cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div:nth-of-type(7)>validation-message>div>span")
            .should('contain.text', 'Payment Purpose Type is required.')

        // Other Currency are no mandatory of Payment of purpose field
        cy.reload();
        cy.wait(500);
        let eletranstypedropdown = "p-dropdown[inputid='ultimateRemitterTransactionType']>div>span";
        let eletranstypeinputbox = "p-dropdown[inputid='ultimateRemitterTransactionType']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input";
        let transType = 'MTT';
        cy.get(eletranstypedropdown).click();
        cy.get(eletranstypeinputbox)
            .clear()
            .type(transType)
            .type('{downarrow}')
            .type('{Enter}')
        // // Transaction currency
        cy.get("p-dropdown[inputid='currency']>div").click();
        cy.get("p-dropdown[inputid='currency']>div>p-overlay>div>div>div>div:nth-of-type(2)>ul>p-dropdownitem")
            .then(($item) => {
                const currencies = [];
                $item.find("li").each((index, element) => {
                    const text = Cypress.$(element).text().trim();
                    if (text && text !== "CNY (YUAN RENMINBI)") {
                        currencies.push(text);
                    }
                    //cy.log(text);
                });

                cy.wrap(currencies).each(currency => {
                    const currencyCode = currency.split(' ')[0]
                    cy.get("p-dropdown[inputid='currency']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input")
                        .should('be.enabled')
                        .clear()
                        .wait(50)
                        .type(currencyCode, { force: true })
                        .wait(50)
                        .type('{downarrow}')
                        .type('{enter}');

                    cy.wait(100)

                    cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(6)>div>div>button").click()
                    cy.contains("Payment Purpose Type is required.").should('not.exist');
                    cy.get("p-dropdown[inputid='currency']>div").click();

                    // Check if the mandatory alert is NOT displayed
                    // cy.get("app-ultimate-remitter-transaction>form>div:nth-of-type(1)>div:nth-of-type(2)>div>div>div:nth-of-type(7)>validation-message>div>span")
                    //     .should('not.contain.text', 'Payment Purpose Type is required.');

                    //cy.contains("Payment Purpose Type is required.").should('not.exist');
                });
            })
    }
}

export default MandatoryValidation;