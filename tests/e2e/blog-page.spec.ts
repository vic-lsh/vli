import { dataCy } from "./utils/data-cy-selector";

describe("Blog page", () => {
  it("should render blog page", () => {
    cy.visit("/blogs");

    cy.get(dataCy("header")).should("be.visible");
    cy.get(dataCy("blog-post")).should("have.length.greaterThan", 0);
  });

  it("should be navigable from the home page", () => {
    cy.visit("");

    cy.get(dataCy("blogs-link")).click();
    cy.location("pathname").should("match", /\/blogs$/);
    cy.get(dataCy("header")).should("be.visible");
  });
});
