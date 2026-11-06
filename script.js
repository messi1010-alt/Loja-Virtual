// CATÁLOGO DE ESTOQUE DE PRODUTOS VARIADOS
const INITIAL_PRODUCTS = [
    // PERFUMES
    {
        id: 'prod-p1',
        name: 'Perfume Eau de Parfum Rose Intense 100ml',
        category: 'Perfumes',
        price: 389.00,
        oldPrice: 459.00,
        stock: 20,
        rating: 4.9,
        reviewsCount: 118,
        featured: true,
        badge: 'Mais Vendido',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80',
        description: 'Fragrância marcante com notas de Rosa Damascena, Baunilha de Madagascar e Fava Tonka. Fixação de até 12 horas.',
        olfactiveNotes: { top: 'Pimenta Rosa e Bergamota', heart: 'Rosa Damascena e Jasmim', base: 'Baunilha e Âmbar' }
    },
    {
        id: 'prod-p2',
        name: 'Perfume Black Amber Eau de Toilette 100ml',
        category: 'Perfumes',
        price: 329.00,
        oldPrice: 399.00,
        stock: 12,
        rating: 4.8,
        reviewsCount: 67,
        featured: true,
        badge: 'Oferta',
        image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
        description: 'Amadeirado oriental com notas de Couro Escuro, Cardamomo e Âmbar.',
        olfactiveNotes: { top: 'Cardamomo e Menta', heart: 'Lavanda e Couro', base: 'Âmbar e Cedro' }
    },
    {
        id: 'prod-p3',
        name: 'Perfume Citrus Splash Unissex 75ml',
        category: 'Perfumes',
        price: 249.00,
        oldPrice: 299.00,
        stock: 18,
        rating: 4.7,
        reviewsCount: 45,
        featured: false,
        badge: 'Novidade',
        image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=600&q=80',
        description: 'Fragrância refrescante com acordes de limão siciliano, capim-limão e almiscar.',
        olfactiveNotes: { top: 'Limão Siciliano', heart: 'Manjericão', base: 'Almiscar Branco' }
    },
    {
        id: 'prod-p4',
        name: 'Perfume Bleu Marine Eau de Parfum 100ml',
        category: 'Perfumes',
        price: 349.00,
        oldPrice: 419.00,
        stock: 15,
        rating: 4.9,
        reviewsCount: 78,
        featured: true,
        badge: 'Destaque',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=600&q=80',
        description: 'Fragrância aquática e amadeirada com notas marinhas, sândalo e alecrim.',
        olfactiveNotes: { top: 'Notas Marinhas e Bergamota', heart: 'Alecrim e Gerânio', base: 'Sândalo e Patchouli' }
    },

    // COSMÉTICOS
    {
        id: 'prod-c1',
        name: 'Sérum Facial Antioxidante Vitamina C 30ml',
        category: 'Cosméticos',
        price: 129.90,
        oldPrice: 159.90,
        stock: 35,
        rating: 4.8,
        reviewsCount: 94,
        featured: true,
        badge: 'Vegano',
        image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
        description: 'Uniformiza o tom da pele e devolve a luminosidade natural. Absorção rápida.',
        skinType: 'Todos os tipos de pele'
    },
    {
        id: 'prod-c2',
        name: 'Batom Matte Longa Duração Red Velvet',
        category: 'Cosméticos',
        price: 59.90,
        oldPrice: 79.90,
        stock: 40,
        rating: 4.6,
        reviewsCount: 88,
        featured: false,
        badge: null,
        image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80',
        description: 'Pigmentação intensa com efeito aveludado e Manteiga de Karité.'
    },
    {
        id: 'prod-c3',
        name: 'Hidratante Corporal Amêndoas & Mel 400ml',
        category: 'Cosméticos',
        price: 79.90,
        oldPrice: 99.90,
        stock: 25,
        rating: 4.9,
        reviewsCount: 52,
        featured: false,
        badge: 'Hidratação 48h',
        image: 'https://images.unsplash.com/photo-1608248597359-9d748f3388a1?auto=format&fit=crop&w=600&q=80',
        description: 'Nutrição profunda para peles secas com óleo de amêndoas doces.'
    },

    // VESTUÁRIO (INCLUINDO CAMISAS DE FUTEBOL)
    {
        id: 'prod-v1',
        name: 'Camisa Oficial Flamengo I Rubro-Negra',
        category: 'Vestuário',
        price: 349.90,
        oldPrice: 399.90,
        stock: 30,
        rating: 4.9,
        reviewsCount: 215,
        featured: true,
        badge: 'Mais Vendido',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80',
        description: 'Camisa oficial de jogo do Manto Rubro-Negro. Tecnologia de alta respirabilidade.',
        sizes: ['P', 'M', 'G', 'GG']
    },
    {
        id: 'prod-v2',
        name: 'Camisa Oficial Palmeiras I Alviverde',
        category: 'Vestuário',
        price: 349.90,
        oldPrice: 399.90,
        stock: 25,
        rating: 4.9,
        reviewsCount: 180,
        featured: true,
        badge: 'Destaque',
        image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80',
        description: 'Manto oficial do Verdão. Tecido leve e acabamento premium com escudo bordado.',
        sizes: ['P', 'M', 'G', 'GG']
    },
    {
        id: 'prod-v3',
        name: 'Camisa Oficial Corinthians I Alvinegra',
        category: 'Vestuário',
        price: 349.90,
        oldPrice: 399.90,
        stock: 28,
        rating: 4.9,
        reviewsCount: 195,
        featured: true,
        badge: 'Lançamento',
        image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80',
        description: 'Manto do Timão com o clássico design alvinegro. Conforto total para torcer.',
        sizes: ['P', 'M', 'G', 'GG']
    },
    {
        id: 'prod-v4',
        name: 'Camisa Social Slim Fit Algodão Egípcio',
        category: 'Vestuário',
        price: 189.90,
        oldPrice: 229.90,
        stock: 22,
        rating: 4.8,
        reviewsCount: 61,
        featured: false,
        badge: 'Clássico',
        image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=600&q=80',
        description: 'Conforto e elegância para o dia a dia corporativo.',
        sizes: ['P', 'M', 'G', 'GG']
    },
    {
        id: 'prod-v5',
        name: 'Camisa Oficial Real Madrid I Branca',
        category: 'Vestuário',
        price: 359.90,
        oldPrice: 399.90,
        stock: 20,
        rating: 4.9,
        reviewsCount: 150,
        featured: true,
        badge: 'Importado',
        image: 'https://images.unsplash.com/photo-1518063319789-7217ed6e2934?auto=format&fit=crop&w=600&q=80',
        description: 'Manto sagrado merengue com detalhes dourados. Alta tecnologia de absorção de suor.',
        sizes: ['P', 'M', 'G', 'GG']
    },

    // ELETRÔNICOS
    {
        id: 'prod-e1',
        name: 'Smartphone Galaxy S23 FE 128GB 5G',
        category: 'Eletrônicos',
        price: 2699.00,
        oldPrice: 3499.00,
        stock: 14,
        rating: 4.8,
        reviewsCount: 142,
        featured: true,
        badge: 'Oferta Relâmpago',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=600&q=80',
        description: 'Processador de última geração, câmera tripla e tela AMOLED 120Hz.'
    },
    {
        id: 'prod-e2',
        name: 'Fone de Ouvido Bluetooth Noise Cancelling',
        category: 'Eletrônicos',
        price: 1499.90,
        oldPrice: 1899.00,
        stock: 8,
        rating: 4.9,
        reviewsCount: 89,
        featured: true,
        badge: 'Mais Vendido',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
        description: 'Cancelamento de ruído ativo HD e bateria para até 30 horas.'
    },
    {
        id: 'prod-e3',
        name: 'Smartwatch Pro Series 8 GPS Sport',
        category: 'Eletrônicos',
        price: 899.00,
        oldPrice: 1199.00,
        stock: 10,
        rating: 4.8,
        reviewsCount: 64,
        featured: true,
        badge: 'Lançamento',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80',
        description: 'Monitoramento cardíaco avançado, GPS integrado e resistência à água de até 50 metros.'
    }
];

