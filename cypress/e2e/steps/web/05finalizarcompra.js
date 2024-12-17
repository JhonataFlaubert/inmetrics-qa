import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const urlBase = 'https://advantageonlineshopping.com/#/';
const produto = 'BEATS STUDIO 2';
const usuario = 'Jhonataqa1';
const senhaUsuario = 'Asd123';
const safePayUsuario = 'Jhonataqa1';
const safePaySenha = 'Senhaqa@1';

Given('que o usuário está na página inicial do Advantage Online Shopping', () => {
  cy.visit(urlBase);
});


Given('que o usuário tem o produto {string} no carrinho', (nomeProduto) => {
  cy.contains(nomeProduto).click();
  cy.contains('ADD TO CART').click();
});


When('ele acessa a página de pagamento', () => {
  cy.get('#shoppingCartLink').click();
  cy.contains('CHECKOUT').click();
});


Then('o item {string} deve estar listado corretamente', (nomeProduto) => {
  cy.contains(nomeProduto).should('be.visible');
});


When('o usuário preenche os dados de login com o nome de usuário {string} e senha {string}', (usuario, senhaUsuario) => {
  cy.get('input[name="usernameInOrderPayment"]').type(usuario);
  cy.get('input[name="passwordInOrderPayment"]').type(senhaUsuario);
});


And('clica no botão de login', () => {
  cy.get('button#login_btn', { timeout: 20000 })
    .should('be.visible')
    .and('not.be.disabled')
    .click();
});

When('que o usuário clica em next', () => {
  cy.get('#next_btn', { timeout: 20000 })
    .should('be.visible');
});

And('o usuário preenche os dados do SafePay com o nome de usuário {string} e senha {string}', (usuarioSafePay, senhaSafePay) => {
  cy.get('input[name="safepay_username"]').type(usuarioSafePay);
  cy.get('input[name="safepay_password"]').type(senhaSafePay);
});

And('clica no botão "Pay Now"', () => {
  cy.get('#pay_now_btn_SAFEPAY').click();
});

Then('a compra deve ser finalizada com sucesso', () => {
  cy.get('.orderNumber').should('be.visible');
});
