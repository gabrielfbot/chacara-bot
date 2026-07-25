# Chácara Bot — página de locação

Página comercial desenvolvida em **Docusaurus** e preparada para publicação automática no **GitHub Pages**.

Endereço previsto após a publicação:

**https://gabrielfbot.github.io/chacara-bot/**

## O que já está pronto

- Página inicial responsiva para computador e celular.
- Botões que abrem o WhatsApp de Gabriel no número **(17) 99787-0405**.
- Mensagem de atendimento preenchida automaticamente.
- Galeria com 16 fotos organizadas e renomeadas.
- Dois vídeos da área externa à noite.
- Informações não confirmadas deixadas como “Consulte pelo WhatsApp”.
- Publicação automática pelo GitHub Actions.

## 1. Testar no computador

O Docusaurus atual requer Node.js 20 ou superior.

Abra o PowerShell dentro da pasta do projeto e execute:

```powershell
npm install
npm run start
```

O navegador abrirá normalmente em:

```text
http://localhost:3000/chacara-bot/
```

Para testar exatamente a versão de produção:

```powershell
npm run build
npm run serve
```

## 2. Criar o repositório no GitHub

Na conta **gabrielfbot**, crie um repositório público com o nome exato:

```text
chacara-bot
```

Não marque as opções para criar README, `.gitignore` ou licença, pois esses arquivos já existem neste projeto.

## 3. Enviar os arquivos

Dentro da pasta `chacara-bot`, execute:

```powershell
git init
git add .
git commit -m "Cria página da Chácara Bot"
git branch -M main
git remote add origin https://github.com/gabrielfbot/chacara-bot.git
git push -u origin main
```

## 4. Ativar o GitHub Pages

No repositório:

1. Abra **Settings**.
2. Entre em **Pages**.
3. Em **Build and deployment**, selecione **GitHub Actions** como fonte.
4. Abra a aba **Actions** e aguarde o processo “Publicar no GitHub Pages” ficar verde.

Depois, a página ficará disponível em:

```text
https://gabrielfbot.github.io/chacara-bot/
```

## Atualizações futuras

Após alterar textos ou fotos:

```powershell
git add .
git commit -m "Atualiza página da Chácara Bot"
git push
```

O GitHub publicará a nova versão automaticamente.

## Arquivos principais

- `src/data/siteData.ts`: WhatsApp, textos e informações de locação.
- `src/data/gallery.ts`: ordem, legenda e descrição das fotos.
- `src/pages/index.tsx`: estrutura da página.
- `src/pages/index.module.css`: visual da página.
- `docusaurus.config.ts`: nome do repositório e endereço do GitHub Pages.
- `static/img/galeria/`: fotos já otimizadas e renomeadas.
- `static/videos/`: vídeos noturnos.