const INITIAL_COUPONS = {
    'NUVORA10': { type: 'percent', value: 10, minOrder: 100 },
    'PROMO15': { type: 'percent', value: 15, minOrder: 250 },
    'FRETEGRATIS': { type: 'shipping', value: 0, minOrder: 0 }
};

let state = {
    storeName: localStorage.getItem('nuv_storeName') || 'NUVORA',
    products: JSON.parse(localStorage.getItem('nuv_products')) || INITIAL_PRODUCTS,
    cart: JSON.parse(localStorage.getItem('nuv_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('nuv_wishlist')) || [],
    compareList: JSON.parse(localStorage.getItem('nuv_compareList')) || [],
    orders: JSON.parse(localStorage.getItem('nuv_orders')) || [],
    coupons: JSON.parse(localStorage.getItem('nuv_coupons')) || INITIAL_COUPONS,
    theme: localStorage.getItem('nuv_theme') || 'default',
    appliedCoupon: null,
    shippingCost: 0,
    shippingCep: '',
    currentView: 'home',
    selectedProductId: null,
    selectedSize: null,
    searchQuery: '',
    selectedCategory: 'Todos',
    userRole: localStorage.getItem('nuv_userRole') || 'client'
};

function saveState() {
    localStorage.setItem('nuv_storeName', state.storeName);
    localStorage.setItem('nuv_products', JSON.stringify(state.products));
    localStorage.setItem('nuv_cart', JSON.stringify(state.cart));
    localStorage.setItem('nuv_wishlist', JSON.stringify(state.wishlist));
    localStorage.setItem('nuv_compareList', JSON.stringify(state.compareList));
    localStorage.setItem('nuv_orders', JSON.stringify(state.orders));
    localStorage.setItem('nuv_coupons', JSON.stringify(state.coupons));
    localStorage.setItem('nuv_theme', state.theme);
    localStorage.setItem('nuv_userRole', state.userRole);
    updateBadges();
}

function updateBadges() {
    const cartBadge = document.getElementById('cart-count-badge');
    const totalQty = state.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartBadge) {
        if (totalQty > 0) {
            cartBadge.textContent = totalQty;
            cartBadge.classList.remove('hidden');
        } else {
            cartBadge.classList.add('hidden');
        }
    }

    const wishBadge = document.getElementById('wishlist-count-badge');
    if (wishBadge) {
        if (state.wishlist.length > 0) {
            wishBadge.textContent = state.wishlist.length;
            wishBadge.classList.remove('hidden');
        } else {
            wishBadge.classList.add('hidden');
        }
    }

    const compBadge = document.getElementById('compare-count-badge');
    if (compBadge) {
        if (state.compareList.length > 0) {
            compBadge.textContent = state.compareList.length;
            compBadge.classList.remove('hidden');
        } else {
            compBadge.classList.add('hidden');
        }
    }
}

function formatBRL(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function setTheme(theme) {
    state.theme = theme;
    saveState();
    applyTheme();
    showToast('Tema alterado com sucesso!');
}

function applyTheme() {
    const root = document.documentElement;
    root.removeAttribute('data-theme');
    root.classList.remove('dark');

    if (state.theme === 'dark') {
        root.classList.add('dark');
        root.setAttribute('data-theme', 'dark');
    } else if (state.theme !== 'default') {
        root.setAttribute('data-theme', state.theme);
    }
}

function initTheme() {
    applyTheme();
}

function showToast(message) {
    const toast = document.getElementById('toast');
    const msgEl = document.getElementById('toast-message');
    if (toast && msgEl) {
        msgEl.textContent = message;
        toast.classList.remove('translate-y-20', 'opacity-0');
        setTimeout(() => {
            toast.classList.add('translate-y-20', 'opacity-0');
        }, 3000);
    }
}

function navigateTo(view, param = null) {
    if (view === 'admin' && state.userRole !== 'admin') {
        showToast('Acesso negado! Faça login como administrador.');
        openLoginModal();
        return;
    }

    state.currentView = view;
    if (param) state.selectedProductId = param;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// SISTEMA DE LOGIN E CONTROLE DE PERMISSÃO
function openLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
}

function closeLoginModal() {
    document.getElementById('login-modal').classList.add('hidden');
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const pass = document.getElementById('login-pass').value;

    if (email === 'admin@nuvora.com' && pass === 'admin123') {
        state.userRole = 'admin';
        saveState();
        closeLoginModal();
        showToast('Login de Administrador efetuado com sucesso! 🛡️');
        navigateTo('admin');
    } else {
        state.userRole = 'client';
        saveState();
        closeLoginModal();
        showToast('Login de Cliente efetuado com sucesso! 👋');
        navigateTo('home');
    }
}

function logoutUser() {
    state.userRole = 'client';
    saveState();
    showToast('Você saiu da conta administrativa.');
    navigateTo('home');
}

function toggleWishlist(productId) {
    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast('Removido dos favoritos.');
    } else {
        state.wishlist.push(productId);
        showToast('Adicionado aos favoritos! ❤️');
    }
    saveState();
    renderApp();
}

function toggleCompare(productId) {
    const index = state.compareList.indexOf(productId);
    if (index > -1) {
        state.compareList.splice(index, 1);
        showToast('Removido da comparação.');
    } else {
        if (state.compareList.length >= 3) {
            showToast('Você pode comparar até 3 produtos por vez.');
            return;
        }
        state.compareList.push(productId);
        showToast('Adicionado à comparação!');
    }
    saveState();
    renderApp();
}

function openCompareModal() {
    if (state.compareList.length === 0) {
        showToast('Adicione produtos para comparar.');
        return;
    }
    const modal = document.getElementById('compare-modal');
    const container = document.getElementById('compare-content');
    
    const comparedProds = state.compareList.map(id => state.products.find(p => p.id === id)).filter(Boolean);

    container.innerHTML = comparedProds.map(p => `
        <div class="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-3">
            <div>
                <img src="${p.image}" onerror="this.src='https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'" class="w-full h-32 object-cover rounded-xl mb-2" alt="${p.name}">
                <span class="text-[10px] font-bold text-brand-600">${p.category}</span>
                <h4 class="font-bold text-xs text-slate-900 dark:text-white line-clamp-2">${p.name}</h4>
                <div class="text-base font-black text-slate-900 dark:text-white mt-2">${formatBRL(p.price)}</div>
            </div>
            <div class="text-xs space-y-1 text-slate-500 pt-2 border-t border-slate-200 dark:border-slate-700">
                <div><strong>Estoque:</strong> ${p.stock} un</div>
                <div><strong>Avaliação:</strong> ⭐ ${p.rating} / 5</div>
            </div>
            <button onclick="addToCart('${p.id}')" class="w-full bg-brand-600 text-white font-bold text-xs py-2 rounded-xl">Adicionar ao Carrinho</button>
        </div>
    `).join('');

    modal.classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
}

function closeCompareModal() {
    document.getElementById('compare-modal').classList.add('hidden');
}

function openSizeGuideModal() {
    document.getElementById('size-guide-modal').classList.remove('hidden');
    if (window.lucide) lucide.createIcons();
}

function closeSizeGuideModal() {
    document.getElementById('size-guide-modal').classList.add('hidden');
}

// BUSCA AVANÇADA E FILTRAGEM EM TEMPO REAL
function handleSearchInput(val) {
    const query = val.trim().toLowerCase();
    const suggestions = document.getElementById('search-suggestions');
    if (!suggestions) return;
    
    if (query.length < 1) {
        suggestions.classList.add('hidden');
        return;
    }

    const matches = state.products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
    ).slice(0, 6);

    if (matches.length > 0) {
        suggestions.innerHTML = matches.map(p => `
            <div onclick="navigateTo('product', '${p.id}'); document.getElementById('search-suggestions').classList.add('hidden')" class="flex items-center gap-3 p-2.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer transition">
                <img src="${p.image}" onerror="this.src='https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'" class="w-10 h-10 object-cover rounded-lg border border-slate-200 dark:border-slate-700" alt="${p.name}">
                <div class="flex-1 min-w-0">
                    <div class="text-xs font-bold text-slate-900 dark:text-white truncate">${p.name}</div>
                    <div class="text-[10px] text-brand-600 font-semibold">${formatBRL(p.price)} • <span class="text-slate-400">${p.category}</span></div>
                </div>
            </div>
        `).join('');
        suggestions.classList.remove('hidden');
    } else {
        suggestions.innerHTML = `<div class="text-xs text-slate-400 p-3 text-center">Nenhum produto encontrado para "${val}".</div>`;
        suggestions.classList.remove('hidden');
    }
}

