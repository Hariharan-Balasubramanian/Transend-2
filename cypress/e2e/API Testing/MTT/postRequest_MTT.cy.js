describe("MTT POST API Testing", () => {


    it("Login and Access Token", () => {
        const baseUrl = "https://api-uat.transend.com.hk/";
        let authToken = null;
        const requestBody =
        {
            email: 'pugazh@gmail.com',
            password: 'Password*1'

        }
        cy.request({
            method: 'POST',
            url: baseUrl + "api/Auth/login",
            header:
            {
                'Content-Type': 'application.json'
            },


            
            body: requestBody
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eq("Token Generated")
            expect(response.body.data.email).to.eq('pugazh@gmail.com')

            authToken = response.body.data.authToken;
            cy.log(authToken);
        })
    });
    // it("Get Ultimate Transaction - MTT", () => {
    //     const baseUrl = "https://api-uat.transend.com.hk/";
    //     cy.request({
    //         method: 'POST',
    //         url: baseUrl + "api/Transaction/transactionlist",
    //         header:
    //         {
    //             'Content-Type': 'application.json'
    //         },

    //         body: {
    //             fromDate: "2024-08-01",
    //             toDate: "2024-08-29",
    //             txnType: "TT",
    //             txnStatus: ""
    //         }
    //     }).then((Response) => {
    //         cy.log(Response.body)
    //     });
    // });

});