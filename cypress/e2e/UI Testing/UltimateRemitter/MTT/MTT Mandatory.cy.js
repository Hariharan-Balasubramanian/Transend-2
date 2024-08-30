import Login from "../../../PageObjects/LoginPage"
import ultimateRemitter from "../../../PageObjects/Navigation MTT/ultimateRemitter";
import MandatoryValidation from "../../../PageObjects/MTT/Validation";

describe('Transend - Ultimate Remitter', () => {
  beforeEach('Login Process', () => {
    cy.CacheCookies();
    cy.log('Login TestScript Start')
    cy.fixture('login_cred_details').then((e) => {
      const ln = new Login();
      ln.logincred(e.username, e.password);
    })
    cy.log('Login TestScript End')
    ln.ultimateRemitter();
    ln.createTransaction();
    ln.transTypeDrowdown();
  })
  afterEach('Clear Cache and Cookies', () => {
    cy.CacheCookies();
    cy.reload();
  })

  const btnsubmit = "app-ultimate-remitter-transaction>form>div:nth-of-type(6)>div>div>button";
  const clrbtn = "app-ultimate-remitter-transaction>form>div:nth-of-type(6)>div>div>p-button:nth-of-type(2)>button";
  
  //{retries:1}
  
  const ln = new ultimateRemitter();
  const lm = new MandatoryValidation();
  it('Mandatory Requried validation - MTT', () => {
    cy.get(btnsubmit).click();
    lm.transInfomandatory();
    lm.senderInfo();
    lm.receiverInfo();
    cy.log("Advise Delivery Validation")
    lm.adviseDelivery();
    cy.get(clrbtn).click();
    cy.log("Transaction Currency to Payment of Purpose")
    lm.TransactionCurrency();
  });
  it('Advise Mandatory Requried validation - MTT', () => {
    cy.get(btnsubmit).click();

    // Advise Delivery Email Mandatory
    cy.log("Advise Delivery Validation")
    lm.adviseDelivery();
    cy.get(clrbtn).click();

  });
  it('Transaction Currency Payment of Purpose Mandatory Requried validation - MTT', () => {
    cy.get(btnsubmit).click();
    cy.get(clrbtn).click();
    // Only CNY is mandatory for Payment of Purpose
    // Another Curr is not mandatory for Payment of purpose
    cy.log("Transaction Currency to Payment of Purpose")
    lm.TransactionCurrency();
  });

})