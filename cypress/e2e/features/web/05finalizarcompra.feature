Feature: Fluxo de Finalização de Compra

  Background:
    Given que o usuário está na página inicial
  
  @web
  @05finalizarcompra
    Scenario: Finalizar a compra com validação do carrinho e SafePay
      Given que o usuário tem o produto "BEATS STUDIO 2" no carrinho
      When ele acessa a página de pagamento
      Then o item "BEATS STUDIO 2" deve estar listado corretamente
      When o usuário preenche os dados de login com o nome de usuário "Jhonataqa1" e senha "Asd123"
      And clica no botão "Login"
      When que o usuário clica em next
      And o usuário preenche os dados do SafePay com o nome de usuário "Jhonataqa1" e senha "Senhaqa@1"
      And clica no botão "Pay Now"
      Then a compra deve ser finalizada com sucesso