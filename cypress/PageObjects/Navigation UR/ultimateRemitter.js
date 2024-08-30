// Navigation for Ultimate Remitter Menu
class ultimateRemitter {

    eleUltimate_Remitter = "app-menu>ul>li>ul>li:nth-of-type(8)";
    eleCreateTransaction = "app-menu>ul>li>ul>li:nth-of-type(8)>ul>li:nth-of-type(1)>a";

    ultimateRemitter() {
        cy.get(this.eleUltimate_Remitter).click();
    }
    createTransaction() {
        this.ultimateRemitter();
        cy.get(this.eleCreateTransaction).click();
        cy.contains("Ultimate Remitter Transaction").should('be.visible');
    }


    eletranstypedropdown = "p-dropdown[inputid='ultimateRemitterTransactionType']>div>span";
    eletranstypeinputbox = "p-dropdown[inputid='ultimateRemitterTransactionType']>div>p-overlay>div>div>div>div:nth-of-type(1)>div>input";
    transType = 'MTT';
    transTypeDrowdown() {
        cy.get(this.eletranstypedropdown).click();
        cy.get(this.eletranstypeinputbox)
            .clear()
            .type(this.transType)
            .type('{downarrow}')
            .type('{Enter}')
        cy.wait(50)
        cy.get(this.eletranstypedropdown)
            .should('have.text', 'MTT (Outward Telegraphic Transfers)')
    }
}
export default ultimateRemitter;