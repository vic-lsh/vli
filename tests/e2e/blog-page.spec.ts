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

  describe("Blog entries", () => {
    beforeEach(() => {
      cy.visit("/blogs");
    });

    it("should show blog title", () => {
      cy.get(dataCy("blog-post")).get(dataCy("title"));
    });

    it("should show content summary", () => {
      cy.get(dataCy("blog-post")).get(dataCy("summary"));
    });

    it("should show date posted", () => {
      cy.get(dataCy("blog-post")).get(dataCy("date"));
    });
  });
});
