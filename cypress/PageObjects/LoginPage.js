class Login {
    url = 'https://uat.transend.com.hk/';
    eleusername = "input[placeholder='Email']";
    elepassword = "input[placeholder='Password']";
    btnsubmit = "button[label='Login']>span";

    logincred(username, password) {
        cy.visit(this.url);
        cy.wait(500);
        cy.get(this.eleusername).type(username);
        cy.get(this.elepassword).type(password);
        cy.get(this.btnsubmit).click({ force: true });
        cy.wait(1000);
    }
}
export default Login;