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
    cy.get('#login_btn').click();
    cy.get('.mobileBtnHandler > #next_btn').click();
  });

  And('o usuário preenche os dados do SafePay com o nome de usuário {string} e senha {string}', (usuarioSafePay, senhaSafePay) => {
    cy.get('.safepay-form input[name="safepay_username"]').first().type(usuarioSafePay);
    cy.get('.safepay-form input[name="safepay_password"]').first().type(senhaSafePay);
  });
  /*
  Then('clica no botão "Pay Now"', () => {
    cy.get('#pay_now_btn_SAFEPAY').click();
  });*/
