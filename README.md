# TaskApp

TaskApp é um aplicativo desenvolvido para ajudar na organização de tarefas, permitindo que os usuários gerenciem suas atividades diárias com facilidade. Com uma interface simples e intuitiva, o app possibilita adicionar, visualizar e marcar tarefas como concluídas.

## Funcionalidades

- **Cadastro de Tarefas**: Permite criar tarefas, atribuindo nome, descrição e data.
- **Marcação de Tarefas Concluídas**: Ao concluir uma tarefa, o nome é riscado e o status é atualizado para "Concluída".
- **Visualização de Tarefas Pendentes e Concluídas**: Tarefas podem ser filtradas conforme seu status.
- **Interface Intuitiva**: Design simples e fácil de navegar, com foco na experiência do usuário.

## Tecnologias Usadas

- **React Native**: Framework para desenvolvimento de aplicações móveis.
- **JavaScript**: Linguagem de programação utilizada para a lógica do aplicativo.
- **React Navigation**: Para navegação entre telas.
- **AsyncStorage**: Armazenamento local para salvar as tarefas.
- **Expo**: Ferramenta que facilita o desenvolvimento e a distribuição de aplicativos React Native.

## Como Instalar

### Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** instalado. Caso não tenha, baixe e instale a partir de [nodejs.org](https://nodejs.org/).

### Passos para Instalar e Rodar o Projeto

1. **Clone o Repositório**

   Clone o repositório para o seu ambiente local:

   ```bash
   git clone https://github.com/tscouto/apptasks.git
   cd apptasks

   
Instalar Dependências

Instale as dependências necessárias:

bash
Copiar código
npm install
Iniciar o Projeto

Caso esteja utilizando o Expo, basta rodar o comando:

 ```bash
Copiar código
expo start
```
Para rodar no Android ou iOS, utilize os emuladores ou conecte um dispositivo físico.

Build do Projeto (Opcional)

Se deseja gerar uma versão para produção, você pode criar o build com o seguinte comando:

```bash
Copiar código
expo build:android
expo build:ios
```

Como Usar
Ao abrir o aplicativo, você verá a tela principal com uma lista de tarefas.
Clique em "Adicionar Tarefa" para criar uma nova tarefa, preenchendo o nome, descrição e data.
Marque as tarefas como concluídas clicando no botão correspondente. O nome da tarefa será riscado quando concluída.

```bash
apptasks/
├── assets/              # Imagens e ícones
├── components/          # Componentes reutilizáveis
│   ├── Tasks.js         # Componente que renderiza uma tarefa
│   └── Header.js        # Cabeçalho do aplicativo
├── screens/             # Telas do aplicativo
│   ├── HomeScreen.js    # Tela inicial com lista de tarefas
│   └── TaskDetail.js    # Detalhes da tarefa
├── App.js               # Arquivo principal
└── package.json         # Dependências e scripts do projeto
```

Telas do Projeto
Tela Principal



Na tela principal, você pode ver a lista de tarefas. A tarefa pode ser marcada como concluída, e a lista é atualizada automaticamente.

Tela de Detalhes da Tarefa

Aqui, os detalhes da tarefa são exibidos, incluindo o nome, descrição e data.

### Como Utilizar as Telas

- **Tela Principal**: A tela onde todas as tarefas são listadas. A partir daqui, o usuário pode visualizar o status das tarefas (concluídas ou pendentes) e marcá-las como concluídas.
![TELA PRINCIPAL DE TAREFAS](https://github.com/user-attachments/assets/cc9e35e4-9e95-4671-90d4-4f72ee872eb1)
- 
- **Tela Modal de Cadastro da Tarefa**: A tela que aparece ao clicar para adicionar uma nova tarefa. O usuário preenche os campos e a tarefa é salva no aplicativo.
![CRIAR NOVA TAREFA](https://github.com/user-attachments/assets/59d2583a-c022-48a3-a32c-7754c8a46af5)

![MARCAR COMO CONCLUÍDO](https://github.com/user-attachments/assets/5d925bec-cef9-4250-8f6c-e8ac0b8f50cf)


Contribuições
Contribuições são sempre bem-vindas! Caso queira melhorar o projeto, basta seguir os passos abaixo:

Faça um fork deste repositório.
Crie uma nova branch para suas mudanças (git checkout -b feature/nome-da-feature).
Realize as mudanças e commit (git commit -am 'Adiciona nova feature').
Envie para o seu fork (git push origin feature/nome-da-feature).
Abra um Pull Request.
