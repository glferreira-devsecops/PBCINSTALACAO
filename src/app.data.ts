// Define interfaces to be shared
export interface Service { title: string; description: string; image: string; icon: string; }
export interface Testimonial { name: string; role: string; text: string; photo: string; rating: number; linkedin?: string; }
export interface Section { id: string; label: string; }
export interface TrustSignal { icon: string; text: string; }
export interface FaqItem { question: string; answer: string; }

export const company = {
  name: 'PBC Instalação RJ',
  phone: '(21) 93300-4776',
  whatsapp: '5521933004776',
  email: 'contato@pbcinstalacaorj.com.br',
  coverage: 'Atendemos todo o Rio de Janeiro, Niterói, Baixada e Região dos Lagos.',
  about: 'Nascemos da necessidade de um serviço de climatização que fosse sinônimo de confiança. Na PBC, cada instalação é uma obra de engenharia, cada manutenção é um compromisso com a saúde, e cada reparo é uma promessa de tranquilidade. Somos obcecados por detalhes, desde o vácuo perfeito no sistema até a limpeza impecável do local.'
} as const;

export const sections: Section[] = [
  { id: 'hero', label: 'Início' },
  { id: 'services', label: 'Serviços' },
  { id: 'about', label: 'A Empresa' },
  { id: 'testimonials', label: 'Clientes' },
  { id: 'faq', label: 'Dúvidas' },
  { id: 'footer', label: 'Contato' }
];

export const trustSignals: TrustSignal[] = [
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '10+ Anos de Mercado' },
  { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z', text: 'Técnicos Certificados' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Garantia Total em Contrato' },
  { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', text: 'Orçamento Rápido e Online' }
];

export const services: Service[] = [
  {
    title: 'Instalação de Alta Performance',
    description: 'Split, Inverter e Multi-Split. Seguimos 100% das normas do fabricante para garantir a máxima eficiência e durabilidade.',
    image: 'assets/images/arcond1.webp',
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z'
  },
  {
    title: 'Manutenção e Higienização',
    description: 'Limpeza profunda que elimina 99.9% de ácaros, fungos e bactérias. Respire ar puro e aumente a vida útil do seu equipamento.',
    image: 'assets/images/arcond3.webp',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Reparo Técnico Especializado',
    description: 'Diagnóstico preciso e solução eficiente para falhas e problemas de performance. Restauramos seu conforto com agilidade.',
    image: 'assets/images/arcond2.webp',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
  }
];

export const testimonials: Testimonial[] = [
  { name: 'Dr. Roberto Lima', role: 'Clínica Odontológica • Leblon', text: 'A única empresa que conseguiu instalar 12 splits em 2 dias sem interromper nosso atendimento. O nível de organização e limpeza é surreal. São de outro planeta.', photo: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', rating: 5 },
  { name: 'Fernanda Costa', role: 'Síndica Cond. Vistamar • Niterói', text: 'Depois de anos trocando de empresa, finalmente encontramos a PBC. A comunicação é clara, o serviço é confiável e o atendimento é absurdamente rápido. Recomendo para todos os síndicos.', photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1', rating: 5 },
  { 
    name: 'Gabriel Ferreira', 
    role: 'FOUNDER at RET TECNOLOGIA', 
    text: 'Como desenvolvedor, sou exigente com detalhes técnicos. A equipe não só resolveu o problema de gás e fez uma limpeza completa, como deixaram o ar condicionado \'nevando\' de tão forte. Serviço impecável.', 
    photo: 'assets/images/arcond4.jpg', 
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/devferreirag'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'Qual a diferença entre ar condicionado Inverter e o convencional?',
    answer: 'O Inverter ajusta a velocidade do compressor para manter a temperatura desejada sem desligar, economizando até 60% de energia e sendo mais silencioso. O convencional liga e desliga o compressor para controlar a temperatura, o que gera picos de consumo.'
  },
  {
    question: 'De quanto em quanto tempo devo fazer a manutenção?',
    answer: 'Para uso residencial, recomendamos a limpeza dos filtros mensalmente (você mesmo pode fazer) e uma manutenção preventiva completa com um técnico a cada 6 ou 12 meses, dependendo da frequência de uso e da poluição do local.'
  },
  {
    question: 'Meu ar condicionado está pingando água para dentro. O que pode ser?',
    answer: 'Isso geralmente ocorre por obstrução no dreno, que impede a água da condensação de sair. Pode ser sujeira ou instalação incorreta. É crucial chamar um técnico para evitar danos à parede e ao equipamento.'
  },
  {
    question: 'Vocês atendem em toda a cidade do Rio de Janeiro?',
    answer: 'Sim! Atendemos todos os bairros do Rio de Janeiro (Zona Sul, Norte, Oeste e Centro), além de Niterói, São Gonçalo, Baixada Fluminense e Região dos Lagos. Consulte-nos para confirmar a cobertura na sua localidade específica.'
  },
  {
    question: 'A visita técnica para orçamento é cobrada?',
    answer: 'Nós cobramos uma taxa de visita para cobrir o deslocamento e o tempo do técnico para fazer um diagnóstico preciso. No entanto, se você aprovar o orçamento e realizar o serviço conosco, essa taxa de visita é 100% abonada.'
  }
];
