// Dados do Itinerário
const itineraryData = [
    {
        day: 1,
        date: "18/set",
        title: "Madrid → Osaka",
        activity: "Voo Internacional",
        transport: "✈️ Avião",
        accommodation: "Noite a bordo",
        city: "Madrid/Osaka",
        coordinates: { lat: 34.6937, lng: 135.5023 },
        links: {
            maps: "https://www.google.com/maps/place/Osaka,+Japan",
            transport: []
        }
    },
    {
        day: 2,
        date: "19/set",
        title: "Chegada a Osaka",
        activity: "The Much Café e Dotonbori",
        transport: "Nankai Rap:t (Comboio Aeroporto)",
        accommodation: "Osaka (Namba)",
        city: "Osaka",
        coordinates: { lat: 34.6937, lng: 135.5023 },
        links: {
            maps: "https://www.google.com/maps/place/Dotonbori,+Osaka",
            locations: [
                { name: "The Much Café", url: "https://www.google.com/maps/search/The+Much+Café+Osaka" },
                { name: "Dotonbori", url: "https://www.google.com/maps/place/Dotonbori" }
            ],
            transport: [
                { name: "Nankai Rap:t", url: "https://www.howto-osaka.com/en/ticket/ticket/rapit.html" }
            ]
        }
    },
    {
        day: 3,
        date: "20/set",
        title: "Universal Studios Japan",
        activity: "USJ - Parque Temático",
        transport: "Comboio Local (JR Yumesaki Line)",
        accommodation: "Osaka (Namba)",
        city: "Osaka",
        coordinates: { lat: 34.6654, lng: 135.4322 },
        links: {
            maps: "https://www.google.com/maps/place/Universal+Studios+Japan",
            locations: [
                { name: "Universal Studios Japan", url: "https://www.usj.co.jp/web/en/us" }
            ],
            transport: [
                { name: "Como chegar ao USJ", url: "https://www.usj.co.jp/web/en/us/access" }
            ]
        }
    },
    {
        day: 4,
        date: "21/set",
        title: "Nijigen no Mori",
        activity: "Parque Naruto/Godzilla",
        transport: "Autocarro Direto (Namba/Umeda)",
        accommodation: "Osaka (Namba)",
        city: "Awaji Island",
        coordinates: { lat: 34.4695, lng: 134.8961 },
        links: {
            maps: "https://www.google.com/maps/place/Nijigen+no+Mori",
            locations: [
                { name: "Nijigen no Mori", url: "https://nijigennomori.com/" }
            ],
            transport: [
                { name: "Highway Bus", url: "https://nijigennomori.com/en/access/" }
            ]
        }
    },
    {
        day: 5,
        date: "22/set",
        title: "Kyoto: Gion e Pontocho",
        activity: "Bairros históricos de Kyoto",
        transport: "JR Special Rapid (Comboio Local)",
        accommodation: "Kyoto",
        city: "Kyoto",
        coordinates: { lat: 35.0116, lng: 135.7681 },
        links: {
            maps: "https://www.google.com/maps/place/Gion,+Kyoto",
            locations: [
                { name: "Gion", url: "https://www.google.com/maps/place/Gion" },
                { name: "Pontocho", url: "https://www.google.com/maps/place/Pontocho" }
            ],
            transport: [
                { name: "Horários JR Osaka-Kyoto", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 6,
        date: "23/set",
        title: "Nara e Fushimi Inari",
        activity: "Veados de Nara e Templo Fushimi Inari",
        transport: "Comboios Locais (JR ou Kintetsu)",
        accommodation: "Kyoto",
        city: "Nara/Kyoto",
        coordinates: { lat: 34.6851, lng: 135.8050 },
        links: {
            maps: "https://www.google.com/maps/place/Nara+Park",
            locations: [
                { name: "Nara Park", url: "https://www.google.com/maps/place/Nara+Park" },
                { name: "Fushimi Inari", url: "https://www.google.com/maps/place/Fushimi+Inari+Taisha" }
            ],
            transport: [
                { name: "Horários Kyoto-Nara", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 7,
        date: "24/set",
        title: "Arashiyama → Tóquio",
        activity: "Bambus de Arashiyama + Viagem noturna",
        transport: "🚌 Autocarro Noturno (Night Bus)",
        accommodation: "Noite no Bus",
        city: "Kyoto/Tokyo",
        coordinates: { lat: 35.0094, lng: 135.6686 },
        links: {
            maps: "https://www.google.com/maps/place/Arashiyama",
            locations: [
                { name: "Arashiyama Bamboo Grove", url: "https://www.google.com/maps/place/Arashiyama+Bamboo+Grove" }
            ],
            transport: [
                { name: "Willer Express (Night Bus)", url: "https://willerexpress.com/en/" }
            ]
        }
    },
    {
        day: 8,
        date: "25/set",
        title: "Akihabara",
        activity: "Mandarake e Surugaya - Lojas de anime/manga",
        transport: "Metro (Cartão IC / Suica)",
        accommodation: "Tóquio (Ikebukuro)",
        city: "Tokyo",
        coordinates: { lat: 35.6983, lng: 139.7731 },
        links: {
            maps: "https://www.google.com/maps/place/Akihabara",
            locations: [
                { name: "Mandarake Akihabara", url: "https://www.google.com/maps/search/Mandarake+Akihabara" },
                { name: "Surugaya", url: "https://www.google.com/maps/search/Surugaya+Akihabara" }
            ],
            transport: [
                { name: "Tokyo Metro", url: "https://www.tokyometro.jp/en/" }
            ]
        }
    },
    {
        day: 9,
        date: "26/set",
        title: "Ikebukuro",
        activity: "Animate Ikebukuro e Sunshine City",
        transport: "Metro",
        accommodation: "Tóquio (Ikebukuro)",
        city: "Tokyo",
        coordinates: { lat: 35.7295, lng: 139.7109 },
        links: {
            maps: "https://www.google.com/maps/place/Ikebukuro",
            locations: [
                { name: "Animate Ikebukuro", url: "https://www.google.com/maps/search/Animate+Ikebukuro" },
                { name: "Sunshine City", url: "https://www.google.com/maps/place/Sunshine+City" }
            ],
            transport: []
        }
    },
    {
        day: 10,
        date: "27/set",
        title: "Harajuku e Shibuya",
        activity: "Harajuku + Mugiwara Store Shibuya",
        transport: "Metro",
        accommodation: "Tóquio (Ikebukuro)",
        city: "Tokyo",
        coordinates: { lat: 35.6702, lng: 139.7026 },
        links: {
            maps: "https://www.google.com/maps/place/Harajuku",
            locations: [
                { name: "Harajuku", url: "https://www.google.com/maps/place/Harajuku" },
                { name: "Mugiwara Store Shibuya", url: "https://www.google.com/maps/search/Mugiwara+Store+Shibuya" }
            ],
            transport: []
        }
    },
    {
        day: 11,
        date: "28/set",
        title: "Odaiba e Templo Gotokuji",
        activity: "Odaiba (ilha futurística) e Templo dos Gatos",
        transport: "Yurikamome Line / Metro",
        accommodation: "Tóquio (Ikebukuro)",
        city: "Tokyo",
        coordinates: { lat: 35.6268, lng: 139.7744 },
        links: {
            maps: "https://www.google.com/maps/place/Odaiba",
            locations: [
                { name: "Odaiba", url: "https://www.google.com/maps/place/Odaiba" },
                { name: "Gotokuji Temple", url: "https://www.google.com/maps/place/Gotokuji+Temple" }
            ],
            transport: [
                { name: "Yurikamome Line", url: "https://www.yurikamome.co.jp/en/" }
            ]
        }
    },
    {
        day: 12,
        date: "29/set",
        title: "Viagem para Kawaguchiko",
        activity: "Viagem para a região do Monte Fuji",
        transport: "🚌 Autocarro Highway (via Shinjuku)",
        accommodation: "Kawaguchiko",
        city: "Kawaguchiko",
        coordinates: { lat: 35.5087, lng: 138.7641 },
        links: {
            maps: "https://www.google.com/maps/place/Lake+Kawaguchi",
            locations: [
                { name: "Lake Kawaguchi", url: "https://www.google.com/maps/place/Lake+Kawaguchi" }
            ],
            transport: [
                { name: "Fujikyu Bus", url: "https://bus-en.fujikyu.co.jp/" }
            ]
        }
    },
    {
        day: 13,
        date: "30/set",
        title: "Monte Fuji",
        activity: "Lagos e Onsen na região do Fuji",
        transport: "Autocarro Local (Red Line)",
        accommodation: "Kawaguchiko",
        city: "Kawaguchiko",
        coordinates: { lat: 35.3606, lng: 138.7278 },
        links: {
            maps: "https://www.google.com/maps/place/Mount+Fuji",
            locations: [
                { name: "Monte Fuji", url: "https://www.google.com/maps/place/Mount+Fuji" },
                { name: "Kawaguchiko Onsen", url: "https://www.google.com/maps/search/Kawaguchiko+Onsen" }
            ],
            transport: [
                { name: "Red Line Bus", url: "https://bus-en.fujikyu.co.jp/heritage-tour/" }
            ]
        }
    },
    {
        day: 14,
        date: "01/out",
        title: "Kawaguchiko → Gamagori",
        activity: "Viagem para Gamagori (Sunny + Memorial)",
        transport: "Autocarro p/ Mishima + Comboio Local",
        accommodation: "Gamagori",
        city: "Gamagori",
        coordinates: { lat: 34.8270, lng: 137.2239 },
        links: {
            maps: "https://www.google.com/maps/place/Gamagori",
            locations: [
                { name: "Gamagori", url: "https://www.google.com/maps/place/Gamagori" }
            ],
            transport: [
                { name: "Horários", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 15,
        date: "02/out",
        title: "Gamagori → Kumamoto",
        activity: "Viagem longa para Kumamoto",
        transport: "Comboio p/ Nagoya + ✈️ Voo Low Cost",
        accommodation: "Kumamoto",
        city: "Kumamoto",
        coordinates: { lat: 32.8031, lng: 130.7079 },
        links: {
            maps: "https://www.google.com/maps/place/Kumamoto",
            locations: [
                { name: "Kumamoto", url: "https://www.google.com/maps/place/Kumamoto" }
            ],
            transport: [
                { name: "Peach Aviation", url: "https://www.flypeach.com/en" },
                { name: "Jetstar Japan", url: "https://www.jetstar.com/jp/en/home" }
            ]
        }
    },
    {
        day: 16,
        date: "03/out",
        title: "Estátuas One Piece (Parte 1)",
        activity: "Tour pelas estátuas One Piece em Kumamoto",
        transport: "🚗 Carro Alugado (Essencial)",
        accommodation: "Kumamoto",
        city: "Kumamoto",
        coordinates: { lat: 32.8031, lng: 130.7079 },
        links: {
            maps: "https://www.google.com/maps/search/One+Piece+Statues+Kumamoto",
            locations: [
                { name: "One Piece Statues Map", url: "https://onepiecekumamoto.com/" }
            ],
            transport: [
                { name: "Aluguer de Carros Kumamoto", url: "https://www.google.com/maps/search/car+rental+kumamoto" }
            ]
        }
    },
    {
        day: 17,
        date: "04/out",
        title: "Estátuas One Piece (Parte 2)",
        activity: "Continuação do tour One Piece",
        transport: "Carro Alugado",
        accommodation: "Kumamoto",
        city: "Kumamoto",
        coordinates: { lat: 32.8031, lng: 130.7079 },
        links: {
            maps: "https://www.google.com/maps/search/One+Piece+Statues+Kumamoto",
            locations: [
                { name: "One Piece Statues Map", url: "https://onepiecekumamoto.com/" }
            ],
            transport: []
        }
    },
    {
        day: 18,
        date: "05/out",
        title: "Viagem para Beppu",
        activity: "Onsens/Termas de Beppu",
        transport: "Autocarro Kyushuganko (Barato)",
        accommodation: "Beppu",
        city: "Beppu",
        coordinates: { lat: 33.2845, lng: 131.4912 },
        links: {
            maps: "https://www.google.com/maps/place/Beppu",
            locations: [
                { name: "Beppu Onsen", url: "https://www.google.com/maps/search/Beppu+Onsen" },
                { name: "Beppu Hell Tour", url: "https://www.google.com/maps/search/Beppu+Jigoku" }
            ],
            transport: [
                { name: "Kyushu Bus", url: "https://www.google.com/maps/search/Kyushu+bus" }
            ]
        }
    },
    {
        day: 19,
        date: "06/out",
        title: "Beppu → Fukuoka",
        activity: "Fukuoka - Hakata Ramen",
        transport: "Autocarro Highway (Lush Bus)",
        accommodation: "Fukuoka",
        city: "Fukuoka",
        coordinates: { lat: 33.5904, lng: 130.4017 },
        links: {
            maps: "https://www.google.com/maps/place/Fukuoka",
            locations: [
                { name: "Hakata Ramen街", url: "https://www.google.com/maps/search/Hakata+Ramen" }
            ],
            transport: [
                { name: "Highway Bus", url: "https://www.google.com/maps/search/beppu+fukuoka+bus" }
            ]
        }
    },
    {
        day: 20,
        date: "07/out",
        title: "Fukuoka → Osaka",
        activity: "Regresso a Osaka",
        transport: "✈️ Voo Low Cost (Peach/Jetstar)",
        accommodation: "Osaka (Namba)",
        city: "Osaka",
        coordinates: { lat: 34.6937, lng: 135.5023 },
        links: {
            maps: "https://www.google.com/maps/place/Osaka",
            locations: [],
            transport: [
                { name: "Peach Aviation", url: "https://www.flypeach.com/en" },
                { name: "Jetstar Japan", url: "https://www.jetstar.com/jp/en/home" }
            ]
        }
    },
    {
        day: 21,
        date: "08/out",
        title: "Himeji Castle",
        activity: "Visita ao Castelo Himeji (Experiência Shinkansen)",
        transport: "🚄 Shinkansen (Útil e Veloz)",
        accommodation: "Osaka (Namba)",
        city: "Himeji",
        coordinates: { lat: 34.8394, lng: 134.6939 },
        links: {
            maps: "https://www.google.com/maps/place/Himeji+Castle",
            locations: [
                { name: "Himeji Castle", url: "https://www.google.com/maps/place/Himeji+Castle" }
            ],
            transport: [
                { name: "Shinkansen Osaka-Himeji", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 22,
        date: "09/out",
        title: "Den Den Town e Padaria Parine",
        activity: "Shopping de eletrónicos e anime + Padaria One Piece",
        transport: "Metro",
        accommodation: "Osaka (Namba)",
        city: "Osaka",
        coordinates: { lat: 34.6568, lng: 135.5062 },
        links: {
            maps: "https://www.google.com/maps/place/Den+Den+Town",
            locations: [
                { name: "Den Den Town", url: "https://www.google.com/maps/place/Den+Den+Town" },
                { name: "Padaria Parine", url: "https://www.google.com/maps/search/Parine+Bakery+Osaka" }
            ],
            transport: []
        }
    },
    {
        day: 23,
        date: "10/out",
        title: "Osaka → Madrid",
        activity: "Regresso a casa",
        transport: "Nankai Rap:t + Avião",
        accommodation: "Fim da Viagem",
        city: "Osaka",
        coordinates: { lat: 34.4348, lng: 135.2440 },
        links: {
            maps: "https://www.google.com/maps/place/Kansai+International+Airport",
            locations: [],
            transport: [
                { name: "Kansai Airport", url: "https://www.kansai-airport.or.jp/en/" }
            ]
        }
    }
];

// State Management
let currentView = 'timeline';
let deferredPrompt = null;
let exchangeRate = 163.50; // Taxa offline padrão (aproximada)
let exchangeRateDate = null;
let isOnline = navigator.onLine;
let customLocations = {}; // Armazena locais personalizados por dia
let removedDefaultLocations = {}; // Armazena índices de locais originais removidos por dia
let customNotes = {}; // Armazena notas editadas por dia
let customAccommodations = {}; // Armazena dormidas personalizadas por dia
let interactiveMap = null;
let userLocation = null;
let mapMarkers = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadCustomLocations();
    loadRemovedDefaultLocations();
    loadCustomNotes();
    loadCustomAccommodations();
    loadDarkMode();
    initializeApp();
    registerServiceWorker();
    setupInstallPrompt();
    fetchExchangeRate();
    setupMapModal();
});

function initializeApp() {
    setupNavigation();
    setupDarkModeToggle();
    renderDaysList();
    setupSearch();
    setupModal();
    setupConverter();
    setupDaySelector();
    highlightCurrentDay();
    checkOnlineStatus();
    
    // Update online status
    window.addEventListener('online', () => {
        checkOnlineStatus();
        fetchExchangeRate();
    });
    window.addEventListener('offline', checkOnlineStatus);
}

// Navigation
function setupNavigation() {
    const navTabs = document.querySelectorAll('.nav-tab');
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const view = tab.dataset.view;
            switchView(view);
        });
    });
}

function switchView(view) {
    currentView = view;
    
    // Update tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.view === view);
    });
    
    // Update views
    document.querySelectorAll('.view').forEach(v => {
        v.classList.toggle('active', v.id === `${view}View`);
    });
    
    // Update exchange rate if converter is opened and online
    if (view === 'converter' && navigator.onLine) {
        fetchExchangeRate();
    }
}

// Render Days List
function renderDaysList(filteredData = null) {
    const daysList = document.getElementById('daysList');
    const data = filteredData || itineraryData;
    
    daysList.innerHTML = data.map(day => {
        const hasCustomLocations = customLocations[day.day] && customLocations[day.day].length > 0;
        const customCount = hasCustomLocations ? customLocations[day.day].length : 0;
        
        // Count removed default locations
        const removedIndices = removedDefaultLocations[day.day] || [];
        const originalCount = (day.links.locations ? day.links.locations.length : 0) - removedIndices.length;
        const totalCount = originalCount + customCount;
        
        return `
        <div class="day-card ${day.day === getCurrentDay() ? 'highlight' : ''}" onclick="openDayModal(${day.day})">
            <div class="day-header">
                <div class="day-number">D${day.day}</div>
                <div class="day-date">${day.date}</div>
            </div>
            <div class="day-title">
                ${day.title}
                ${hasCustomLocations ? `<span class="custom-badge" title="${customCount} local(is) personalizado(s)">⭐ ${customCount}</span>` : ''}
                ${totalCount > 0 ? `<span class="location-count" title="${totalCount} locais no total">📍 ${totalCount}</span>` : ''}
            </div>
            <div class="day-location">📍 ${day.city}</div>
            <div class="day-transport">${day.transport}</div>
        </div>
    `}).join('');
}

// Get Current Day
function getCurrentDay() {
    const today = new Date();
    const startDate = new Date(2026, 8, 18); // 18 Sept 2026
    const diffTime = today - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 1 && diffDays <= 23 ? diffDays : null;
}

// Day Selector
function setupDaySelector() {
    const daySelect = document.getElementById('daySelect');
    const currentDayBtn = document.getElementById('currentDayBtn');
    
    // Populate day selector
    itineraryData.forEach(day => {
        const option = document.createElement('option');
        option.value = day.day;
        option.textContent = `Dia ${day.day} - ${day.date} - ${day.title}`;
        daySelect.appendChild(option);
    });
    
    // Day select change event
    daySelect.addEventListener('change', (e) => {
        const dayNumber = parseInt(e.target.value);
        if (dayNumber) {
            goToDay(dayNumber);
            e.target.value = ''; // Reset selector
        }
    });
    
    // Current day button
    const currentDay = getCurrentDay();
    if (currentDay) {
        currentDayBtn.disabled = false;
        currentDayBtn.addEventListener('click', () => {
            goToDay(currentDay);
        });
    } else {
        currentDayBtn.disabled = true;
        currentDayBtn.title = 'Fora do período da viagem';
    }
}

function goToDay(dayNumber) {
    // First scroll to the day card
    const dayCards = document.querySelectorAll('.day-card');
    const targetCard = dayCards[dayNumber - 1];
    
    if (targetCard) {
        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Add a temporary highlight animation
        targetCard.classList.add('pulse-highlight');
        setTimeout(() => {
            targetCard.classList.remove('pulse-highlight');
        }, 2000);
        
        // Open the modal after scrolling
        setTimeout(() => {
            openDayModal(dayNumber);
        }, 500);
    }
}

function highlightCurrentDay() {
    const currentDay = getCurrentDay();
    if (currentDay) {
        // Scroll to current day on page load
        setTimeout(() => {
            const dayCards = document.querySelectorAll('.day-card');
            const currentCard = dayCards[currentDay - 1];
            if (currentCard) {
                currentCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300);
    }
}

// Search
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length === 0) {
            renderDaysList();
            return;
        }
        
        const filtered = itineraryData.filter(day => 
            day.title.toLowerCase().includes(query) ||
            day.activity.toLowerCase().includes(query) ||
            day.city.toLowerCase().includes(query) ||
            day.transport.toLowerCase().includes(query)
        );
        
        renderDaysList(filtered);
    });
}

// Modal
function setupModal() {
    const modal = document.getElementById('dayModal');
    const closeBtn = document.getElementById('modalClose');
    
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function openDayModal(dayNumber) {
    const day = itineraryData.find(d => d.day === dayNumber);
    const modal = document.getElementById('dayModal');
    const modalBody = document.getElementById('modalBody');
    
    // Get custom locations for this day
    const customLocs = customLocations[dayNumber] || [];
    
    // Get removed default locations indices
    const removedIndices = removedDefaultLocations[dayNumber] || [];
    
    // Build all locations for map
    const allLocations = [];
    
    // Add default locations (excluding removed ones)
    if (day.links.locations && day.links.locations.length > 0) {
        day.links.locations.forEach((loc, index) => {
            if (!removedIndices.includes(index)) {
                allLocations.push({ 
                    ...loc, 
                    type: 'default',
                    defaultIndex: index
                });
            }
        });
    }
    
    // Add custom locations
    customLocs.forEach((loc, index) => {
        allLocations.push({ ...loc, type: 'custom', customIndex: index });
    });
    
    modalBody.innerHTML = `
        <div class="modal-day-header">
            <div class="modal-day-title">Dia ${day.day}: ${day.title}</div>
            <div class="modal-day-info">
                📅 ${day.date} | 📍 ${day.city}
            </div>
        </div>
        
        ${allLocations.length > 0 ? `
        <div class="links-section">
            <button onclick="openDayMap(${dayNumber})" class="link-btn map-btn" style="width: 100%;">
                🗺️ Ver Mapa Interativo do Dia (${allLocations.length} locais)
            </button>
        </div>
        ` : ''}
        
        <div class="links-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3>📝 Notas</h3>
                <button onclick="toggleEditNotes(${dayNumber})" class="icon-btn" title="Editar notas">✏️</button>
            </div>
            <div id="notesDisplay-${dayNumber}" class="notes-display">
                ${customNotes[dayNumber] || day.activity}
            </div>
            <div id="notesEdit-${dayNumber}" class="notes-edit" style="display: none;">
                <textarea id="notesText-${dayNumber}" class="form-textarea" rows="4">${customNotes[dayNumber] || day.activity}</textarea>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button onclick="saveNotes(${dayNumber})" class="link-btn primary" style="flex: 1;">
                        💾 Guardar
                    </button>
                    <button onclick="cancelEditNotes(${dayNumber})" class="link-btn cancel" style="flex: 1;">
                        ✕ Cancelar
                    </button>
                </div>
            </div>
        </div>
        
        <div class="links-section">
            <h3>🚇 Transporte</h3>
            <p>${day.transport}</p>
            ${day.links.transport.map(link => `
                <a href="${link.url}" target="_blank" class="link-btn">${link.name} →</a>
            `).join('')}
        </div>
        
        ${allLocations.length > 0 ? `
        <div class="links-section">
            <h3>📍 Locais (${allLocations.length})</h3>
            <div class="unified-locations-list">
                ${allLocations.map((loc, index) => `
                    <div class="unified-location-item ${loc.type}">
                        <div class="location-number">${index + 1}</div>
                        <div class="unified-location-info">
                            <strong>${loc.name}</strong>
                            ${loc.notes ? `<p class="location-notes">${loc.notes}</p>` : ''}
                            ${loc.type === 'default' ? '<span class="location-badge">Original</span>' : '<span class="location-badge custom">Personalizado</span>'}
                        </div>
                        <div class="unified-location-actions">
                            ${loc.url ? `<a href="${loc.url}" target="_blank" class="icon-btn" title="Abrir no Google Maps">🗺️</a>` : ''}
                            ${loc.type === 'custom' 
                                ? `<button onclick="removeCustomLocation(${dayNumber}, ${loc.customIndex})" class="icon-btn delete" title="Remover">🗑️</button>`
                                : `<button onclick="removeDefaultLocation(${dayNumber}, ${loc.defaultIndex})" class="icon-btn delete" title="Remover">🗑️</button>`
                            }
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        
        <div class="links-section">
            <button onclick="showAddLocationForm(${dayNumber})" class="link-btn" style="width: 100%;">
                ➕ Adicionar Novo Local
            </button>
            <div id="addLocationForm-${dayNumber}" class="add-location-form" style="display: none;">
                <input type="text" id="locName-${dayNumber}" placeholder="Nome do local *" class="form-input">
                <input type="text" id="locUrl-${dayNumber}" placeholder="Link do Google Maps (opcional)" class="form-input">
                <textarea id="locNotes-${dayNumber}" placeholder="Notas: horários, preços, dicas... (opcional)" class="form-textarea" rows="3"></textarea>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button onclick="saveCustomLocation(${dayNumber})" class="link-btn primary" style="flex: 1;">
                        💾 Guardar Local
                    </button>
                    <button onclick="hideAddLocationForm(${dayNumber})" class="link-btn cancel" style="flex: 1;">
                        ✕ Cancelar
                    </button>
                </div>
            </div>
        </div>
        
        <div class="links-section">
            <a href="${day.links.maps}" target="_blank" class="link-btn">
                🗺️ Ver ${day.city} no Google Maps →
            </a>
        </div>
        
        <div class="links-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3>🏨 Dormida</h3>
                <button onclick="toggleEditAccommodation(${dayNumber})" class="icon-btn" title="${customAccommodations[dayNumber] ? 'Editar' : 'Adicionar'} dormida">✏️</button>
            </div>
            <div id="accommodationDisplay-${dayNumber}" class="accommodation-display">
                ${customAccommodations[dayNumber] ? `
                    <p><strong>${customAccommodations[dayNumber].name}</strong></p>
                    ${customAccommodations[dayNumber].notes ? `<p class="location-notes">${customAccommodations[dayNumber].notes}</p>` : ''}
                    <div style="margin-top: 0.5rem;">
                        ${customAccommodations[dayNumber].url ? `<a href="${customAccommodations[dayNumber].url}" target="_blank" class="icon-btn" title="Abrir no Google Maps">🗺️</a>` : ''}
                        <button onclick="removeAccommodation(${dayNumber})" class="icon-btn delete" title="Remover">🗑️</button>
                    </div>
                ` : `<p>${day.accommodation}</p>`}
            </div>
            <div id="accommodationEdit-${dayNumber}" class="accommodation-edit" style="display: none;">
                <input type="text" id="accName-${dayNumber}" placeholder="Nome do local (ex: Hotel, Hostel, Airbnb) *" class="form-input" value="${customAccommodations[dayNumber]?.name || ''}">
                <input type="text" id="accUrl-${dayNumber}" placeholder="Link do Google Maps (opcional)" class="form-input" value="${customAccommodations[dayNumber]?.url || ''}">
                <textarea id="accNotes-${dayNumber}" placeholder="Notas: morada, telefone, check-in/out... (opcional)" class="form-textarea" rows="3">${customAccommodations[dayNumber]?.notes || ''}</textarea>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button onclick="saveAccommodation(${dayNumber})" class="link-btn primary" style="flex: 1;">
                        💾 Guardar
                    </button>
                    <button onclick="cancelEditAccommodation(${dayNumber})" class="link-btn cancel" style="flex: 1;">
                        ✕ Cancelar
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.classList.add('active');
}

function openAllLocationsInMap(dayNumber) {
    const day = itineraryData.find(d => d.day === dayNumber);
    const customLocs = customLocations[dayNumber] || [];
    
    // Collect all locations
    const locations = [];
    
    // Add default locations
    if (day.links.locations && day.links.locations.length > 0) {
        day.links.locations.forEach(loc => {
            if (loc.url) {
                locations.push({
                    name: loc.name,
                    url: loc.url
                });
            }
        });
    }
    
    // Add custom locations
    customLocs.forEach(loc => {
        if (loc.url) {
            locations.push({
                name: loc.name,
                url: loc.url
            });
        }
    });
    
    if (locations.length === 0) {
        // If no specific locations, open city map
        window.open(day.links.maps, '_blank');
        return;
    }
    
    // If only one location, open it directly
    if (locations.length === 1) {
        window.open(locations[0].url, '_blank');
        return;
    }
    
    // For multiple locations, create a Google Maps search with all locations
    // We'll open them in separate tabs (limited approach) or create a My Maps link
    const locationNames = locations.map(loc => {
        // Extract place name from URL if possible
        try {
            const url = new URL(loc.url);
            if (url.hostname.includes('google.com')) {
                // Try to extract place from Google Maps URL
                const placeMatch = loc.url.match(/place\/([^\/]+)/);
                if (placeMatch) {
                    return decodeURIComponent(placeMatch[1].replace(/\+/g, ' '));
                }
            }
        } catch (e) {
            // If URL parsing fails, use the name
        }
        return loc.name;
    }).join(' | ');
    
    // Create a search URL for all locations in the area
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(locationNames)}/@${day.coordinates.lat},${day.coordinates.lng},13z`;
    
    // Open main search
    window.open(searchUrl, '_blank');
    
    // Show notification
    alert(`📍 A abrir ${locations.length} locais no mapa!\n\nDica: Para ver todos os locais num único mapa, podes usar Google My Maps para criar um mapa personalizado.`);
}

function showAddLocationForm(dayNumber) {
    const form = document.getElementById(`addLocationForm-${dayNumber}`);
    form.style.display = 'block';
    document.getElementById(`locName-${dayNumber}`).focus();
}

function hideAddLocationForm(dayNumber) {
    const form = document.getElementById(`addLocationForm-${dayNumber}`);
    form.style.display = 'none';
    // Clear inputs
    document.getElementById(`locName-${dayNumber}`).value = '';
    document.getElementById(`locUrl-${dayNumber}`).value = '';
    document.getElementById(`locNotes-${dayNumber}`).value = '';
}

function saveCustomLocation(dayNumber) {
    const name = document.getElementById(`locName-${dayNumber}`).value.trim();
    const url = document.getElementById(`locUrl-${dayNumber}`).value.trim();
    const notes = document.getElementById(`locNotes-${dayNumber}`).value.trim();
    
    if (!name) {
        alert('Por favor, insere o nome do local!');
        return;
    }
    
    // Initialize array if doesn't exist
    if (!customLocations[dayNumber]) {
        customLocations[dayNumber] = [];
    }
    
    // Add new location
    customLocations[dayNumber].push({
        name: name,
        url: url || null,
        notes: notes || null,
        addedAt: new Date().toISOString()
    });
    
    // Save to localStorage
    saveCustomLocations();
    
    // Refresh modal
    openDayModal(dayNumber);
}

function removeCustomLocation(dayNumber, index) {
    if (!confirm('Tens a certeza que queres remover este local?')) {
        return;
    }
    
    customLocations[dayNumber].splice(index, 1);
    
    // Remove day entry if empty
    if (customLocations[dayNumber].length === 0) {
        delete customLocations[dayNumber];
    }
    
    // Save to localStorage
    saveCustomLocations();
    
    // Refresh modal
    openDayModal(dayNumber);
    
    // Re-render days list to update badge
    renderDaysList();
}

// Remove location from map and refresh
function removeLocationFromMap(dayNumber, customIndex) {
    if (!confirm('Remover este local?')) {
        return;
    }
    
    // Remove from storage
    customLocations[dayNumber].splice(customIndex, 1);
    
    if (customLocations[dayNumber].length === 0) {
        delete customLocations[dayNumber];
    }
    
    saveCustomLocations();
    
    // Close map modal
    document.getElementById('mapModal').classList.remove('active');
    if (interactiveMap) {
        interactiveMap.remove();
        interactiveMap = null;
    }
    
    // Refresh day modal if it's open
    if (document.getElementById('dayModal').classList.contains('active')) {
        openDayModal(dayNumber);
    }
    
    // Re-render days list
    renderDaysList();
    
    // Show success message
    setTimeout(() => {
        alert('✓ Local removido com sucesso!');
    }, 100);
}

function loadCustomLocations() {
    const saved = localStorage.getItem('customLocations');
    if (saved) {
        try {
            customLocations = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar locais personalizados:', e);
            customLocations = {};
        }
    }
}

function saveCustomLocations() {
    localStorage.setItem('customLocations', JSON.stringify(customLocations));
}

function loadRemovedDefaultLocations() {
    const saved = localStorage.getItem('removedDefaultLocations');
    if (saved) {
        try {
            removedDefaultLocations = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar locais removidos:', e);
            removedDefaultLocations = {};
        }
    }
}

function saveRemovedDefaultLocations() {
    localStorage.setItem('removedDefaultLocations', JSON.stringify(removedDefaultLocations));
}

function removeDefaultLocation(dayNumber, locationIndex) {
    if (!confirm('Tens a certeza que queres remover este local original?')) {
        return;
    }
    
    // Initialize array if doesn't exist
    if (!removedDefaultLocations[dayNumber]) {
        removedDefaultLocations[dayNumber] = [];
    }
    
    // Add index to removed list
    if (!removedDefaultLocations[dayNumber].includes(locationIndex)) {
        removedDefaultLocations[dayNumber].push(locationIndex);
    }
    
    // Save to localStorage
    saveRemovedDefaultLocations();
    
    // Refresh modal
    openDayModal(dayNumber);
    
    // Re-render days list to update badge
    renderDaysList();
}

function closeModal() {
    document.getElementById('dayModal').classList.remove('active');
}

// Notes Management
function loadCustomNotes() {
    const saved = localStorage.getItem('customNotes');
    if (saved) {
        try {
            customNotes = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar notas:', e);
            customNotes = {};
        }
    }
}

function saveCustomNotes() {
    localStorage.setItem('customNotes', JSON.stringify(customNotes));
}

function toggleEditNotes(dayNumber) {
    const display = document.getElementById(`notesDisplay-${dayNumber}`);
    const edit = document.getElementById(`notesEdit-${dayNumber}`);
    display.style.display = 'none';
    edit.style.display = 'block';
    document.getElementById(`notesText-${dayNumber}`).focus();
}

function saveNotes(dayNumber) {
    const text = document.getElementById(`notesText-${dayNumber}`).value.trim();
    if (!text) {
        alert('Por favor, insere as notas!');
        return;
    }
    
    customNotes[dayNumber] = text;
    saveCustomNotes();
    openDayModal(dayNumber);
}

function cancelEditNotes(dayNumber) {
    const display = document.getElementById(`notesDisplay-${dayNumber}`);
    const edit = document.getElementById(`notesEdit-${dayNumber}`);
    display.style.display = 'block';
    edit.style.display = 'none';
}

// Accommodation Management
function loadCustomAccommodations() {
    const saved = localStorage.getItem('customAccommodations');
    if (saved) {
        try {
            customAccommodations = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar dormidas:', e);
            customAccommodations = {};
        }
    }
}

function saveCustomAccommodations() {
    localStorage.setItem('customAccommodations', JSON.stringify(customAccommodations));
}

function toggleEditAccommodation(dayNumber) {
    const display = document.getElementById(`accommodationDisplay-${dayNumber}`);
    const edit = document.getElementById(`accommodationEdit-${dayNumber}`);
    display.style.display = 'none';
    edit.style.display = 'block';
    document.getElementById(`accName-${dayNumber}`).focus();
}

function saveAccommodation(dayNumber) {
    const name = document.getElementById(`accName-${dayNumber}`).value.trim();
    const url = document.getElementById(`accUrl-${dayNumber}`).value.trim();
    const notes = document.getElementById(`accNotes-${dayNumber}`).value.trim();
    
    if (!name) {
        alert('Por favor, insere o nome do local de dormida!');
        return;
    }
    
    customAccommodations[dayNumber] = {
        name: name,
        url: url || null,
        notes: notes || null,
        addedAt: new Date().toISOString()
    };
    
    saveCustomAccommodations();
    openDayModal(dayNumber);
}

function cancelEditAccommodation(dayNumber) {
    const display = document.getElementById(`accommodationDisplay-${dayNumber}`);
    const edit = document.getElementById(`accommodationEdit-${dayNumber}`);
    display.style.display = 'block';
    edit.style.display = 'none';
}

function removeAccommodation(dayNumber) {
    if (!confirm('Tens a certeza que queres remover esta dormida?')) {
        return;
    }
    
    delete customAccommodations[dayNumber];
    saveCustomAccommodations();
    openDayModal(dayNumber);
}

// Dark Mode Management
function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
}

function setupDarkModeToggle() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return; // Sair se o botão não existir
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
        
        updateDarkModeIcon();
    });
}

function updateDarkModeIcon() {
    const toggle = document.getElementById('darkModeToggle');
    if (!toggle) return; // Sair se o botão não existir
    
    if (document.body.classList.contains('dark-mode')) {
        toggle.textContent = '☀️';
        toggle.title = 'Alternar para tema claro';
    } else {
        toggle.textContent = '🌙';
        toggle.title = 'Alternar para tema escuro';
    }
}

// Setup Map Modal
function setupMapModal() {
    const mapModalClose = document.getElementById('mapModalClose');
    const mapModal = document.getElementById('mapModal');
    
    mapModalClose.addEventListener('click', () => {
        mapModal.classList.remove('active');
        if (interactiveMap) {
            interactiveMap.remove();
            interactiveMap = null;
        }
    });
    
    mapModal.addEventListener('click', (e) => {
        if (e.target === mapModal) {
            mapModal.classList.remove('active');
            if (interactiveMap) {
                interactiveMap.remove();
                interactiveMap = null;
            }
        }
    });
}

// Open Interactive Map for a Day
function openDayMap(dayNumber) {
    const day = itineraryData.find(d => d.day === dayNumber);
    const customLocs = customLocations[dayNumber] || [];
    const removedIndices = removedDefaultLocations[dayNumber] || [];
    const customAccommodation = customAccommodations[dayNumber];
    const mapModal = document.getElementById('mapModal');
    const mapDayTitle = document.getElementById('mapDayTitle');
    
    // Set title
    mapDayTitle.textContent = `Dia ${day.day}: ${day.title}`;
    
    // Collect all locations with coordinates
    const locations = [];
    
    // Add default locations (excluding removed ones)
    if (day.links.locations && day.links.locations.length > 0) {
        day.links.locations.forEach((loc, index) => {
            // Skip if this location has been removed
            if (removedIndices.includes(index)) {
                return;
            }
            
            // For now, we'll use the city coordinates as base with slight offset
            // In a real app, you'd geocode these addresses
            locations.push({
                name: loc.name,
                url: loc.url,
                lat: day.coordinates.lat + (Math.random() - 0.5) * 0.02,
                lng: day.coordinates.lng + (Math.random() - 0.5) * 0.02,
                type: 'default',
                originalIndex: index
            });
        });
    }
    
    // Add custom locations with coordinates
    customLocs.forEach((loc, index) => {
        let coords = null;
        
        if (loc.url && loc.url.includes('google.com/maps')) {
            // Try to extract coordinates from Google Maps URL
            const coordsMatch = loc.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            if (coordsMatch) {
                coords = {
                    lat: parseFloat(coordsMatch[1]),
                    lng: parseFloat(coordsMatch[2])
                };
            }
        }
        
        // If no coordinates found, use city center with offset
        if (!coords) {
            coords = {
                lat: day.coordinates.lat + (Math.random() - 0.5) * 0.02,
                lng: day.coordinates.lng + (Math.random() - 0.5) * 0.02
            };
        }
        
        locations.push({
            name: loc.name,
            url: loc.url || day.links.maps,
            lat: coords.lat,
            lng: coords.lng,
            type: 'custom',
            notes: loc.notes,
            customIndex: index,
            dayNumber: dayNumber
        });
    });
    
    // Add accommodation (custom or default)
    let accommodationCoords = null;
    let accommodationData = null;
    
    if (customAccommodation && customAccommodation.url && customAccommodation.url.includes('google.com/maps')) {
        const coordsMatch = customAccommodation.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
        if (coordsMatch) {
            accommodationCoords = {
                lat: parseFloat(coordsMatch[1]),
                lng: parseFloat(coordsMatch[2])
            };
        }
    }
    
    if (!accommodationCoords) {
        // Use city center with different offset for accommodation
        accommodationCoords = {
            lat: day.coordinates.lat + 0.005,
            lng: day.coordinates.lng + 0.005
        };
    }
    
    accommodationData = {
        name: customAccommodation ? customAccommodation.name : day.accommodation,
        url: customAccommodation?.url || day.links.maps,
        lat: accommodationCoords.lat,
        lng: accommodationCoords.lng,
        type: 'accommodation',
        notes: customAccommodation?.notes
    };
    
    locations.push(accommodationData);
    
    // If no specific locations, use city center
    if (locations.length === 1) { // Only accommodation
        locations.push({
            name: day.city,
            url: day.links.maps,
            lat: day.coordinates.lat,
            lng: day.coordinates.lng,
            type: 'city'
        });
    }
    
    // Show modal
    mapModal.classList.add('active');
    
    // Initialize map after modal is visible
    setTimeout(() => {
        initializeInteractiveMap(locations, day.coordinates, dayNumber);
        getUserLocation(locations);
    }, 100);
}

// Initialize Interactive Map
function initializeInteractiveMap(locations, centerCoords, dayNumber) {
    const mapElement = document.getElementById('interactiveMap');
    
    // Clear previous map if exists
    if (interactiveMap) {
        interactiveMap.remove();
    }
    
    mapMarkers = [];
    
    // Create map centered on the day's city
    interactiveMap = L.map('interactiveMap').setView([centerCoords.lat, centerCoords.lng], 13);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(interactiveMap);
    
    // Add markers for each location
    locations.forEach((loc, index) => {
        let markerHtml;
        
        if (loc.type === 'accommodation') {
            // Special marker for accommodation
            markerHtml = `<div class="marker-pin accommodation"><span>🏨</span></div>`;
        } else {
            // Numbered markers for locations
            markerHtml = `<div class="marker-pin ${loc.type}"><span>${index + 1}</span></div>`;
        }
        
        const icon = L.divIcon({
            className: 'custom-map-marker',
            html: markerHtml,
            iconSize: [30, 40],
            iconAnchor: [15, 40]
        });
        
        const marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(interactiveMap);
        
        const deleteBtn = loc.type === 'custom' 
            ? `<button onclick="removeLocationFromMap(${dayNumber}, ${loc.customIndex})" class="popup-delete-btn">🗑️ Remover</button>`
            : '';
        
        const popupContent = `
            <div class="map-popup">
                <strong>${loc.name}</strong>${loc.type === 'accommodation' ? ' 🏨' : ''}<br>
                ${loc.notes ? `<p>${loc.notes}</p>` : ''}
                <a href="${loc.url}" target="_blank">Abrir no Google Maps →</a>
                ${deleteBtn}
            </div>
        `;
        
        marker.bindPopup(popupContent);
        mapMarkers.push({ marker, location: loc });
    });
    
    // Fit bounds to show all markers
    if (locations.length > 1) {
        const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]));
        interactiveMap.fitBounds(bounds, { padding: [50, 50] });
    }
}

