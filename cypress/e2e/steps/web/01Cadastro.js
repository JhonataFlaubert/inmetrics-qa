import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// URL base do site
const urlBase = 'https://advantageonlineshopping.com/#/';

// Função para gerar um username único
const generateUsername = () => {
  const prefix = 'User';
  const randomPart = Math.random().toString(36).substring(2, 11); // Gera string alfanumérica
  const username = `${prefix}_${randomPart}`;
  return username.substring(0, 15); // Máximo de 15 caracteres
};

let username;

Given('que o usuário está na página inicial do Advantage Online Shopping', () => {
  cy.visit(urlBase);
});

When('o usuário acessa a página principal', () => {
  cy.visit(urlBase);
});

When('ele clica no botão {string}', (botao) => {
  if (botao === 'Usuário') {
    cy.get('#menuUser').click();
  }
});

When('seleciona {string}', (opcao) => {
  if (opcao === 'CREATE NEW ACCOUNT') {
    cy.contains('CREATE NEW ACCOUNT').click();
  }
});

Then('a pop-up de cadastro deve ser exibida', () => {
  cy.get('.PopUp').should('be.visible');
});

When('o usuário preenche os campos:', (dataTable) => {
  const data = dataTable.rowsHash();

  // Gera username se solicitado
  username = data.username === 'gerar username único' ? generateUsername() : data.username;

  // Preenche os campos do formulário
  cy.get('input[name="usernameRegisterPage"]').should('be.visible').type(username, { force: true });
  cy.get('input[name="emailRegisterPage"]').should('be.visible').type(data.email, { force: true });
  cy.get('input[name="passwordRegisterPage"]').should('be.visible').type(data.password, { force: true });
  cy.get('input[name="confirm_passwordRegisterPage"]').should('be.visible').type(data.confirm_password, { force: true });
});

When('marca o checkbox de {string}', (texto) => {
  if (texto === 'I AGREE') {
    cy.get('input[name="i_agree"][type="checkbox"]').scrollIntoView().should('be.visible').check({ force: true });
  }
});

When('clica no botão {string}', (botao) => {
  if (botao === 'REGISTER') {
    cy.contains(botao).should('be.visible').click({ force: true });
  }
});

Then('o sistema deve redirecionar para a página inicial', () => {
  cy.url().should('eq', urlBase);
});

Then('o elemento {string} deve ser visível', (elemento) => {
  cy.get(elemento).should('be.visible');
});
