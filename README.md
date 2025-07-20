# HelpHouse - Sistema de Conexão entre Prestadores de serviços e Clientes

Projeto de TCC desenvolvido pela equipe **SevenCode**, com o objetivo de conectar prestadores de serviços domésticos a pessoas que necessitam desses serviços de maneira **eficiente, segura e prática**.

A plataforma é composta por:

- 📱 **Aplicativo Mobile - Cliente**
- 📱 **Aplicativo Mobile - Prestador**
- 🖥️ **Painel Web Administrativo (Laravel)**

---

## 🧠 Sobre o Projeto

O HelpHouse surgiu da necessidade de **oferecer um ambiente confiável** para contratação de serviços domésticos, resolvendo problemas comuns como **ausência de avaliações, dificuldade na comunicação** e **falta de segurança no pagamento**.

### Funcionalidades Principais:

- 📍 Localização de prestadores próximos
- 💬 Chat interno entre cliente e profissional
- 💳 Pagamento seguro com comprovante
- ⭐ Avaliações reais de clientes
- 📂 Visualização de portfólios profissionais
- 🔒 Sistema confiável e seguro para ambas as partes

---

## 📂 Repositórios

- [🔗 App Mobile - Profissional](https://github.com/Guilherme-S-Mesquita/appProHelpHouse)
- [🔗 App Mobile - Cliente](https://github.com/sttephany11/AppHelpHouse)
- [🔗 Web - Painel Administrativo](https://github.com/Guilherme-S-Mesquita/admHelpHouse)

---

## ⚙️ Tecnologias Utilizadas

### Mobile (React Native)
- **React Native + Expo CLI**
- **Firebase** 
- **React Native MMKV** 
- **React Native Safe Area Context**

### Web (Laravel)
- **PHP 8+ com Laravel**
- **Composer**
- **MySQL**
- **NPM, Laravel Mix**

### Desenvolvimento e Planejamento
- **Visual Studio Code**
- **Git + GitHub**
- **Trello** (gerenciamento de tarefas)
- **Canvas, Mapa de Empatia, Brainstorming**
- **Revisão bibliográfica técnica**

---

## 🚀 Como Executar o Projeto

### ⚠️ Importante

> Para que os **aplicativos mobile funcionem corretamente**, é obrigatório que o **painel web (Laravel)** esteja instalado e em execução, pois ele é responsável pela comunicação com o banco de dados e regras de negócio da aplicação.

---

### Pré-Requisitos

- Node.js + npm
- Expo CLI (`npm install -g expo-cli`)
- Composer
- PHP 8 ou superior
- MySQL
- Git

---

### 📱 Mobile - Cliente e Prestador

#### Instalação (para cada app)

```bash
git clone https://github.com/Guilherme-S-Mesquita/appProHelpHouse.git
cd repositorio-mobile-usuario
npm install
npm install react-native-safe-area-context
npm install -g expo-cli
npm install firebase
npm install react-native-mmkv
npm update
npm expo update


