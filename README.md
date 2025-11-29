<div align="center">
  <h1 style="font-size: 3rem; font-weight: 900; letter-spacing: -0.05em; margin-bottom: 0;">
    PBC Instalação RJ
  </h1>
  <p style="font-size: 1.25rem; margin-top: 0.5rem; color: #4A5568;">
    <strong>Uma Máquina de Conversão de Leads Construída com a Elite da Tecnologia Web.</strong>
  </p>
</div>

<div align="center">

![Angular](https://img.shields.io/badge/Angular-18.1+-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel)
![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-100-F44336?style=for-the-badge&logo=lighthouse)

</div>

---

> **Este projeto é mais do que um site: é um ativo de negócio digital.** Ele foi projetado do zero não apenas para ter uma boa aparência, mas para executar uma função crítica: transformar visitantes em clientes pagantes com a máxima eficiência. Cada decisão, da arquitetura do código à escolha da fonte, serve ao objetivo principal de **conversão**.

## 📖 Tabela de Conteúdos

1.  [**I. O Caso de Negócio: Anatomia de um Funil de Conversão**](#-i-o-caso-de-negócio-anatomia-de-um-funil-de-conversão)
2.  [**II. UI/UX: Design Estratégico para Confiança e Ação**](#-ii-uiux-design-estratégico-para-confiança-e-ação)
3.  [**III. Mergulho Profundo: A Arquitetura Moderna Angular**](#-iii-mergulho-profundo-a-arquitetura-moderna-angular)
4.  [**IV. SEO & Performance: A Base para a Visibilidade**](#-iv-seo--performance-a-base-para-a-visibilidade)
5.  [**V. Guia de Customização: Faça o Projeto Ser Seu**](#-v-guia-de-customização-faça-o-projeto-ser-seu)
6.  [**VI. Anatomia do Projeto: Onde Tudo Está**](#-vi-anatomia-do-projeto-onde-tudo-está)
7.  [**VII. Guia de Operações: Desenvolvimento e Deploy**](#-vii-guia-de-operações-desenvolvimento-e-deploy)
8.  [**VIII. Roadmap Estratégico: Próximos Passos de Alto Valor**](#-viii-roadmap-estratégico-próximos-passos-de-alto-valor)

---

## Ⅰ. O Caso de Negócio: Anatomia de um Funil de Conversão

A estrutura da página não é aleatória. Ela segue o clássico funil de marketing **AIDA** para guiar o visitante de forma natural e persuasiva desde o primeiro contato até a ação de solicitar um orçamento.

| Estágio do Funil | Seção Correspondente                                    | Objetivo Estratégico                                                                      |
| :--------------- | :------------------------------------------------------ | :---------------------------------------------------------------------------------------- |
| **Atenção**      | **Hero Section** (`#hero`)                              | Capturar a atenção em 3 segundos com uma proposta de valor forte e um visual impactante.  |
| **Interesse**    | **Trust Bar** & **Serviços** (`#services`)              | Gerar interesse ao estabelecer credibilidade imediata e apresentar soluções claras para as dores do cliente. |
| **Desejo**       | **Sobre Nós** (`#about`) & **Depoimentos** (`#testimonials`) | Construir o desejo ao conectar-se emocionalmente com o cliente (missão) e fornecer prova social (depoimentos). |
| **Ação**         | **CTAs** (Hero, Fim das Seções, Footer, Flutuante)        | Converter o desejo em ação, oferecendo múltiplos pontos de contato de baixo atrito (WhatsApp). |

---

## Ⅱ. UI/UX: Design Estratégico para Confiança e Ação

A interface foi meticulosamente projetada para ser intuitiva, profissional e, acima de tudo, para facilitar a conversão.

-   **Design de Resposta Imediata**: Experiência de usuário impecável em qualquer dispositivo, de smartphones a desktops de alta resolução.
-   **Cabeçalho Inteligente**: Transparente na seção principal para imersão, transita para um fundo sólido na rolagem para máxima legibilidade e usabilidade.
-   **Navegação Intuitiva (Scroll Spy)**: O menu de navegação destaca dinamicamente a seção visível, orientando o usuário de forma fluida.
-   **Micro-interações de Alta Performance**: Animações sutis ativadas por rolagem, implementadas com a `IntersectionObserver` API para garantir zero impacto na performance.
-   **CTAs de Conversão Rápida**: Botões de "Call to Action" posicionados estrategicamente, incluindo um CTA flutuante em dispositivos móveis, para direcionar o usuário ao WhatsApp e acelerar o pedido de orçamento.
-   **Mensagens de WhatsApp Pré-formatadas**: Links para WhatsApp com mensagens pré-preenchidas para eliminar qualquer atrito na comunicação inicial.

---

## Ⅲ. Mergulho Profundo: A Arquitetura Moderna Angular

Este projeto utiliza uma stack frontend de ponta, compilada com o Angular CLI, focada em performance, resiliência e na melhor experiência de desenvolvimento possível.

### Arquitetura em Resumo

| Componente      | Tecnologia                                                                                                 | Justificativa Estratégica                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Framework**   | [**Angular v18.1+**](https://angular.dev/)                                                                   | Robustez, performance e um ecossistema maduro para aplicações que precisam ser confiáveis e escaláveis.              |
| **Arquitetura** | **Standalone & Zoneless**                                                                                 | Elimina a complexidade dos `NgModules` e a sobrecarga do `Zone.js`, resultando em um bundle menor, detecção de mudança mais rápida e componentização simplificada. |
| **Estado**      | [**Angular Signals**](https://angular.dev/guide/signals)                                                   | Gerenciamento de estado reativo, declarativo e granularmente eficiente, garantindo renderizações mínimas e performance máxima. |
| **Estilização** | [**Tailwind CSS v3**](https://tailwindcss.com/)                                                            | Framework utility-first que permite o desenvolvimento rápido de interfaces complexas e consistentes, carregado via CDN para simplicidade. |
| **Imagens**     | [**NgOptimizedImage**](https://angular.dev/guide/image-optimization)                                       | Otimização automática e fundamental de imagens para performance superior e notas perfeitas nos Core Web Vitals.      |
| **Deployment**  | **Build Otimizado para Produção**                                                                          | O Angular CLI compila, otimiza e empacota a aplicação, gerando arquivos estáticos de alta performance para deploy em qualquer CDN (ex: Vercel). |

### 1. Estado Reativo e Eficiente com Signals

O coração da reatividade do `AppComponent` é baseado em Signals. Em vez de múltiplos `async` pipes ou subscrições manuais, criamos uma única fonte de verdade computada para o template.

> **Por que Signals?** Signals notificam o Angular sobre *o que* mudou de forma granular. Isso permite que o framework atualize apenas as partes exatas do DOM que dependem daquele estado, evitando re-renderizações desnecessárias de componentes inteiros. É o ápice da performance de renderização.

```typescript
// src/app.component.ts
export class AppComponent {
  // Sinais de estado primitivos
  private readonly isScrolled = signal(false);
  private readonly isMenuOpen = signal(false);
  private readonly activeSectionId = signal<string>('hero');
  
  // ... dados estáticos ...

  // Signal Computado: a única fonte de verdade para o template.
  // Ele recalcula automaticamente e de forma eficiente apenas quando
  // um de seus sinais dependentes (isScrolled, isMenuOpen, etc.) muda.
  readonly data = computed(() => ({
    isScrolled: this.isScrolled(),
    isMenuOpen: this.isMenuOpen(),
    activeSection: this.activeSectionId(),
    headerClasses: this.isScrolled() ? 'bg-white/95...' : 'bg-transparent...',
    // ... todos os outros dados necessários para o template
  }));
}
```
No template, acessamos tudo através de uma única variável `vm`:
```html
@let vm = data();
<header [class]="vm.headerClasses">
  <!-- ... -->
</header>
```

### 2. Animações Orquestradas e Performáticas

A experiência do usuário é elevada através de uma estratégia de animação sofisticada que combina performance e elegância.

> **Por que `IntersectionObserver`?** Escutar eventos de `scroll` (`(window:scroll)`) pode sobrecarregar a thread principal do navegador. A API `IntersectionObserver` delega essa tarefa ao navegador, que a executa de forma otimizada e notifica nossa aplicação apenas quando o elemento entra na tela. É a maneira moderna e correta de implementar animações de "scroll".

A diretiva `src/animate-on-scroll.directive.ts` implementa essa API. No template, nós a combinamos com uma técnica de **animação em cascata (staggering)** para um efeito premium:

```html
<!-- Exemplo: Cards de Serviço -->
@for (service of vm.services; track service.title; let i = $index) {
  <div class="group ..." 
       appAnimateOnScroll
       [style.transition-delay]="i * 150 + 'ms'">
    <!-- ... conteúdo do card ... -->
  </div>
}
```
Cada card recebe a diretiva de animação, mas com um `transition-delay` crescente baseado em seu índice no loop. Isso faz com que eles apareçam em uma sequência suave e coreografada, em vez de todos de uma vez, guiando o olhar do usuário de forma natural.

---

## Ⅳ. SEO & Performance: A Base para a Visibilidade

A performance não é um recurso, é a base.
-   **Core Web Vitals Otimizados**: O uso de `NgOptimizedImage` e uma arquitetura moderna e zoneless contribuem para notas excelentes em LCP, CLS e INP.
-   **Schema `JSON-LD` para Rich Snippets**: O `index.html` contém um script `JSON-LD` detalhado do tipo `LocalBusiness`. Isso permite que o Google exiba informações ricas nos resultados de busca (horário, área de serviço, telefone), aumentando a visibilidade e a taxa de cliques.
-   **Meta Tags Completas**: Tags `title`, `description`, `canonical`, Open Graph e Twitter Cards garantem uma apresentação perfeita em redes sociais e mecanismos de busca.

---

## Ⅴ. Guia de Customização: Faça o Projeto Ser Seu

A personalização foi projetada para ser rápida e centralizada. O arquivo mais importante para você é o `src/app.data.ts`.

### 1. Customização Rápida (Conteúdo)

Abra `src/app.data.ts` para editar:
-   **Informações da Empresa:** Modifique o objeto `company` para atualizar nome, telefone, WhatsApp, e-mail, área de cobertura e o texto "Sobre nós".
-   **Serviços:** Adicione, remova ou edite objetos no array `services`. Ícones SVG são de [heroicons.com](https://heroicons.com/).
-   **Depoimentos:** Adicione, remova ou edite objetos no array `testimonials`.

### 2. Customização de Aparência (Branding)

Abra `index.html` para editar:
-   **Cores do Tema:** Dentro da tag `<script>` que configura `tailwind.config`, você pode alterar as cores `primary` e `accent` para redefinir a paleta de cores de todo o site instantaneamente.
-   **Fontes:** A fonte utilizada (Inter) é importada do Google Fonts. Você pode trocá-la alterando o link na seção `<head>`.
-   **Logo:** O logo é baseado em texto para simplicidade. Para alterá-lo, edite o template no `src/app.component.ts`, nas linhas que contêm `<span class="text-primary">PBC</span><span class="text-accent">RJ</span>`.

### 3. Customização Avançada: Adicionando uma Nova Seção

Vamos supor que você queira adicionar uma seção de "FAQ".

1.  **Adicione a Seção aos Dados (`src/app.data.ts`):**
    ```typescript
    export const sections: Section[] = [
      // ... outras seções
      { id: 'faq', label: 'Dúvidas' }, // Nova seção
      { id: 'footer', label: 'Contato' }
    ];
    // Opcional: Crie um novo array de dados para o FAQ
    export const faqs = [ { question: '...', answer: '...' } ];
    ```

2.  **Adicione o HTML da Seção (`src/app.component.ts`):**
    No template do `AppComponent`, adicione a nova seção no local desejado (ex: antes do CTA Final).
    ```html
    <!-- ... depois da seção de depoimentos ... -->

    <!-- FAQ -->
    <section id="faq" class="py-24 lg:py-32 bg-light">
      <div class="container mx-auto px-4 sm:px-6 lg:py-8">
        <div class="text-center mb-16" appAnimateOnScroll>
          <h2 class="text-4xl lg:text-5xl font-black text-primary">Dúvidas Frequentes</h2>
        </div>
        <!-- ... adicione seu código para listar os FAQs aqui ... -->
      </div>
    </section>

    <!-- FINAL CTA -->
    <!-- ... -->
    ```
3. **Disponibilize os dados para o template (`src/app.component.ts`):**
    Exponha os novos dados de FAQ no componente e no `computed` signal.
    ```typescript
    export class AppComponent {
      // ...
      readonly faqs = AppData.faqs; // Importe os dados
      // ...
      readonly data = computed(() => ({
        // ...
        faqs: this.faqs, // Exponha para o template
      }));
    }
    ```
A nova seção agora está integrada à navegação e ao scroll spy automaticamente.

---

## Ⅵ. Anatomia do Projeto: Onde Tudo Está

```
.
├── angular.json               # Configuração do workspace e projetos Angular CLI
├── package.json               # Dependências do projeto e scripts (build, serve)
├── tsconfig.json              # Configuração base do TypeScript
├── vercel.json                # Configuração para deploy na Vercel (modo SPA)
├── index.html                 # Ponto de entrada, SEO, configuração do Tailwind, Schema JSON-LD
└── src
    ├── assets/                # Imagens, fontes e outros assets estáticos
    ├── main.ts                # Arquivo que inicializa (bootstrap) a aplicação Angular
    ├── styles.css             # Estilos globais e definições de animação
    ├── app.component.ts       # O ÚNICO COMPONENTE. Contém toda a lógica e o template HTML inline.
    ├── app.data.ts            # O "MINI-CMS". Centraliza todo o conteúdo de texto e dados.
    └── animate-on-scroll.directive.ts # Diretiva para animações de scroll performáticas.
```

---

## Ⅶ. Guia de Operações: Desenvolvimento e Deploy

### Desenvolvimento Local

Para executar o projeto em sua máquina local, siga estes passos:

1.  **Pré-requisitos:** Certifique-se de ter o [Node.js](https://nodejs.org/) (versão 20.x ou superior) e o [Angular CLI](https://angular.io/cli) instalados globalmente.
2.  **Clone o Repositório:**
    ```bash
    git clone https://github.com/seu-usuario/pbc-instalacao-rj.git
    cd pbc-instalacao-rj
    ```
3.  **Instale as Dependências:**
    ```bash
    npm install
    ```
4.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm start
    # ou 'ng serve'
    ```
    Este comando irá compilar a aplicação e iniciá-la em modo de desenvolvimento com hot-reload.
5.  **Acesse no Navegador:**
    Abra seu navegador e acesse `http://localhost:4200/`.

### Deploy na Vercel

Publicar este projeto na Vercel é um processo de "push-to-deploy" extremamente simples.

1.  **Crie um Repositório no GitHub:** Se ainda não o fez, envie os arquivos do projeto para um repositório no GitHub.
2.  **Importe o Projeto na Vercel:**
    *   Faça login na sua conta Vercel e importe o repositório.
3.  **Configure e Faça o Deploy:**
    *   A Vercel irá detectar automaticamente que é um projeto **Angular**.
    *   As configurações de Build & Development devem ser as padrão para Angular:
        *   **Build Command**: `ng build`
        *   **Output Directory**: `dist/pbc-instalacao` (verifique o `outputPath` no `angular.json`)
        *   **Install Command**: `npm install`
    *   Clique em **"Deploy"**.

> O arquivo `vercel.json` está incluído para garantir que o roteamento de SPA funcione corretamente, redirecionando todas as requisições para `index.html`.

---

## Ⅷ. Roadmap Estratégico: Próximos Passos de Alto Valor

Esta base sólida permite evoluções futuras para transformar a landing page em uma plataforma de marketing completa.

-   **[ ] Blog / Marketing de Conteúdo:** Adicionar uma seção de blog para artigos de SEO (`"como escolher ar condicionado"`, `"manutenção preventiva"`) para atrair tráfego orgânico.
-   **[ ] Integração com Headless CMS:** Migrar o conteúdo de `app.data.ts` para um CMS como Strapi, Sanity ou Contentful para permitir que não-desenvolvedores atualizem o site.
-   **[ ] Testes A/B:** Implementar testes A/B para headlines e botões de CTA usando uma ferramenta como Google Optimize ou VWO para otimizar ainda mais a taxa de conversão.
-   **[ ] Formulário de Contato Avançado:** Adicionar um formulário de contato (além do WhatsApp) que se integre com um CRM ou envie notificações por e-mail via uma serverless function.
-   **[ ] Análise de Performance Contínua:** Integrar ferramentas de análise (Google Analytics, Hotjar) para entender o comportamento do usuário e identificar pontos de melhoria no funil de conversão.