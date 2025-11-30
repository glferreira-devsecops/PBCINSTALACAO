// Define interfaces to be shared
export interface Service { title: string; description: string; image: string; icon: string; }
export interface Testimonial { name: string; role: string; text: string; photo: string; rating: number; linkedin?: string; }
export interface Section { id: string; label: string; }
export interface TrustSignal { icon: string; text: string; }
export interface FaqItem { question: string; answer: string; }
export interface ProcessStep { icon: string; title: string; description: string; }

export const company = {
  name: 'PBC Instalação RJ',
  phone: '(21) 93300-4776',
  whatsapp: '5521933004776',
  email: 'contato@pbcinstalacaorj.com.br',
  coverage: 'Seu conforto garantido em todo o Grande Rio. Atendemos a capital, Niterói, Baixada Fluminense e Região dos Lagos com agilidade e excelência.',
  about: 'Nascemos da paixão por um trabalho bem-feito e da necessidade de um serviço de climatização que fosse sinônimo de confiança no Rio. Na PBC, não instalamos apenas ar condicionado: projetamos seu bem-estar. Cada instalação é uma obra de engenharia, cada manutenção um compromisso com sua saúde, e cada reparo uma promessa de tranquilidade. Somos obcecados por detalhes, do vácuo perfeito no sistema à limpeza impecável do local.'
} as const;

export const sections: Section[] = [
  { id: 'hero', label: 'Início' },
  { id: 'services', label: 'Serviços' },
  { id: 'process', label: 'Como Funciona' },
  { id: 'about', label: 'A Empresa' },
  { id: 'testimonials', label: 'Clientes' },
  { id: 'faq', label: 'Dúvidas' },
  { id: 'footer', label: 'Contato' }
];

export const trustSignals: TrustSignal[] = [
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Mais de 10 Anos de Experiência' },
  { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z', text: 'Equipe Técnica Certificada' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Garantia Total do Serviço' },
  { icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', text: 'Orçamento Rápido via WhatsApp' }
];

export const processSteps: ProcessStep[] = [
  {
    icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z',
    title: '1. Contato e Consulta',
    description: 'Você nos chama no WhatsApp ou liga. Em minutos, um especialista entende sua necessidade e, se preciso, agenda uma visita técnica.'
  },
  {
    icon: 'M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10',
    title: '2. Análise e Orçamento',
    description: 'Nosso técnico especialista avalia o local com precisão. Você recebe um orçamento 100% transparente, sem surpresas ou letras miúdas.'
  },
  {
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z',
    title: '3. Execução do Serviço',
    description: 'Com agendamento confirmado, nossa equipe executa o serviço utilizando as melhores ferramentas, com máxima organização e limpeza total.'
  },
  {
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: '4. Garantia e Conforto',
    description: 'Após a finalização e testes de performance, você recebe sua garantia e finalmente desfruta de um ambiente perfeitamente climatizado.'
  }
];

export const services: Service[] = [
  {
    title: 'Instalação de Alta Performance',
    description: 'Instalação de modelos Split, Inverter e Multi-Split. Seguimos rigorosamente as normas do fabricante para garantir eficiência máxima, economia de energia e a longevidade do seu aparelho.',
    image: 'assets/images/arcond1.webp',
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z'
  },
  {
    title: 'Manutenção e Higienização',
    description: 'Higienização completa que elimina 99,9% de ácaros, fungos e bactérias. Proteja a saúde da sua família, respire ar puro e aumente a vida útil do seu equipamento.',
    image: 'assets/images/arcond3.webp',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Reparo Técnico Especializado',
    description: 'Diagnóstico preciso e reparo ágil para qualquer falha ou problema de performance. Não passe calor: restauramos seu conforto com máxima prioridade.',
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
    question: 'Qual a real vantagem do ar condicionado Inverter?',
    answer: 'A tecnologia Inverter é mais inteligente: ela ajusta a potência do compressor para manter a temperatura constante, sem os picos de liga/desliga do modelo convencional. O resultado é uma economia de até 60% na conta de luz, menos ruído e mais conforto.'
  },
  {
    question: 'Com que frequência devo fazer a manutenção preventiva?',
    answer: 'A limpeza dos filtros pode ser feita por você mensalmente. Já a manutenção preventiva completa, com um técnico especializado, é recomendada a cada 6 meses para uso intenso ou anualmente para uso moderado. Isso garante a qualidade do ar e a eficiência do aparelho.'
  },
  {
    question: 'Meu ar condicionado está pingando para dentro. O que fazer?',
    answer: 'O gotejamento interno quase sempre indica uma obstrução na mangueira do dreno. Sujeira ou uma instalação mal nivelada são as causas comuns. Desligue o aparelho e chame um técnico rapidamente para evitar infiltrações e danos à parede ou ao seu equipamento.'
  },
  {
    question: 'Qual a área de atendimento de vocês?',
    answer: 'Nossa cobertura é ampla! Atendemos todos os bairros do Rio de Janeiro (Zona Sul, Norte, Oeste e Centro), Niterói, São Gonçalo, cidades da Baixada Fluminense e Região dos Lagos. Entre em contato para confirmar a disponibilidade imediata na sua rua.'
  },
  {
    question: 'Como funciona a taxa de visita técnica?',
    answer: 'Para garantir um diagnóstico preciso, cobramos uma taxa de visita que cobre o deslocamento e a análise técnica. O melhor de tudo: ao aprovar o orçamento e realizar o serviço conosco, esta taxa é 100% abonada. Seu único investimento é na solução definitiva!'
  }
];