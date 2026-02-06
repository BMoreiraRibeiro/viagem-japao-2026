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
            ],
            transport: [
                { name: "Transporte", url: "URL" }
            ]
        }
    }
];
```

## 📊 Recursos Úteis Incluídos

A app já inclui links para:

- 🚌 **Willer Express** - Autocarros noturnos
- ✈️ **Peach Aviation & Jetstar** - Voos low cost
- 🗺️ **Google Maps** - Todos os locais
- 🚇 **Tokyo Metro & Hyperdia** - Horários de transportes
- 🏯 **Locais turísticos** - Links diretos para cada atração
- 💱 **Conversor de Moeda** - Taxa de câmbio EUR/YEN em tempo real

### Sobre o Conversor de Moeda

O conversor usa a API gratuita da [ExchangeRate-API](https://www.exchangerate-api.com/) para obter taxas atualizadas:

- **Atualização Automática**: Quando abres o conversor com internet
- **Cache Inteligente**: Guarda a última taxa para uso offline
- **Conversão Bidirecional**: EUR → YEN e YEN → EUR
- **Valores Rápidos**: Botões para 10€, 20€, 50€, 100€, 500€
- **Dicas de Câmbio**: Informações sobre cartões, ATMs e IC Cards

### Locais Personalizados

Podes adicionar os teus próprios locais a cada dia:

1. Abre os detalhes de um dia
2. Clica em "➕ Adicionar Local Personalizado"
3. Preenche:
   - **Nome** (obrigatório): Ex: "Restaurante recomendado pelo Pedro"
   - **Link** (opcional): URL do Google Maps, site, etc.
   - **Notas** (opcional): Horários, preços, observações
4. Os locais são guardados localmente e funcionam offline
5. Remove locais a qualquer momento com o botão 🗑️

**Dica**: Os dias com locais personalizados mostram um badge ⭐ com o número de locais

### Botão "Abrir Todos os Locais no Mapa"

Quando um dia tem locais para visitar:
1. Abre os detalhes do dia
2. Clica em "🗺️ Abrir Todos os Locais no Mapa"
3. O Google Maps abre com uma pesquisa de todos os locais do dia
4. Não é necessária API Key - usa links diretos do Google Maps

## 🐛 Resolução de Problemas

### A aplicação não funciona offline
- Abre a app com internet primeiro para fazer cache
- Verifica se o Service Worker foi registado (DevTools → Application → Service Workers)

### Taxa de câmbio não atualiza
- Verifica se estás online
- A taxa é guardada automaticamente para uso offline
- Em caso de erro, usa a taxa padrão (~163.50 JPY/EUR)

### O botão de instalação não aparece
- Usa HTTPS ou localhost
- Confirma que o manifest.json está correto
- Alguns browsers não suportam PWA (ex: Firefox)

## 📝 Notas

- A aplicação destaca automaticamente o dia atual da viagem
- Todos os dados são armazenados localmente
- Não requer login ou conta
- Totalmente gratuita e sem anúncios

## 🎌 Boa Viagem!

Desfruta da tua aventura no Japão! 🗾✨

---

**Desenvolvido para a viagem de 18 Setembro - 10 Outubro 2026**
