

import { Component, signal, computed, ChangeDetectionStrategy, ViewChild, ElementRef, effect } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { AnimateOnScrollDirective } from './animate-on-scroll.directive';

interface Service { title: string; description: string; image: string; icon: string; }
interface Testimonial { name: string; role: string; text: string; photo: string; rating: number; }
interface Section { id: string; label: string; }
interface TrustSignal { icon: string; text: string; }

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
        Orçamento Grátis
      </a>

      <!-- Mobile Nav Toggle -->
      <button (click)="toggleMenu()" class="lg:hidden z-50" aria-label="Toggle menu">
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
     class="fixed inset-0 bg-dark/70 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300 lg:hidden"></div>
<nav [class.translate-x-0]="vm.isMenuOpen" [class.translate-x-full]="!vm.isMenuOpen"
     class="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 transition-transform duration-300 ease-in-out">
  <div class="flex flex-col h-full p-8 pt-24">
    <ul class="space-y-6 text-2xl font-semibold text-center">
      @for (s of vm.sections; track s.id) {
        <li>
          <button (click)="scrollTo(s.id)" class="block w-full py-2 hover:text-accent transition-colors duration-200">
            {{ s.label }}
          </button>
        </li>
      }
    </ul>
    <a [href]="vm.whatsapp.normal" target="_blank" class="mt-auto w-full bg-accent text-dark text-center py-4 rounded-lg font-bold text-xl hover:bg-accent-dark transition-colors duration-200">
      WhatsApp Agora
    </a>
  </div>
</nav>

