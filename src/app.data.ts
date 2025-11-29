import { signal } from '@angular/core';

// Define interfaces to be shared
export interface Service { title: string; description: string; image: string; icon: string; }
export interface Testimonial { name: string; role: string; text: string; photo: string; rating: number; }
export interface Section { id: string; label: string; }
export interface TrustSignal { icon: string; text: string; }

export const company = {
  name: 'PBC Instalação RJ',
  phone: '(21) 93300-4776',
  whatsapp: '5521933004776',
  email: 'contato@pbcinstalacaorj.com.br',
  coverage: 'Atendemos todo o Rio de Janeiro, Niterói, Baixada e Região dos Lagos.',
  about: 'Nascemos da necessidade de um serviço de climatização que fosse sinônimo de confiança. Na PBC, cada instalação é uma obra de engenharia, cada manutenção é um compromisso com a saúde, e cada reparo de emergência é uma promessa de tranquilidade. Somos obcecados por detalhes, desde o vácuo perfeito no sistema até a limpeza impecável do local.'
} as const;

export const sections: Section[] = [
  { id: 'hero', label: 'Início' },
  { id: 'services', label: 'Serviços' },
  { id: 'about', label: 'A Empresa' },
  { id: 'testimonials', label: 'Clientes' },
  { id: 'footer', label: 'Contato' }
];

export const trustSignals = signal<TrustSignal[]>([
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '10+ Anos de Mercado' },
  { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z', text: 'Técnicos Certificados' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Garantia Total em Contrato' },
  { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', text: 'Atendimento 24/7' }
]);

export const services = signal<Service[]>([
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

export const testimonials = signal<Testimonial[]>([
  { name: 'Dr. Roberto Lima', role: 'Clínica Odontológica • Leblon', text: 'A única empresa que conseguiu instalar 12 splits em 2 dias sem interromper nosso atendimento. O nível de organização e limpeza é surreal. São de outro planeta.', photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 },
  { name: 'Fernanda Costa', role: 'Síndica Cond. Vistamar • Niterói', text: 'Depois de anos trocando de empresa, finalmente encontramos a PBC. O laudo do PMOC é impecável e o atendimento é absurdamente rápido. Recomendo para todos os síndicos.', photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 },
  { name: 'Marcelo Borges', role: 'Dono de Loja • Recreio', text: 'Em pleno sábado de 40 graus, meu ar central parou. Achei que ia perder o dia de vendas. Liguei para a PBC e em menos de duas horas o técnico estava aqui e resolveu. Salvaram meu negócio!', photo: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 }
]);
