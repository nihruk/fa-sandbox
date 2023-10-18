describe("Home Page", () => {
  it("displays the home page", () => {
    // Visit homepage
    cy.visit("http://localhost:3000");

    // Latest awards component is loaded with data(6 items)
    cy.get("h3").should("contain", "Latest Awards");

    cy.contains("h3", "Latest Awards").should("exist");

    cy.get(".latest-awards-component").find(".row").should("have.length", 6);
  });
});
