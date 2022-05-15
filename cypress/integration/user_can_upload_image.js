describe("Image sharing", () => {
  it("can upload and display and image", () => {
    // sign up
    cy.visit("/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // upload image
    cy.visit("/posts");
    cy.contains("New perpective").click();

    cy.get("#new-perspective-form").find('[type="file"]').attachFile('../../public/images/testImage')
    cy.get("#new-perspective-form").submit();
    
    cy.get('[alt="delayed image"]')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0)
    })
  })
})