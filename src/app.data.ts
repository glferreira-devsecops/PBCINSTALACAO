

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
  coverage: 'Atendimento especializado em climatização no Rio de Janeiro (Capital), Niterói, Baixada Fluminense e Região dos Lagos.',
  about: 'Na PBC, nosso compromisso é com a excelência técnica e a total satisfação do cliente. Somos mais que instaladores; somos especialistas em criar o ambiente perfeito. Cada projeto é executado com precisão, desde o cálculo de carga térmica até a utilização de ferramentas de ponta, como a bomba de vácuo, para garantir a máxima eficiência e durabilidade do seu equipamento. Acreditamos que um serviço de qualidade se reflete na atenção aos detalhes e na limpeza pós-trabalho.'
} as const;

export const sections: Section[] = [
  { id: 'hero', label: 'Início' },
  { id: 'services', label: 'Serviços' },
  { id: 'process', label: 'Processo' },
  { id: 'about', label: 'A Empresa' },
  { id: 'testimonials', label: 'Clientes' },
  { id: 'faq', label: 'Dúvidas' },
  { id: 'footer', label: 'Contato' }
];

export const trustSignals: TrustSignal[] = [
  { icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', text: '+10 Anos de Experiência' },
  { icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z', text: 'Técnicos Certificados' },
  { icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', text: 'Garantia de 1 Ano na Instalação' },
  { icon: 'M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z', text: 'Atendimento Rápido' }
];

export const processSteps: ProcessStep[] = [
  {
    icon: '',
    title: 'Contato e Consulta',
    description: 'Você entra em contato e nossa equipe técnica entende sua necessidade para agendar a visita de um especialista.'
  },
  {
    icon: '',
    title: 'Orçamento Técnico',
    description: 'O técnico avalia o local, dimensiona a solução ideal e apresenta um orçamento detalhado e 100% transparente.'
  },
  {
    icon: '',
    title: 'Execução Técnica',
    description: 'Após sua aprovação, executamos o serviço com precisão, seguindo rigorosos padrões de qualidade e segurança.'
  },
  {
    icon: '',
    title: 'Pós-Serviço e Garantia',
    description: 'Finalizamos com testes completos e a organização do local. Você recebe sua garantia formal e total tranquilidade.'
  }
];

export const services: Service[] = [
  {
    title: 'Instalação de Alta Performance',
    description: 'Executamos a instalação de sistemas Split, Inverter e Multi-Split com vácuo completo do sistema, garantindo a máxima eficiência energética e a vida útil estipulada pelo fabricante.',
    image: 'assets/images/arcond1.webp',
    icon: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83M11.42 15.17l-4.24-4.24 5.83-5.83a2.652 2.652 0 00-3.75-3.75L1.67 11.42c-.99.99-.99 2.6 0 3.59l4.24 4.24c.99.99 2.6.99 3.59 0l1.9-1.9z'
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Realizamos a higienização completa das unidades interna e externa, eliminando ácaros, fungos e bactérias. Essencial para a qualidade do ar, a eficiência do aparelho e a saúde da sua família.',
    image: 'assets/images/arcond3.webp',
    icon: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Higienização Profissional de Ar Condicionado',
    description: 'Serviço essencial para remover poeira, ácaros e bactérias, garantindo um ar mais puro e saudável em seu ambiente. Ideal para prevenir alergias e melhorar a eficiência do aparelho.',
    image: 'assets/images/arcond4.webp',
    icon: 'M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13l.648 1.938a3.375 3.375 0 002.456 2.456L21.25 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z'
  },
  {
    title: 'Reparo Técnico Especializado',
    description: 'Oferecemos diagnóstico técnico preciso e reparo para falhas de performance, vazamentos de gás e problemas elétricos. Utilizamos peças originais para restaurar 100% da funcionalidade.',
    image: 'assets/images/arcond2.webp',
    icon: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z'
  }
];

export const testimonials: Testimonial[] = [
  { name: 'Roberto Lima', role: 'Clínica Odontológica • Leblon', text: 'A equipe da PBC foi extremamente profissional. Realizaram a climatização completa da minha clínica com agilidade e discrição, sem qualquer impacto no atendimento aos pacientes. O cuidado com a limpeza foi notável. Recomendo.', photo: 'https://ui-avatars.com/api/?name=Roberto+Lima&background=004aad&color=fff&size=200', rating: 5 },
  { name: 'Fernanda Costa', role: 'Síndica Cond. Vistamar • Niterói', text: 'Gerenciar um condomínio exige parceiros de confiança. Com a PBC, temos isso. São pontuais, transparentes no orçamento e o serviço de manutenção preventiva tem sido excelente para evitar problemas maiores. A comunicação via WhatsApp é um grande diferencial.', photo: 'https://ui-avatars.com/api/?name=Fernanda+Costa&background=00d4aa&color=0f172a&size=200', rating: 5 },
  { 
    name: 'Gabriel Ferreira', 
    role: 'FOUNDER at RET TECNOLOGIA', 
    text: 'Como desenvolvedor, sou exigente com detalhes técnicos. A equipe não só resolveu o problema de gás e fez uma limpeza completa, como deixaram o ar condicionado \'nevando\' de tão forte. Serviço impecável.', 
    photo: 'https://avatars.githubusercontent.com/u/196907994?v=4', 
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/devferreirag'
  }
];

export const faqs: FaqItem[] = [
  {
    question: 'Qual a principal vantagem da tecnologia Inverter?',
    answer: 'A tecnologia Inverter ajusta continuamente a velocidade do compressor para manter a temperatura desejada, sem os picos de liga/desliga dos modelos convencionais. Isso resulta em até 60% de economia de energia, operação mais silenciosa e maior conforto térmico.'
  },
  {
    question: 'Com que frequência a manutenção é recomendada?',
    answer: 'Para ambientes residenciais, a manutenção preventiva completa é recomendada anualmente. Para ambientes comerciais de alto tráfego, a frequência ideal é semestral. Isso garante a qualidade do ar, a eficiência energética e a longevidade do equipamento.'
  },
  {
    question: 'Meu ar condicionado está pingando internamente. O que fazer?',
    answer: 'Gotejamento interno é um sinal clássico de obstrução na linha de dreno de condensados. É crucial desligar o aparelho para evitar danos à parede ou ao piso e nos contatar. Nossos técnicos podem resolver a obstrução de forma rápida e segura.'
  },
  {
    question: 'Vocês atendem em minha localidade?',
    answer: 'Nossa área de cobertura abrange todo o Grande Rio: Capital (Zona Sul, Norte e Oeste), Niterói, São Gonçalo e Baixada Fluminense. Também realizamos projetos na Região dos Lagos mediante agendamento prévio. Consulte-nos para confirmar a disponibilidade.'
  },
  {
    question: 'Como funciona a taxa de visita técnica?',
    answer: 'A taxa de visita cobre os custos de deslocamento e o tempo do diagnóstico técnico especializado. Este valor é 100% ABATIDO do valor total do serviço caso o orçamento seja aprovado. É a nossa forma de garantir um diagnóstico justo e transparente para você.'
  }
];