export const siteData = {
  name: 'Chácara Bot',
  headline: 'Seu próximo momento especial começa aqui',
  description:
    'Um espaço acolhedor com salão amplo, cozinha integrada, piscina, deck e jardim para reunir pessoas e criar boas lembranças.',
  whatsappNumber: '5517997870405',
  whatsappDisplay: '(17) 99787-0405',
  whatsappMessage:
    'Olá, Gabriel! Vi a página da Chácara Bot e gostaria de consultar a disponibilidade e agendar uma visita.',
  details: {
    valor: 'Consulte pelo WhatsApp',
    capacidade: 'Consulte pelo WhatsApp',
    localizacao: 'Enviada durante o atendimento',
  },
};

export const getWhatsappUrl = () =>
  `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    siteData.whatsappMessage,
  )}`;
