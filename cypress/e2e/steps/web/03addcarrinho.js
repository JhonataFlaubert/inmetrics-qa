import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObjects/HomePage";
import CartPage from "../../../support/pageObjects/CartPage"; 
import CheckoutPage from "../../../support/pageObjects/CheckoutPage"; 

Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When("ele acessa a página de pagamento", () => {
    CartPage.accessCart().goToCheckout();
  });
  
  Then("o item {string} deve estar listado corretamente", (product) => {
    CheckoutPage.validateProductInCart(product);
  });
  
  And("os preços e as quantidades devem ser exibidos corretamente", () => {
    CheckoutPage.validatePriceQuantity();
  });
  
  /*
  Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.accessWebSite(Cypress.config("baseUrl"))
      .searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When("ele remove o produto {string}", (product) => {
    CartPage.accessCart().removeProduct(product);
  });
  
  Then("o produto {string} deve ser removido do carrinho", () => {
    CartPage.emptyCart();
  });
  
  Given("que o usuário tem o produto {string} no carrinho", (product) => {
    HomePage.accessWebSite(Cypress.config("baseUrl"))
      .searchProduct()
      .enterProductName(product)
      .selectProduct(product)
      .addToCart();
  });
  
  When(
    "ele altera a quantidade do produto {string} para {string}",
    (product, quantity) => {
      CartPage.accessCart().changeQuantity(product, quantity);
      HomePage.addToCart();
    }
  );
  
  Then(
    "o carrinho deve mostrar a quantidade {string} para o produto {string}",
    (quantity) => {
      CartPage.accessCart().validateQuantity(quantity);
    }
  );*/
  