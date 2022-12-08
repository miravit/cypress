import { mockData } from "../../src/ts/services/__mocks__//movieservice";

describe("should  getData", () => {
  it("should get 3 img", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*", mockData);

    cy.get("form").submit();

    cy.get("div.movie > img").should("have.length", 3);
  });

  it("should have Harry in title", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*", mockData);

    cy.get("form").submit();

    cy.get("div.movie:last > h3").contains("Harry");
  });
  it("should get 3 headings", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*", mockData);

    cy.get("form").submit();

    cy.get("div.movie > h3").should("have.length", 3);
  });

  it("should have Mira in title", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*", mockData);

    cy.get("form").submit();

    cy.get("div.movie:first > h3").contains("Mira");
  });
  it("should get 3 divs", () => {
    cy.visit("http://localhost:1234");
    cy.intercept("GET", "http://omdbapi.com/*", mockData);

    cy.get("form").submit();

    cy.get("div#movie-container > div.movie").should("have.length", 3);
  });
  it("should type in input", () => {
    cy.visit("http://localhost:1234");

    cy.get("input").type("star").should("have.value", "star");
  });

  it("should have button", () => {
    cy.visit("http://localhost:1234");

    cy.get("button").should("contain", "Sök");
  });
});
