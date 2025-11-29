import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
  template: `
@let vm = data();

<!-- HEADER -->
<header [class]="vm.headerClasses + ' fixed inset-x-0 top-0 z-50 transition-all duration-300'">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <nav class="flex h-20 items-center justify-between">
      <a (click)="scrollTo('hero')" class="cursor-pointer text-3xl font-black tracking-tighter">
        <span class="text-primary">PBC</span><span class="text-accent">RJ</span>
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden lg:flex items-center gap-8 font-semibold">
        @for (s of vm.sections; track s.id) {
          <li>
            <button (click)="scrollTo(s.id)"
                    [class.text-primary]="vm.activeSection === s.id"
                    [class.hover:text-primary]="vm.isScrolled"
                    [class.hover:text-accent]="!vm.isScrolled"
                    class="transition-colors duration-200">
              {{ s.label }}
            </button>
          </li>
        }
      </ul>
      <a [href]="vm.whatsapp.normal" target="_blank" class="hidden lg:inline-block bg-accent text-dark font-bold py-3 px-6 rounded-lg hover:bg-accent-dark transition-transform hover:scale-105 shadow-lg">
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
     class="fixed inset-0 bg-dark/70 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-500 lg:hidden"></div>
<nav id="mobile-menu-panel" [class.translate-x-0]="vm.isMenuOpen" [class.translate-x-full]="!vm.isMenuOpen"
     class="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
  
  <!-- Menu Header -->
  <div class="flex items-center justify-between p-4 border-b border-gray-200">
    <span class="text-2xl font-black tracking-tighter">
      <span class="text-primary">PBC</span><span class="text-accent">RJ</span>
    </span>
    <button (click)="toggleMenu()" class="p-2 -mr-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-dark transition-colors" aria-label="Close menu">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  </div>

  <!-- Menu Body -->
  <div class="flex flex-col h-[calc(100%-65px)] p-4">
    <ul class="space-y-2 py-4">
      @for (s of vm.sections; track s.id) {
        <li>
          <button (click)="scrollTo(s.id)"
                  [class.bg-primary/10]="vm.activeSection === s.id"
                  [class.text-primary]="vm.activeSection === s.id"
                  [class.font-bold]="vm.activeSection === s.id"
                  class="flex items-center justify-between w-full text-left text-lg font-medium p-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <span>{{ s.label }}</span>
            <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </li>
      }
    </ul>
    <a [href]="vm.whatsapp.normal" target="_blank"
       class="mt-auto w-full bg-accent text-dark text-center py-4 rounded-lg font-bold text-lg hover:bg-accent-dark transition-colors duration-200 flex items-center justify-center gap-2">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.121l-1.161 4.225 4.273-1.119z"/></svg>
      Solicitar Orçamento
    </a>
  </div>
</nav>

<main>
  <!-- HERO -->
  <section id="hero" class="hero relative min-h-screen flex items-center text-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h1 class="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tighter">Clima Perfeito no Rio. Garantido.</h1>
      <p class="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-90">{{ vm.company.coverage }}</p>
      <p class="text-lg md:text-xl mb-10 max-w-3xl mx-auto opacity-80">A taxa de visita é abonada com a aprovação do serviço.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a [href]="vm.whatsapp.normal" target="_blank" class="bg-accent text-dark font-black text-lg py-5 px-10 rounded-xl hover:scale-105 transition-transform duration-200 shadow-2xl">
          SOLICITAR ORÇAMENTO
        </a>
      </div>
    </div>
  </section>
  
  <!-- TRUST BAR -->
  <section id="trust" class="bg-light border-b border-gray-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8">
        @for (signal of vm.trustSignals; track signal.text) {
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-600" appAnimateOnScroll>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-primary">
              <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="signal.icon" />
            </svg>
            <span class="font-semibold">{{ signal.text }}</span>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section id="services" class="py-24 lg:py-32 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" appAnimateOnScroll>
        <h2 class="text-4xl lg:text-5xl font-black text-primary">Soluções Completas em Climatização</h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Do projeto à manutenção, garantimos seu conforto o ano todo.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (service of vm.services; track service.title) {
          <div class="group bg-light rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300" appAnimateOnScroll>
            <div class="overflow-hidden">
              <img [ngSrc]="service.image" [alt]="service.title" class="h-56 w-full object-cover group-hover:scale-110 transition-transform duration-500" width="600" height="400">
            </div>
            <div class="p-8">
              <div class="flex items-center gap-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-primary">
                  <path stroke-linecap="round" stroke-linejoin="round" [attr.d]="service.icon" />
                </svg>
                <h3 class="text-2xl font-bold">{{ service.title }}</h3>
              </div>
              <p class="text-gray-600">{{ service.description }}</p>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- ABOUT -->
  <section id="about" class="py-24 lg:py-32 bg-light">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="order-2 lg:order-1" appAnimateOnScroll>
          <h2 class="text-4xl lg:text-5xl font-black text-primary">Nossa Missão: Sua Tranquilidade</h2>
          <p class="mt-6 text-lg text-gray-600 leading-relaxed">{{ vm.company.about }}</p>
          <ul class="mt-8 space-y-4 text-lg">
            <li class="flex items-center gap-3"><span class="text-accent font-bold text-2xl">✓</span> Orçamento Rápido e Sem Compromisso</li>
            <li class="flex items-center gap-3"><span class="text-accent font-bold text-2xl">✓</span> Pontualidade e Limpeza Pós-serviço</li>
            <li class="flex items-center gap-3"><span class="text-accent font-bold text-2xl">✓</span> Peças Originais e Ferramentas Modernas</li>
          </ul>
           <a [href]="vm.whatsapp.normal" target="_blank" class="mt-10 inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg hover:bg-primary-dark transition-transform hover:scale-105 shadow-lg">
            Fale com um Especialista
          </a>
        </div>
        <div class="order-1 lg:order-2" appAnimateOnScroll>
          <img ngSrc="assets/images/arcond4.jpg" alt="Técnico da PBC Instalação RJ" class="rounded-xl shadow-2xl w-full" width="1260" height="750" priority>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section id="testimonials" class="py-24 lg:py-32 bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" appAnimateOnScroll>
        <h2 class="text-4xl lg:text-5xl font-black text-primary">Quem Confia, Recomenda</h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">A maior prova da nossa qualidade é a satisfação de quem nos contrata.</p>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (t of vm.testimonials; track t.name) {
          <div class="bg-light p-8 rounded-xl shadow-lg flex flex-col transition-transform duration-300 hover:-translate-y-2" appAnimateOnScroll>
            <div class="flex-grow">
              <div class="flex text-yellow-400 mb-4">
                @for (star of t.starArray; track $index) {
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                }
              </div>
              <p class="text-gray-600 italic">"{{ t.text }}"</p>
            </div>
            <div class="mt-6 flex items-center pt-6 border-t border-gray-200">
              <img [ngSrc]="t.photo" [alt]="'Foto de ' + t.name" class="w-14 h-14 rounded-full object-cover mr-4" width="56" height="56">
              <div>
                <div class="flex items-center gap-1.5">
                  <p class="font-bold text-lg">{{ t.name }}</p>
                  @if (t.linkedin) {
                    <a [href]="t.linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"
                       class="text-gray-400 hover:text-primary transition-colors duration-200">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 116.5 4.75a1.75 1.75 0 010 3.5zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                      <span class="sr-only">LinkedIn Profile</span>
                    </a>
                  }
                </div>
                <p class="text-gray-500 text-sm">{{ t.role }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="py-24 lg:py-32 bg-light">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16" appAnimateOnScroll>
        <h2 class="text-4xl lg:text-5xl font-black text-primary">Ainda tem Dúvidas?</h2>
        <p class="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Respostas rápidas para as perguntas mais comuns. Se a sua não estiver aqui, fale conosco!</p>
      </div>
      <div class="max-w-4xl mx-auto" appAnimateOnScroll>
        <div class="border border-gray-200 rounded-xl shadow-sm bg-white">
          @for (faq of vm.faqs; track $index; let isLast = $last) {
            <div [class.border-b]="!isLast" [class.border-gray-200]="!isLast">
              <button (click)="toggleFaq($index)" [attr.aria-expanded]="vm.openFaqIndex === $index" [attr.aria-controls]="'faq-answer-' + $index"
                      class="flex justify-between items-center w-full p-6 text-left font-semibold text-lg hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <span>{{ faq.question }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                     class="w-6 h-6 text-primary transition-transform duration-300"
                     [class.rotate-180]="vm.openFaqIndex === $index">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div [id]="'faq-answer-' + $index"
                   class="grid transition-[grid-template-rows] duration-500 ease-in-out"
                   [style.grid-template-rows]="vm.openFaqIndex === $index ? '1fr' : '0fr'">
                <div class="overflow-hidden">
                  <p class="px-6 pb-6 text-gray-600 leading-relaxed">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="py-24 cta-bg text-white" appAnimateOnScroll>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-black">Pronto para ter o melhor clima?</h2>
        <p class="mt-4 text-xl opacity-90 max-w-2xl mx-auto">Fale com um especialista agora e receba seu orçamento gratuito em 5 minutos.</p>
        <a [href]="vm.whatsapp.normal" target="_blank" class="mt-8 inline-block bg-accent text-dark font-black text-xl py-5 px-12 rounded-xl hover:scale-105 transition-transform duration-200 shadow-2xl">
          FALAR NO WHATSAPP
        </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="footer" class="bg-dark text-white pt-20 pb-8" appAnimateOnScroll>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
        <div class="lg:col-span-2">
            <h3 class="text-2xl font-black tracking-tighter"><span class="text-primary">PBC</span><span class="text-accent">RJ</span></h3>
            <p class="mt-4 text-gray-400 max-w-md">{{ vm.company.coverage }}</p>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4 text-white">Navegação</h4>
          <ul class="space-y-3">
            @for (s of vm.sections; track s.id) {
              <li><button (click)="scrollTo(s.id)" class="text-gray-400 hover:text-accent transition-colors">{{ s.label }}</button></li>
            }
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-lg mb-4 text-white">Contato</h4>
          <ul class="space-y-3 text-gray-400">
            <li><a [href]="'tel:+' + vm.company.whatsapp" class="hover:text-accent transition-colors">{{ vm.company.phone }}</a></li>
            <li><a [href]="'mailto:' + vm.company.email" class="hover:text-accent transition-colors">{{ vm.company.email }}</a></li>
            <li class="font-bold text-white mt-2">Seg à Sex: 8h - 18h</li>
          </ul>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; {{vm.currentYear}} PBC Instalação RJ. Todos os direitos reservados.</p>
        <p class="mt-4 text-sm">
          Desenvolvido com <span class="text-accent transition-transform hover:scale-125 inline-block">❤</span> por 
          <a href="https://www.linkedin.com/in/devferreirag" target="_blank" rel="noopener noreferrer" class="font-semibold text-gray-400 hover:text-accent transition-colors duration-200">
            Gabriel Ferreira <span class="mx-1 text-gray-600">|</span> <span class="font-normal text-gray-500">Founder &#64; RET TECNOLOGIA</span>
          </a>
        </p>
      </div>
    </div>
  </footer>

  <!-- Floating Mobile CTA -->
  <a [href]="vm.whatsapp.normal" target="_blank"
     class="fixed bottom-4 left-4 right-4 bg-accent text-dark font-black text-center py-4 rounded-full shadow-2xl z-30 lg:hidden animate-pulse text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform animate-fade-in-bottom">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.121l-1.161 4.225 4.273-1.119z"/></svg>
    SOLICITAR ORÇAMENTO
  </a>
</main>
`
})
export class AppComponent {
  private readonly isScrolled = signal(false);
  private readonly isMenuOpen = signal(false);
  private readonly activeSectionId = signal<string>('hero');
  private readonly openFaqIndex = signal<number | null>(null);
  
