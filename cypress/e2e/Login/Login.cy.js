import '../../support/commands'

describe('Login', () => {
  it('Login com sucesso', () => {
    cy.visitLogin();
    cy.typeEmail('0304@gmail.com');
    cy.typeSenha('123456');
    cy.clickBotaoLogin();
    cy.Mensagem();
  });
});