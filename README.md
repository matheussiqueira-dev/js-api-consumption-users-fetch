# Users Fetch

Aplicacao web em HTML, CSS e JavaScript (ES6) para consumo de API publica via HTTP, com renderizacao dinamica no navegador e foco em boas praticas de frontend.

## Objetivo

Demonstrar um fluxo completo de consumo de API no cliente, incluindo validacao de resposta, tratamento de erros, estados de interface e organizacao modular do codigo.

## API Utilizada

- Endpoint: `https://jsonplaceholder.typicode.com/users`
- Metodo: `GET`
- Formato esperado: array de usuarios

## Estrutura do Projeto

```text
/src
  index.html
  /css
    styles.css
  /js
    main.js
    api.js
    dom.js
    state.js
```

## Arquitetura dos Modulos

- `src/js/api.js`: responsavel pela chamada HTTP (`fetchUsers`) e validacao da resposta.
- `src/js/dom.js`: responsavel pela manipulacao do DOM (`renderUsers`, `renderMessage`, `clearResults`).
- `src/js/state.js`: responsavel pelos estados de UI (`setLoading`, `setError`, `setSuccess`).
- `src/js/main.js`: orquestracao do fluxo principal e eventos da aplicacao.

## Funcionalidades

- Botao `Buscar` para iniciar a consulta.
- Estado de `Loading` com botao desabilitado e mensagem `Carregando...`.
- Estado de sucesso com contador de usuarios carregados.
- Estado de erro com mensagens amigaveis para:
  - falha de rede
  - erro HTTP
  - resposta invalida da API
- Renderizacao segura com `createElement` e `DocumentFragment` (sem `innerHTML` para listas).

## Como Executar

1. Abra `src/index.html` diretamente no navegador.
2. Ou utilize o Live Server (VS Code) apontando para a pasta `src`.

## Boas Praticas Aplicadas

- Separacao de responsabilidades por modulo.
- Funcoes pequenas e coesas.
- Validacao de `response.ok` e do tipo de retorno.
- Tratamento de erros com `try...catch`.
- UI como saida principal (sem dependencia de `console.log`).

## Autor

Matheus Siqueira
