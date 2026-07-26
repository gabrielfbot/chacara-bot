import React, {useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {galleryItems} from '../data/gallery';
import {getWhatsappUrl, siteData} from '../data/siteData';
import styles from './index.module.css';

function Icon({name}: {name: 'hall' | 'pool' | 'kitchen' | 'garden' | 'whatsapp' | 'calendar' | 'book' | 'download'}) {
  const paths = {
    hall: (
      <>
        <path d="M3 21V9l9-6 9 6v12" />
        <path d="M7 21v-8h10v8M7 17h10" />
      </>
    ),
    pool: (
      <>
        <path d="M2 17c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1" />
        <path d="M2 21c1.5 0 1.5 1 3 1s1.5-1 3-1 1.5 1 3 1 1.5-1 3-1 1.5 1 3 1 1.5-1 3-1M7 17V7a3 3 0 0 1 6 0M13 17V7a3 3 0 0 1 6 0" />
      </>
    ),
    kitchen: (
      <>
        <path d="M4 3v18M4 8h5M9 3v18M14 3v18M14 8h6M20 3v18" />
      </>
    ),
    garden: (
      <>
        <path d="M12 22V9" />
        <path d="M12 13C7 13 4 10 4 5c5 0 8 3 8 8ZM12 16c5 0 8-3 8-8-5 0-8 3-8 8Z" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.8-.9L3 20l1.1-4.8A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8.5 8.3c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.2.4 0 .7.7 1.2 1.7 2.1 2.9 2.7.3.2.5.1.7-.1l.8-1c.2-.3.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .6-.3 1.4-.8 1.8-.5.5-1.3.8-2.1.7-1.2-.1-3-.7-4.8-2.3-1.5-1.3-2.6-3-3-4.2-.4-1.1-.1-2 .4-2.7Z" />
      </>
    ),
    calendar: (
      <>
        <path d="M6 2v4M18 2v4M3 9h18M5 4h14a2 2 0 0 1 2 2v15H3V6a2 2 0 0 1 2-2Z" />
        <path d="M8 13h3v3H8z" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
  };
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={styles.icon}>
      {paths[name]}
    </svg>
  );
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const baseUrl = useBaseUrl('/');
  const withBaseUrl = (path: string) => `${baseUrl}${path.replace(/^\//, '')}`;

  return (
    <>
      <div className={styles.galleryGrid}>
        {galleryItems.map((item, index) => (
          <button
            type="button"
            className={`${styles.galleryCard} ${item.featured ? styles.galleryFeatured : ''}`}
            key={item.src}
            onClick={() => setSelectedImage(item.src)}
            aria-label={`Ampliar foto: ${item.caption}`}>
            <img
              src={withBaseUrl(item.src)}
              alt={item.alt}
              loading={index < 3 ? 'eager' : 'lazy'}
            />
            <span>{item.caption}</span>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar foto">
            Ã—
          </button>
          <img
            src={withBaseUrl(selectedImage)}
            alt="Foto ampliada da Chácara Bot"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default function Home(): React.JSX.Element {
  const whatsappUrl = getWhatsappUrl();
  const heroImage = useBaseUrl('/img/galeria/01-capa-salao.webp');
  const videoNight = useBaseUrl('/videos/17-area-de-lazer-a-noite.mp4');
  const videoOutdoor = useBaseUrl('/videos/18-area-externa-a-noite.mp4');
  const manualUrl = useBaseUrl('/docs/manual-chacara-bot.pdf');
  const eletrobotLogo = useBaseUrl('/img/eletrobot-engenharia.png');

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EventVenue',
    name: siteData.name,
    description: siteData.description,
    image: galleryItems.map(
      (item) => `https://gabrielfbot.github.io/chacara-bot${item.src}`,
    ),
    telephone: `+${siteData.whatsappNumber}`,
  };

  return (
    <Layout
      title="Aluguel para lazer e eventos"
      description="ConheÃ§a a Chácara Bot e agende uma visita pelo WhatsApp.">
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>

      <main>
        <header
          className={styles.hero}
          style={{backgroundImage: `url("${heroImage}")`}}>
          <div className={styles.heroOverlay} />
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Chácara para locação</span>
            <h1>{siteData.headline}</h1>
            <p>{siteData.description}</p>
            <div className={styles.heroActions}>
              <Link
                className={styles.primaryButton}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer">
                <Icon name="whatsapp" />
                Agendar uma visita
              </Link>
              <Link className={styles.secondaryButton} to="/#galeria">
                Ver fotos
              </Link>
            </div>
            <p className={styles.heroNote}>
              Consulte datas, valores, capacidade e localização pelo WhatsApp.
            </p>
          </div>
        </header>

        <section id="espaco" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>ConheÃ§a o espaço</span>
            <h2>Ambientes pensados para aproveitar o dia inteiro</h2>
            <p>
              A estrutura reÃºne Ã¡reas internas e externas em um mesmo espaço,
              com ambientes integrados e diferentes opÃ§Ãµes para receber seus convidados.
            </p>
          </div>

          <div className={styles.featureGrid}>
            <article className={styles.featureCard}>
              <Icon name="hall" />
              <h3>SalÃ£o amplo</h3>
              <p>Ambiente coberto, espaçoso e integrado Ã  Ã¡rea externa.</p>
            </article>
            <article className={styles.featureCard}>
              <Icon name="pool" />
              <h3>Piscina e área externa</h3>
              <p>Ãrea de lazer aberta, com área externa ao redor da piscina.</p>
            </article>
            <article className={styles.featureCard}>
              <Icon name="kitchen" />
              <h3>Cozinha e bancada</h3>
              <p>EspaÃ§o interno com cozinha, bancada e Ã¡rea para refeiÃ§Ãµes.</p>
            </article>
            <article className={styles.featureCard}>
              <Icon name="garden" />
              <h3>Jardim e Ã¡rea verde</h3>
              <p>Gramado e paisagismo para complementar os momentos ao ar livre.</p>
            </article>
          </div>
        </section>

        <section className={`${styles.section} ${styles.occasionSection}`}>
          <div className={styles.occasionContent}>
            <div>
              <span className={styles.occasionTag}>Um espaço, muitas possibilidades</span>
              <h2>Ideal para reunir pessoas e criar boas lembranças</h2>
            </div>
            <div className={styles.occasionChips}>
              <span>ConfraternizaÃ§Ãµes</span>
              <span>AniversÃ¡rios</span>
              <span>Encontros em famÃ­lia</span>
              <span>Dias de lazer</span>
            </div>
          </div>
        </section>

        <section id="galeria" className={styles.section}>
          <div className={styles.sectionHeading}>
            <span>Galeria</span>
            <h2>Veja cada detalhe da Chácara Bot</h2>
            <p>Clique em uma imagem para ampliar.</p>
          </div>
          <Gallery />
        </section>

        <section id="videos" className={`${styles.section} ${styles.videoSection}`}>
          <div className={styles.sectionHeading}>
            <span>TambÃ©m Ã  noite</span>
            <h2>ConheÃ§a a iluminaÃ§Ã£o e a Ã¡rea externa</h2>
          </div>
          <div className={styles.videoGrid}>
            <article className={styles.videoCard}>
              <video controls playsInline preload="metadata">
                <source src={videoNight} type="video/mp4" />
                Seu navegador nÃ£o suporta vÃ­deo.
              </video>
              <div>
                <h3>Ãrea de lazer Ã  noite</h3>
                <p>IluminaÃ§Ã£o do jardim e da piscina.</p>
              </div>
            </article>
            <article className={styles.videoCard}>
              <video controls playsInline preload="metadata">
                <source src={videoOutdoor} type="video/mp4" />
                Seu navegador nÃ£o suporta vÃ­deo.
              </video>
              <div>
                <h3>Ãrea externa Ã  noite</h3>
                <p>Vista noturna dos espaços externos.</p>
              </div>
            </article>
          </div>
        </section>


        <section id="manual" className={`${styles.section} ${styles.manualSection}`}>
          <div className={styles.manualCard}>
            <div className={styles.manualContent}>
              <span>Manual de operação</span>
              <h2>OrientaÃ§Ãµes para utilizar o espaço com seguranÃ§a</h2>
              <p>
                Consulte as instruÃ§Ãµes de funcionamento da bomba da caixa dâ€™Ã¡gua,
                piscina, Wi-Fi e demais orientaÃ§Ãµes importantes para o perÃ­odo de locação.
              </p>
              <div className={styles.manualActions}>
                <Link
                  className={styles.manualPrimaryButton}
                  href={manualUrl}
                  target="_blank"
                  rel="noopener noreferrer">
                  <Icon name="book" />
                  Abrir o manual
                </Link>
                <a className={styles.manualSecondaryButton} href={manualUrl} download>
                  <Icon name="download" />
                  Baixar PDF
                </a>
              </div>
            </div>
            <div className={styles.manualCover} aria-hidden="true">
              <Icon name="book" />
              <strong>Manual de operação</strong>
              <span>Chácara Bot</span>
            </div>
          </div>
        </section>

        <section className={`${styles.section} ${styles.infoSection}`}>
          <div className={styles.infoCard}>
            <div>
              <span>InformaÃ§Ãµes para locação</span>
              <h2>Consulte a disponibilidade da data</h2>
              <p>
                Valores, capacidade, endereÃ§o e condiÃ§Ãµes de uso sÃ£o informados
                diretamente no atendimento.
              </p>
            </div>
            <dl className={styles.detailsList}>
              <div>
                <dt>Valor</dt>
                <dd>{siteData.details.valor}</dd>
              </div>
              <div>
                <dt>Capacidade</dt>
                <dd>{siteData.details.capacidade}</dd>
              </div>
              <div>
                <dt>LocalizaÃ§Ã£o</dt>
                <dd>{siteData.details.localizacao}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div>
            <span>Gostou do espaço?</span>
            <h2>Marque um dia para conhecer a Chácara Bot</h2>
            <p>
              Fale pelo WhatsApp e consulte uma data para sua visita.
            </p>
          </div>
          <Link
            className={styles.primaryButton}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer">
            <Icon name="calendar" />
            Consultar e agendar
          </Link>
        </section>

        <section className={styles.developerCredit} aria-label="CrÃ©ditos de desenvolvimento">
          <img src={eletrobotLogo} alt="Eletrobot Engenharia" />
          <div>
            <span>PÃ¡gina desenvolvida pela</span>
            <strong>Eletrobot Engenharia</strong>
          </div>
        </section>
      </main>

      <Link
        className={styles.floatingWhatsapp}
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar pelo WhatsApp ${siteData.whatsappDisplay}`}>
        <Icon name="whatsapp" />
        <span>Agendar visita</span>
      </Link>
    </Layout>
  );
}