<main>
  <!-- HERO -->
  <section id="hero" class="hero relative min-h-screen flex items-center text-white overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h1 class="text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tighter">Clima Perfeito no Rio. Garantido.</h1>
      <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-90">{{ vm.company.coverage }}</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a [href]="vm.whatsapp.normal" target="_blank" class="bg-accent text-dark font-black text-lg py-5 px-10 rounded-xl hover:scale-105 transition-transform duration-200 shadow-2xl">
          ORÇAMENTO GRÁTIS
        </a>
        <a [href]="vm.whatsapp.emergency" target="_blank" class="bg-danger text-white font-black text-lg py-5 px-10 rounded-xl hover:scale-105 transition-transform duration-200 shadow-2xl">
          EMERGÊNCIA 24h
        </a>
      </div>
    </div>
  </section>
  
  <!-- TRUST BAR -->
  <section id="trust" class="bg-light border-b border-gray-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-8">
        @for (signal of vm.trustSignals; track signal.text) {
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 text-gray-600">
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
        <div class="order-2 lg:order-1">
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
        <div class="order-1 lg:order-2">
          <img ngSrc="https://images.pexels.com/photos/8148386/pexels-photo-8148386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Técnico da PBC Instalação RJ" class="rounded-xl shadow-2xl w-full" width="1260" height="750" priority>
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
                @for (star of getStarArray(t.rating); track $index) {
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                }
              </div>
              <p class="text-gray-600 italic">"{{ t.text }}"</p>
            </div>
            <div class="mt-6 flex items-center pt-6 border-t border-gray-200">
              <img [ngSrc]="t.photo" [alt]="'Foto de ' + t.name" class="w-14 h-14 rounded-full object-cover mr-4" width="56" height="56">
              <div>
                <p class="font-bold text-lg">{{ t.name }}</p>
                <p class="text-gray-500 text-sm">{{ t.role }}</p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- FINAL CTA -->
  <section class="py-24 cta-bg text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl lg:text-5xl font-black">Pronto para ter o melhor clima?</h2>
        <p class="mt-4 text-xl opacity-90 max-w-2xl mx-auto">Fale com um especialista agora e receba seu orçamento gratuito em 5 minutos.</p>
        <a [href]="vm.whatsapp.normal" target="_blank" class="mt-8 inline-block bg-accent text-dark font-black text-xl py-5 px-12 rounded-xl hover:scale-105 transition-transform duration-200 shadow-2xl">
          FALAR NO WHATSAPP
        </a>
    </div>
  </section>

  <!-- FOOTER -->
  <footer id="footer" class="bg-dark text-white pt-20 pb-8">
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
            <li><a [href]="'tel:' + vm.company.phone" class="hover:text-accent transition-colors">{{ vm.company.phone }}</a></li>
            <li><a [href]="'mailto:' + vm.company.email" class="hover:text-accent transition-colors">{{ vm.company.email }}</a></li>
            <li class="font-bold text-white mt-2">Atendimento 24 horas</li>
          </ul>
        </div>
      </div>
      <div class="mt-16 border-t border-gray-800 pt-8 text-center text-gray-500">
        <p>&copy; {{vm.currentYear}} PBC Instalação RJ. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>

  <!-- Floating Mobile CTA -->
  <a [href]="vm.whatsapp.normal" target="_blank"
     class="fixed bottom-4 left-4 right-4 bg-accent text-dark font-black text-center py-4 rounded-full shadow-2xl z-30 lg:hidden animate-pulse text-lg flex items-center justify-center gap-2 hover:scale-105 transition-transform">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.398 1.919 6.121l-1.161 4.225 4.273-1.119z"/></svg>
    ORÇAMENTO GRÁTIS
  </a>
</main>
`
})
export class AppComponent {
  private readonly isScrolled = signal(false);
  private readonly isMenuOpen = signal(false);
  private readonly activeSectionId = signal<string>('hero');

  readonly currentYear = new Date().getFullYear();

  readonly headerClasses = computed(() => this.isScrolled()
    ? 'bg-white/95 backdrop-blur-md text-dark'
    : 'bg-transparent text-white'
  );

  readonly sections: Section[] = [
    { id: 'hero', label: 'Início' },
    { id: 'services', label: 'Serviços' },
    { id: 'about', label: 'A Empresa' },
    { id: 'testimonials', label: 'Clientes' },
    { id: 'footer', label: 'Contato' }
  ];

  readonly company = {
    name: 'PBC Instalação RJ',
    phone: '(21) 93300-4776',
    whatsapp: '5521933004776',
    email: 'contato@pbcinstalacaorj.com.br',
    coverage: 'Atendemos todo o Rio de Janeiro, Niterói, Baixada e Região dos Lagos.',
    about: 'Nascemos da necessidade de um serviço de climatização que fosse sinônimo de confiança. Na PBC, cada instalação é uma obra de engenharia, cada manutenção é um compromisso com a saúde, e cada reparo de emergência é uma promessa de tranquilidade. Somos obcecados por detalhes, desde o vácuo perfeito no sistema até a limpeza impecável do local.'
  } as const;
  
  readonly whatsapp = {
    normal: computed(() => this.buildWhatsAppLink('Olá PBC! 🌴 Gostaria de um orçamento gratuito para ar condicionado. Pode me ajudar?')),
    emergency: computed(() => this.buildWhatsAppLink('🚨 EMERGÊNCIA 24H - Meu ar condicionado parou de funcionar! Preciso de um técnico URGENTE!'))
  };

  readonly trustSignals = signal<TrustSignal[]>([
    { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '10+ Anos de Mercado' },
    { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z', text: 'Técnicos Certificados' },
    { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Garantia Total em Contrato' },
    { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', text: 'Atendimento 24/7' }
  ]);

  readonly services = signal<Service[]>([
    {
      title: 'Instalação de Alta Performance',
      description: 'Split, Inverter e Multi-Split. Seguimos 100% das normas do fabricante para garantir a máxima eficiência e durabilidade.',
      image: 'https://images.pexels.com/photos/6957432/pexels-photo-6957432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z'
    },
    {
      title: 'Manutenção e Higienização',
      description: 'Limpeza profunda que elimina 99.9% de ácaros, fungos e bactérias. Respire ar puro e aumente a vida útil do seu equipamento.',
      image: 'https://images.pexels.com/photos/5854183/pexels-photo-5854183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Reparo de Emergência 24/7',
      description: 'Seu ar parou? Chegamos em até 2h no Rio e Niterói. Diagnóstico rápido e solução imediata para seu conforto.',
      image: 'https://images.pexels.com/photos/4421524/pexels-photo-4421524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
    }
  ]);

  readonly testimonials = signal<Testimonial[]>([
    { name: 'Dr. Roberto Lima', role: 'Clínica Odontológica • Leblon', text: 'A única empresa que conseguiu instalar 12 splits em 2 dias sem interromper nosso atendimento. O nível de organização e limpeza é surreal. São de outro planeta.', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 },
    { name: 'Fernanda Costa', role: 'Síndica Cond. Vistamar • Niterói', text: 'Depois de anos trocando de empresa, finalmente encontramos a PBC. O laudo do PMOC é impecável e o atendimento é absurdamente rápido. Recomendo para todos os síndicos.', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 },
    { name: 'Marcelo Borges', role: 'Dono de Loja • Recreio', text: 'Em pleno sábado de 40 graus, meu ar central parou. Achei que ia perder o dia de vendas. Liguei para a PBC e em menos de duas horas o técnico estava aqui e resolveu. Salvaram meu negócio!', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 }
  ]);
  
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

  getStarArray(rating: number): void[] {
    return Array(rating).fill(0);
  }

  readonly data = computed(() => ({
    isScrolled: this.isScrolled(),
    isMenuOpen: this.isMenuOpen(),
    activeSection: this.activeSectionId(),
    headerClasses: this.headerClasses(),
    whatsapp: {
        normal: this.whatsapp.normal(),
        emergency: this.whatsapp.emergency()
    },
    sections: this.sections,
    trustSignals: this.trustSignals(),
    services: this.services(),
    testimonials: this.testimonials(),
    company: this.company,
    currentYear: this.currentYear,
  }));
}
