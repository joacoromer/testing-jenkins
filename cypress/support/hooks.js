before(() => {
    // root-level hook
    // runs once before all tests
});

beforeEach(() => {
    cy.viewport(1500, 700);
    // root-level hook
    // runs before every test block
});

afterEach(() => {
    // runs after each test block
});

after(() => {
    // runs once all tests are done
});
