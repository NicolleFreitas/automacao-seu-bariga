import '../../support/commands'

describe('criar movimentação', () => {

  beforeEach(function() {
    cy.visitLogin();
    cy.typeEmail('0304@gmail.com');
    cy.typeSenha('123456');
    cy.clickBotaoLogin();
    cy.clickAbaMovimentacao();
  })
  
    it('Adicionar receita paga com sucesso', () => {
      cy.typeTipo('receita');
      cy.typeDataTransacao('23/07/2024');
      cy.typeDataPagamento('23/07/2024');
      cy.typeDescricao('salario');
      cy.typeInteressado('colaborador');
      cy.typeValor('1412');
      cy.selectConta('Conta teste');
      cy.clickStatusPago();
      cy.clickBotaoSalvar();
      cy.MensagemSucesso();
    });
  
    it('Adicionar movimentação com valor negativo', () => {
      cy.typeTipo('receita');
      cy.typeDataTransacao('23/07/2024');
      cy.typeDataPagamento('23/07/2024');
      cy.typeDescricao('salario');
      cy.typeInteressado('colaborador');
      cy.typeValorNegativo('-1412');
      cy.selectConta('Conta teste');
      cy.clickStatusPago();
      cy.clickBotaoSalvar();
      cy.MensagemErro();
    });
  });