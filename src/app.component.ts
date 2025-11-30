import { Component, signal, computed, ChangeDetectionStrategy, ViewChild, ElementRef, inject, afterNextRender } from '@angular/core';
import { CommonModule, NgOptimizedImage, DOCUMENT } from '@angular/common';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';
import * as AppData from './app.data';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, AnimateOnScrollDirective, NgOptimizedImage],
  host: {
    '(window:scroll)': 'onScroll()',
    '(window:resize)': 'onResize()'
  },
  styles: [],
  template: `
@let vm = data();

<!-- HEADER -->
<header [class]="vm.headerClasses + ' fixed inset-x-0 top-0 z-50 transition-all duration-300'" role="banner">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="flex h-20 items-center justify-between" role="navigation" aria-label="Main navigation">
      <a (click)="scrollTo('hero')" class="cursor-pointer text-3xl font-black tracking-tighter">
        <span class="text-[var(--primary)]">PBC</span><span class="text-[var(--accent)]">RJ</span>
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-8 font-semibold text-slate-700">
        @for (s of vm.sections; track s.id) {
          <li>
            <button (click)="scrollTo(s.id)"
                    [attr.aria-current]="vm.activeSection === s.id ? 'page' : null"
                    [class.text-[var(--primary)]]="vm.activeSection === s.id"
                    [class.hover:text-[var(--primary)]]="vm.isScrolled"
                    [class.hover:text-[var(--accent)]]="!vm.isScrolled"
                    class="transition-colors duration-200">
              {{ s.label }}
            </button>
          </li>
        }
      </ul>
      <a [href]="vm.whatsapp.normal" target="_blank" rel="noopener noreferrer" class="hidden lg:inline-block bg-[var(--accent)] text-[var(--dark)] font-bold py-3 px-6 rounded-lg hover:bg-[var(--accent-dark)] transition-transform hover:scale-105 shadow-lg">
        Solicitar Orçamento
      </a>

      <!-- Mobile Nav Toggle -->
      <button (click)="toggleMenu()" class="lg:hidden z-50" aria-label="Toggle menu" [attr.aria-expanded]="vm.isMenuOpen" aria-controls="mobile-menu-panel">
        <div class="space-y-2">
            <span class="block h-0.5 w-8 bg-current transition-transform duration-300" [class.rotate-45]="vm.isMenuOpen" [class.translate-y-2.5]="vm.isMenuOpen"></span>
            <span class="block h-0.5 w-8 bg-current transition-opacity duration-300" [class.opacity-0]="vm.isMenuOpen"></span>
            <span class="block h-0.5 w-8 bg-current transition-transform duration-300" [class.-rotate-45]="vm.isMenuOpen" [class.-translate-y-2.5]="vm.isMenuOpen"></span>
        </div>
      </button>
    </nav>
  </div>
</header>

<!-- Mobile Menu -->
<div (click)="toggleMenu()" [class.opacity-100]="vm.isMenuOpen" [class.pointer-events-auto]="vm.isMenuOpen"
     class="fixed inset-0 bg-[var(--dark)]/70 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-500 lg:hidden"></div>
<nav id="mobile-menu-panel" [class.translate-x-0]="vm.isMenuOpen" [class.translate-x-full]="!vm.isMenuOpen"
     class="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
     role="dialog" aria-modal="true" aria-label="Mobile menu">
  
  <!-- Menu Header -->
  <div class="flex items-center justify-between p-4 border-b border-slate-200">
    <span class="text-2xl font-black tracking-tighter">
      <span class="text-[var(--primary)]">PBC</span><span class="text-[var(--accent)]">RJ</span>
    </span>
    <button #closeBtn (click)="toggleMenu()" class="p-2 -mr-2 rounded-full text-slate-500 hover:bg-slate-100 hover:text-[var(--dark)] transition-colors" aria-label="Close menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>

  <!-- Menu Body -->
  <div class="flex flex-col h-[calc(100%-65px)] p-4">
    <ul class="space-y-2 py-4">
      @for (s of vm.sections; track s.id) {
        <li>
          <button
            (click)="scrollTo(s.id)"
            [attr.aria-current]="vm.activeSection === s.id ? 'page' : null"
            class="flex items-center justify-between w-full text-left text-lg font-medium p-4 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            [class.bg-sky-50]="vm.activeSection === s.id"
            [class.text-[var(--primary)]]="vm.activeSection === s.id"
            [class.font-bold]="vm.activeSection === s.id"
            [class.text-slate-700]="vm.activeSection !== s.id">
            <span>{{ s.label }}</span>
            <svg class="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </li>
      }
    </ul>
    <a [href]="vm.whatsapp.normal" target="_blank" rel="noopener noreferrer"
       class="mt-auto w-full bg-[var(--accent)] text-[var(--dark)] text-center py-4 rounded-lg font-bold text-lg hover:bg-[var(--accent-dark)] transition-colors duration-200 flex items-center justify-center gap-2">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.121l-1.161 4.225 4.273-1.119z"/></svg>
      Solicitar Orçamento
    </a>
  </div>
</nav>

<main role="main">
  <!-- HERO -->
  <section id="hero" class="hero relative min-h-screen flex items-center text-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-black mb-4 leading-tight tracking-tighter animate-fade-in-up">Climatização de Precisão para seu Conforto.</h1>
      <p class="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90 animate-fade-in-up animate-delay-200">Soluções completas em instalação e manutenção de ar condicionado no Rio de Janeiro.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
        <a [href]="vm.whatsapp.normal" target="_blank" rel="noopener noreferrer" class="bg-[var(--accent)] text-[var(--dark)] font-bold text-lg py-4 px-8 rounded-lg hover:bg-[var(--accent-dark)] hover:scale-105 transition-all duration-200 shadow-2xl">
          SOLICITAR ORÇAMENTO
        </a>
        <button (click)="scrollTo('services')" class="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg py-4 px-8 rounded-lg hover:bg-white/20 transition-colors duration-200">
          Conhecer Serviços
        </button>
      </div>
       <p class="text-sm mt-8 max-w-3xl mx-auto opacity-70 animate-fade-in-up animate-delay-600">Custo da visita 100% ABATIDO ao aprovar o serviço.</p>
    </div>
  </section>
  
  <!-- TRUST BAR -->
  <section id="trust" aria-labelledby="trust-heading" class="bg-[var(--light)] border-b border-slate-200">
    <h2 id="trust-heading" class="sr-only">Sinais de Confiança</h2>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-10">
        @for (signal of vm.trustSignals; track signal.text; let i = $index) {
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-600" 
               appAnimateOnScroll 
               [style.transition-delay]="i * 100 + 'ms'">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[var(--primary)]" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="signal.icon" />
            </svg>
            <span class="font-semibold text-base">{{ signal.text }}</span>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" aria-labelledby="services-heading" class="py-24 lg:py-32 bg-slate-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" appAnimateOnScroll>
        <h2 id="services-heading" class="text-4xl lg:text-5xl font-black text-[var(--primary)]">Nossos Serviços Especializados</h2>
        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Oferecemos soluções completas para garantir a performance e a longevidade do seu sistema de climatização.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8">
        @for (service of vm.services; track service.title; let i = $index) {
          <div class="group bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" 
               appAnimateOnScroll
               [style.transition-delay]="i * 150 + 'ms'">
            <div class="overflow-hidden bg-slate-200">
              <img [ngSrc]="service.image" [alt]="service.title" class="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" width="600" height="400">
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-[var(--primary)]" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="service.icon" />
                </svg>
                <h3 class="text-2xl font-bold text-slate-800">{{ service.title }}</h3>
              </div>
              <p class="text-slate-600 leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- BRANDS -->
  <section id="brands" aria-labelledby="brands-heading" class="py-16 bg-white overflow-x-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 id="brands-heading" class="text-center text-2xl font-bold text-slate-500 tracking-wider uppercase">Trabalhamos com as Melhores Marcas</h2>
      <div class="mt-12 relative h-10 flex items-center">
        <div class="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white z-10" aria-hidden="true"></div>
        <div class="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white z-10" aria-hidden="true"></div>
        <div class="flex animate-marquee whitespace-nowrap">
          @for(brand of vm.brands; track brand.name) {
            <img [src]="'https://logo.clearbit.com/' + brand.domain" [alt]="brand.name + ' logo'" class="h-8 max-w-32 object-contain mx-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300">
          }
          <!-- Duplicate for seamless scroll -->
          @for(brand of vm.brands; track brand.name) {
            <img [src]="'https://logo.clearbit.com/' + brand.domain" [alt]="brand.name + ' logo'" class="h-8 max-w-32 object-contain mx-12 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" aria-hidden="true">
          }
        </div>
      </div>
    </div>
  </section>

  <!-- PROCESS -->
  <section id="process" aria-labelledby="process-heading" class="py-24 lg:py-32 bg-slate-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20" appAnimateOnScroll>
        <h2 id="process-heading" class="text-4xl lg:text-5xl font-black text-[var(--primary)]">Nosso Processo: Simples e Eficiente</h2>
        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Desenvolvemos um fluxo de trabalho transparente para garantir sua tranquilidade do início ao fim.</p>
      </div>
      <div class="relative max-w-5xl mx-auto">
        <div class="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-blue-200" aria-hidden="true"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          @for (step of vm.processSteps; track step.title; let i = $index) {
            <div class="flex flex-col items-center text-center relative" 
                 appAnimateOnScroll
                 [style.transition-delay]="i * 100 + 'ms'">
              <div class="flex items-center justify-center w-24 h-24 bg-white rounded-full border-4 border-[var(--primary)] shadow-lg z-10">
                <span class="text-3xl font-bold text-[var(--primary)]">{{ i + 1 }}</span>
              </div>
              <h3 class="mt-6 text-2xl font-bold text-slate-800">{{ step.title }}</h3>
              <p class="mt-2 text-slate-600">{{ step.description }}</p>
            </div>
          }
        </div>
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" aria-labelledby="about-heading" class="py-24 lg:py-32 bg-[var(--light)]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1" appAnimateOnScroll>
          <h2 id="about-heading" class="text-4xl lg:text-5xl font-black text-[var(--primary)]">Nossa Garantia: Qualidade e Confiança</h2>
          <p class="mt-6 text-lg text-slate-600 leading-relaxed">{{ vm.company.about }}</p>
          <ul class="mt-8 space-y-4 text-lg text-slate-700">
            <li class="flex items-start gap-3"><span class="text-[var(--accent)] font-bold text-2xl mt-1" aria-hidden="true">✓</span> <span><span class="font-bold">Orçamento Técnico Detalhado:</span> Sem surpresas, total transparência.</span></li>
            <li class="flex items-start gap-3"><span class="text-[var(--accent)] font-bold text-2xl mt-1" aria-hidden="true">✓</span> <span><span class="font-bold">Pontualidade e Limpeza:</span> Respeitamos seu tempo e seu espaço.</span></li>
            <li class="flex items-start gap-3"><span class="text-[var(--accent)] font-bold text-2xl mt-1" aria-hidden="true">✓</span> <span><span class="font-bold">Peças Originais:</span> Utilizamos apenas componentes que garantem a durabilidade.</span></li>
          </ul>
           <a [href]="vm.whatsapp.normal" target="_blank" rel="noopener noreferrer" class="mt-10 inline-block bg-[var(--primary)] text-white font-bold py-4 px-8 rounded-lg hover:bg-[var(--primary-dark)] transition-transform hover:scale-105 shadow-lg">
            Falar com um Especialista
          </a>
        </div>
        <div class="order-1 lg:order-2" appAnimateOnScroll [style.transition-delay]="'150ms'">
          <img ngSrc="assets/images/arcond4.jpg" alt="Técnico da PBC Instalação RJ realizando manutenção profissional" class="rounded-xl shadow-2xl w-full bg-slate-200" width="1260" height="750" priority>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section id="testimonials" aria-labelledby="testimonials-heading" class="py-24 lg:py-32 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" appAnimateOnScroll>
        <h2 id="testimonials-heading" class="text-4xl lg:text-5xl font-black text-[var(--primary)]">Quem Confia, Recomenda</h2>
        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">A satisfação de nossos clientes é o pilar da nossa reputação. Veja o que eles dizem sobre nosso trabalho.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (t of vm.testimonials; track t.name; let i = $index) {
          <div class="bg-white p-8 rounded-xl shadow-lg flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" 
               appAnimateOnScroll
               [style.transition-delay]="i * 150 + 'ms'">
            <div class="flex-grow">
              <div class="flex text-yellow-400 mb-4" [attr.aria-label]="t.rating + ' de 5 estrelas'">
                @for (star of t.starArray; track $index) {
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                }
              </div>
              <p class="text-slate-600 italic leading-relaxed">"{{ t.text }}"</p>
            </div>
            <div class="mt-6 flex items-center pt-6 border-t border-slate-200">
              <img [ngSrc]="t.photo" [alt]="'Foto de ' + t.name" class="w-14 h-14 rounded-full object-cover mr-4 bg-slate-200" width="56" height="56">
              <div>
                <div class="flex items-center gap-1.5">
                  <p class="font-bold text-lg text-slate-800">{{ t.name }}</p>
                  @if (t.linkedin) {
                    <a [href]="t.linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"
                       class="text-slate-400 hover:text-[var(--primary)] transition-colors duration-200">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 116.5 4.75a1.75 1.75 0 010 3.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                      <span class="sr-only">LinkedIn Profile</span>
                    </a>
                  }
                </div>
                <p class="text-slate-500 text-sm">{{ t.role }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" aria-labelledby="faq-heading" class="py-24 lg:py-32 bg-[var(--light)]">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto" appAnimateOnScroll>
        <div class="text-center mb-16">
          <h2 id="faq-heading" class="text-4xl lg:text-5xl font-black text-[var(--primary)]">Perguntas Frequentes</h2>
          <p class="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Respostas diretas para as dúvidas mais comuns. A sua não está aqui? Fale conosco.</p>
        </div>
        <div class="border border-slate-200 rounded-xl shadow-sm bg-white">
          @for (faq of vm.faqs; track $index; let isLast = $last) {
            <div [class.border-b]="!isLast" [class.border-slate-200]="!isLast">
              <button (click)="toggleFaq($index)" [attr.aria-expanded]="vm.openFaqIndex === $index" [attr.aria-controls]="'faq-answer-' + $index"
                      class="flex justify-between items-center w-full p-6 text-left font-semibold text-lg hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-slate-800"
                      [class.bg-slate-100]="vm.openFaqIndex === $index">
                <span>{{ faq.question }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                     class="w-6 h-6 text-[var(--primary)] transition-transform duration-300"
                     [class.rotate-180]="vm.openFaqIndex === $index" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div [id]="'faq-answer-' + $index"
                   class="grid transition-[grid-template-rows] duration-500 ease-in-out"
                   [style.grid-template-rows]="vm.openFaqIndex === $index ? '1fr' : '0fr'">
                <div class="overflow-hidden">
                  <p class="px-6 pb-6 text-slate-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section aria-labelledby="final-cta-heading" class="py-24 bg-[var(--primary-dark)] text-white" appAnimateOnScroll>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="final-cta-heading" class="text-4xl lg:text-5xl font-black">Pronto para Climatizar seu Ambiente?</h2>
        <p class="mt-4 text-xl opacity-90 max-w-3xl mx-auto">Entre em contato com nossa equipe de especialistas e dê o primeiro passo para um conforto térmico superior.</p>
        <a [href]="vm.whatsapp.normal" target="_blank" rel="noopener noreferrer" class="mt-8 inline-block bg-[var(--accent)] text-[var(--dark)] font-bold text-xl py-5 px-12 rounded-lg hover:scale-105 transition-transform duration-200 shadow-2xl">
          SOLICITAR ORÇAMENTO VIA WHATSAPP
        </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="footer" role="contentinfo" class="bg-[var(--dark)] text-white pt-20 pb-8" appAnimateOnScroll>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        <div class="lg:col-span-2">
            <h3 class="text-2xl font-black tracking-tighter"><span class="text-[var(--primary)]">PBC</span><span class="text-[var(--accent)]">RJ</span></h3>
            <p class="mt-4 text-slate-400 max-w-md">{{ vm.company.coverage }}</p>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4 text-white uppercase tracking-wider">Navegação</h4>
          <ul class="space-y-3">
            @for (s of vm.sections; track s.id) {
              <li><button (click)="scrollTo(s.id)" class="text-slate-400 hover:text-[var(--accent)] transition-colors">{{ s.label }}</button></li>
            }
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4 text-white uppercase tracking-wider">Contato</h4>
          <ul class="space-y-3 text-slate-400">
            <li><a [href]="'tel:+' + vm.company.whatsapp" class="hover:text-[var(--accent)] transition-colors">{{ vm.company.phone }}</a></li>
            <li><a [href]="'mailto:' + vm.company.email" class="hover:text-[var(--accent)] transition-colors">{{ vm.company.email }}</a></li>
            <li class="font-bold text-white mt-2">Seg à Sex: 8h - 18h</li>
          </ul>
        </div>
      </div>
      <div class="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
        <p>&copy; {{vm.currentYear}} PBC Instalação RJ. Todos os direitos reservados.</p>
        <p class="mt-4 text-sm">
          Desenvolvido por 
          <a href="https://www.linkedin.com/in/devferreirag" target="_blank" rel="noopener noreferrer" class="font-medium text-slate-400 hover:text-[var(--accent)] transition-colors">
            Gabriel Ferreira
          </a>
          <span class="text-slate-600"> &middot; Founder &#64; RET TECNOLOGIA</span>
        </p>
      </div>
    </div>
  </footer>

  <!-- Floating Mobile CTA -->
  <a [href]="vm.whatsapp.normal" target="_blank" rel="noopener noreferrer"
     class="fixed bottom-4 left-4 right-4 bg-[var(--accent)] text-[var(--dark)] font-black text-center py-4 rounded-full shadow-2xl z-30 lg:hidden text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform animate-fade-in-bottom">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.121l-1.161 4.225 4.273-1.119z"/></svg>
    SOLICITAR ORÇAMENTO
  </a>
</main>
`
})
export class AppComponent {
  private readonly isScrolled = signal(false);
  private readonly isMenuOpen = signal(false);
  private readonly openFaqIndex = signal<number | null>(null);
  private readonly activeSectionId = signal<string>('hero');
  private readonly document: Document = inject(DOCUMENT);

