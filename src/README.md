# Hair Day

Aplicação web para agendamento de horários em um salão de beleza.

## Sobre o Projeto

O **Hair Day** é um sistema simples de agendamento online para salões de beleza. Com ele, clientes podem visualizar horários disponíveis, selecionar datas e agendar serviços de forma prática e rápida. O sistema também permite o cancelamento de agendamentos e exibe os horários já reservados, evitando conflitos.  
O projeto foi desenvolvido com foco em organização de código, separando as responsabilidades em módulos para facilitar manutenção e evolução. Utiliza bibliotecas modernas para manipulação de datas e simulação de backend, tornando o ambiente ideal para estudos ou como base para projetos reais de agendamento.

## Tecnologias e Bibliotecas Utilizadas

- **[Day.js](https://day.js.org/):** Manipulação e formatação de datas.
- **[JSON Server](https://github.com/typicode/json-server):** API fake para persistência dos agendamentos.
- **[Webpack](https://webpack.js.org/):** Empacotamento dos arquivos JS e CSS.
- **[Babel](https://babeljs.io/):** Transpiler para compatibilidade de código JavaScript moderno.

## Padrão de Projeto

- **Modularização:** O código está organizado em módulos separados por responsabilidade (`form`, `schedules`, `services`, `utils`).
- **Separação de responsabilidades:** Serviços de API, manipulação de DOM e utilitários estão em arquivos distintos.

## Setup e Configuração

1. **Instale as dependências:**

   ```sh
   npm install
   ```

2. **Inicie o servidor de API fake:**

   ```sh
   npm run server
   ```

3. **Inicie o ambiente de desenvolvimento:**

   ```sh
   npm run dev
   ```

4. **Acesse o projeto:**
   - Abra [http://localhost:3000](http://localhost:3000) no navegador.

---

**Observação:**  
O arquivo de configuração da API está em api-config.js.  
Os estilos estão em styles.  
Os módulos principais estão em modules.
