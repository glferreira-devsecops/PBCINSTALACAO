# 🚀 PBC Instalação RJ - Máquina de Conversão de Alta Performance

![Angular](https://img.shields.io/badge/Angular-18+-DD0031?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4+-3178C6?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel Ready](https://img.shields.io/badge/Vercel-Ready-000000?style=for-the-badge&logo=vercel)
![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-100-F44336?style=for-the-badge&logo=lighthouse)

## 📄 Tabela de Conteúdos

1.  [Visão Geral & Filosofia](#-visão-geral--filosofia)
2.  [✨ Destaques Estratégicos & UI/UX](#-destaques-estratégicos--uiux)
3.  [🛠️ Arquitetura de Ponta: Um Mergulho Técnico Profundo](#️-arquitetura-de-ponta-um-mergulho-técnico-profundo)
4.  [📈 Estratégia de SEO e Performance](#-estratégia-de-seo-e-performance)
5.  [🔧 Guia de Customização Rápida](#-guia-de-customização-rápida)
6.  [📂 Anatomia do Projeto](#-anatomia-do-projeto)
7.  [🚀 Deploying to Vercel](#-deploying-to-vercel)

---

## 🎯 Visão Geral & Filosofia

Este projeto é uma **ferramenta de conversão de alta performance** disfarçada de uma landing page. Desenvolvido para a **PBC Instalação RJ**, uma empresa de climatização no Rio de Janeiro, ele foi construído com as tecnologias web mais modernas para operar diretamente no navegador, sem etapas de compilação.

**Filosofia Central:** Cada linha de código e cada escolha de design serve a um propósito de negócio: **transformar visitantes em clientes pagantes**. A aplicação foi projetada para ser excepcionalmente rápida, confiável e persuasiva, eliminando qualquer atrito que possa impedir um cliente em potencial de entrar em contato.

---

## ✨ Destaques Estratégicos & UI/UX

A interface foi meticulosamente projetada para guiar o usuário por uma jornada de conversão, construindo confiança e urgência em cada etapa.

-   **Design de Resposta Imediata**: Experiência de usuário impecável em qualquer dispositivo, de smartphones a desktops de alta resolução.
-   **Cabeçalho Inteligente**: Transparente na seção principal, transita para um fundo sólido na rolagem para máxima legibilidade e usabilidade.
-   **Navegação Intuitiva (Scroll Spy)**: O menu de navegação destaca dinamicamente a seção visível, orientando o usuário de forma fluida.
-   **Micro-interações de Alta Performance**: Animações sutis ativadas por rolagem, implementadas com a `IntersectionObserver` API para garantir zero impacto na performance.
-   **CTAs de Conversão Rápida**: Botões de "Call to Action" posicionados estrategicamente, incluindo um CTA flutuante em dispositivos móveis, para direcionar o usuário ao WhatsApp e acelerar o pedido de orçamento.
-   **Mensagens de WhatsApp Pré-formatadas**: Links para WhatsApp (Normal e Emergência) com mensagens pré-preenchidas para eliminar qualquer atrito na comunicação inicial.
-   **Barra de Confiança Imediata**: Uma seção dedicada logo abaixo da área principal para estabelecer credibilidade instantânea com propostas de valor chave ("+10 Anos de Mercado", "Técnicos Certificados").
-   **SEO de Nível Profissional**: Implementação de SEO completa, incluindo meta tags, Open Graph, Twitter Cards, URL canônica e um schema `JSON-LD` para resultados de busca ricos (Rich Snippets) como `LocalBusiness`.

---

## 🛠️ Arquitetura de Ponta: Um Mergulho Técnico Profundo

Este projeto utiliza uma stack frontend serverless e de ponta, focada em performance, resiliência e na melhor experiência de desenvolvimento possível.

| Componente      | Tecnologia                                                                                                 | Justificativa                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Framework**   | [**Angular v18+**](https://angular.dev/)                                                                   | Robustez, performance e ecossistema maduro para aplicações complexas.                                          |
| **Arquitetura** | **Componentes Standalone & Zoneless**                                                                      | Elimina `NgModules` e `Zone.js`, resultando em um bundle menor, inicialização mais rápida e controle granular. |
| **Estado**      | [**Angular Signals**](https://angular.dev/guide/signals)                                                   | Gerenciamento de estado reativo, declarativo e altamente eficiente, garantindo renderizações mínimas.          |
| **Estilização** | [**Tailwind CSS v3**](https://tailwindcss.com/)                                                            | Framework utility-first que permite o desenvolvimento rápido de interfaces complexas via CDN.                  |
| **Imagens**     | [**NgOptimizedImage**](https://angular.dev/guide/image-optimization)                                       | Otimização automática de imagens para performance superior (Core Web Vitals).                                  |
| **Deployment**  | **Zero-Build, CDN-First**                                                                                  | Opera diretamente do `index.html` via `importmap`, sem `node_modules` ou processos de build.                   |

### 1. O Paradigma Zero-Build

Esta arquitetura elimina a necessidade de qualquer ferramenta de build. O `index.html` é o coração do projeto, definindo um **`importmap`** que instrui o navegador sobre como resolver os imports de pacotes em tempo de execução e contendo a lógica de inicialização da aplicação.

### 2. Angular Zoneless & Standalone

A aplicação é inicializada com `provideZoneChangeDetection()`, ativando o modo **Zoneless**. Nesse modo, o Angular não depende mais do `Zone.js` para detectar mudanças, resultando em uma melhoria de performance notável e forçando um padrão de código mais explícito e controlado.

### 3. Estado Reativo com Signals

O estado do `AppComponent` é gerenciado exclusivamente com Signals. Uma única fonte de verdade para o template, `data()`, é criada a partir de múltiplos signals de estado (`isScrolled`, `isMenuOpen`, etc.) usando `computed`. Este padrão garante que o DOM seja atualizado da forma mais eficiente possível.

```typescript
// src/app.component.ts
export class AppComponent {
  private readonly isScrolled = signal(false);
  private readonly isMenuOpen = signal(false);
  // ... outros signals

  readonly data = computed(() => ({
    isScrolled: this.isScrolled(),
    isMenuOpen: this.isMenuOpen(),
    // ... outros dados derivados para o template
  }));
}
```

### 4. Otimização de Imagens com `NgOptimizedImage`

Todas as tags `<img>` foram substituídas pela diretiva `NgOptimizedImage` (`[ngSrc]`). Isso ativa um conjunto de otimizações automáticas:
-   **Lazy Loading**: Imagens fora da tela não são carregadas até que o usuário role até elas.
-   **Prevenção de "Layout Shift"**: Requer `width` e `height`, estabilizando o layout da página.
-   **Priorização**: A imagem principal na seção "Sobre" usa `priority` para ser carregada o mais rápido possível, otimizando a métrica LCP (Largest Contentful Paint).

```html
<!-- src/app.component.ts (template) -->
<img ngSrc="..." width="..." height="..." priority>
```

### 5. Animações Performáticas (`IntersectionObserver`)

A diretiva `src/animate-on-scroll.directive.ts` utiliza a API nativa `IntersectionObserver` do navegador. Isso é infinitamente mais performático do que escutar eventos de `scroll`, pois delega a detecção de visibilidade ao navegador, mantendo a thread principal da aplicação livre.

---

## 📈 Estratégia de SEO e Performance

A performance não é um recurso, é a base.
-   **Core Web Vitals Otimizados**: O uso de `NgOptimizedImage` e a arquitetura Zoneless contribuem para notas excelentes em LCP, CLS e INP.
-   **Schema `JSON-LD` para Rich Snippets**: O `index.html` contém um script `JSON-LD` detalhado do tipo `LocalBusiness`. Isso permite que o Google exiba informações ricas nos resultados de busca (horário, área de serviço, telefone), aumentando a visibilidade e a taxa de cliques.
-   **Meta Tags Completas**: Tags `title`, `description`, `canonical`, Open Graph e Twitter Cards garantem uma apresentação perfeita em redes sociais e mecanismos de busca.

---

## 🔧 Guia de Customização Rápida

Para personalizar a aplicação, edite o arquivo `src/app.component.ts`.

#### 1. Informações da Empresa e Contato

Modifique o objeto `company` para atualizar telefone, e-mail, WhatsApp e textos.

```typescript
// src/app.component.ts
readonly company = {
  name: 'SUA EMPRESA',
  phone: '(XX) XXXXX-XXXX',
  whatsapp: '55XX9XXXXXXXX',
  email: 'contato@suaempresa.com.br',
  coverage: 'Sua área de cobertura.',
  about: 'Um texto sobre sua empresa.'
} as const;
```

#### 2. Serviços

Adicione ou modifique objetos no array `services`. As imagens são de `pexels.com`.

```typescript
// src/app.component.ts
readonly services = signal<Service[]>([
  {
    title: 'Novo Serviço',
    description: 'Descrição do seu novo serviço.',
    image: 'https://images.pexels.com/...',
    icon: '...' // SVG path de heroicons.com
  },
  // ... outros serviços
]);
```

#### 3. Depoimentos

Adicione ou modifique objetos no array `testimonials`.

```typescript
// src/app.component.ts
readonly testimonials = signal<Testimonial[]>([
  { 
    name: 'Nome do Cliente', 
    role: 'Cargo ou Localização', 
    text: 'Depoimento do cliente.', 
    photo: 'https://images.pexels.com/...', 
    rating: 5 
  },
  // ... outros depoimentos
]);
```

#### 4. Tema de Cores

As cores principais podem ser alteradas diretamente no `tailwind.config` dentro do `index.html`.

```html
<!-- index.html -->
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#NOVACOR',      // Cor principal (azul)
          accent: '#NOVACOR_ACCENT' // Cor de destaque (verde)
        }
      }
    }
  }
</script>
```

---

## 📂 Anatomia do Projeto

```
.
├── index.html                 # Ponto de entrada, SEO, CDNs, importmap e lógica de bootstrap
├── vercel.json                # Configuração para Vercel (SPA mode)
├── metadata.json              # Metadados do projeto
├── README.md                  # Este documento detalhado
└── src
    ├── app.component.ts       # O único componente raiz, contendo toda a lógica (TS) e o template (HTML)
    ├── app.component.html     # Vazio, pois o template é inline para máxima performance em Zero-Build
    └── animate-on-scroll.directive.ts # Diretiva reutilizável para animações de rolagem
```

---

## 🚀 Deploying to Vercel

Publicar este projeto na Vercel é um processo de "push-to-deploy" extremamente simples.

1.  **Crie um Repositório no GitHub:** Se ainda não o fez, crie um repositório no GitHub e envie os arquivos do projeto para ele.
2.  **Importe o Projeto na Vercel:**
    *   Faça login na sua conta Vercel.
    *   Clique em "Add New..." -> "Project".
    *   Importe o repositório do GitHub que você acabou de criar.
3.  **Configure e Faça o Deploy:**
    *   A Vercel irá detectar o projeto como **"Static Site"**. Nenhuma configuração adicional é necessária.
    *   Clique em **"Deploy"**.

É isso! A Vercel irá publicar seus arquivos estáticos diretamente. Sua aplicação estará online em segundos. A Vercel irá automaticamente re-deployar o site a cada novo push para o seu repositório.