function handleSearch(val) {
    state.searchQuery = val.trim();
    if (state.currentView !== 'catalog') {
        navigateTo('catalog');
    } else {
        renderCatalogView();
    }
}

function filterByCategory(cat) {
    state.selectedCategory = cat;
    state.searchQuery = '';
    if (state.currentView !== 'catalog') {
        navigateTo('catalog');
    } else {
        renderCatalogView();
    }
}

// HOME VIEW
function renderHomeView() {
    const featured = state.products.filter(p => p.featured);
    return `
        <div class="space-y-12">
            <div class="relative bg-gradient-to-r from-slate-900 via-brand-900 to-slate-900 rounded-3xl overflow-hidden text-white p-8 sm:p-12 lg:p-16 shadow-2xl flex flex-col justify-center min-h-[420px]">
                <div class="max-w-xl space-y-4">
                    <span class="bg-brand-500/30 text-brand-400 text-xs font-extrabold px-3 py-1 rounded-full border border-brand-500/20">✨ NUVORA MULTIMARCAS</span>
                    <h1 class="text-3xl sm:text-5xl font-extrabold tracking-tight">Perfumes, Beleza, Moda & Eletrônicos</h1>
                    <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">Sua plataforma completa com produtos em estoque e entrega monitorada via GPS para todo o Brasil.</p>
                    <div class="pt-4 flex flex-wrap gap-3">
                        <button onclick="filterByCategory('Perfumes')" class="bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs px-6 py-3.5 rounded-xl shadow-lg transition">Ver Perfumes</button>
                        <button onclick="filterByCategory('Cosméticos')" class="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-6 py-3.5 rounded-xl backdrop-blur transition">Cosméticos</button>
                        <button onclick="filterByCategory('Vestuário')" class="bg-white/10 hover:bg-white/20 text-white font-bold text-xs px-6 py-3.5 rounded-xl backdrop-blur transition">Moda & Futebol</button>
                    </div>
                </div>
            </div>

            <div class="space-y-4">
                <h2 class="text-lg font-bold text-slate-900 dark:text-white">Categorias em Destaque</h2>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div onclick="filterByCategory('Perfumes')" class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-brand-600 cursor-pointer transition shadow-sm group">
                        <i data-lucide="sparkles" class="w-7 h-7 text-brand-600 mx-auto mb-2 group-hover:scale-110 transition"></i>
                        <h3 class="font-bold text-xs text-slate-900 dark:text-white">Perfumes</h3>
                    </div>
                    <div onclick="filterByCategory('Cosméticos')" class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-brand-600 cursor-pointer transition shadow-sm group">
                        <i data-lucide="smile" class="w-7 h-7 text-brand-600 mx-auto mb-2 group-hover:scale-110 transition"></i>
                        <h3 class="font-bold text-xs text-slate-900 dark:text-white">Cosméticos</h3>
                    </div>
                    <div onclick="filterByCategory('Vestuário')" class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-brand-600 cursor-pointer transition shadow-sm group">
                        <i data-lucide="shirt" class="w-7 h-7 text-brand-600 mx-auto mb-2 group-hover:scale-110 transition"></i>
                        <h3 class="font-bold text-xs text-slate-900 dark:text-white">Moda & Futebol</h3>
                    </div>
                    <div onclick="filterByCategory('Eletrônicos')" class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 text-center hover:border-brand-600 cursor-pointer transition shadow-sm group">
                        <i data-lucide="smartphone" class="w-7 h-7 text-brand-600 mx-auto mb-2 group-hover:scale-110 transition"></i>
                        <h3 class="font-bold text-xs text-slate-900 dark:text-white">Eletrônicos</h3>
                    </div>
                </div>
            </div>

            <div id="promos" class="space-y-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-lg font-bold text-slate-900 dark:text-white">Destaques NUVORA</h2>
                    <button onclick="navigateTo('catalog')" class="text-xs font-bold text-brand-600 hover:underline">Ver Todos &rarr;</button>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${featured.map(p => renderProductCard(p)).join('')}
                </div>
            </div>
        </div>
    `;
}

