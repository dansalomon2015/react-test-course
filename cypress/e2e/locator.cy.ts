/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it("location element with get", () => {
        cy.contains("testing");
        cy.getByTestId("test");
    });
});