// Get User Location
function getUserLocation(locations) {
    const locationStatus = document.getElementById('locationStatus');
    const locationText = document.getElementById('locationText');
    
    if (!navigator.geolocation) {
        locationText.textContent = 'Geolocalização não disponível';
        calculateRoute(null, locations);
        return;
    }
    
    locationText.textContent = 'A obter localização...';
    
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            
            locationText.textContent = 'Localização obtida ✓';
            locationStatus.classList.add('active');
            
            // Add user marker to map
            if (interactiveMap) {
                const userIcon = L.divIcon({
                    className: 'user-marker',
                    html: '<div class="user-pin">📍<div class="pulse"></div></div>',
                    iconSize: [30, 30],
                    iconAnchor: [15, 15]
                });
                
                L.marker([userLocation.lat, userLocation.lng], { icon: userIcon })
                    .addTo(interactiveMap)
                    .bindPopup('<strong>A tua localização</strong>');
                
                // Adjust map to include user location
                const allPoints = [...locations.map(loc => [loc.lat, loc.lng]), [userLocation.lat, userLocation.lng]];
                const bounds = L.latLngBounds(allPoints);
                interactiveMap.fitBounds(bounds, { padding: [50, 50] });
            }
            
            // Calculate optimal route
            calculateRoute(userLocation, locations);
        },
        (error) => {
            console.error('Erro ao obter localização:', error);
            locationText.textContent = 'Não foi possível obter localização';
            locationStatus.classList.add('error');
            calculateRoute(null, locations);
        }
    );
}