// CATALOG VIEW COM BUSCA E FILTROS COMPLETOS
function renderCatalogView() {
    let prods = [...state.products];

    if (state.selectedCategory && state.selectedCategory !== 'Todos') {
        prods = prods.filter(p => p.category.toLowerCase() === state.selectedCategory.toLowerCase());
    }

    if (state.searchQuery && state.searchQuery.length > 0) {
        const q = state.searchQuery.toLowerCase();
        prods = prods.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.category.toLowerCase().includes(q) ||
            (p.description && p.description.toLowerCase().includes(q))
        );
    }

    return `
        <div class="space-y-8">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
                <div>
                    <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Catálogo de Produtos</h1>
                    <p class="text-xs text-slate-500">Exibindo ${prods.length} item(ns) disponíveis no estoque</p>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                    <select onchange="state.selectedCategory = this.value; renderCatalogView()" class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold rounded-xl px-3 py-2.5 shadow-sm text-slate-700 dark:text-slate-200 focus:ring-2 focus:ring-brand-600">
                        <option value="Todos" ${state.selectedCategory === 'Todos' ? 'selected' : ''}>Todas as Categorias</option>
                        <option value="Perfumes" ${state.selectedCategory === 'Perfumes' ? 'selected' : ''}>Perfumes</option>
                        <option value="Cosméticos" ${state.selectedCategory === 'Cosméticos' ? 'selected' : ''}>Cosméticos</option>
                        <option value="Vestuário" ${state.selectedCategory === 'Vestuário' ? 'selected' : ''}>Vestuário & Futebol</option>
                        <option value="Eletrônicos" ${state.selectedCategory === 'Eletrônicos' ? 'selected' : ''}>Eletrônicos</option>
                    </select>

                    ${state.searchQuery ? `
                        <button onclick="state.searchQuery=''; renderCatalogView()" class="text-xs bg-slate-200 dark:bg-slate-800 px-3 py-2 rounded-xl font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-300">
                            Limpar Busca ("${state.searchQuery}") ✕
                        </button>
                    ` : ''}
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${prods.length > 0 ? prods.map(p => renderProductCard(p)).join('') : `
                    <div class="col-span-full text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
                        <i data-lucide="search-x" class="w-12 h-12 text-slate-400 mx-auto"></i>
                        <h3 class="text-base font-bold text-slate-900 dark:text-white">Nenhum produto encontrado</h3>
                        <p class="text-xs text-slate-400">Tente buscar por outro termo ou selecione "Todas as Categorias".</p>
                        <button onclick="state.selectedCategory='Todos'; state.searchQuery=''; renderCatalogView()" class="mt-2 bg-brand-600 text-white text-xs font-bold px-4 py-2 rounded-xl shadow">Ver Todos os Produtos</button>
                    </div>
                `}
            </div>
        </div>
    `;
}

