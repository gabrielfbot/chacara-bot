import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const whatsappNumber = '5517991696958';

const whatsappMessage =
  'Ol\u00e1, Andressa! Vi a p\u00e1gina da Ch\u00e1cara Bot e gostaria de consultar a disponibilidade e agendar uma visita.';

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const config: Config = {
  title: 'Chácara Bot',
  tagline: 'Um espaço para reunir, celebrar e aproveitar',
  favicon: 'img/favicon-blue.svg',

  future: {
    v4: true,
  },

  url: 'https://gabrielfbot.github.io',
  baseUrl: '/chacara-bot/',
  organizationName: 'gabrielfbot',
  projectName: 'chacara-bot',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.8,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/galeria/01-capa-salao.webp',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    metadata: [
      {
        name: 'description',
        content:
          'Conheça a Chácara Bot: salão amplo, cozinha, piscina, área externa e jardim. Consulte disponibilidade e agende uma visita pelo WhatsApp.',
      },
      {
        name: 'keywords',
        content:
          'chácara para alugar, espaço para eventos, piscina, salão de festas, área de lazer, Chácara Bot',
      },
    ],
    navbar: {
      title: 'Chácara Bot',
      logo: {
        alt: 'Chácara Bot',
        src: 'img/logo-chacara-azul-v2.svg',
      },
      items: [
        {to: '/#espaco', label: 'O espaço', position: 'right'},
        {to: '/#galeria', label: 'Fotos', position: 'right'},
        {to: '/#videos', label: 'Vídeos', position: 'right'},
        {to: '/#manual', label: 'Manual', position: 'right'},
        {
          href: whatsappUrl,
          label: 'Agendar visita',
          position: 'right',
          className: 'navbar-whatsapp',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Chácara Bot',
          items: [
            {label: 'O espaço', to: '/#espaco'},
            {label: 'Galeria', to: '/#galeria'},
            {label: 'Vídeos', to: '/#videos'},
            {label: 'Manual de operação', to: '/#manual'},
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'WhatsApp: (17) 99169-6958',
              href: whatsappUrl,
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Chácara Bot. Todos os direitos reservados. Página desenvolvida pela Eletrobot Engenharia.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
