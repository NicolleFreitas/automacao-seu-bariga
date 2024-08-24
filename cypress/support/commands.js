//comandos página de Login
Cypress.Commands.add('visitLogin', () => {
  cy.visit('https://seubarriga.wcaquino.me/login');
});

Cypress.Commands.add('typeEmail', (email) => {
  cy.get('#email').type('0304@gmail.com');
});

Cypress.Commands.add('typeSenha', (password) => {
  cy.get('#senha').type('123456');
});

Cypress.Commands.add('clickBotaoLogin', () => {
  cy.get('.btn').click();
});

Cypress.Commands.add('Mensagem',() => {
  cy.get('.alert').should('have.text', 'Bem vindo, julia!');
});

//comandos página de Criar Movimentação
Cypress.Commands.add('visitLogin', () => {
  cy.visit('https://seubarriga.wcaquino.me/login');
});

Cypress.Commands.add('typeEmail', (email) => {
  cy.get('#email').type('0304@gmail.com');
});

Cypress.Commands.add('typeSenha', (password) => {
  cy.get('#senha').type('123456');
});

Cypress.Commands.add('clickBotaoLogin', () => {
  cy.get('.btn').click();
});

Cypress.Commands.add('clickAbaMovimentacao', () => {
  cy.get(':nth-child(3) > a').click();
})


Cypress.Commands.add('typeTipo', (type) => {
  cy.get('#tipo').type('Receita');
});

Cypress.Commands.add('typeDataTransacao', (date) => {
  cy.get('#data_transacao').type('23/07/2024');
});

Cypress.Commands.add('typeDataPagamento', (date) => {
  cy.get('#data_pagamento').type('23/07/2024');
});

Cypress.Commands.add('typeDescricao', (description) => {
  cy.get('#descricao').type('salario');
});

Cypress.Commands.add('typeInteressado', (interested) => {
  cy.get('#interessado').type('Colaborador');
});

Cypress.Commands.add('typeValor', (value) => {
  cy.get('#valor').type('1412');
});

Cypress.Commands.add('typeValorNegativo', (value) => {
  cy.get('#valor').type('-1412');
});

Cypress.Commands.add('selectConta', (account) => {
  cy.get('#conta').select('Conta teste');
});

Cypress.Commands.add('clickStatusPago', () => {
  cy.get('#status_pago').click();
});

Cypress.Commands.add('clickBotaoSalvar', () => {
  cy.get('.btn-group').click();
});

Cypress.Commands.add('MensagemSucesso',() => {
  cy.get('.alert').should('have.text', 'Movimentação adicionada com sucesso!');
});

Cypress.Commands.add('MensagemErro',() => {
  cy.get('.alert').should('have.text', 'Não é possível adicionar receita negativa.');
});