  @ViewChild('closeBtn') closeBtn!: ElementRef<HTMLButtonElement>;

  constructor() {
    afterNextRender(() => {
      this.generateJsonLdSchema();
    });
  }

  readonly data = computed(() => {
    const phone = AppData.company.whatsapp;
    const msg = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para ar condicionado.');
    
    return {
      company: AppData.company,
      sections: AppData.sections,
      trustSignals: AppData.trustSignals,
      brands: AppData.brands,
      services: AppData.services,
      processSteps: AppData.processSteps,
      testimonials: AppData.testimonials.map(t => ({
        ...t,
        starArray: Array(t.rating).fill(0)
      })),
      faqs: AppData.faqs,
      currentYear: new Date().getFullYear(),
      isScrolled: this.isScrolled(),
      isMenuOpen: this.isMenuOpen(),
      openFaqIndex: this.openFaqIndex(),
      activeSection: this.activeSectionId(),
      headerClasses: this.isScrolled() 
        ? 'bg-white/95 backdrop-blur-md shadow-md text-slate-800' 
        : 'bg-transparent text-white',
      whatsapp: {
        normal: `https://wa.me/${phone}?text=${msg}`
      }
    };
  });

  onScroll() {
    this.isScrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  onResize() {
    if (window.innerWidth >= 1024 && this.isMenuOpen()) {
      this.isMenuOpen.set(false);
    }
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
    if (this.isMenuOpen()) {
      setTimeout(() => this.closeBtn?.nativeElement?.focus(), 50);
    }
  }

  toggleFaq(index: number) {
    this.openFaqIndex.update(current => current === index ? null : index);
  }

  scrollTo(id: string) {
    this.isMenuOpen.set(false);
    const element = this.document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveSection() {
    const sections = AppData.sections.map(s => s.id);
    let current = sections[0];
    
    for (const section of sections) {
      const element = this.document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = section;
          break;
        }
      }
    }
    this.activeSectionId.set(current);
  }

