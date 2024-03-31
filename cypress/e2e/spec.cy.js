describe("application run", () => {
  it(`1. check if list renders and 20 list items are rendered on the screen
      2. click the first article in the list and make sure that the detail page contains information related to first article, 
      3. go back and 
      4. click the last article in the list and make sure that the detail page contains information related to last article`, () => {
    cy.visit("/");
    // make sure 20 records coming from api are displayed on the screen
    cy.get('[data-testid="article-list-item-0"]').should("exist");
    cy.get('[data-testid="article-list-item-19"]').should("exist");

    // make sure there is no further record
    cy.get('[data-testid="article-list-item-20"]').should("not.exist");

    // get the content of first list item
    cy.get('[data-testid="article-list-item-0"]')
      .get('[data-testid="text-title"]')
      .first()
      .then(($listItem) => {
        const titleToMatch = $listItem.text();
        // click the first listItem to view its detail page.
        cy.get('[data-testid="article-list-item-0"]')
          .click()
          .then(() => {
            cy.get('[data-testid="text-heading"]').then(($heading) => {
              // make sure the first listItem heading matches with the heading on details page
              expect($heading.text()).equal(titleToMatch);
              cy.get('[class*="backButton"]').click();
              // .url().should("include", "")

              // get the content of last list item
              cy.get('[data-testid="article-list-item-19"]')
                .get('[data-testid="text-title"]')
                .last()
                .then(($listItem) => {
                  const titleToMatch = $listItem.text();
                  // click the last listItem to view its detail page.
                  cy.get('[data-testid="article-list-item-19"]')
                    .click()
                    .then(() => {
                      cy.get('[data-testid="text-heading"]').then(
                        ($heading) => {
                          // make sure the last listItem heading matches with the heading on details page
                          expect($heading.text()).equal(titleToMatch);
                        }
                      );

                      // check "See full article" button has href attribute
                      cy.get('[class*="articleLink"]')
                        .find("a")
                        .should('have.attr', 'href');
                    });
                });
            });
          });
      });
  });
});
