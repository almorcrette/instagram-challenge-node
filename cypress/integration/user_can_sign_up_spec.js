describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    cy.url().should("include", "/sessions/new");
  });

  describe("requires username, email and password to be provided", () => {
    it("fails to register without a username", () => {
      cy.visit("/users/new");
      cy.get("#email").type("someone@example.com");
      cy.get("#password").type("password");
      cy.get("#submit").click();

      cy.url().should("include", "/users/new");
      cy.get("#missing-information").should("contain", "Username, email and password all required. Try again");

    });

    it("fails to register without an email", () => {
      cy.visit("/users/new");
      cy.get("#username").type("someone");
      cy.get("#password").type("password");
      cy.get("#submit").click();

      cy.url().should("include", "/users/new");
      cy.get("#missing-information").should("contain", "Username, email and password all required. Try again");


    });

    it("fails to register without a password", () => {
      cy.visit("/users/new");
      cy.get("#username").type("someone");
      cy.get("#email").type("someone@example.com");
      cy.get("#submit").click();

      cy.url().should("include", "/users/new");
      cy.get("#missing-information").should("contain", "Username, email and password all required. Try again");


    });
  })
});
