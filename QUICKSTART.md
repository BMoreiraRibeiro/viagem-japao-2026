# 🚀 GUIA RÁPIDO - Iniciar a Aplicação

## Método 1: Script Automático (Windows)
Faz duplo-clique em: `start-server.bat`

## Método 2: Python (Manual)
```bash
python -m http.server 8000
```
Depois abre: http://localhost:8000

## Método 3: VS Code Live Server
1. Instala a extensão "Live Server" no VS Code
2. Clica com botão direito em `index.html` → "Open with Live Server"

---

## 📱 PRIMEIRO PASSO: Gerar Ícones

1. Abre `generate-icons.html` no browser
2. Clica nos botões para descarregar `icon-192.png` e `icon-512.png`
3. Guarda os ficheiros na pasta `Viagem`

---


## ✅ O Que Esperar

✨ **Funcionalidades que funcionam SEMPRE:**
- ✅ Ver todos os 23 dias da viagem
- ✅ Procurar dias, cidades, atividades
- ✅ Abrir detalhes de cada dia
- ✅ Links para Google Maps de cada local
- ✅ Links para transportes (Willer, Peach, etc.)
- ✅ Informações de alojamento
- ✅ **Conversor EUR/YEN** (funciona offline com taxa guardada)
- ✅ Funcionalidade offline (após primeiro carregamento)
- ✅ Instalação como app no telemóvel

🌐 **Funcionalidades que precisam de internet:**
- 📡 Taxa de câmbio atualizada em tempo real (usa taxa guardada se offline)
- 🗺️ Links para Google Maps (abre em nova janela)

---

## 📱 Instalar no Telemóvel

### Android (Chrome):
1. Abre a app no Chrome
2. Menu (⋮) → "Adicionar à Home screen"

### iPhone (Safari):
1. Abre a app no Safari
2. Ícone Partilhar → "Adicionar ao ecrã principal"

---

## 🐛 Problemas Comuns

**"Service Worker failed to register"**
→ Normal quando abres o ficheiro diretamente. Usa um servidor local.

**"Cannot find module http.server"**
→ Instala Python 3 ou usa outro método.

**Mapa não aparece**
→ Normal! Precisa de API Key do Google Maps (opcional).

---

## 🎉 Pronto a Usar!

A aplicação está completa e pronta para a tua viagem ao Japão! 🇯🇵

**Qualquer dúvida, consulta o README.md para mais detalhes.**
