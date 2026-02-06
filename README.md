# 🇯🇵 Viagem Japão 2026 - PWA

Progressive Web App para acompanhar o itinerário da viagem ao Japão (18 Setembro - 10 Outubro 2026).

## ✨ Funcionalidades

- 📱 **Funciona Offline**: Acede ao itinerário mesmo sem internet (mapas precisam de internet)
- 📅 **Navegação por Dias**: Vê todos os 23 dias da viagem
- 🗺️ **Mapa Interativo**: Mapa do dia com a tua localização e sugestão de ordem de visita
- 📍 **Geolocalização**: Usa GPS para mostrar onde estás e calcular distâncias
- 💱 **Conversor EUR/YEN**: Conversão de moeda com taxa em tempo real (online) ou offline
- ⭐ **Locais Personalizados**: Adiciona os teus próprios locais, notas e links a cada dia
- 🔗 **Links Úteis**: Acesso direto a transportes, locais e reservas
- 🎨 **Design Responsivo**: Funciona em telemóvel, tablet e desktop
- 💾 **Instalável**: Adiciona à home screen como uma app nativa

## 🚀 Como Usar

### Método 1: Servidor Local Simples (Python)

Se tiveres Python instalado:

```bash
# Python 3
python -m http.server 8000

# Ou Python 2
python -m SimpleHTTPServer 8000
```

Depois abre o browser em: `http://localhost:8000`

### Método 2: Live Server (VS Code)

1. Instala a extensão "Live Server" no VS Code
2. Clica com o botão direito em `index.html`
3. Seleciona "Open with Live Server"

### Método 3: Servidor Node.js

```bash
# Instalar http-server globalmente
npm install -g http-server

# Executar na pasta do projeto
http-server -p 8000
```


## 📱 Instalar como PWA

### No Telemóvel (Android/iOS):

1. Abre a aplicação no browser (Chrome/Safari)
2. **Android**: Toca no menu (⋮) → "Adicionar à Home screen"
3. **iOS**: Toca no ícone de partilha → "Adicionar ao ecrã principal"

### No Desktop (Chrome/Edge):

1. Abre a aplicação no browser
2. Clica no ícone de instalação (+) na barra de endereços
3. Ou vai ao menu → "Instalar Japão 2026..."

## 📂 Estrutura do Projeto

```
Viagem/
├── index.html          # Estrutura principal da app
├── styles.css          # Estilos e design responsivo
├── app.js              # Lógica da aplicação e dados
├── sw.js               # Service Worker (funcionalidade offline)
├── manifest.json       # Configuração PWA
├── icon-192.png        # Ícone 192x192 (criar)
├── icon-512.png        # Ícone 512x512 (criar)
└── README.md           # Este ficheiro
```

## 🎨 Criar Ícones

Para os ícones da aplicação funcionarem, cria duas imagens:

- **icon-192.png**: 192x192 pixels
- **icon-512.png**: 512x512 pixels

Podes usar qualquer imagem relacionada com o Japão (bandeira, torii, monte Fuji, etc.)

### Ferramentas Online para Criar Ícones:

