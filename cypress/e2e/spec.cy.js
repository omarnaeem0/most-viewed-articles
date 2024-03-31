describe("application run", () => {
  it("check if list renders and 20 list items are rendered on the screen", () => {
    cy.visit("/");
    // make sure 20 records coming from api are displayed on the screen
    cy.get('[data-testid="article-list-item-0"]').should("exist");
    cy.get('[data-testid="article-list-item-19"]').should("exist");

    // make sure there is no further record
    cy.get('[data-testid="article-list-item-20"]').should("not.exist");

    // cy.contains('li').click();
  });

  it("passes", () => {
    cy.visit("/");
    // get the content of first list item
    cy.get('[data-testid="article-list-item-0"]').get('[data-testid="text-title"]').first().then(($listItem) => {
      const titleToMatch = $listItem.text();
      // click the first listItem to view its detail page.
      cy.get('[data-testid="article-list-item-0"]').click().then(() => {
        cy.get('[data-testid="text-heading"]').then($heading => {
          // make sure the first listItem heading matches with the heading on details page
          expect($heading.text()).equal(titleToMatch);
        });
      });
    });
  });
});
