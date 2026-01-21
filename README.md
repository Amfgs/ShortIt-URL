#  ShortIt - Encurtador de URLs

O **ShortIt** é uma aplicação Full Stack desenvolvida em **Node.js** para facilitar o compartilhamento de links longos, transformando-os em URLs curtas e amigáveis. Este projeto demonstra conceitos fundamentais de desenvolvimento backend, como APIs REST, manipulação de arquivos estáticos e utilização de banco de dados em memória.
Funcionando ainda em ambiente de desenvolvimento, mas, caso necessário, irá para o ambiente de produção.

##  Tecnologias Utilizadas

* **Node.js**: Ambiente de execução para o JavaScript no servidor.
* **Express**: Framework web para criação de rotas, middlewares e manipulação de arquivos estáticos.
* **HTML5 & CSS3**: Interface do usuário com design moderno e responsivo.
* **JavaScript**: Lógica de encurtamento no backend e integração via Fetch API no frontend.

## Funcionalidades

* [x] **Interface Intuitiva**: Página web moderna com feedback visual.
* [x] **Geração de IDs Únicos**: Algoritmo para criar identificadores aleatórios de 5 caracteres.
* [x] **Tratamento de Erros**: Validação de campos e tratamento de rotas não encontradas (404).

## Como Executar o Projeto Localmente

### Pré-requisitos
Antes de começar, vais precisar de ter instalado na tua máquina o **Node.js**.

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd Node-js
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor:**
    ```bash
    node index.js
    ```

5.  **Acesse no navegador:**
    Abra: `http://localhost:3000`

## 📁 Estrutura de Pastas

```text
.
├── public/           # Front-end: HTML e CSS
├── database.db       # Banco de dados SQLite (gerado na primeira execução)
├── index.js          # Back-end: Servidor, Rotas e Lógica de Banco
├── package.json      # Manifesto do projeto e dependências
└── README.md         # Documentação completa do projeto
