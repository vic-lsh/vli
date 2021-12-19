describe("Home page", () => {
  it("renders", () => {
    cy.visit("http://localhost:3005");
    cy.contains("Shihang (Vic) Li");
  });
});