// Calculate Optimal Route
function calculateRoute(startLocation, locations) {
    const routeList = document.getElementById('routeList');
    
    if (!startLocation) {
        // No user location, just show locations in order
        routeList.innerHTML = locations.map((loc, index) => `
            <div class="route-item">
                <div class="route-number">${index + 1}</div>
                <div class="route-info">
                    <strong>${loc.name}</strong>
                    ${loc.notes ? `<p>${loc.notes}</p>` : ''}
                </div>
                <a href="${loc.url}" target="_blank" class="route-link">🗺️</a>
            </div>
        `).join('');
        return;
    }
    
    // Calculate distances from user location
    const locationsWithDistance = locations.map(loc => {
        const distance = calculateDistance(
            startLocation.lat, startLocation.lng,
            loc.lat, loc.lng
        );
        return { ...loc, distance };
    });
    
    // Sort by distance (nearest first)
    const sortedLocations = [...locationsWithDistance].sort((a, b) => a.distance - b.distance);
    
    // Display route
    routeList.innerHTML = sortedLocations.map((loc, index) => `
        <div class="route-item">
            <div class="route-number">${index + 1}</div>
            <div class="route-info">
                <strong>${loc.name}</strong>
                <span class="distance">${loc.distance < 1 ? Math.round(loc.distance * 1000) + 'm' : loc.distance.toFixed(1) + 'km'}</span>
                ${loc.notes ? `<p>${loc.notes}</p>` : ''}
            </div>
            <a href="${loc.url}" target="_blank" class="route-link">🗺️</a>
        </div>
    `).join('');
}

