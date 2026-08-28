// Dados do Itinerário
const itineraryData = [
    {
        day: 1,
        date: "18/set",
        title: "Madrid → Osaka (Voo Internacional)",
        activity: "Voo Internacional",
        transport: "✈️ Voo Internacional",
        accommodation: "✈️ Noite a bordo",
        city: "Osaka",
        coordinates: { lat: 34.6937, lng: 135.5023 },
        links: {
            maps: "https://www.google.com/maps/place/Osaka",
            locations: [],
            transport: []
        }
    },
    {
        day: 2,
        date: "19/set",
        title: "Chegada → The Much Café → Dotonbori",
        activity: "The Much Café e Dotonbori",
        transport: "🚆 Nankai Airport Express → Shin-Imamiya",
        accommodation: "KATSU HOTEL 新今宫",
        city: "Osaka",
        coordinates: { lat: 34.6937, lng: 135.5023 },
        links: {
            maps: "https://www.google.com/maps/place/Dotonbori,+Osaka",
            locations: [
                { name: "The Much Café", url: "https://www.google.com/maps/search/The+Much+Café+Osaka" },
                { name: "Dotonbori", url: "https://www.google.com/maps/place/Dotonbori" }
            ],
            transport: [
                { name: "Nankai Airport Express", url: "https://www.howto-osaka.com/en/ticket/ticket/rapit.html" }
            ]
        }
    },
    {
        day: 3,
        date: "20/set",
        title: "Himeji Castle",
        activity: "Visita ao Castelo Himeji",
        transport: "🚆 JR Special Rapid Osaka ↔ Himeji",
        accommodation: "KATSU HOTEL 新今宫",
        city: "Himeji",
        coordinates: { lat: 34.8394, lng: 134.6939 },
        links: {
            maps: "https://www.google.com/maps/place/Himeji+Castle",
            locations: [
                { name: "Himeji Castle", url: "https://www.google.com/maps/place/Himeji+Castle" }
            ],
            transport: [
                { name: "JR Special Rapid", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 4,
        date: "21/set",
        title: "Nijigen no Mori (Naruto/Godzilla)",
        activity: "Parque Naruto/Godzilla",
        transport: "🚌 Highway Bus → Awaji",
        accommodation: "KATSU HOTEL 新今宫",
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
        title: "Kyoto: Gion, Higashiyama e Pontocho",
        activity: "Bairros históricos de Kyoto",
        transport: "🚆 JR Special Rapid Osaka → Kyoto",
        accommodation: "Sotetsu Fresa Inn Kyoto",
        city: "Kyoto",
        coordinates: { lat: 35.0116, lng: 135.7681 },
        links: {
            maps: "https://www.google.com/maps/place/Gion,+Kyoto",
            locations: [
                { name: "Gion", url: "https://www.google.com/maps/place/Gion" },
                { name: "Pontocho", url: "https://www.google.com/maps/place/Pontocho" }
            ],
            transport: [
                { name: "JR Special Rapid", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 6,
        date: "23/set",
        title: "Fushimi Inari cedo + Nara",
        activity: "Veados de Nara e Templo Fushimi Inari",
        transport: "🚆 JR Nara Line + Miyakoji Rapid",
        accommodation: "Sotetsu Fresa Inn Kyoto",
        city: "Nara/Kyoto",
        coordinates: { lat: 34.6851, lng: 135.8050 },
        links: {
            maps: "https://www.google.com/maps/place/Nara+Park",
            locations: [
                { name: "Nara Park", url: "https://www.google.com/maps/place/Nara+Park" },
                { name: "Fushimi Inari", url: "https://www.google.com/maps/place/Fushimi+Inari+Taisha" }
            ],
            transport: [
                { name: "JR Nara Line + Miyakoji Rapid", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 7,
        date: "24/set",
        title: "Arashiyama (Bambus) → Tokyo",
        activity: "Bambus de Arashiyama + viagem noturna",
        transport: "🚌 Autocarro Noturno Kyoto → Tokyo",
        accommodation: "🚌 Noite no Bus",
        city: "Kyoto/Tokyo",
        coordinates: { lat: 35.0094, lng: 135.6686 },
        links: {
            maps: "https://www.google.com/maps/place/Arashiyama",
            locations: [
                { name: "Arashiyama Bamboo Grove", url: "https://www.google.com/maps/place/Arashiyama+Bamboo+Grove" }
            ],
            transport: [
                { name: "Night Bus Kyoto-Tokyo", url: "https://willerexpress.com/en/" }
            ]
        }
    },
    {
        day: 8,
        date: "25/set",
        title: "Akihabara: Mandarake e Surugaya",
        activity: "Mandarake e Surugaya - lojas de anime/manga",
        transport: "🚇 Metro / JR + IC Card",
        accommodation: "Kimi Ryokan - Ikebukuro",
        city: "Tokyo",
        coordinates: { lat: 35.6983, lng: 139.7731 },
        links: {
            maps: "https://www.google.com/maps/place/Akihabara",
            locations: [
                { name: "Mandarake Akihabara", url: "https://www.google.com/maps/search/Mandarake+Akihabara" },
                { name: "Surugaya", url: "https://www.google.com/maps/search/Surugaya+Akihabara" }
            ],
            transport: [
                { name: "Tokyo Metro / JR", url: "https://www.tokyometro.jp/en/" }
            ]
        }
    },
    {
        day: 9,
        date: "26/set",
        title: "Animate Ikebukuro e Sunshine City",
        activity: "Animate Ikebukuro e Sunshine City",
        transport: "🚇 Metro / JR",
        accommodation: "Kimi Ryokan - Ikebukuro",
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
        title: "Harajuku e Mugiwara Store Shibuya",
        activity: "Harajuku + Mugiwara Store Shibuya",
        transport: "🚇 Metro / JR",
        accommodation: "Kimi Ryokan - Ikebukuro",
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
        title: "Odaiba e Templo Gotokuji (Gatos)",
        activity: "Odaiba e Templo dos Gatos",
        transport: "🚆 Yurikamome + Odakyu",
        accommodation: "Kimi Ryokan - Ikebukuro",
        city: "Tokyo",
        coordinates: { lat: 35.6268, lng: 139.7744 },
        links: {
            maps: "https://www.google.com/maps/place/Odaiba",
            locations: [
                { name: "Odaiba", url: "https://www.google.com/maps/place/Odaiba" },
                { name: "Gotokuji Temple", url: "https://www.google.com/maps/place/Gotokuji+Temple" }
            ],
            transport: [
                { name: "Yurikamome + Odakyu", url: "https://www.yurikamome.co.jp/en/" }
            ]
        }
    },
    {
        day: 12,
        date: "29/set",
        title: "Tokyo → Kawaguchiko (Fuji)",
        activity: "Viagem para a região do Monte Fuji",
        transport: "🚌 Highway Bus Shinjuku → Kawaguchiko",
        accommodation: "Hotel Mifujien",
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
        title: "Monte Fuji: Lagos + Onsen",
        activity: "Lagos e Onsen na região do Fuji",
        transport: "🚌 Autocarro Local (Red Line)",
        accommodation: "Fuji Lake Hotel",
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
        title: "Kawaguchiko → Haneda",
        activity: "Viagem para Haneda",
        transport: "🚌 Autocarro Direto Kawaguchiko → Haneda",
        accommodation: "KC-III - Haneda Airport",
        city: "Haneda",
        coordinates: { lat: 35.5545, lng: 139.7810 },
        links: {
            maps: "https://www.google.com/maps/place/Haneda+Airport",
            locations: [
                { name: "Haneda Airport", url: "https://www.google.com/maps/place/Haneda+Airport" }
            ],
            transport: [
                { name: "Kawaguchiko Airport Bus", url: "https://www.google.com/maps/search/Kawaguchiko+Haneda+bus" }
            ]
        }
    },
    {
        day: 15,
        date: "02/out",
        title: "Haneda → Kumamoto / Estátuas One Piece — Parte 1",
        activity: "Voo Haneda → Kumamoto e estátuas One Piece",
        transport: "✈️ Voo Haneda → Kumamoto",
        accommodation: "DOMO Hotel 大津 - Kumamoto",
        city: "Kumamoto",
        coordinates: { lat: 32.8031, lng: 130.7079 },
        links: {
            maps: "https://www.google.com/maps/place/Kumamoto",
            locations: [
                { name: "Kumamoto", url: "https://www.google.com/maps/place/Kumamoto" }
            ],
            transport: [
                { name: "Haneda → Kumamoto", url: "https://www.google.com/flights/" }
            ]
        }
    },
    {
        day: 16,
        date: "03/out",
        title: "Estátuas One Piece — Parte 2",
        activity: "Continuação do tour One Piece",
        transport: "🚗 Carro Alugado",
        accommodation: "DOMO Hotel 大津 - Kumamoto",
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
        title: "Kumamoto → Beppu (Onsens/Termas)",
        activity: "Viagem para Beppu",
        transport: "🚌 Highway Bus Yamabiko",
        accommodation: "JAPANESE IN HOTEL MATSUKISO - Beppu",
        city: "Beppu",
        coordinates: { lat: 33.2845, lng: 131.4912 },
        links: {
            maps: "https://www.google.com/maps/place/Beppu",
            locations: [
                { name: "Beppu Onsen", url: "https://www.google.com/maps/search/Beppu+Onsen" },
                { name: "Beppu Hell Tour", url: "https://www.google.com/maps/search/Beppu+Jigoku" }
            ],
            transport: [
                { name: "Highway Bus Yamabiko", url: "https://www.google.com/maps/search/Beppu+bus" }
            ]
        }
    },
    {
        day: 18,
        date: "05/out",
        title: "Beppu (Onsens/Termas)",
        activity: "Onsens e termas de Beppu",
        transport: "🚶 / 🚌 Transporte Local",
        accommodation: "JAPANESE IN HOTEL MATSUKISO - Beppu",
        city: "Beppu",
        coordinates: { lat: 33.2845, lng: 131.4912 },
        links: {
            maps: "https://www.google.com/maps/place/Beppu",
            locations: [
                { name: "Beppu Onsen", url: "https://www.google.com/maps/search/Beppu+Onsen" },
                { name: "Beppu Hell Tour", url: "https://www.google.com/maps/search/Beppu+Jigoku" }
            ],
            transport: []
        }
    },
    {
        day: 19,
        date: "06/out",
        title: "Beppu → Fukuoka + Hakata Ramen",
        activity: "Fukuoka - Hakata Ramen",
        transport: "🚌 Highway Bus",
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
        activity: "Viagem para Osaka",
        transport: "🚄 Shinkansen Hakata → Shin-Osaka",
        accommodation: "Y&Y NAMBA HOTEL Osaka",
        city: "Osaka",
        coordinates: { lat: 34.6937, lng: 135.5023 },
        links: {
            maps: "https://www.google.com/maps/place/Osaka",
            locations: [],
            transport: [
                { name: "Shinkansen Hakata-Shin-Osaka", url: "https://www.hyperdia.com/" }
            ]
        }
    },
    {
        day: 21,
        date: "08/out",
        title: "Universal Studios Japan (USJ)",
        activity: "USJ - Parque Temático",
        transport: "🚆 JR Yumesaki Line",
        accommodation: "Y&Y NAMBA HOTEL Osaka",
        city: "Osaka",
        coordinates: { lat: 34.6654, lng: 135.4322 },
        links: {
            maps: "https://www.google.com/maps/place/Universal+Studios+Japan",
            locations: [
                { name: "Universal Studios Japan", url: "https://www.usj.co.jp/web/en/us" }
            ],
            transport: [
                { name: "JR Yumesaki Line", url: "https://www.usj.co.jp/web/en/us/access" }
            ]
        }
    },
    {
        day: 22,
        date: "09/out",
        title: "Den Den Town e Padaria Parine",
        activity: "Shopping de eletrónicos e anime + padaria One Piece",
        transport: "🚇 Metro",
        accommodation: "Y&Y NAMBA HOTEL Osaka",
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
let customAccommodationLocations = {}; // Armazena locais extra associados à dormida por dia
let customTitles = {}; // Armazena títulos personalizados por dia
let customTransports = {}; // Armazena transportes personalizados por dia
let interactiveMap = null;
let userLocation = null;
let mapMarkers = [];

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function getDisplayTitle(day) {
    return customTitles[day.day] || day.title;
}

function getDisplayTransport(day) {
    return customTransports[day.day] || day.transport;
}

function getDisplayAccommodation(day) {
    return customAccommodations[day.day]?.name || day.accommodation;
}

function getAccommodationLocationSummary(day) {
    const links = customAccommodationLocations[day.day] || [];
    if (!links.length) {
        return '';
    }

    const names = links.slice(0, 2).map(loc => loc.name);
    const remaining = links.length - names.length;
    const suffix = remaining > 0 ? ` +${remaining}` : '';
    return `📍 ${names.join(' • ')}${suffix}`;
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    loadCustomLocations();
    loadRemovedDefaultLocations();
    loadCustomNotes();
    loadCustomAccommodations();
    loadCustomAccommodationLocations();
    loadCustomTitles();
    loadCustomTransports();
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
function getSortedItineraryData(data = itineraryData) {
    return [...data].sort((a, b) => a.day - b.day);
}

function renderDaysList(filteredData = null) {
    const daysList = document.getElementById('daysList');
    const data = getSortedItineraryData(filteredData || itineraryData);
    
    daysList.innerHTML = data.map(day => {
        const hasCustomLocations = customLocations[day.day] && customLocations[day.day].length > 0;
        const customCount = hasCustomLocations ? customLocations[day.day].length : 0;
        const displayTitle = escapeHtml(getDisplayTitle(day));
        const displayTransport = escapeHtml(getDisplayTransport(day));
        const displayAccommodation = escapeHtml(getDisplayAccommodation(day));
        const accommodationLocationSummary = escapeHtml(getAccommodationLocationSummary(day));
        
        // Count removed default locations
        const removedIndices = removedDefaultLocations[day.day] || [];
        const originalCount = (day.links.locations ? day.links.locations.length : 0) - removedIndices.length;
        const totalCount = originalCount + customCount;
        
        return `
        <div class="day-card ${day.day === getCurrentDay() ? 'highlight' : ''}" data-day="${day.day}" onclick="openDayModal(${day.day})">
            <div class="day-header">
                <div class="day-number">D${day.day}</div>
                <div class="day-date">${day.date}</div>
            </div>
            <div class="day-title">
                ${displayTitle}
                ${hasCustomLocations ? `<span class="custom-badge" title="${customCount} local(is) personalizado(s)">⭐ ${customCount}</span>` : ''}
                ${totalCount > 0 ? `<span class="location-count" title="${totalCount} locais no total">📍 ${totalCount}</span>` : ''}
            </div>
            <div class="day-location">📍 ${day.city}</div>
            <div class="day-transport">${displayTransport}</div>
            <div class="day-accommodation">🏨 ${displayAccommodation}</div>
            ${accommodationLocationSummary ? `<div class="day-hotel-locations">${accommodationLocationSummary}</div>` : ''}
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
    getSortedItineraryData().forEach(day => {
        const option = document.createElement('option');
        option.value = day.day;
        option.textContent = `Dia ${day.day} - ${day.date} - ${getDisplayTitle(day)}`;
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
    const targetCard = document.querySelector(`.day-card[data-day="${dayNumber}"]`);
    
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
            const currentCard = document.querySelector(`.day-card[data-day="${currentDay}"]`);
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
            getDisplayTitle(day).toLowerCase().includes(query) ||
            day.activity.toLowerCase().includes(query) ||
            day.city.toLowerCase().includes(query) ||
            getDisplayTransport(day).toLowerCase().includes(query)
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
    const availableDays = getSortedItineraryData().filter(item => item.day !== dayNumber);
    const customTitle = escapeHtml(getDisplayTitle(day));
    const customTransport = escapeHtml(getDisplayTransport(day));
    
    // Get custom locations for this day
    const customLocs = customLocations[dayNumber] || [];
    const accommodationLocs = customAccommodationLocations[dayNumber] || [];
    
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
            <div class="modal-day-title">Dia ${day.day}: ${customTitle}</div>
            <div class="modal-day-info">
                📅 ${day.date} | 📍 ${day.city}
            </div>
        </div>

        <div class="links-section">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
                <h3>🔁 Mover card</h3>
                <button onclick="moveDayCard(${dayNumber})" class="link-btn primary" style="padding: 0.6rem 1rem;">
                    🔁 Trocar de dia
                </button>
            </div>
            <div style="margin-top: 0.75rem;">
                <label for="moveDaySelect-${dayNumber}" style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--text-primary);">Mover este card para:</label>
                <select id="moveDaySelect-${dayNumber}" class="day-select" style="width: 100%;">
                    <option value="">Selecionar novo dia...</option>
                    ${availableDays.map(item => `<option value="${item.day}">Dia ${item.day} - ${item.date} - ${escapeHtml(getDisplayTitle(item))}</option>`).join('')}
                </select>
            </div>
        </div>

        <div class="links-section">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3>🏷️ Título</h3>
                <button onclick="toggleEditTitle(${dayNumber})" class="icon-btn" title="Editar título">✏️</button>
            </div>
            <div id="titleDisplay-${dayNumber}" class="notes-display">
                ${customTitle}
            </div>
            <div id="titleEdit-${dayNumber}" class="notes-edit" style="display: none;">
                <input id="titleText-${dayNumber}" class="form-input" value="${customTitle}">
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button onclick="saveTitle(${dayNumber})" class="link-btn primary" style="flex: 1;">
                        💾 Guardar
                    </button>
                    <button onclick="cancelEditTitle(${dayNumber})" class="link-btn cancel" style="flex: 1;">
                        ✕ Cancelar
                    </button>
                </div>
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
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h3>🚇 Transporte</h3>
                <button onclick="toggleEditTransport(${dayNumber})" class="icon-btn" title="Editar transporte">✏️</button>
            </div>
            <div id="transportDisplay-${dayNumber}" class="notes-display">
                ${customTransport}
            </div>
            <div id="transportEdit-${dayNumber}" class="notes-edit" style="display: none;">
                <input id="transportText-${dayNumber}" class="form-input" value="${customTransport}">
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button onclick="saveTransport(${dayNumber})" class="link-btn primary" style="flex: 1;">
                        💾 Guardar
                    </button>
                    <button onclick="cancelEditTransport(${dayNumber})" class="link-btn cancel" style="flex: 1;">
                        ✕ Cancelar
                    </button>
                </div>
            </div>
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
            <div style="margin-top: 1rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; gap: 0.5rem; flex-wrap: wrap;">
                    <h4 style="margin: 0; color: var(--text-primary);">📍 Locais da Dormida</h4>
                    <button onclick="showAddAccommodationLocationForm(${dayNumber})" class="link-btn" style="padding: 0.5rem 0.8rem; margin: 0;">
                        ➕ Adicionar Local
                    </button>
                </div>
                <div id="accommodationLocationsList-${dayNumber}" class="unified-locations-list">
                    ${accommodationLocs.length > 0 ? accommodationLocs.map((loc, index) => `
                        <div class="unified-location-item custom">
                            <div class="location-number">${index + 1}</div>
                            <div class="unified-location-info">
                                <strong>${loc.name}</strong>
                                ${loc.notes ? `<p class="location-notes">${loc.notes}</p>` : ''}
                                <span class="location-badge custom">Dormida</span>
                            </div>
                            <div class="unified-location-actions">
                                ${loc.url ? `<a href="${loc.url}" target="_blank" class="icon-btn" title="Abrir no Google Maps">🗺️</a>` : ''}
                                <button onclick="removeAccommodationLocation(${dayNumber}, ${index})" class="icon-btn delete" title="Remover">🗑️</button>
                            </div>
                        </div>
                    `).join('') : `<p class="location-notes" style="margin: 0;">Sem locais extra associados à dormida.</p>`}
                </div>
                <div id="accommodationLocationForm-${dayNumber}" class="add-location-form" style="display: none; margin-top: 0.75rem;">
                    <input type="text" id="accLocName-${dayNumber}" placeholder="Nome do local *" class="form-input">
                    <input type="text" id="accLocUrl-${dayNumber}" placeholder="Link do Google Maps (opcional)" class="form-input">
                    <textarea id="accLocNotes-${dayNumber}" placeholder="Notas: horários, detalhes, dicas... (opcional)" class="form-textarea" rows="3"></textarea>
                    <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                        <button onclick="saveAccommodationLocation(${dayNumber})" class="link-btn primary" style="flex: 1;">
                            💾 Guardar Local
                        </button>
                        <button onclick="hideAddAccommodationLocationForm(${dayNumber})" class="link-btn cancel" style="flex: 1;">
                            ✕ Cancelar
                        </button>
                    </div>
                </div>
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

function moveDayCard(dayNumber) {
    const select = document.getElementById(`moveDaySelect-${dayNumber}`);
    const targetDay = parseInt(select.value, 10);

    if (!targetDay) {
        alert('Seleciona primeiro o dia de destino.');
        return;
    }

    if (targetDay === dayNumber) {
        return;
    }

    const sourceIndex = itineraryData.findIndex(day => day.day === dayNumber);
    const targetIndex = itineraryData.findIndex(day => day.day === targetDay);

    if (sourceIndex === -1 || targetIndex === -1) {
        alert('Não foi possível encontrar um dos dias.');
        return;
    }

    const sourceDay = itineraryData[sourceIndex];
    const targetDayData = itineraryData[targetIndex];

    const sourceDayCustomLocations = customLocations[dayNumber];
    const targetDayCustomLocations = customLocations[targetDay];
    const sourceDayRemoved = removedDefaultLocations[dayNumber];
    const targetDayRemoved = removedDefaultLocations[targetDay];
    const sourceDayNotes = customNotes[dayNumber];
    const targetDayNotes = customNotes[targetDay];
    const sourceDayAccommodation = customAccommodations[dayNumber];
    const targetDayAccommodation = customAccommodations[targetDay];
    const sourceDayTitle = customTitles[dayNumber];
    const targetDayTitle = customTitles[targetDay];
    const sourceDayTransport = customTransports[dayNumber];
    const targetDayTransport = customTransports[targetDay];

    itineraryData[sourceIndex] = { ...targetDayData, day: dayNumber };
    itineraryData[targetIndex] = { ...sourceDay, day: targetDay };

    if (sourceDayCustomLocations || targetDayCustomLocations) {
        customLocations[dayNumber] = targetDayCustomLocations;
        customLocations[targetDay] = sourceDayCustomLocations;
    }

    if (sourceDayRemoved || targetDayRemoved) {
        removedDefaultLocations[dayNumber] = targetDayRemoved;
        removedDefaultLocations[targetDay] = sourceDayRemoved;
    }

    if (sourceDayNotes || targetDayNotes) {
        customNotes[dayNumber] = targetDayNotes;
        customNotes[targetDay] = sourceDayNotes;
    }

    if (sourceDayAccommodation || targetDayAccommodation) {
        customAccommodations[dayNumber] = targetDayAccommodation;
        customAccommodations[targetDay] = sourceDayAccommodation;
    }

    if (sourceDayTitle || targetDayTitle) {
        customTitles[dayNumber] = targetDayTitle;
        customTitles[targetDay] = sourceDayTitle;
    }

    if (sourceDayTransport || targetDayTransport) {
        customTransports[dayNumber] = targetDayTransport;
        customTransports[targetDay] = sourceDayTransport;
    }

    saveCustomLocations();
    saveRemovedDefaultLocations();
    saveCustomNotes();
    saveCustomAccommodations();
    saveCustomTitles();
    saveCustomTransports();

    renderDaysList();
    openDayModal(dayNumber);
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

function loadCustomTitles() {
    const saved = localStorage.getItem('customTitles');
    if (saved) {
        try {
            customTitles = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar títulos personalizados:', e);
            customTitles = {};
        }
    }
}

function saveCustomTitles() {
    localStorage.setItem('customTitles', JSON.stringify(customTitles));
}

function toggleEditTitle(dayNumber) {
    const display = document.getElementById(`titleDisplay-${dayNumber}`);
    const edit = document.getElementById(`titleEdit-${dayNumber}`);
    display.style.display = 'none';
    edit.style.display = 'block';
    document.getElementById(`titleText-${dayNumber}`).focus();
}

function saveTitle(dayNumber) {
    const text = document.getElementById(`titleText-${dayNumber}`).value.trim();

    if (!text) {
        delete customTitles[dayNumber];
        saveCustomTitles();
        openDayModal(dayNumber);
        renderDaysList();
        return;
    }

    customTitles[dayNumber] = text;
    saveCustomTitles();
    openDayModal(dayNumber);
    renderDaysList();
}

function cancelEditTitle(dayNumber) {
    const display = document.getElementById(`titleDisplay-${dayNumber}`);
    const edit = document.getElementById(`titleEdit-${dayNumber}`);
    display.style.display = 'block';
    edit.style.display = 'none';
}

function loadCustomTransports() {
    const saved = localStorage.getItem('customTransports');
    if (saved) {
        try {
            customTransports = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar transportes personalizados:', e);
            customTransports = {};
        }
    }
}

function saveCustomTransports() {
    localStorage.setItem('customTransports', JSON.stringify(customTransports));
}

function toggleEditTransport(dayNumber) {
    const display = document.getElementById(`transportDisplay-${dayNumber}`);
    const edit = document.getElementById(`transportEdit-${dayNumber}`);
    display.style.display = 'none';
    edit.style.display = 'block';
    document.getElementById(`transportText-${dayNumber}`).focus();
}

function saveTransport(dayNumber) {
    const text = document.getElementById(`transportText-${dayNumber}`).value.trim();

    if (!text) {
        delete customTransports[dayNumber];
        saveCustomTransports();
        openDayModal(dayNumber);
        renderDaysList();
        return;
    }

    customTransports[dayNumber] = text;
    saveCustomTransports();
    openDayModal(dayNumber);
    renderDaysList();
}

function cancelEditTransport(dayNumber) {
    const display = document.getElementById(`transportDisplay-${dayNumber}`);
    const edit = document.getElementById(`transportEdit-${dayNumber}`);
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

function loadCustomAccommodationLocations() {
    const saved = localStorage.getItem('customAccommodationLocations');
    if (saved) {
        try {
            customAccommodationLocations = JSON.parse(saved);
        } catch (e) {
            console.error('Erro ao carregar locais da dormida:', e);
            customAccommodationLocations = {};
        }
    }
}

function saveCustomAccommodationLocations() {
    localStorage.setItem('customAccommodationLocations', JSON.stringify(customAccommodationLocations));
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

function showAddAccommodationLocationForm(dayNumber) {
    const form = document.getElementById(`accommodationLocationForm-${dayNumber}`);
    form.style.display = 'block';
    document.getElementById(`accLocName-${dayNumber}`).focus();
}

function hideAddAccommodationLocationForm(dayNumber) {
    const form = document.getElementById(`accommodationLocationForm-${dayNumber}`);
    form.style.display = 'none';
    document.getElementById(`accLocName-${dayNumber}`).value = '';
    document.getElementById(`accLocUrl-${dayNumber}`).value = '';
    document.getElementById(`accLocNotes-${dayNumber}`).value = '';
}

function saveAccommodationLocation(dayNumber) {
    const name = document.getElementById(`accLocName-${dayNumber}`).value.trim();
    const url = document.getElementById(`accLocUrl-${dayNumber}`).value.trim();
    const notes = document.getElementById(`accLocNotes-${dayNumber}`).value.trim();

    if (!name) {
        alert('Por favor, insere o nome do local!');
        return;
    }

    if (!customAccommodationLocations[dayNumber]) {
        customAccommodationLocations[dayNumber] = [];
    }

    customAccommodationLocations[dayNumber].push({
        name: name,
        url: url || null,
        notes: notes || null,
        addedAt: new Date().toISOString()
    });

    saveCustomAccommodationLocations();
    openDayModal(dayNumber);
}

function removeAccommodationLocation(dayNumber, index) {
    if (!confirm('Tens a certeza que queres remover este local da dormida?')) {
        return;
    }

    customAccommodationLocations[dayNumber].splice(index, 1);

    if (customAccommodationLocations[dayNumber].length === 0) {
        delete customAccommodationLocations[dayNumber];
    }

    saveCustomAccommodationLocations();
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
    const accommodationLocs = customAccommodationLocations[dayNumber] || [];
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

    // Add extra accommodation-linked locations
    accommodationLocs.forEach((loc, index) => {
        let coords = null;

        if (loc.url && loc.url.includes('google.com/maps')) {
            const coordsMatch = loc.url.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);
            if (coordsMatch) {
                coords = {
                    lat: parseFloat(coordsMatch[1]),
                    lng: parseFloat(coordsMatch[2])
                };
            }
        }

        if (!coords) {
            coords = {
                lat: day.coordinates.lat + 0.007 + (index * 0.001),
                lng: day.coordinates.lng + 0.007 + (index * 0.001)
            };
        }

        locations.push({
            name: loc.name,
            url: loc.url || day.links.maps,
            lat: coords.lat,
            lng: coords.lng,
            type: 'accommodation-location',
            notes: loc.notes,
            accommodationIndex: index
        });
    });
    
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
