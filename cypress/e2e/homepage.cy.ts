describe("Home Page", () => {
  it("displays the home page", () => {
    // Visit homepage
    cy.visit("/");

    // Latest awards component is loaded with data(6 items)
    cy.get(".latest-awards-component")
      .get("h3")
      .first()
      .should("contain", "Latest Awards");

    cy.get(".latest-awards-component").find(".row").should("have.length", 6);
  });
});