// Calculate distance between two coordinates (Haversine formula)
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth's radius in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function toRad(degrees) {
    return degrees * (Math.PI / 180);
}

// Check Online Status
function checkOnlineStatus() {
    const statusElement = document.getElementById('onlineStatus');
    const statusDot = statusElement.querySelector('.status-dot');
    const statusText = statusElement.querySelector('.status-text');
    
    isOnline = navigator.onLine;
    
    if (isOnline) {
        statusDot.classList.remove('offline');
        statusText.textContent = 'Online';
    } else {
        statusDot.classList.add('offline');
        statusText.textContent = 'Offline';
    }
}

// Currency Converter Functions
function setupConverter() {
    const eurInput = document.getElementById('eurInput');
    const yenInput = document.getElementById('yenInput');
    const eurToYenResult = document.getElementById('eurToYenResult');
    const yenToEurResult = document.getElementById('yenToEurResult');
    const quickBtns = document.querySelectorAll('.quick-btn');
    
    // Format number with space thousands separator
    function formatNumber(num, decimals = 0) {
        const fixed = num.toFixed(decimals);
        const parts = fixed.split('.');
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        return parts.join('.');
    }
    
    // Remove spaces for parsing
    function parseFormattedNumber(str) {
        return parseFloat(str.replace(/\s/g, '')) || 0;
    }
    
    // Update both conversions
    function updateConversions() {
        const eurValue = parseFormattedNumber(eurInput.value);
        const yenValue = parseFormattedNumber(yenInput.value);
        
        // EUR to YEN
        if (eurValue > 0) {
            const converted = Math.round(eurValue * exchangeRate);
            eurToYenResult.textContent = `= ${formatNumber(converted)} ¥`;
            eurToYenResult.style.display = 'block';
        } else {
            eurToYenResult.style.display = 'none';
        }
        
        // YEN to EUR
        if (yenValue > 0) {
            const converted = yenValue / exchangeRate;
            yenToEurResult.textContent = `= ${formatNumber(converted, 2)} €`;
            yenToEurResult.style.display = 'block';
        } else {
            yenToEurResult.style.display = 'none';
        }
    }
    
    // EUR input
    eurInput.addEventListener('input', (e) => {
        updateConversions();
    });
    
    // YEN input
    yenInput.addEventListener('input', (e) => {
        updateConversions();
    });
    
    // Format on blur
    eurInput.addEventListener('blur', (e) => {
        const value = parseFormattedNumber(e.target.value);
        if (value > 0) {
            e.target.value = formatNumber(value, 2);
        }
    });
    
    yenInput.addEventListener('blur', (e) => {
        const value = parseFormattedNumber(e.target.value);
        if (value > 0) {
            e.target.value = formatNumber(value);
        }
    });
    
    // Quick amount buttons
    quickBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const amount = btn.dataset.amount;
            eurInput.value = formatNumber(parseFloat(amount), 2);
            updateConversions();
        });
    });
}