- [Favicon.io](https://favicon.io/) - Gera ícones a partir de texto ou imagem
- [RealFaviconGenerator](https://realfavicongenerator.net/) - Gera todos os tamanhos necessários
- [Canva](https://www.canva.com/) - Cria designs personalizados

Ou usa emojis grandes:
1. Vai a [Emojipedia](https://emojipedia.org/)
2. Procura "Japan Flag" ou "Mount Fuji"
3. Guarda a imagem e redimensiona para 192px e 512px

## 🌐 Usar Durante a Viagem

1. **Antes de Viajar**: Abre a aplicação com internet para fazer cache de tudo
2. **Durante a Viagem**: A app funcionará offline completamente
3. **Links Externos**: Vão precisar de internet (Google Maps, sites de transporte)
4. **Conversor de Moeda**: 
   - **Online**: Obtém automaticamente a taxa de câmbio atual (atualizada em tempo real)
   - **Offline**: Usa a última taxa guardada ou uma taxa padrão (~163.50 JPY/EUR)
   - As taxas online são guardadas localmente para uso offline posterior

## 🔧 Personalizar

### Adicionar Novos Dias ou Locais

Edita o ficheiro `app.js` e modifica o array `itineraryData`:

```javascript
const itineraryData = [
    {
        day: 24,
        date: "11/out",
        title: "Novo Destino",
        activity: "Descrição da atividade",
        transport: "Transporte usado",
        accommodation: "Onde dormir",
        city: "Nome da Cidade",
        coordinates: { lat: 35.6762, lng: 139.6503 },
        links: {
            maps: "URL do Google Maps",
            locations: [
                { name: "Local", url: "URL" }
            # 🇯🇵 Viagem Japão 2026 — PWA

            Aplicação Progressive Web App para acompanhar o itinerário da viagem (18 Setembro — 10 Outubro 2026).

            Resumo rápido
            - PWA instalável e offline-ready (após primeira visita)
            - Mapa interativo por dia com geolocalização e ordenação por proximidade
            - Conversor EUR ⇄ JPY (bidireccional automático)
            - Adiciona e remove locais (originais e personalizados) — persistência em `localStorage`

            Demo (GitHub Pages)
            - Site: https://bmorearibeiro.github.io/viagem-japao-2026/

            Como usar localmente
            1. Servidor simples com Python:

            ```powershell
            python -m http.server 8000

            # depois abre http://localhost:8000
            ```

            2. Ou usa `Live Server` no VS Code ou `http-server` (Node).

            Instalar como app (Android)
            1. Abre a URL no Chrome do telemóvel
            2. Menu (⋮) → "Adicionar ao ecrã principal" / "Install"
            3. A app instala e funciona offline depois do primeiro carregamento

            Ícones
            - Os ficheiros `icon-192.png` e `icon-512.png` estão na raiz do projecto e já são usados pelo `manifest.json`.
            - Se quiseres gerar/atualizar os ícones localmente, há um pequeno gerador e um script `update-icons.bat` (executa para adicionar e push automático).

            Conversor de Moeda
            - Conversão bidireccional automática: escreve em `EUR` ou `JPY` e verás a conversão imediata abaixo de cada campo.
            - Quando estás online, a app atualiza a taxa via ExchangeRate-API e guarda a última taxa para uso offline.

            Adicionar/remover locais
            - Abre os detalhes de um dia e usa "➕ Adicionar Novo Local" para criar locais personalizados.
            - Todos os locais (originais e personalizados) podem ser removidos com o botão 🗑️ — a alteração é guardada localmente.

            Estrutura principal
            ```
            index.html
            styles.css
            app.js
            sw.js
            manifest.json
            icon-192.png
            icon-512.png
            README.md
            ```

            Deploy para GitHub Pages
            1. Puxa/empurra o repositório para `main` no GitHub (já está feito)
            2. No GitHub: Settings → Pages → Source = `main` branch e `/ (root)`
            3. Aguarda 1–2 minutos; a página ficará disponível em `https://bmorearibeiro.github.io/viagem-japao-2026/`

            Scripts úteis
            - `update-icons.bat` — adiciona `icon-192.png` e `icon-512.png` e faz commit/push (Windows)

            Notas técnicas
            - O Service Worker (`sw.js`) faz cache estático e permite offline após o primeiro carregamento.
            - Os mapas usam Leaflet + OpenStreetMap (sem API key).
            - Todos os dados do utilizador ficam em `localStorage` (sem conta necessária).

            Se quiseres, posso:
            - Adicionar um botão no UI para restaurar todos os locais originais removidos
            - Automatizar o deploy para GitHub Pages via GitHub Actions

            Boa viagem! 🎌
