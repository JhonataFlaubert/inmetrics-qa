  Feature: Tela de pagamento

  Background:
    Given que o usuário está na página inicial

  @web
  @04telapagamento
  Scenario Outline: Validar os produtos no carrinho na página de pagamento
    Given que o usuário tem o produto "<nome_do_produto>" no carrinho
    When ele acessa a página de pagamento
    Then o item "<nome_do_produto>" deve estar listado corretamente
    Examples:
      | nome_do_produto            |
      | BEATS STUDIO 2             |