// Fetch Exchange Rate from API
async function fetchExchangeRate() {
    const rateStatus = document.getElementById('rateStatus');
    const rateValue = document.getElementById('rateValue');
    const rateUpdated = document.getElementById('rateUpdated');
    
    if (!navigator.onLine) {
        rateStatus.textContent = '📡 Offline';
        rateStatus.className = 'rate-status offline';
        rateValue.textContent = `1 EUR = ${exchangeRate.toFixed(2)} JPY`;
        rateUpdated.textContent = 'Taxa offline (aproximada)';
        return;
    }
    
    rateStatus.textContent = '🔄 A atualizar...';
    rateStatus.className = 'rate-status loading';
    
    try {
        // Using exchangerate-api.com (free tier, no API key needed)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        
        if (!response.ok) throw new Error('Erro ao obter taxa');
        
        const data = await response.json();
        exchangeRate = data.rates.JPY;
        exchangeRateDate = new Date(data.date);
        
        // Save to localStorage for offline use
        localStorage.setItem('exchangeRate', exchangeRate);
        localStorage.setItem('exchangeRateDate', exchangeRateDate.toISOString());
        
        rateStatus.textContent = '✅ Taxa Atualizada';
        rateStatus.className = 'rate-status online';
        rateValue.textContent = `1 EUR = ${exchangeRate.toFixed(2)} JPY`;
        
        const now = new Date();
        const timeAgo = getTimeAgo(exchangeRateDate);
        rateUpdated.textContent = `Atualizado: ${timeAgo}`;
        
    } catch (error) {
        console.error('Erro ao obter taxa de câmbio:', error);
        
        // Try to load from localStorage
        const savedRate = localStorage.getItem('exchangeRate');
        const savedDate = localStorage.getItem('exchangeRateDate');
        
        if (savedRate) {
            exchangeRate = parseFloat(savedRate);
            exchangeRateDate = new Date(savedDate);
            
            rateStatus.textContent = '⚠️ Taxa em Cache';
            rateStatus.className = 'rate-status cached';
            rateValue.textContent = `1 EUR = ${exchangeRate.toFixed(2)} JPY`;
            rateUpdated.textContent = `Última atualização: ${getTimeAgo(exchangeRateDate)}`;
        } else {
            rateStatus.textContent = '❌ Erro';
            rateStatus.className = 'rate-status error';
            rateValue.textContent = `1 EUR ≈ ${exchangeRate.toFixed(2)} JPY (estimado)`;
            rateUpdated.textContent = 'Não foi possível obter taxa atual';
        }
    }
}

// Helper function to format time ago
function getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Agora mesmo';
    if (minutes < 60) return `Há ${minutes} minuto${minutes > 1 ? 's' : ''}`;
    if (hours < 24) return `Há ${hours} hora${hours > 1 ? 's' : ''}`;
    return `Há ${days} dia${days > 1 ? 's' : ''}`;
}

// Service Worker Registration
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    }
}

// PWA Install Prompt
function setupInstallPrompt() {
    const installBtn = document.getElementById('installBtn');
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        installBtn.style.display = 'block';
    });
    
    installBtn.addEventListener('click', async () => {
        if (!deferredPrompt) return;
        
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        
        if (outcome === 'accepted') {
            console.log('PWA installed');
        }
        
        deferredPrompt = null;
        installBtn.style.display = 'none';
    });
}