  // Data is imported from app.data.ts
  readonly company = AppData.company;
  readonly sections = AppData.sections;
  readonly trustSignals = AppData.trustSignals;
  readonly services = AppData.services;
  readonly testimonials = AppData.testimonials.map(testimonial => ({
    ...testimonial,
    starArray: Array(testimonial.rating).fill(0)
  }));
  readonly faqs = AppData.faqs;

  readonly currentYear = new Date().getFullYear();

  readonly headerClasses = computed(() => this.isScrolled()
    ? 'bg-white/95 backdrop-blur-md text-dark shadow-lg'
    : 'bg-transparent text-white'
  );
  
  readonly whatsapp = {
    normal: computed(() => this.buildWhatsAppLink('Olá PBC! 🌴 Gostaria de solicitar um orçamento para ar condicionado. Pode me ajudar?'))
  };
  
  private buildWhatsAppLink(message: string): string {
    return `https://wa.me/${this.company.whatsapp}?text=${encodeURIComponent(message)}`;
  }

  onScroll(): void {
    const scrollPosition = window.scrollY;
    this.isScrolled.set(scrollPosition > 50);
    
    const offset = scrollPosition + window.innerHeight / 2;
    for (const section of this.sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= offset && (element.offsetTop + element.offsetHeight) > offset) {
            if (this.activeSectionId() !== section.id) {
                this.activeSectionId.set(section.id);
            }
            break;
        }
    }
  }

  onResize(): void {
    if (window.innerWidth >= 1024) {
      this.isMenuOpen.set(false);
    }
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if(this.isMenuOpen()) {
        this.isMenuOpen.set(false);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }

  toggleFaq(index: number): void {
    this.openFaqIndex.update(currentIndex => currentIndex === index ? null : index);
  }

  readonly data = computed(() => ({
    isScrolled: this.isScrolled(),
    isMenuOpen: this.isMenuOpen(),
    activeSection: this.activeSectionId(),
    openFaqIndex: this.openFaqIndex(),
    headerClasses: this.headerClasses(),
    whatsapp: {
        normal: this.whatsapp.normal()
    },
    sections: this.sections,
    trustSignals: this.trustSignals,
    services: this.services,
    testimonials: this.testimonials,
    faqs: this.faqs,
    company: this.company,
    currentYear: this.currentYear,
  }));
}