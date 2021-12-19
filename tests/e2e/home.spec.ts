describe("Home page", () => {
  it("renders", () => {
    cy.visit("");
    cy.contains("Shihang (Vic) Li");
  });
});
