# Teste Data Stone para Desenvolvedor Front End

## Como rodar o projeto

Para rodar o projeto, basta seguir os seguintes passos:

1. Clonar o projeto em seu computador.
2. Navegar até a pasta usando o terminal e usar `npm install`.
   - Para isso é necessário ter instalado [Node](https://nodejs.org/en) e [NPM](https://www.npmjs.com/).
3. Após a instalação dos módulos basta usar `npm run dev`.
   - Caso queira rodar e hostear `dev` em sua rede local use `npm run host_dev`.
4. A aplicação deverá estar rodando no endereço indicado pelo console do vite. 
5. Pronto! A aplicação deve estar rodando em sua máquina.
   - Caso queira gerar um build para usar na internet em algum servidor, basta rodar `npm run build` e servir os arquivos em algum lugar.

## Apresentação

### Propósito do projeto

O projeto foi pedido como parte do processo seletivo da Data Stone para a vaga de Desenvolvedor Front End. O projeto busca, não só o resultado final feito pelo candidato, mas também entender se este consegue executar tarefas comuns do dia a dia de um desenvolvedor front end, como a __implementação de formulários, criação de telas, acesso de informações, cruzamento de dados no front, envio e recebimento de dados, etc__.

## Tecnologias Usadas

Para este projeto, houve a tentativa de não haver a necessidade de mexer muito com configurações de ferramentas, priorizando o desenvolvimento. Além disso, usar ferramentas com maior afinidade com aquelas já usadas anteriormente. Por isso foram usados:

- Vite
  - Vite permite gerar um _template_ para um projeto front end de forma rápida e sem muito mistério. Basta usar o comando `npm create vite@latest`, escolher as opções que deseja e pronto. A instalação de outros módulos usando `npm install` parece, na maioria das vezes, bem eficiente, precisando somente instalar e usar o módulo na aplicação.
- TypeScript
  - TypeScript permite ter um controle fino sobre os tipos, além de suas funções e métodos, auxiliando bastante no desenvolvimento a longo prazo. Também ajuda o editor de texto/IDE a encontrar funções, métodos e parâmetros definidos.
- Vue
  - Escolhido pela Data Stone para este desafio. Foi usada a _components API_ por lembrar bastante a outras bibliotecas e frameworks front end.
- Pinia
  - Pinia parece ser bem similar ao Redux Toolkit, o que torna bem simples o gerenciamento de _stores_ na aplicação.
- Vuetify
  - Sintaxe simples que lembra bastante _Bootstrap_ com componentes prontos para o uso e de forma responsiva.
    - SASS também era uma opção, se fosse feito a criação da estilização dos componentes do zero, mas _Vuetify_ torna a implementação mais rápida.

## Metodologia

O projeto foi idealizado em uma Single Page Application (SPA) representando somente uma tela mostrando as informações de clientes ou produtos e um botão para adicionar estes.  

A preferência de uma SPA à uma solução envolvendo _queries_ usando caminhos diferentes se dá por ser mais rápida de ser implementada, sem necessidade de precisar configurar rotas para cada página. Além disso, só há duas telas para mostrar.  

Sem API para as informações, assim como já descrito no desafio, as informações seriam locais. Desta forma, stores para segurar as informações da sessão pareceu ser a melhor ideia para essa aplicação. Logo, a não ser que o usuário recarregue/feche a página, os dados são mantidos independente da tela que esteja aberta.  

Pequenos testes unitários foram implementados durante a implementação dos _stores_, verificando assim que tudo estava funcionando antes da implementação das ações na interface.

## Processo de Criação

É invocado o comando `npm create vite@latest` no terminal na pasta do projeto. Feita a seleção das informações para criar uma aplicação Vue simples (não sendo Nuxt) com TypeScript e assim o ambiente já está pronto.  

Para começar é construído o que seria o componente para cadastrar, de forma a ajudar na familiarização do ambiente e do projeto. Foi feito um pequeno componente com campos usando `<input />` e alguns botões, sem muita estilização.  

Após a interface inicial do cadastro, é feito os _stores_ de clientes e produtos usando Pinia. Além disso, Vitest é incluído no projeto para a construção dos testes unitários.  

Foram então montados os testes unitários para cliente, auxiliando na montagem das ações do _store_ de clientes. Foram implementadas funções para criar, atualizar e deletar um cliente. Feito estes, a mesma implementação foi feita para produtos.  

Neste ponto, a implementação do código para captar informações dos valores e salvá-los em sua devida _store_ começou. Seguindo a exibição destes valores, junto com a interface para permitir a edição e deleção dos dados.

Assim seguiu a implementação da conexão entre clientes e produtos cadastrados. Considerando que clientes ativos não podem cadastrar produtos e, produtos inativos não podem ser vinculados a clientes, uma lista para mostrar e adicionar os dados foi incluída para cada cliente.

Para finalizar, os componentes seriam estilizados usando _sass_, mas para melhor estilização, mantendo o padrão em toda a aplicação, _Vuetify_ foi escolhida como biblioteca gráfica, facilitando a padronização de estilo em toda a aplicação.  

Assim foi dada como finalizada a implementação do desafio.

## Considerações Finais

### O que poderia ser melhorado

A implementação de animação ao abrir alguma das _views_ (entre clientes e produtos) assim como animações na hora de deletar um componente, alinhar alguns elementos de acordo em telas _mobile_, validação dos campos (potencialmente) obrigatórios e simular requisições usando `setTimout` ficaram de fora, infelizmente.

O design também poderia ser um pouco mais original, mas a falta de tempo já muito próxima a data de entrega fez com que isso ficasse em segundo plano.

### Outras considerações

O projeto foi uma ótima forma de aprendizado, tanto para colocar em prática habilidades já previamente adquiridas assim como aprender novas ferramentas.


Obrigado pela oportunidade.