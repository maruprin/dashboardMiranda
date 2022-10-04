/* eslint-disable jest/expect-expect */
describe("/login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("trying to navigate to rooms (private route) and returns to login because user is not authenticated", () => {
    cy.visit("http://localhost:3000/rooms");
    cy.location().should((loc) => expect(loc.pathname).to.eq("/login"));
  });
});