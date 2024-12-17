Feature: Fluxo de Finalização de Compra

  Background:
    Given que o usuário está na página inicial do Advantage Online Shopping

  Scenario: Finalizar a compra com validação do carrinho e SafePay
    Given que o usuário tem o produto "BEATS STUDIO 2" no carrinho
    When ele acessa a página de pagamento
    Then o item "BEATS STUDIO 2" deve estar listado corretamente
    And os preços e as quantidades devem ser exibidos corretamente
    When o usuário preenche os dados de login com o nome de usuário "<Jhonataqa1>" e senha "<Asd123>"
    And clica no botão "Login"
    When o usuário preenche os dados do SafePay com o nome de usuário "<Jhonataqa1>" e senha "<Senhaqa@1>"
    Then clica no botão "Pay Now"
