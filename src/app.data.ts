// Define interfaces to be shared
export interface Service { title: string; description: string; image: string; icon: string; }
export interface Testimonial { name: string; role: string; text: string; photo: string; rating: number; linkedin?: string; }
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

export const trustSignals: TrustSignal[] = [
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '10+ Anos de Mercado' },
  { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z', text: 'Técnicos Certificados' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Garantia Total em Contrato' },
  { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', text: 'Atendimento 24/7' }
];

export const services: Service[] = [
  {
    title: 'Instalação de Alta Performance',
    description: 'Split, Inverter e Multi-Split. Seguimos 100% das normas do fabricante para garantir a máxima eficiência e durabilidade.',
    image: 'assets/images/servico-instalacao.jpg',
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z'
  },
  {
    title: 'Manutenção e Higienização',
    description: 'Limpeza profunda que elimina 99.9% de ácaros, fungos e bactérias. Respire ar puro e aumente a vida útil do seu equipamento.',
    image: 'assets/images/servico-manutencao.jpg',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Reparo Técnico Especializado',
    description: 'Diagnóstico preciso e solução eficiente para falhas e problemas de performance. Restauramos seu conforto com agilidade.',
    image: 'assets/images/servico-reparo.jpg',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
  }
];

export const testimonials: Testimonial[] = [
  { name: 'Dr. Roberto Lima', role: 'Clínica Odontológica • Leblon', text: 'A única empresa que conseguiu instalar 12 splits em 2 dias sem interromper nosso atendimento. O nível de organização e limpeza é surreal. São de outro planeta.', photo: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 },
  { name: 'Fernanda Costa', role: 'Síndica Cond. Vistamar • Niterói', text: 'Depois de anos trocando de empresa, finalmente encontramos a PBC. A comunicação é clara, o serviço é confiável e o atendimento é absurdamente rápido. Recomendo para todos os síndicos.', photo: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', rating: 5 },
  { 
    name: 'Gabriel Ferreira', 
    role: 'FOUNDER at RET TECNOLOGIA', 
    text: 'Como desenvolvedor, sou exigente com detalhes técnicos. A equipe não só resolveu o problema de gás e fez uma limpeza completa, como deixaram o ar condicionado \'nevando\' de tão forte. Serviço impecável.', 
    photo: 'https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2', 
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/devferreirag'
  }
];