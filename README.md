# 📱 Cidadão Digital Acessível

Aplicativo educacional feito com **Ionic + Angular (standalone)** para promover
**inclusão digital** e **acessibilidade**.
Ele apresenta conteúdo introdutório e um **quiz interativo** sobre boas práticas
de acessibilidade na web.

---

## ✨ Funcionalidades

* Tela inicial com:

  * Boas-vindas
  * Explicação do problema social da exclusão digital
  * Botão “Começar a Aprender”
* Tela de **Conteúdo Educativo**:

  * Conceito de inclusão digital
  * Princípios de acessibilidade segundo as WCAG
  * Layout em cartões, com boa legibilidade
* Tela de **Quiz Interativo**:

  * Perguntas de múltipla escolha
  * Feedback instantâneo com `Toast`
  * Botão para avançar / recomeçar o quiz

As telas são acessadas por meio de **tabs** (Início, Conteúdo, Quiz).

---

## 🧱 Tecnologias utilizadas

* [Ionic Framework](https://ionicframework.com/) (Ionic Angular standalone)
* [Angular](https://angular.io/)
* TypeScript
* HTML / SCSS

---

## 📂 Estrutura (simplificada)

```bash
src/
└── app/
    ├── tabs/
    │   ├── tabs.routes.ts
    │   └── tabs.page.html / .ts / .scss
    ├── tab1/
    │   └── tab1.page.html / .ts / .scss   # Tela Início
    ├── tab2/
    │   └── tab2.page.html / .ts / .scss   # Tela Conteúdo Educativo
    └── tab3/
        └── tab3.page.html / .ts / .scss   # Tela Quiz Interativo
```

---

## ✅ Pré-requisitos

* **Node.js** (versão LTS recomendada)
* **npm** ou **yarn**
* **Ionic CLI** instalada globalmente:

```bash
npm install -g @ionic/cli
```

---

## 🚀 Como executar o projeto

1. **Clonar o repositório**

```bash
git clone https://github.com/seu-usuario/cidadao-digital-acessivel.git
cd cidadao-digital-acessivel
```

2. **Instalar dependências**

```bash
npm install
# ou
yarn
```

3. **Rodar em ambiente de desenvolvimento**

```bash
ionic serve
```

O app abrirá em `http://localhost:8100` no navegador.

---

## 📱 Build para dispositivo (opcional)

> Ajuste conforme o ambiente da sua máquina (Capacitor/Android Studio/Xcode).

```bash
# gerar build web
ionic build

# sincronizar com a plataforma nativa
npx cap sync

# abrir no Android Studio, por exemplo
npx cap open android
```

---

## 🧩 Descrição das telas

### Tab 1 – Início

* Cabeçalho com título **“Cidadão Digital”**
* Texto explicando o objetivo do app
* Card com a pergunta **“Qual problema social o app busca resolver?”**
* Botão verde **“COMEÇAR A APRENDER”** que leva ao conteúdo
* Frase inspiradora sobre tecnologia e acessibilidade

### Tab 2 – Conteúdo Educativo

* Título **“Conteúdo Educativo”**
* Card em destaque com mensagem sobre cidadania digital
* Sessão **“1. O Pilar da Inclusão”**
* Sessão **“2. Acessibilidade na Prática”** com lista dos 4 princípios WCAG:

  * Perceptível
  * Operável
  * Compreensível
  * Robusto
* Botão fixo na parte inferior: **“TESTAR CONHECIMENTO (QUIZ)”**

### Tab 3 – Quiz Interativo

* Exibe a **pergunta atual** e o contador: “Pergunta X de Y”
* Botões de resposta (múltipla escolha)
* Feedback imediato via `Toast`:

  * “Resposta correta! 🎉”
  * “Quase lá, tente novamente 😉”
* Botão **“Próxima Pergunta”** (ou **“Recomeçar Quiz”** na última)

---

## ♿ Acessibilidade

Alguns cuidados aplicados no layout e conteúdo:

* Textos claros, com bom contraste e hierarquia visual
* Uso de botões grandes e fáceis de clicar
* Linguagem simples ao explicar conceitos
* Quiz com feedback rápido, facilitando o aprendizado

---

## 📄 Licença

Defina aqui a licença do projeto, por exemplo:

> Este projeto está licenciado sob a licença MIT.
> Sinta-se à vontade para estudar, adaptar e reutilizar para fins educacionais.

---

## ✍️ Autor

* Seu nome aqui
* Contato / LinkedIn / GitHub
