describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.wait(3000); 
  });

  it('displays an error message when the password is missing', () => {
    cy.get('input#username').type('test@example.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Password is required').should('be.visible');
  });

  it('displays an error message when the email is missing', () => {
    cy.get('input#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('User name is required').should('be.visible');
  });

  it('displays a success message when both email and password are provided', () => {
    cy.get('input#username').type('test@example.com');
    cy.get('input#password').type('password123');
    cy.get('button[type="submit"]').click();
    cy.contains('Successfully logged in').should('be.visible');
  });
})