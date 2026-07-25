# Guia rápido de edição

## Alterar o WhatsApp

Abra:

```text
src/data/siteData.ts
```

Edite:

```ts
whatsappNumber: '5517997870405',
whatsappDisplay: '(17) 99787-0405',
```

No campo `whatsappNumber`, use apenas números, incluindo `55` e o DDD.

O mesmo número também aparece no menu e no rodapé dentro de:

```text
docusaurus.config.ts
```

## Preencher valor, capacidade e localização

Em `src/data/siteData.ts`, altere:

```ts
details: {
  valor: 'Consulte pelo WhatsApp',
  capacidade: 'Consulte pelo WhatsApp',
  localizacao: 'Enviada durante o atendimento',
},
```

Exemplo de formato, apenas depois de confirmar os dados reais:

```ts
details: {
  valor: 'A partir de R$ ...',
  capacidade: 'Até ... pessoas',
  localizacao: 'Cidade – SP',
},
```

## Alterar a mensagem enviada no WhatsApp

No mesmo arquivo:

```ts
whatsappMessage:
  'Olá, Gabriel! Vi a página da Chácara Bot e gostaria de consultar a disponibilidade e agendar uma visita.',
```

## Trocar a foto de abertura

A foto de abertura é:

```text
static/img/galeria/01-capa-salao.webp
```

Para substituir, mantenha exatamente esse nome ou altere o caminho em:

```text
src/pages/index.tsx
```

## Alterar a ordem da galeria

Abra:

```text
src/data/gallery.ts
```

A ordem dos itens nesse arquivo é a mesma ordem apresentada no site.

## Usar outro nome de repositório

O projeto foi configurado para:

```text
gabrielfbot/chacara-bot
```

Caso o repositório tenha outro nome, atualize em `docusaurus.config.ts`:

```ts
baseUrl: '/NOVO-NOME/',
projectName: 'NOVO-NOME',
```
