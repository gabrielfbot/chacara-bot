export const siteData = {
  name: 'Chácara Bot',
  headline: 'Seu próximo momento especial começa aqui',
  description:
    'Um espaço acolhedor com salão amplo, cozinha integrada, piscina, área externa e jardim para reunir pessoas e criar boas lembranças.',

  whatsappNumber: '5517991696958',
  whatsappDisplay: '(17) 99169-6958',
  whatsappMessage:
    'Olá, Andressa! Vi a página da Chácara Bot e gostaria de consultar a disponibilidade e agendar uma visita.',

  details: {
    valor: 'Consulte pelo WhatsApp',
    capacidade: 'Espaço para até 150 pessoas',
    localizacao:
      'Localização próxima à cidade, com acesso fácil e sem necessidade de pegar rodovia',
  },
};

export const getWhatsappUrl = () =>
  `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(
    siteData.whatsappMessage,
  )}`;