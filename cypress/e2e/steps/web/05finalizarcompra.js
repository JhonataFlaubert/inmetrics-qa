import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const urlBase = 'https://advantageonlineshopping.com/#/';
const produto = 'BEATS STUDIO 2';
const usuario = 'Jhonataqa1';
const senhaUsuario = 'Asd123';
const safePayUsuario = 'Jhonataqa1';
const safePaySenha = 'Senhaqa@1';

// Acessa a página inicial
Given('que o usuário está na página inicial do Advantage Online Shopping', () => {
  cy.visit(urlBase);
});

// Adiciona produto ao carrinho
Given('que o usuário tem o produto {string} no carrinho', (nomeProduto) => {
  cy.contains(nomeProduto).click();
  cy.contains('ADD TO CART').click();
});

// Vai para a página de pagamento
When('ele acessa a página de pagamento', () => {
  cy.get('#shoppingCartLink').click();
  cy.contains('CHECKOUT').click();
});
// Valida item no carrinho
Then('o item {string} deve estar listado corretamente', (nomeProduto) => {
  cy.contains(nomeProduto).should('be.visible');
});

// Realiza login no checkout
When('o usuário faz login com usuário {string} e senha {string}', (nomeUsuario, senha) => {
  cy.get('input[name="usernameInOrderPayment"]').type('Jhonataqa11');
  cy.get('input[name="passwordInOrderPayment"]').type('Asd123');
  cy.get('#login_btn').click();
});

// Preenche SafePay e finaliza compra
When('o usuário preenche SafePay com usuário {string} e senha {string}', (usuarioSafePay, senhaSafePay) => {
  cy.get('input[name="safepay_username"]').type(usuarioSafePay);
  cy.get('input[name="safepay_password"]').type(senhaSafePay);
  cy.get('#pay_now_btn_SAFEPAY').click();
});

// Verifica finalização da compra
Then('a compra deve ser finalizada com sucesso', () => {
  cy.get('.orderNumber').should('be.visible');
});