  private generateJsonLdSchema() {
    const company = AppData.company;
    const services = AppData.services;
    const faqs = AppData.faqs;
    const testimonials = AppData.testimonials;
    
    const serviceOffers = services.map(service => ({
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "@id": `https://www.pbcinstalacaorj.com.br/#service-${service.title.toLowerCase().replace(/ /g, '-')}`,
        "name": service.title,
        "description": service.description,
        "provider": { "@id": "https://www.pbcinstalacaorj.com.br/#localbusiness" }
      }
    }));

    const faqEntities = faqs.map((faq, index) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }));

    const reviewEntities = testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewRating": { "@type": "Rating", "ratingValue": t.rating.toString() },
      "reviewBody": t.text
    }));

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://www.pbcinstalacaorj.com.br/#organization",
          "name": company.name,
          "url": "https://www.pbcinstalacaorj.com.br/",
          "logo": "https://www.pbcinstalacaorj.com.br/assets/favicon.svg",
          "slogan": company.slogan,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": `+${company.whatsapp}`,
            "email": company.email,
            "contactType": "Atendimento ao Cliente",
            "areaServed": company.areaServed[0], // Using first area served for simplicity
            "availableLanguage": "Portuguese"
          },
          "founder": {
            "@type": "Person",
            "name": company.founder.name,
            "sameAs": company.founder.linkedin
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://www.pbcinstalacaorj.com.br/#website",
          "url": "https://www.pbcinstalacaorj.com.br/",
          "name": company.name,
          "description": "Especialistas em instalação e manutenção de ar condicionado no Rio de Janeiro. Equipe certificada, garantia e atendimento premium.",
          "publisher": {
            "@id": "https://www.pbcinstalacaorj.com.br/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.pbcinstalacaorj.com.br/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        },
        {
          "@type": "LocalBusiness",
          "@id": "https://www.pbcinstalacaorj.com.br/#localbusiness",
          "name": company.name,
          "image": "https://www.pbcinstalacaorj.com.br/assets/images/arcond4.jpg",
          "url": "https://www.pbcinstalacaorj.com.br/",
          "telephone": `+${company.whatsapp}`,
          "email": company.email,
          "priceRange": "$$",
          "description": "Serviço especializado de instalação, manutenção e reparo de ar condicionado no Rio de Janeiro e Niterói, com equipe certificada e garantia de 1 ano na instalação.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": company.address.addressLocality,
            "addressRegion": company.address.addressRegion,
            "addressCountry": company.address.addressCountry
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": company.geo.latitude,
            "longitude": company.geo.longitude
          },
          "hasMap": `https://www.google.com/maps/search/?api=1&query=${company.geo.latitude},${company.geo.longitude}`,
          "paymentAccepted": company.paymentAccepted,
          "openingHoursSpecification": company.openingHoursSpecification,
          "areaServed": company.areaServed,
          "makesOffer": serviceOffers,
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": testimonials.length > 0 ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toString() : "5",
            "reviewCount": testimonials.length.toString()
          },
          "review": reviewEntities
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqEntities
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Início",
            "item": "https://www.pbcinstalacaorj.com.br/"
          }]
        }
      ]
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }
}