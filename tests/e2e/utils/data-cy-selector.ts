/**
 * Constructs a `[data-cy=<SELECTOR>]` to select a page element for cypress tests.
 *
 * Example: `cy.get(dataCy("page-header")).should('exist')`
 *
 * @param selector the selector string
 * @returns a data-cy selector string
 */
export const dataCy = (selector: string) => `[data-cy=${selector}]`;