// WISHLIST VIEW
function renderWishlistView() {
    const favProds = state.wishlist.map(id => state.products.find(p => p.id === id)).filter(Boolean);

    return `
        <div class="space-y-8">
            <div class="border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <i data-lucide="heart" class="text-rose-500 fill-rose-500"></i> Meus Favoritos
                </h1>
                <p class="text-xs text-slate-500">Você tem ${favProds.length} item(ns) salvos em sua lista</p>
            </div>

            ${favProds.length > 0 ? `
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${favProds.map(p => renderProductCard(p)).join('')}
                </div>
            ` : `
                <div class="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <i data-lucide="heart-off" class="w-12 h-12 text-slate-300 mx-auto"></i>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Sua lista de favoritos está vazia</h2>
                    <p class="text-xs text-slate-400">Clique no ícone de coração nos produtos para guardar seus itens desejados.</p>
                    <button onclick="navigateTo('catalog')" class="bg-brand-600 text-white text-xs font-bold px-6 py-3 rounded-xl">Explorar Catálogo</button>
                </div>
            `}
        </div>
    `;
}

function renderProductCard(product) {
    const isFav = state.wishlist.includes(product.id);
    const isCompared = state.compareList.includes(product.id);

    return `
        <div class="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group">
            <div class="relative aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
                ${product.badge ? `<span class="absolute top-3 left-3 z-10 bg-slate-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">${product.badge}</span>` : ''}
                
                <div class="absolute top-3 right-3 z-10 flex flex-col gap-2">
                    <button onclick="toggleWishlist('${product.id}')" aria-label="Adicionar aos favoritos" class="p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur text-slate-700 dark:text-slate-200 hover:text-rose-500 shadow transition">
                        <i data-lucide="heart" class="w-4 h-4 ${isFav ? 'text-rose-500 fill-rose-500' : ''}"></i>
                    </button>
                    <button onclick="toggleCompare('${product.id}')" aria-label="Adicionar à comparação" class="p-2 rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur text-slate-700 dark:text-slate-200 hover:text-brand-600 shadow transition">
                        <i data-lucide="arrow-left-right" class="w-4 h-4 ${isCompared ? 'text-brand-600 font-bold' : ''}"></i>
                    </button>
                </div>

                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                <button onclick="navigateTo('product', '${product.id}')" class="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span class="bg-white text-slate-900 font-bold text-xs px-4 py-2 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition">Ver Detalhes</span>
                </button>
            </div>

            <div class="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                    <span class="text-[10px] font-bold text-brand-600 tracking-wide uppercase">${product.category}</span>
                    <h3 class="font-bold text-slate-900 dark:text-slate-100 text-xs line-clamp-2 mt-1 hover:text-brand-600 cursor-pointer" onclick="navigateTo('product', '${product.id}')">
                        ${product.name}
                    </h3>
                    <div class="flex items-center gap-1 mt-2 text-amber-400">
                        <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400"></i>
                        <span class="text-xs font-semibold text-slate-700 dark:text-slate-300">${product.rating}</span>
                        <span class="text-[10px] text-slate-400">(${product.reviewsCount || 0})</span>
                    </div>
                </div>

                <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between gap-2">
                    <div>
                        ${product.oldPrice ? `<span class="text-[11px] text-slate-400 line-through">${formatBRL(product.oldPrice)}</span>` : ''}
                        <div class="text-base font-extrabold text-slate-900 dark:text-white">${formatBRL(product.price)}</div>
                        <span class="text-[9px] text-emerald-600 dark:text-emerald-400 font-bold">Estoque: ${product.stock} un</span>
                    </div>

                    <button onclick="addToCart('${product.id}')" aria-label="Adicionar ao carrinho" class="bg-slate-100 dark:bg-slate-800 hover:bg-brand-600 hover:text-white text-slate-800 dark:text-slate-200 p-2.5 rounded-xl transition shadow-sm active:scale-95">
                        <i data-lucide="shopping-cart" class="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function renderProductDetailView() {
    const product = state.products.find(p => p.id === state.selectedProductId);
    if (!product) return `<div class="text-center py-12">Produto não encontrado.</div>`;

    return `
        <div class="space-y-10">
            <button onclick="navigateTo('catalog')" class="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-brand-600">
                <i data-lucide="arrow-left" class="w-4 h-4"></i> Voltar ao Catálogo
            </button>

            <div class="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div class="aspect-square bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                    <img src="${product.image}" alt="${product.name}" onerror="this.src='https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'" class="w-full h-full object-cover">
                </div>

                <div class="flex flex-col justify-between space-y-6">
                    <div class="space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold text-brand-600 uppercase bg-brand-50 dark:bg-slate-800 px-3 py-1 rounded-full">${product.category}</span>
                            <span class="text-xs font-semibold ${product.stock > 0 ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'} px-3 py-1 rounded-full">
                                ${product.stock > 0 ? `Estoque disponível: ${product.stock} un` : 'Esgotado'}
                            </span>
                        </div>

                        <h1 class="text-2xl font-bold text-slate-900 dark:text-white">${product.name}</h1>
                        <p class="text-xs text-slate-500 leading-relaxed">${product.description}</p>

                        ${product.olfactiveNotes ? `
                            <div class="bg-amber-50/50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-amber-200/50 dark:border-slate-700 space-y-1 text-xs">
                                <span class="font-bold text-amber-800 dark:text-amber-400">Pirâmide Olfativa:</span>
                                <div class="text-[11px] text-slate-600 dark:text-slate-300"><strong>Topo:</strong> ${product.olfactiveNotes.top}</div>
                                <div class="text-[11px] text-slate-600 dark:text-slate-300"><strong>Coração:</strong> ${product.olfactiveNotes.heart}</div>
                                <div class="text-[11px] text-slate-600 dark:text-slate-300"><strong>Fundo:</strong> ${product.olfactiveNotes.base}</div>
                            </div>
                        ` : ''}

                        ${product.sizes ? `
                            <div class="space-y-2 pt-2">
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-bold text-slate-800 dark:text-slate-200">Tamanho:</span>
                                    <button onclick="openSizeGuideModal()" class="text-[11px] text-brand-600 font-bold hover:underline flex items-center gap-1">
                                        <i data-lucide="ruler" class="w-3.5 h-3.5"></i> Tabela de Medidas
                                    </button>
                                </div>
                                <div class="flex gap-2">
                                    ${product.sizes.map(s => `
                                        <button onclick="state.selectedSize='${s}'; renderProductDetailView()" class="px-4 py-2 rounded-xl text-xs font-bold border ${state.selectedSize === s ? 'bg-brand-600 text-white border-brand-600' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}">
                                            ${s}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                    </div>

                    <div class="bg-slate-50 dark:bg-slate-800 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-700 space-y-3">
                        ${product.oldPrice ? `<span class="text-xs text-slate-400 line-through">De: ${formatBRL(product.oldPrice)}</span>` : ''}
                        <div class="text-3xl font-black text-slate-900 dark:text-white">${formatBRL(product.price)}</div>
                        <div class="text-xs text-emerald-600 dark:text-emerald-400 font-bold">10% OFF no PIX: ${formatBRL(product.price * 0.9)}</div>
                    </div>

                    <button onclick="addToCartFromDetail('${product.id}')" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-lg transition flex items-center justify-center gap-2">
                        <i data-lucide="shopping-bag" class="w-4 h-4"></i> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `;
}

function addToCart(productId, qty = 1) {
    const product = state.products.find(p => p.id === productId);
    if (!product || product.stock <= 0) {
        showToast('Produto esgotado!');
        return;
    }
    const cartItem = state.cart.find(item => item.id === productId);
    if (cartItem) {
        if (cartItem.quantity + qty > product.stock) {
            showToast('Limite de estoque atingido!');
            return;
        }
        cartItem.quantity += qty;
    } else {
        state.cart.push({ ...product, quantity: qty });
    }
    saveState();
    showToast('Produto adicionado ao carrinho! 🛒');
}

function addToCartFromDetail(productId) {
    addToCart(productId, 1);
}

function updateCartQty(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            state.cart = state.cart.filter(i => i.id !== productId);
        }
        saveState();
        renderApp();
    }
}

function removeFromCart(productId) {
    state.cart = state.cart.filter(i => i.id !== productId);
    saveState();
    renderApp();
    showToast('Item removido do carrinho.');
}

function renderCartView() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + (state.shippingCost || 0);

    return `
        <div class="space-y-8">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Carrinho de Compras</h1>

            ${state.cart.length > 0 ? `
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-2 space-y-4">
                        ${state.cart.map(item => `
                            <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
                                <img src="${item.image}" onerror="this.src='https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'" class="w-16 h-16 object-cover rounded-xl" alt="${item.name}">
                                <div class="flex-1">
                                    <h3 class="font-bold text-xs text-slate-900 dark:text-white">${item.name}</h3>
                                    <div class="text-xs font-black text-brand-600 mt-1">${formatBRL(item.price)}</div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button onclick="updateCartQty('${item.id}', -1)" aria-label="Diminuir quantidade" class="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg"><i data-lucide="minus" class="w-3.5 h-3.5"></i></button>
                                    <span class="text-xs font-bold w-6 text-center">${item.quantity}</span>
                                    <button onclick="updateCartQty('${item.id}', 1)" aria-label="Aumentar quantidade" class="p-1.5 bg-slate-100 dark:bg-slate-800 rounded-lg"><i data-lucide="plus" class="w-3.5 h-3.5"></i></button>
                                </div>
                                <button onclick="removeFromCart('${item.id}')" aria-label="Remover item do carrinho" class="text-rose-500 p-2"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                            </div>
                        `).join('')}
                    </div>

                    <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6 h-fit">
                        <h3 class="font-bold text-slate-900 dark:text-white text-sm">Resumo do Pedido</h3>
                        
                        <div class="space-y-2 text-xs border-t border-slate-100 dark:border-slate-800 pt-4">
                            <div class="flex justify-between"><span>Subtotal</span> <span>${formatBRL(subtotal)}</span></div>
                            <div class="flex justify-between font-extrabold text-sm text-slate-900 dark:text-white pt-2 border-t border-slate-100 dark:border-slate-800">
                                <span>Total</span> <span>${formatBRL(total)}</span>
                            </div>
                        </div>

                        <button onclick="navigateTo('checkout')" class="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3.5 rounded-xl shadow-lg transition">Ir para o Checkout</button>
                    </div>
                </div>
            ` : `
                <div class="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
                    <i data-lucide="shopping-cart" class="w-12 h-12 text-slate-300 mx-auto"></i>
                    <h2 class="text-xl font-bold text-slate-900 dark:text-white">Seu carrinho está vazio</h2>
                    <button onclick="navigateTo('catalog')" class="bg-brand-600 text-white text-xs font-bold px-6 py-3 rounded-xl">Explorar Catálogo</button>
                </div>
            `}
        </div>
    `;
}

function renderCheckoutView() {
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 15.00;

    return `
        <div class="max-w-3xl mx-auto space-y-8">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Finalizar Compra</h1>

            <form onsubmit="completeOrder(event)" class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
                <h3 class="font-bold text-slate-900 dark:text-white text-sm border-b pb-3">Endereço de Entrega para Rastreamento GPS</h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" required placeholder="Nome Completo" class="bg-slate-100 dark:bg-slate-800 border-0 p-3 rounded-xl text-xs">
                    <input type="text" required placeholder="CPF" class="bg-slate-100 dark:bg-slate-800 border-0 p-3 rounded-xl text-xs">
                    <input type="text" required placeholder="Rua, Número e Bairro" class="bg-slate-100 dark:bg-slate-800 border-0 p-3 rounded-xl text-xs sm:col-span-2">
                    <input type="text" required placeholder="Cidade" class="bg-slate-100 dark:bg-slate-800 border-0 p-3 rounded-xl text-xs">
                    <input type="text" required placeholder="CEP" class="bg-slate-100 dark:bg-slate-800 border-0 p-3 rounded-xl text-xs">
                </div>

                <h3 class="font-bold text-slate-900 dark:text-white text-sm border-b pb-3 pt-4">Pagamento</h3>
                <div class="grid grid-cols-2 gap-4">
                    <label class="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border cursor-pointer flex items-center gap-3">
                        <input type="radio" name="payment" value="pix" checked class="text-brand-600">
                        <div>
                            <div class="font-bold text-xs">PIX Instantâneo</div>
                            <div class="text-[10px] text-emerald-600">10% OFF</div>
                        </div>
                    </label>
                    <label class="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border cursor-pointer flex items-center gap-3">
                        <input type="radio" name="payment" value="card" class="text-brand-600">
                        <div>
                            <div class="font-bold text-xs">Cartão de Crédito</div>
                            <div class="text-[10px] text-slate-400">Até 12x</div>
                        </div>
                    </label>
                </div>

                <div class="pt-4 border-t flex items-center justify-between">
                    <div>
                        <div class="text-[11px] text-slate-400">Total com Frete GPS:</div>
                        <div class="text-xl font-black text-slate-900 dark:text-white">${formatBRL(total)}</div>
                    </div>
                    <button type="submit" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-8 py-3.5 rounded-xl shadow-lg transition">Confirmar e Rastrear</button>
                </div>
            </form>
        </div>
    `;
}

function completeOrder(e) {
    e.preventDefault();
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + 15.00;

    state.cart.forEach(cartItem => {
        const prod = state.products.find(p => p.id === cartItem.id);
        if (prod) {
            prod.stock = Math.max(0, prod.stock - cartItem.quantity);
        }
    });

    const newOrder = {
        id: 'NUV-' + Math.floor(100000 + Math.random() * 900000),
        date: new Date().toLocaleDateString('pt-BR'),
        total: total,
        status: 'Em Trânsito (Entregador a caminho)',
        etaMinutes: 28,
        progressPercent: 65,
        items: [...state.cart]
    };

    state.orders.unshift(newOrder);
    state.cart = [];
    saveState();
    showToast('🎉 Pedido realizado! Notificação de envio ativada. Acompanhe via GPS.');
    navigateTo('orders');
}

function renderOrdersView() {
    return `
        <div class="max-w-4xl mx-auto space-y-6">
            <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Meus Pedidos & Rastreamento GPS</h1>
            
            ${state.orders.length > 0 ? `
                <div class="space-y-6">
                    ${state.orders.map(o => `
                        <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
                            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b pb-4 border-slate-100 dark:border-slate-800">
                                <div>
                                    <div class="font-bold text-sm text-slate-900 dark:text-white">${o.id}</div>
                                    <div class="text-xs text-slate-400">Data do Pedido: ${o.date}</div>
                                </div>
                                <div class="text-right">
                                    <div class="font-black text-slate-900 dark:text-white text-sm">${formatBRL(o.total)}</div>
                                    <span class="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full inline-block mt-1">${o.status}</span>
                                </div>
                            </div>

                            <div class="bg-slate-900 text-white p-5 rounded-2xl space-y-4">
                                <div class="flex items-center justify-between text-xs">
                                    <span class="font-bold text-emerald-400 flex items-center gap-1">
                                        <i data-lucide="navigation" class="w-4 h-4"></i> GPS de Entrega em Tempo Real
                                    </span>
                                    <span class="text-slate-400">Previsão: <strong>~${o.etaMinutes || 30} minutos</strong></span>
                                </div>

                                <div class="space-y-1">
                                    <div class="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
                                        <div class="bg-emerald-500 h-2.5 rounded-full transition-all duration-1000" style="width: ${o.progressPercent || 50}%"></div>
                                    </div>
                                    <div class="flex justify-between text-[10px] text-slate-400 pt-1">
                                        <span>Centro de Distribuição NUVORA</span>
                                        <span class="text-emerald-400 font-bold">A caminho do seu endereço</span>
                                        <span>Entregue</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            ` : `<div class="text-center py-12 text-xs text-slate-400">Você ainda não possui pedidos em andamento.</div>`}
        </div>
    `;
}

function renderAdminView() {
    if (state.userRole !== 'admin') {
        return `<div class="text-center py-20 text-rose-500 font-bold text-sm">Acesso restrito! Apenas administradores podem visualizar esta página.</div>`;
    }

    return `
        <div class="space-y-6">
            <div class="flex items-center justify-between border-b pb-4">
                <h1 class="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <i data-lucide="shield-check" class="text-amber-500"></i> Painel Administrativo - NUVORA
                </h1>
                <button onclick="logoutUser()" class="bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold px-4 py-2 rounded-xl transition">Sair do Admin</button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border shadow-sm">
                    <div class="text-xs text-slate-400">Itens no Catálogo</div>
                    <div class="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">${state.products.length}</div>
                </div>
                <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border shadow-sm">
                    <div class="text-xs text-slate-400">Pedidos com GPS Ativo</div>
                    <div class="text-2xl font-extrabold text-brand-600 mt-1">${state.orders.length}</div>
                </div>
                <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border shadow-sm">
                    <div class="text-xs text-slate-400">Faturamento Bruto</div>
                    <div class="text-2xl font-extrabold text-emerald-600 mt-1">${formatBRL(state.orders.reduce((sum, o) => sum + o.total, 0))}</div>
                </div>
            </div>

            <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border shadow-sm space-y-4">
                <h2 class="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                    <i data-lucide="plus-circle" class="w-4 h-4 text-brand-600"></i> Cadastrar Novo Produto
                </h2>
                <form onsubmit="saveAdminProduct(event)" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" id="adm-name" required placeholder="Nome do Produto" class="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs">
                    <input type="text" id="adm-category" required placeholder="Categoria (ex: Perfumes, Cosméticos...)" class="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs">
                    <input type="number" step="0.01" id="adm-price" required placeholder="Preço (R$)" class="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs">
                    <input type="number" id="adm-stock" required placeholder="Quantidade em Estoque" class="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs">
                    <input type="url" id="adm-image" required placeholder="URL da Imagem (Ex: https://...)" class="bg-slate-100 dark:bg-slate-800 p-3 rounded-xl text-xs sm:col-span-2">
                    <button type="submit" class="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3 rounded-xl sm:col-span-2 shadow">Salvar Produto na Loja</button>
                </form>
            </div>

            <div class="bg-white dark:bg-slate-900 p-6 rounded-3xl border shadow-sm space-y-4">
                <h2 class="font-bold text-sm text-slate-900 dark:text-white">Gerenciar Estoque em Tempo Real</h2>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-xs">
                        <thead class="bg-slate-50 dark:bg-slate-800 text-slate-400 uppercase">
                            <tr>
                                <th class="p-3">Produto</th>
                                <th class="p-3">Categoria</th>
                                <th class="p-3">Preço</th>
                                <th class="p-3">Qtd em Estoque</th>
                                <th class="p-3 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                            ${state.products.map(p => `
                                <tr>
                                    <td class="p-3 font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <img src="${p.image}" onerror="this.src='https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'" class="w-8 h-8 rounded-lg object-cover" alt="${p.name}"> ${p.name}
                                    </td>
                                    <td class="p-3 text-slate-500">${p.category}</td>
                                    <td class="p-3 font-semibold">${formatBRL(p.price)}</td>
                                    <td class="p-3 font-bold ${p.stock < 10 ? 'text-rose-500' : 'text-emerald-600'}">${p.stock} un</td>
                                    <td class="p-3 text-right">
                                        <button onclick="deleteProduct('${p.id}')" class="text-rose-500 font-bold hover:underline">Remover</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function saveAdminProduct(e) {
    e.preventDefault();
    const price = parseFloat(document.getElementById('adm-price').value);
    const stock = parseInt(document.getElementById('adm-stock').value);

    if (isNaN(price) || price <= 0 || isNaN(stock) || stock < 0) {
        showToast('❌ Por favor, informe um preço e estoque válidos.');
        return;
    }

    const newProd = {
        id: 'prod-' + Date.now(),
        name: document.getElementById('adm-name').value,
        category: document.getElementById('adm-category').value,
        price: price,
        stock: stock,
        image: document.getElementById('adm-image').value,
        rating: 5.0,
        reviewsCount: 1,
        featured: true,
        badge: 'Novo'
    };
    state.products.unshift(newProd);
    saveState();
    renderApp();
    showToast('📦 Produto cadastrado com sucesso!');
}

function deleteProduct(id) {
    state.products = state.products.filter(p => p.id !== id);
    saveState();
    renderApp();
    showToast('Produto removido com sucesso.');
}

function renderApp() {
    const container = document.getElementById('app-container');
    if (!container) return;

    switch (state.currentView) {
        case 'home': container.innerHTML = renderHomeView(); break;
        case 'catalog': container.innerHTML = renderCatalogView(); break;
        case 'product': container.innerHTML = renderProductDetailView(); break;
        case 'cart': container.innerHTML = renderCartView(); break;
        case 'checkout': container.innerHTML = renderCheckoutView(); break;
        case 'orders': container.innerHTML = renderOrdersView(); break;
        case 'wishlist': container.innerHTML = renderWishlistView(); break;
        case 'admin': container.innerHTML = renderAdminView(); break;
        default: container.innerHTML = renderHomeView();
    }
    if (window.lucide) lucide.createIcons();
    updateBadges();
}

window.onload = function() {
    initTheme();
    renderApp();
};
