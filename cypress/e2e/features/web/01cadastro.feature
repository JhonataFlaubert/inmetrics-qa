Feature: Realizar Cadastro no shopping

  Scenario: Cadastrar uma nova conta e redirecionar para a página inicial
    Given o usuário acessa a página principal
    When ele clica no botão "Usuário"
    And seleciona "CREATE NEW ACCOUNT"
    Then a pop-up de cadastro deve ser exibida

    When o usuário preenche os campos:
      | campo              | valor                     |
      | username           | gerar username único      |
      | email              | flaubert33cy@exemplo.com |
      | password           | Senha12345               |
      | confirm_password   | Senha12345               |

    And marca o checkbox de "I AGREE"
    And clica no botão "REGISTER"
    Then o sistema deve redirecionar para a página inicial
    And o elemento "#speakersImg" deve ser visível
