/**
 * Main Application Logic for CompFast Admin - Lado da Loja
 */

// Initial Seed Data for Instant Usability & LocalStorage Fallback
const SEED_DATA = {
  categories: [
    { id: 'cat-1', name: 'Monitores & Periféricos', icon: 'desktop_windows' },
    { id: 'cat-2', name: 'Hardware & Componentes', icon: 'memory' },
    { id: 'cat-3', name: 'Áudio & Headsets', icon: 'headphones' },
    { id: 'cat-4', name: 'Cadeiras & Ergonomia', icon: 'chair' },
    { id: 'cat-5', name: 'Cabos & Adaptadores', icon: 'cable' }
  ],
  products: [
    {
      id: 'prod-1',
      name: 'Headset Gamer Pro RGB 7.1',
      category_id: 'cat-3',
      description: 'Headset para eSports com som surround 7.1 simulado, driver de 50mm e microfone com cancelamento de ruído.',
      price_sale: 249.90,
      price_orig: 319.90,
      stock_qty: 18,
      sku: 'HDST-RGB-71',
      is_active: true,
      is_featured: true,
      photos: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCwPpavXPHmPnOy9CPjWOYhNHIN3pDemQcrYDZTqpuuneESpXpuDNn1xKioCoOaupnetxbUNNKuZTppxXBJeuVNLRy1wyJMmGuqPwovS_Ga4IcUffPF5vp6RUp0_w-Ad81ESLEDaViLvf4s9jDfTLW1r3Y7b_D4X7kDwYVLS7f3W6o9kTM-2yGZ--bqkzYffbRzIsGqAcT_1-eWWCVOpyfTNDg9KlrqKb1HzR4psy2lQ4Tj_FuARcOC'
      ]
    },
    {
      id: 'prod-2',
      name: 'Monitor Gamer 24" 165Hz IPS',
      category_id: 'cat-1',
      description: 'Painel IPS Full HD de 165Hz e 1ms (MPRT). Compatível com AMD FreeSync e HDR10 ativo.',
      price_sale: 899.90,
      price_orig: 1199.00,
      stock_qty: 14,
      sku: 'MON-G24-165',
      is_active: true,
      is_featured: true,
      photos: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAIwg70sA3e9U6yH0qSmeBAleAukxlJ8Vbnxcc4O5e1gggFIer3zI8xuxN5soi6i08tlZBoELpI83Xi1rGu56r7a6eKRYe7zOb_C_6IvxajbBEX2vz3MCQAoPXhQqSyA8Cv7es7oGo93T8xSSlbS_xWgdkUGiGkbN-1M1otaTM_umyPvv7poIgnx9IczWXsOHYqnwSPodFkuDC759JdIR6QwwMbX3xSZHFuOQFVKcXMDyaj4FNv9uky',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAlgc5S86_qY7oDizavCuGgCl0ikWdvqYAj7psT3p1LJJEcfZCfrV1UT-Gz62Uu7pTzr3FpaEzEvOXiPA3jbazsxAe74EZjDcXnX25_yPf3RWD0EN1GQNNn0BeL-NFlU7vaXMysoMg3rBPJGKr55OoNA8_WoS1yZHbz8PUSygFQ6OKOpN1x16hzi5x6d_M0H7kM2QZ671Sq9WD5CFWKsTUB6tWFlYoOzO0lUl-uD_cng7LP1PLZyu7Y'
      ]
    },
    {
      id: 'prod-3',
      name: 'Teclado Mecânico Switch Blue',
      category_id: 'cat-1',
      description: 'Teclado compacto Tenkeyless com iluminação LED azul e switches mecânicos tatéis de alta durabilidade.',
      price_sale: 389.00,
      price_orig: 389.00,
      stock_qty: 5,
      sku: 'TEC-BLUE-TKL',
      is_active: true,
      is_featured: false,
      photos: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBX1zO4tbdlWqsOMdplc-X126o_0un4ljZPnYLxqXevKiRVPckKv3oePfE3430f9PPCYIOQW5GDc28_tz8D-PGn-6GI1FXoh2k5rGT74cvB3-4dUuj82_pHjrUKLEGnQlRI52tNI1kKp-BiMMIHAHpalvQpoN8Ij7MgOT_YNxMc4E6Vqaaj5-juDiugAwHvTw6SkpzImWdZz7fvIclUlzZVWg4GU_P1UgkuccNCzwBC0YjTGENgMCnR'
      ]
    },
    {
      id: 'prod-4',
      name: 'Power Bank 20.000mAh 22.5W',
      category_id: 'cat-5',
      description: 'Carregador portátil de alta capacidade com visor digital de bateria e carregamento rápido Power Delivery.',
      price_sale: 149.90,
      price_orig: 189.90,
      stock_qty: 42,
      sku: 'PWR-20K-PD',
      is_active: true,
      is_featured: false,
      photos: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDj162i-X6Jc5e7T_HKMSD1-ZO_QbqwLoxTuPLrrrepX0vYKGKNpjrFxgNQWKBIxZNLMrqUoNM6goocgPxhxM0B39fw_BTCMz2U_E7sU-RdDdV3K7o0WlB0UtWgee5yoM03Vc0kp-tzycPH0U0d0yPGZkjIvkbhes0dI11s9UBUfSFjW9NKLysOwZNHkGAQ2s04hR91B5i69HPRFHP0YcbdNKsKxkAhPaqQUBp7fKME0ZAzwg4nDrMS'
      ]
    }
  ],
  promotions: [
    {
      id: 'promo-1',
      title: 'Semana Gamer - Até 30% OFF',
      scope_type: 'category',
      scope_id: 'cat-1',
      discount_pct: 25,
      expire_date: '2025-12-31',
      is_active: true
    },
    {
      id: 'promo-2',
      title: 'Oferta Relâmpago Headset',
      scope_type: 'product',
      scope_id: 'prod-1',
      discount_pct: 20,
      expire_date: '2025-10-15',
      is_active: true
    }
  ],
  coupons: [
    {
      id: 'cup-1',
      code: 'PRIMEIRACOMPRA',
      type: 'percent',
      value: 10,
      min_spend: 99.00,
      max_uses: 100,
      used_count: 48,
      expire_date: '2025-12-31'
    },
    {
      id: 'cup-2',
      code: 'COMPFAST50',
      type: 'fixed',
      value: 50.00,
      min_spend: 350.00,
      max_uses: 50,
      used_count: 15,
      expire_date: '2025-11-30'
    }
  ],
  customers: [
    { id: 'cust-1', name: 'Lucas Silva', email: 'lucas.silva@email.com', phone: '(11) 98765-4321', total_orders: 3, total_spent: 628.80 },
    { id: 'cust-2', name: 'Juliana Rocha', email: 'juliana.rocha@email.com', phone: '(21) 99887-1122', total_orders: 1, total_spent: 89.00 },
    { id: 'cust-3', name: 'Marcos Costa', email: 'marcos.costa@email.com', phone: '(31) 97654-3210', total_orders: 5, total_spent: 1240.50 },
    { id: 'cust-4', name: 'Beatriz Mendes', email: 'beatriz.mendes@email.com', phone: '(41) 99123-8899', total_orders: 2, total_spent: 310.00 }
  ],
  orders: [
    {
      id: 'ord-1084',
      code: '#1084',
      customer_id: 'cust-1',
      customer_name: 'Lucas Silva',
      customer_email: 'lucas.silva@email.com',
      status: 'pago',
      payment_method: 'Pix Aprovado',
      total_amount: 289.90,
      created_at: new Date(Date.now() - 4 * 60 * 1000).toISOString(),
      items: [
        { product_name: 'Headset Gamer Pro RGB 7.1', qty: 1, unit_price: 249.90 },
        { product_name: 'Suporte para Headset', qty: 1, unit_price: 40.00 }
      ]
    },
    {
      id: 'ord-1083',
      code: '#1083',
      customer_id: 'cust-2',
      customer_name: 'Juliana Rocha',
      customer_email: 'juliana.rocha@email.com',
      status: 'pendente',
      payment_method: 'Aguardando Pagamento',
      total_amount: 89.00,
      created_at: new Date(Date.now() - 19 * 60 * 1000).toISOString(),
      items: [
        { product_name: 'Cabo HDMI 2.1 Ultra HD', qty: 1, unit_price: 89.00 }
      ]
    },
    {
      id: 'ord-1082',
      code: '#1082',
      customer_id: 'cust-3',
      customer_name: 'Marcos Costa',
      customer_email: 'marcos.costa@email.com',
      status: 'pago',
      payment_method: 'Cartão Aprovado',
      total_amount: 412.00,
      created_at: new Date(Date.now() - 41 * 60 * 1000).toISOString(),
      items: [
        { product_name: 'Teclado Mecânico Switch Blue', qty: 1, unit_price: 389.00 }
      ]
    },
    {
      id: 'ord-1081',
      code: '#1081',
      customer_id: 'cust-4',
      customer_name: 'Beatriz Mendes',
      customer_email: 'beatriz.mendes@email.com',
      status: 'cancelado',
      payment_method: 'Cancelado',
      total_amount: 159.90,
      created_at: new Date(Date.now() - 60 * 60 * 1000).toISOString(),
      items: [
        { product_name: 'Power Bank 20.000mAh', qty: 1, unit_price: 159.90 }
      ]
    }
  ]
};

// Application State
const state = {
  activeTab: 'dashboard',
  selectedCategoryFilter: 'all',
  selectedOrderStatusFilter: 'all',
  currentDashboardFilter: 'today',
  uploadedPhotosBuffer: [],
  selectedOrderIdForModal: null,

  // Data Repositories
  categories: [],
  products: [],
  promotions: [],
  coupons: [],
  customers: [],
  orders: []
};

// Initialize App
document.addEventListener('DOMContentLoaded', async () => {
  await loadAllData();
  setupEventListeners();
  renderCurrentView();
  showToast('CompFast Admin pronto!', 'success');
});

async function loadAllData() {
  const sb = window.supabaseClient;

  // Attempt Supabase Fetch
  const [dbCats, dbProds, dbPromos, dbCoupons, dbCusts, dbOrders] = await Promise.all([
    sb.fetchTable('categories'),
    sb.fetchTable('products'),
    sb.fetchTable('promotions'),
    sb.fetchTable('coupons'),
    sb.fetchTable('customers'),
    sb.fetchTable('orders')
  ]);

  const syncStatusDot = document.getElementById('sync-status-dot');
  const syncStatusText = document.getElementById('sync-status-text');

  if (dbCats && dbProds) {
    state.categories = dbCats;
    state.products = dbProds;
    state.promotions = dbPromos || [];
    state.coupons = dbCoupons || [];
    state.customers = dbCusts || [];
    state.orders = dbOrders || [];

    syncStatusDot.className = "w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse";
    syncStatusText.innerText = "Online • Supabase DB Connected";
  } else {
    // Fallback to LocalStorage or SEED_DATA
    loadFromLocalStorage();

    syncStatusDot.className = "w-1.5 h-1.5 rounded-full bg-primary-container";
    syncStatusText.innerText = "Modo LocalStorage • Offline Fallback";
  }
}

function loadFromLocalStorage() {
  const local = localStorage.getItem('compfast_app_state');
  if (local) {
    try {
      const parsed = JSON.parse(local);
      state.categories = parsed.categories || SEED_DATA.categories;
      state.products = parsed.products || SEED_DATA.products;
      state.promotions = parsed.promotions || SEED_DATA.promotions;
      state.coupons = parsed.coupons || SEED_DATA.coupons;
      state.customers = parsed.customers || SEED_DATA.customers;
      state.orders = parsed.orders || SEED_DATA.orders;
      return;
    } catch (e) {
      console.warn('Erro ao parsear local storage:', e);
    }
  }

  // Use Seed Data directly if no local storage
  state.categories = [...SEED_DATA.categories];
  state.products = [...SEED_DATA.products];
  state.promotions = [...SEED_DATA.promotions];
  state.coupons = [...SEED_DATA.coupons];
  state.customers = [...SEED_DATA.customers];
  state.orders = [...SEED_DATA.orders];
  saveToLocalStorage();
}

function saveToLocalStorage() {
  const dataToSave = {
    categories: state.categories,
    products: state.products,
    promotions: state.promotions,
    coupons: state.coupons,
    customers: state.customers,
    orders: state.orders
  };
  localStorage.setItem('compfast_app_state', JSON.stringify(dataToSave));
}

async function refreshData() {
  await loadAllData();
  renderCurrentView();
  document.getElementById('last-sync-time').innerText = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  showToast('Dados atualizados com sucesso', 'info');
}

/* ==========================================================================
   NAVIGATION & VIEW SWITCHING
   ========================================================================== */

function switchTab(tabName) {
  state.activeTab = tabName;

  // Hide all sections
  ['view-dashboard', 'view-catalogo', 'view-marketing', 'view-clientes'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });

  // Show active section
  const activeEl = document.getElementById(`view-${tabName}`);
  if (activeEl) {
    activeEl.classList.remove('hidden');
    if (tabName === 'catalogo') activeEl.classList.add('flex');
    if (tabName === 'marketing') activeEl.classList.add('flex');
    if (tabName === 'clientes') activeEl.classList.add('flex');
  }

  // Update Bottom Nav Styling
  ['dashboard', 'catalogo', 'marketing', 'clientes'].forEach(name => {
    const btn = document.getElementById(`nav-${name}`);
    if (btn) {
      const icon = btn.querySelector('.material-symbols-outlined');
      const label = btn.querySelector('span:last-child');
      if (name === tabName) {
        btn.className = "flex flex-col items-center justify-center text-primary active:scale-95 transition-transform duration-150";
        if (icon) icon.classList.add('fill-1');
        if (label) label.classList.add('font-bold');
      } else {
        btn.className = "flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-95 transition-transform duration-150";
        if (icon) icon.classList.remove('fill-1');
        if (label) label.classList.remove('font-bold');
      }
    }
  });

  renderCurrentView();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderCurrentView() {
  if (state.activeTab === 'dashboard') {
    renderDashboard();
  } else if (state.activeTab === 'catalogo') {
    renderCategoryRibbon();
    renderProductsList();
  } else if (state.activeTab === 'marketing') {
    renderMarketing();
  } else if (state.activeTab === 'clientes') {
    renderCustomersList();
  }
}

/* ==========================================================================
   DASHBOARD & VENDAS MODULE
   ========================================================================== */

function filterDashboard(range) {
  state.currentDashboardFilter = range;
  ['today', '7days', 'month'].forEach(r => {
    const btn = document.getElementById(`dash-btn-${r}`);
    if (btn) {
      if (r === range) {
        btn.className = "px-3.5 py-1.5 rounded-lg text-label-md font-label-md bg-primary-container text-on-primary-container transition-all shadow-sm font-bold";
      } else {
        btn.className = "px-3.5 py-1.5 rounded-lg text-label-md font-label-md text-on-surface-variant hover:text-on-surface transition-all";
      }
    }
  });
  renderDashboard();
}

function renderDashboard() {
  const now = new Date();
  let timeFilteredOrders = [...state.orders];

  if (state.currentDashboardFilter === 'today') {
    const todayStr = now.toISOString().split('T')[0];
    timeFilteredOrders = state.orders.filter(o => new Date(o.created_at).toISOString().split('T')[0] === todayStr);
  } else if (state.currentDashboardFilter === '7days') {
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    timeFilteredOrders = state.orders.filter(o => new Date(o.created_at) >= sevenDaysAgo);
  } else if (state.currentDashboardFilter === 'month') {
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    timeFilteredOrders = state.orders.filter(o => new Date(o.created_at) >= startOfMonth);
  }

  const approvedOrders = timeFilteredOrders.filter(o => o.status === 'pago');
  const totalRevenue = approvedOrders.reduce((sum, o) => sum + parseFloat(o.total_amount || 0), 0);
  const avgTicket = approvedOrders.length > 0 ? totalRevenue / approvedOrders.length : 0;

  document.getElementById('kpi-revenue-value').innerText = formatCurrency(totalRevenue);
  document.getElementById('kpi-orders-count').innerText = timeFilteredOrders.length;
  document.getElementById('kpi-ticket-avg').innerText = formatCurrency(avgTicket);
  document.getElementById('kpi-coupons-used').innerText = state.coupons.reduce((acc, c) => acc + (c.used_count || 0), 0);
  document.getElementById('orders-badge-count').innerText = `${timeFilteredOrders.length} pedidos`;

  renderOrdersList();
}

function filterOrdersByStatus(status) {
  state.selectedOrderStatusFilter = status;
  ['all', 'pago', 'pendente', 'cancelado'].forEach(st => {
    const btn = document.getElementById(`order-filter-${st}`);
    if (btn) {
      if (st === status) {
        btn.className = "px-3 py-1 rounded-lg text-label-xs font-label-xs bg-primary-container text-on-primary-container font-bold";
      } else {
        btn.className = "px-3 py-1 rounded-lg text-label-xs font-label-xs bg-surface-container-high border border-surface-variant text-tertiary hover:text-on-surface";
      }
    }
  });
  renderOrdersList();
}

function renderOrdersList() {
  const container = document.getElementById('orders-list-container');
  if (!container) return;

  let filtered = [...state.orders];
  if (state.selectedOrderStatusFilter !== 'all') {
    filtered = filtered.filter(o => o.status === state.selectedOrderStatusFilter);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-tertiary bg-surface-container-low rounded-xl border border-surface-variant">
        <span class="material-symbols-outlined text-3xl mb-1">shopping_bag</span>
        <p class="text-body-md font-body-md">Nenhum pedido encontrado neste filtro.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(order => {
    let badgeClass = "bg-[#00E676]/15 text-[#00E676]";
    let dotClass = "bg-[#00E676]";
    let statusText = "Pago";

    if (order.status === 'pendente') {
      badgeClass = "bg-[#FFD600]/15 text-[#FFD600]";
      dotClass = "bg-[#FFD600]";
      statusText = "Aguardando";
    } else if (order.status === 'cancelado') {
      badgeClass = "bg-surface-variant text-tertiary";
      dotClass = "bg-tertiary";
      statusText = "Cancelado";
    }

    const dateFormatted = new Date(order.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const itemsCount = order.items ? order.items.length : 1;

    return `
      <div onclick="openOrderModal('${order.id}')" class="bg-surface-container-low hover:bg-surface-container transition-colors rounded-xl p-space-md border border-surface-variant/80 flex flex-col gap-2 cursor-pointer active:scale-[0.99]">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="text-label-lg font-label-lg text-white font-mono">${order.code || ('#' + order.id)}</span>
              <span class="text-body-md font-body-md text-on-surface font-semibold">${escapeHtml(order.customer_name)}</span>
            </div>
            <p class="text-body-sm font-body-sm text-tertiary mt-0.5">${itemsCount} item(ns) • ${dateFormatted}</p>
          </div>
          <div class="text-right">
            <span class="text-label-lg font-label-lg text-primary font-bold">${formatCurrency(order.total_amount)}</span>
            <div class="mt-1 flex items-center justify-end gap-1 px-2 py-0.5 rounded ${badgeClass} text-label-xs font-label-xs">
              <span class="w-1.5 h-1.5 rounded-full ${dotClass}"></span>
              <span>${statusText}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openOrderModal(orderId) {
  const order = state.orders.find(o => o.id === orderId);
  if (!order) return;

  state.selectedOrderIdForModal = orderId;
  document.getElementById('order-modal-code').innerText = order.code || ('#' + order.id);
  document.getElementById('order-modal-date').innerText = new Date(order.created_at).toLocaleString();
  document.getElementById('order-modal-customer').innerText = order.customer_name;
  document.getElementById('order-modal-email').innerText = order.customer_email || 'Não informado';
  document.getElementById('order-modal-total').innerText = formatCurrency(order.total_amount);
  document.getElementById('order-modal-status-select').value = order.status;

  const itemsContainer = document.getElementById('order-modal-items');
  if (itemsContainer) {
    if (order.items && order.items.length > 0) {
      itemsContainer.innerHTML = order.items.map(item => `
        <div class="flex justify-between items-center text-body-sm bg-surface-container p-2 rounded border border-surface-variant/30">
          <span class="text-on-surface">${item.qty}x ${escapeHtml(item.product_name)}</span>
          <span class="text-primary font-medium">${formatCurrency(item.unit_price)}</span>
        </div>
      `).join('');
    } else {
      itemsContainer.innerHTML = `<p class="text-body-sm text-tertiary">1x Venda Direta</p>`;
    }
  }

  openModal('modal-order');
}

async function saveOrderStatus() {
  if (!state.selectedOrderIdForModal) return;
  const newStatus = document.getElementById('order-modal-status-select').value;
  const order = state.orders.find(o => o.id === state.selectedOrderIdForModal);

  if (order) {
    order.status = newStatus;
    saveToLocalStorage();

    // Supabase Sync
    await window.supabaseClient.updateRow('orders', order.id, { status: newStatus });

    showToast(`Status do pedido ${order.code} atualizado!`, 'success');
    closeModal('modal-order');
    renderDashboard();
  }
}

function openNewOrderModal() {
  const custSelect = document.getElementById('neworder-customer-id');
  const prodSelect = document.getElementById('neworder-product-id');

  if (custSelect) {
    custSelect.innerHTML = state.customers.map(c => `
      <option value="${c.id}">${escapeHtml(c.name)} (${escapeHtml(c.email)})</option>
    `).join('');
  }

  if (prodSelect) {
    prodSelect.innerHTML = state.products.map(p => `
      <option value="${p.id}">${escapeHtml(p.name)} - ${formatCurrency(p.price_sale)}</option>
    `).join('');
  }

  openModal('modal-new-order');
}

async function handleNewOrderSubmit(e) {
  e.preventDefault();
  const custId = document.getElementById('neworder-customer-id').value;
  const prodId = document.getElementById('neworder-product-id').value;
  const qty = parseInt(document.getElementById('neworder-qty').value) || 1;
  const status = document.getElementById('neworder-status').value;

  const customer = state.customers.find(c => c.id === custId) || { name: 'Cliente Avulso', email: 'cliente@loja.com' };
  const product = state.products.find(p => p.id === prodId) || { name: 'Produto', price_sale: 99.90 };

  const totalAmount = (product.price_sale * qty);
  const newId = 'ord-' + Date.now();
  const newOrder = {
    id: newId,
    code: '#' + Math.floor(1000 + Math.random() * 9000),
    customer_id: custId,
    customer_name: customer.name,
    customer_email: customer.email,
    status: status,
    payment_method: status === 'pago' ? 'Pix Aprovado' : 'Aguardando',
    total_amount: totalAmount,
    created_at: new Date().toISOString(),
    items: [
      { product_name: product.name, qty: qty, unit_price: product.price_sale }
    ]
  };

  state.orders.unshift(newOrder);
  saveToLocalStorage();

  await window.supabaseClient.insertRow('orders', newOrder);

  showToast('Novo pedido registrado!', 'success');
  closeModal('modal-new-order');
  renderDashboard();
}

/* ==========================================================================
   CATÁLOGO DE PRODUTOS & CATEGORIAS MODULE
   ========================================================================== */

function renderCategoryRibbon() {
  const container = document.getElementById('category-pills-container');
  if (!container) return;

  let html = `
    <button onclick="openCategoryModal()" class="flex-shrink-0 h-9 px-3.5 flex items-center gap-1 rounded-lg bg-surface-container border border-dashed border-outline-variant text-primary hover:bg-surface-container-high text-label-md font-label-md transition-all active:scale-95" type="button">
      <span class="material-symbols-outlined text-[16px]">add</span>
      <span>Nova Categoria</span>
    </button>
    <button onclick="filterCategory('all')" class="flex-shrink-0 h-9 px-3.5 flex items-center rounded-lg ${state.selectedCategoryFilter === 'all' ? 'bg-primary-container text-on-primary-container font-bold' : 'bg-surface-container-high border border-surface-variant text-on-surface-variant'} text-label-md transition-transform active:scale-95">
      Todos (${state.products.length})
    </button>
  `;

  state.categories.forEach(cat => {
    const count = state.products.filter(p => p.category_id === cat.id).length;
    const isSelected = state.selectedCategoryFilter === cat.id;
    html += `
      <button onclick="filterCategory('${cat.id}')" class="flex-shrink-0 h-9 px-3.5 flex items-center rounded-lg ${isSelected ? 'bg-primary-container text-on-primary-container font-bold' : 'bg-surface-container-high border border-surface-variant text-on-surface-variant'} text-label-md transition-transform active:scale-95">
        ${escapeHtml(cat.name)} (${count})
      </button>
    `;
  });

  container.innerHTML = html;
}

function filterCategory(catId) {
  state.selectedCategoryFilter = catId;
  renderCategoryRibbon();
  renderProductsList();
}

function renderProductsList() {
  const container = document.getElementById('products-list-container');
  if (!container) return;

  const searchInput = document.getElementById('product-search-input');
  const query = searchInput ? searchInput.value.toLowerCase().trim() : '';

  let filtered = [...state.products];

  if (state.selectedCategoryFilter !== 'all') {
    filtered = filtered.filter(p => p.category_id === state.selectedCategoryFilter);
  }

  if (query) {
    filtered = filtered.filter(p => p.name.toLowerCase().includes(query) || (p.sku && p.sku.toLowerCase().includes(query)));
  }

  document.getElementById('products-total-badge').innerText = `${filtered.length} Itens`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-tertiary bg-surface-container-low rounded-xl border border-surface-variant">
        <span class="material-symbols-outlined text-4xl mb-2 text-primary">inventory_2</span>
        <p class="text-body-lg font-body-lg text-on-surface">Nenhum produto cadastrado nesta visão</p>
        <p class="text-body-sm mt-1">Toque no botão abaixo para adicionar produtos com fotos.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(prod => {
    const cat = state.categories.find(c => c.id === prod.category_id) || { name: 'Geral' };
    const mainPhoto = (prod.photos && prod.photos.length > 0)
      ? prod.photos[0]
      : 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwPpavXPHmPnOy9CPjWOYhNHIN3pDemQcrYDZTqpuuneESpXpuDNn1xKioCoOaupnetxbUNNKuZTppxXBJeuVNLRy1wyJMmGuqPwovS_Ga4IcUffPF5vp6RUp0_w-Ad81ESLEDaViLvf4s9jDfTLW1r3Y7b_D4X7kDwYVLS7f3W6o9kTM-2yGZ--bqkzYffbRzIsGqAcT_1-eWWCVOpyfTNDg9KlrqKb1HzR4psy2lQ4Tj_FuARcOC';

    const hasDiscount = prod.price_orig && parseFloat(prod.price_orig) > parseFloat(prod.price_sale);
    const stockAlert = prod.stock_qty <= 5;

    return `
      <article class="bg-surface-container-low rounded-xl border border-surface-variant p-3 relative flex gap-space-md items-start group hover:border-outline-variant transition-colors">
        <div class="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-high border border-surface-variant">
          <img src="${mainPhoto}" class="w-full h-full object-cover" alt="${escapeHtml(prod.name)}"/>
          ${stockAlert ? `<span class="absolute top-1 left-1 bg-error-container text-on-error-container px-1 py-0.2 rounded text-[9px] font-bold">ALERTA</span>` : ''}
        </div>
        <div class="flex-1 min-w-0 flex flex-col justify-between self-stretch">
          <div>
            <div class="flex items-center justify-between gap-1">
              <span class="px-2 py-0.5 rounded bg-surface-container-high text-tertiary text-label-xs font-label-xs uppercase tracking-wider">${escapeHtml(cat.name)}</span>
              <div class="flex items-center gap-1">
                <button onclick="openProductModal('${prod.id}')" title="Editar produto" class="text-tertiary hover:text-primary p-1 rounded hover:bg-surface-container-high">
                  <span class="material-symbols-outlined text-[18px]">edit</span>
                </button>
                <button onclick="deleteProduct('${prod.id}')" title="Excluir produto" class="text-tertiary hover:text-error p-1 rounded hover:bg-surface-container-high">
                  <span class="material-symbols-outlined text-[18px]">delete</span>
                </button>
              </div>
            </div>
            <h2 class="text-body-lg font-body-lg text-on-surface font-semibold truncate mt-1">${escapeHtml(prod.name)}</h2>
            <div class="flex items-center gap-space-xs mt-0.5">
              <span class="w-1.5 h-1.5 rounded-full ${stockAlert ? 'bg-error' : 'bg-emerald-400'}"></span>
              <span class="text-body-sm font-body-sm ${stockAlert ? 'text-error font-medium' : 'text-tertiary'}">Estoque: ${prod.stock_qty} un</span>
              <span class="text-tertiary">•</span>
              <span class="text-label-xs font-label-xs ${prod.is_active ? 'text-emerald-400' : 'text-tertiary'} font-semibold uppercase">${prod.is_active ? 'Ativo' : 'Pausado'}</span>
            </div>
          </div>
          <div class="flex items-baseline gap-space-xs mt-2">
            <span class="text-label-lg font-label-lg text-primary-container font-extrabold text-[16px]">${formatCurrency(prod.price_sale)}</span>
            ${hasDiscount ? `<span class="text-body-sm font-body-sm text-tertiary line-through text-[11px]">${formatCurrency(prod.price_orig)}</span>` : ''}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openProductModal(productId = null) {
  // Populate category dropdown
  const catSelect = document.getElementById('prod-category');
  if (catSelect) {
    catSelect.innerHTML = state.categories.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
  }

  state.uploadedPhotosBuffer = [];

  if (productId) {
    const prod = state.products.find(p => p.id === productId);
    if (prod) {
      document.getElementById('product-modal-title').innerText = "Editar Produto";
      document.getElementById('prod-id').value = prod.id;
      document.getElementById('prod-name').value = prod.name;
      document.getElementById('prod-category').value = prod.category_id;
      document.getElementById('prod-desc').value = prod.description || '';
      document.getElementById('price-sale').value = prod.price_sale;
      document.getElementById('price-orig').value = prod.price_orig || '';
      document.getElementById('stock-qty').value = prod.stock_qty;
      document.getElementById('prod-sku').value = prod.sku || '';
      document.getElementById('toggle-active').checked = prod.is_active;
      document.getElementById('toggle-featured').checked = prod.is_featured;

      state.uploadedPhotosBuffer = prod.photos ? [...prod.photos] : [];
    }
  } else {
    document.getElementById('product-modal-title').innerText = "Novo Produto";
    document.getElementById('prod-id').value = "";
    document.getElementById('product-form').reset();
    document.getElementById('toggle-active').checked = true;
    document.getElementById('toggle-featured').checked = false;
  }

  renderPhotosGrid();
  calculateMargin();
  openModal('modal-product');
}

function handlePhotoUpload(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;

  Array.from(files).forEach(file => {
    if (state.uploadedPhotosBuffer.length >= 6) {
      showToast('Limite máximo de 6 fotos atingido', 'warning');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      state.uploadedPhotosBuffer.push(e.target.result);
      renderPhotosGrid();
    };
    reader.readAsDataURL(file);
  });
}

function removePhoto(index) {
  state.uploadedPhotosBuffer.splice(index, 1);
  renderPhotosGrid();
}

function renderPhotosGrid() {
  const container = document.getElementById('photos-grid-container');
  const countEl = document.getElementById('photo-count');
  if (!container) return;

  if (countEl) countEl.innerText = state.uploadedPhotosBuffer.length;

  let html = state.uploadedPhotosBuffer.map((photo, i) => `
    <div class="relative group rounded-lg overflow-hidden bg-surface-container ${i === 0 ? 'border-2 border-primary-container' : 'border border-surface-variant'} aspect-square flex items-center justify-center">
      <img src="${photo}" class="w-full h-full object-cover" alt="Foto ${i+1}"/>
      ${i === 0 ? `
        <div class="absolute top-1.5 left-1.5 bg-primary-container text-surface-container-lowest text-[9px] font-bold tracking-tight px-1.5 py-0.5 rounded shadow-md flex items-center gap-0.5">
          <span class="material-symbols-outlined text-[11px] fill-1">star</span>
          <span>Principal</span>
        </div>
      ` : ''}
      <button onclick="removePhoto(${i})" type="button" class="absolute top-1 right-1 w-6 h-6 rounded-full bg-surface-container-lowest/80 text-on-surface-variant flex items-center justify-center hover:text-error">
        <span class="material-symbols-outlined text-[15px]">close</span>
      </button>
    </div>
  `).join('');

  // Fill slots up to 3 minimum
  const remaining = Math.max(0, 3 - state.uploadedPhotosBuffer.length);
  for (let k = 0; k < remaining; k++) {
    html += `
      <div class="border border-dashed border-surface-variant/40 rounded-lg aspect-square flex flex-col items-center justify-center bg-surface-container-low/30">
        <span class="material-symbols-outlined text-surface-variant text-[20px]">image</span>
      </div>
    `;
  }

  container.innerHTML = html;
}

function calculateMargin() {
  const sale = parseFloat(document.getElementById('price-sale').value) || 0;
  const orig = parseFloat(document.getElementById('price-orig').value) || 0;
  const discountEl = document.getElementById('discount-calc');
  const diffEl = document.getElementById('diff-calc');

  if (orig > sale && orig > 0) {
    const diff = orig - sale;
    const percent = Math.round((diff / orig) * 100);
    discountEl.innerText = `${percent}% OFF na vitrine`;
    diffEl.innerText = formatCurrency(diff);
  } else {
    discountEl.innerText = `Preço integral`;
    diffEl.innerText = `R$ 0,00`;
  }
}

async function handleProductSubmit(e) {
  e.preventDefault();

  const prodId = document.getElementById('prod-id').value;
  const name = document.getElementById('prod-name').value;
  const category_id = document.getElementById('prod-category').value;
  const description = document.getElementById('prod-desc').value;
  const price_sale = parseFloat(document.getElementById('price-sale').value) || 0;
  const price_orig = parseFloat(document.getElementById('price-orig').value) || null;
  const stock_qty = parseInt(document.getElementById('stock-qty').value) || 0;
  const sku = document.getElementById('prod-sku').value || `SKU-${Math.floor(100+Math.random()*900)}`;
  const is_active = document.getElementById('toggle-active').checked;
  const is_featured = document.getElementById('toggle-featured').checked;

  const productData = {
    name,
    category_id,
    description,
    price_sale,
    price_orig,
    stock_qty,
    sku,
    is_active,
    is_featured,
    photos: state.uploadedPhotosBuffer.length > 0 ? state.uploadedPhotosBuffer : [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwPpavXPHmPnOy9CPjWOYhNHIN3pDemQcrYDZTqpuuneESpXpuDNn1xKioCoOaupnetxbUNNKuZTppxXBJeuVNLRy1wyJMmGuqPwovS_Ga4IcUffPF5vp6RUp0_w-Ad81ESLEDaViLvf4s9jDfTLW1r3Y7b_D4X7kDwYVLS7f3W6o9kTM-2yGZ--bqkzYffbRzIsGqAcT_1-eWWCVOpyfTNDg9KlrqKb1HzR4psy2lQ4Tj_FuARcOC'
    ]
  };

  if (prodId) {
    // Update existing
    const index = state.products.findIndex(p => p.id === prodId);
    if (index !== -1) {
      state.products[index] = { ...state.products[index], ...productData };
      await window.supabaseClient.updateRow('products', prodId, productData);
      showToast('Produto atualizado!', 'success');
    }
  } else {
    // Create new
    const newId = 'prod-' + Date.now();
    const newProduct = { id: newId, ...productData };
    state.products.unshift(newProduct);
    await window.supabaseClient.insertRow('products', newProduct);
    showToast('Produto cadastrado com sucesso!', 'success');
  }

  saveToLocalStorage();
  closeModal('modal-product');
  renderProductsList();
}

async function deleteProduct(productId) {
  if (confirm('Tem certeza que deseja excluir este produto do catálogo?')) {
    state.products = state.products.filter(p => p.id !== productId);
    saveToLocalStorage();
    await window.supabaseClient.deleteRow('products', productId);
    showToast('Produto excluído', 'info');
    renderProductsList();
  }
}

/* ==========================================================================
   CATEGORIAS MODULE
   ========================================================================== */

function openCategoryModal() {
  document.getElementById('cat-name-modal').value = '';
  document.getElementById('cat-icon-modal').value = '';
  openModal('modal-category');
}

async function handleCategorySubmit(e) {
  e.preventDefault();
  const name = document.getElementById('cat-name-modal').value.trim();
  const icon = document.getElementById('cat-icon-modal').value.trim() || 'category';

  if (!name) return;

  const newCategory = {
    id: 'cat-' + Date.now(),
    name,
    icon
  };

  state.categories.push(newCategory);
  saveToLocalStorage();

  await window.supabaseClient.insertRow('categories', newCategory);

  showToast(`Categoria "${name}" criada!`, 'success');
  closeModal('modal-category');
  renderCategoryRibbon();
}

/* ==========================================================================
   MARKETING, PROMOÇÕES E CUPONS MODULE
   ========================================================================== */

function switchMarketingTab(tab) {
  const btnPromos = document.getElementById('tabPromosBtn');
  const btnCoupons = document.getElementById('tabCouponsBtn');
  const secPromos = document.getElementById('sectionPromos');
  const secCoupons = document.getElementById('sectionCoupons');

  if (tab === 'promos') {
    btnPromos.className = "py-2 rounded-lg text-label-md font-label-md transition-all duration-150 bg-primary-container text-on-primary-container shadow-sm flex items-center justify-center gap-1.5 font-bold";
    btnCoupons.className = "py-2 rounded-lg text-label-md font-label-md transition-all duration-150 text-tertiary hover:text-on-surface flex items-center justify-center gap-1.5";
    secPromos.classList.remove('hidden');
    secCoupons.classList.add('hidden');
  } else {
    btnCoupons.className = "py-2 rounded-lg text-label-md font-label-md transition-all duration-150 bg-primary-container text-on-primary-container shadow-sm flex items-center justify-center gap-1.5 font-bold";
    btnPromos.className = "py-2 rounded-lg text-label-md font-label-md transition-all duration-150 text-tertiary hover:text-on-surface flex items-center justify-center gap-1.5";
    secCoupons.classList.remove('hidden');
    secPromos.classList.add('hidden');
  }
}

function renderMarketing() {
  document.getElementById('mkt-promos-count').innerText = state.promotions.length;
  document.getElementById('mkt-coupons-count').innerText = state.coupons.length;

  renderPromotionsList();
  renderCouponsList();
}

function renderPromotionsList() {
  const container = document.getElementById('promotions-list-container');
  if (!container) return;

  if (state.promotions.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-tertiary bg-surface-container-low rounded-xl border border-surface-variant">
        <span class="material-symbols-outlined text-3xl mb-1 text-primary">local_fire_department</span>
        <p class="text-body-md font-body-md">Nenhuma promoção ativa no momento.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.promotions.map(promo => {
    let scopeLabel = "Geral";
    if (promo.scope_type === 'category') {
      const cat = state.categories.find(c => c.id === promo.scope_id);
      scopeLabel = `Categoria: ${cat ? cat.name : 'Todas'}`;
    } else {
      const prod = state.products.find(p => p.id === promo.scope_id);
      scopeLabel = `Produto: ${prod ? prod.name : 'Específico'}`;
    }

    const isExpired = new Date(promo.expire_date) < new Date();

    return `
      <article class="bg-surface-container-low border border-surface-variant rounded-xl p-space-lg space-y-space-md hover:border-outline-variant transition-colors">
        <div class="flex items-start justify-between gap-space-sm">
          <div class="space-y-1">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-label-xs font-label-xs uppercase tracking-wider px-2 py-0.5 rounded bg-primary-container/15 text-primary border border-primary-container/30 font-bold">
                ${promo.discount_pct}% OFF
              </span>
              <span class="text-label-xs font-label-xs bg-surface-container-high text-tertiary px-2 py-0.5 rounded">
                ${promo.scope_type === 'category' ? 'Por Categoria' : 'Por Produto'}
              </span>
            </div>
            <h3 class="text-body-lg font-body-lg text-on-surface font-semibold pt-1">${escapeHtml(promo.title)}</h3>
            <p class="text-body-sm font-body-sm text-tertiary flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px] text-outline">sell</span>
              Escopo: <strong class="text-on-surface">${escapeHtml(scopeLabel)}</strong>
            </p>
          </div>
          <button onclick="deletePromotion('${promo.id}')" title="Excluir promoção" class="p-1 text-tertiary hover:text-error">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>

        <div class="p-space-sm bg-surface-container rounded-lg border border-surface-variant/60 flex items-center justify-between text-body-sm font-body-sm">
          <div class="flex items-center gap-2 ${isExpired ? 'text-error' : 'text-primary'}">
            <span class="material-symbols-outlined text-[18px]">${isExpired ? 'event_busy' : 'timer'}</span>
            <span class="text-label-md font-label-md">${isExpired ? 'Expirada' : 'Validade: ' + formatDate(promo.expire_date)}</span>
          </div>
          <span class="text-label-xs font-label-xs ${promo.is_active && !isExpired ? 'bg-emerald-400/10 text-emerald-400' : 'bg-surface-variant text-tertiary'} px-2 py-0.5 rounded uppercase font-bold">
            ${promo.is_active && !isExpired ? 'Ativa' : 'Inativa'}
          </span>
        </div>
      </article>
    `;
  }).join('');
}

function openPromotionModal() {
  const catSelect = document.getElementById('promo-category-id');
  const prodSelect = document.getElementById('promo-product-id');

  if (catSelect) {
    catSelect.innerHTML = state.categories.map(c => `<option value="${c.id}">${escapeHtml(c.name)}</option>`).join('');
  }
  if (prodSelect) {
    prodSelect.innerHTML = state.products.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('');
  }

  // Set default expiration date to +7 days
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  document.getElementById('promo-expire-date').value = nextWeek.toISOString().split('T')[0];

  openModal('modal-promotion');
}

function togglePromoScopeFields() {
  const type = document.getElementById('promo-scope-type').value;
  const catWrap = document.getElementById('promo-category-select-wrapper');
  const prodWrap = document.getElementById('promo-product-select-wrapper');

  if (type === 'category') {
    catWrap.classList.remove('hidden');
    prodWrap.classList.add('hidden');
  } else {
    prodWrap.classList.remove('hidden');
    catWrap.classList.add('hidden');
  }
}

async function handlePromotionSubmit(e) {
  e.preventDefault();
  const title = document.getElementById('promo-title').value.trim();
  const scope_type = document.getElementById('promo-scope-type').value;
  const scope_id = scope_type === 'category'
    ? document.getElementById('promo-category-id').value
    : document.getElementById('promo-product-id').value;
  const discount_pct = parseFloat(document.getElementById('promo-discount-pct').value) || 10;
  const expire_date = document.getElementById('promo-expire-date').value;

  const newPromo = {
    id: 'promo-' + Date.now(),
    title,
    scope_type,
    scope_id,
    discount_pct,
    expire_date,
    is_active: true
  };

  state.promotions.unshift(newPromo);
  saveToLocalStorage();

  await window.supabaseClient.insertRow('promotions', newPromo);

  showToast('Promoção criada e ativada!', 'success');
  closeModal('modal-promotion');
  renderMarketing();
}

async function deletePromotion(id) {
  if (confirm('Deseja excluir esta promoção?')) {
    state.promotions = state.promotions.filter(p => p.id !== id);
    saveToLocalStorage();
    await window.supabaseClient.deleteRow('promotions', id);
    showToast('Promoção removida', 'info');
    renderMarketing();
  }
}

function renderCouponsList() {
  const container = document.getElementById('coupons-list-container');
  if (!container) return;

  if (state.coupons.length === 0) {
    container.innerHTML = `
      <div class="p-6 text-center text-tertiary bg-surface-container-low rounded-xl border border-surface-variant">
        <span class="material-symbols-outlined text-3xl mb-1 text-primary">confirmation_number</span>
        <p class="text-body-md font-body-md">Nenhum cupom cadastrado.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.coupons.map(cup => {
    const isPercent = cup.type === 'percent';
    const discountStr = isPercent ? `${cup.value}% OFF` : `${formatCurrency(cup.value)} OFF`;
    const pctUsed = cup.max_uses > 0 ? Math.min(100, Math.round(((cup.used_count || 0) / cup.max_uses) * 100)) : 0;

    return `
      <article class="bg-surface-container-low border border-surface-variant rounded-xl p-space-lg space-y-space-sm relative overflow-hidden">
        <div class="flex items-start justify-between">
          <div>
            <div class="flex items-center gap-2">
              <span class="font-mono text-headline-sm font-bold tracking-wider text-primary px-2.5 py-1 bg-surface-container-high border border-dashed border-primary/40 rounded-lg inline-flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[18px]">loyalty</span>
                ${escapeHtml(cup.code)}
              </span>
            </div>
            <p class="text-body-md font-body-md text-on-surface font-semibold mt-2">${discountStr}</p>
            <p class="text-body-sm font-body-sm text-tertiary">Mínimo de compra: ${formatCurrency(cup.min_spend || 0)}</p>
          </div>
          <button onclick="deleteCoupon('${cup.id}')" title="Excluir cupom" class="p-1 text-tertiary hover:text-error">
            <span class="material-symbols-outlined text-[18px]">delete</span>
          </button>
        </div>

        <div class="pt-2 space-y-1.5">
          <div class="flex justify-between text-body-sm font-body-sm">
            <span class="text-tertiary">Usos resgatados</span>
            <span class="text-on-surface font-medium">${cup.used_count || 0} / ${cup.max_uses}</span>
          </div>
          <div class="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
            <div class="bg-primary-container h-full rounded-full" style="width: ${pctUsed}%;"></div>
          </div>
        </div>

        <div class="pt-2 border-t border-surface-variant/40 flex items-center justify-between text-body-sm font-body-sm text-tertiary">
          <div class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">calendar_today</span>
            <span>Validade: ${formatDate(cup.expire_date)}</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openCouponModal() {
  const nextMonth = new Date();
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  document.getElementById('coupon-expire-date').value = nextMonth.toISOString().split('T')[0];
  openModal('modal-coupon');
}

async function handleCouponSubmit(e) {
  e.preventDefault();
  const code = document.getElementById('coupon-code').value.trim().toUpperCase();
  const type = document.getElementById('coupon-type').value;
  const value = parseFloat(document.getElementById('coupon-value').value) || 10;
  const min_spend = parseFloat(document.getElementById('coupon-min-spend').value) || 0;
  const max_uses = parseInt(document.getElementById('coupon-max-uses').value) || 100;
  const expire_date = document.getElementById('coupon-expire-date').value;

  const newCoupon = {
    id: 'cup-' + Date.now(),
    code,
    type,
    value,
    min_spend,
    max_uses,
    used_count: 0,
    expire_date
  };

  state.coupons.unshift(newCoupon);
  saveToLocalStorage();

  await window.supabaseClient.insertRow('coupons', newCoupon);

  showToast(`Cupom ${code} cadastrado!`, 'success');
  closeModal('modal-coupon');
  renderMarketing();
}

async function deleteCoupon(id) {
  if (confirm('Deseja excluir este cupom?')) {
    state.coupons = state.coupons.filter(c => c.id !== id);
    saveToLocalStorage();
    await window.supabaseClient.deleteRow('coupons', id);
    showToast('Cupom removido', 'info');
    renderMarketing();
  }
}

/* ==========================================================================
   GESTÃO DE CLIENTES MODULE
   ========================================================================== */

function renderCustomersList() {
  const container = document.getElementById('customers-list-container');
  if (!container) return;

  const query = document.getElementById('customer-search-input')?.value.toLowerCase().trim() || '';
  let filtered = [...state.customers];

  if (query) {
    filtered = filtered.filter(c =>
      c.name.toLowerCase().includes(query) ||
      (c.email && c.email.toLowerCase().includes(query)) ||
      (c.phone && c.phone.includes(query))
    );
  }

  document.getElementById('customers-count-badge').innerText = `${filtered.length} Cadastrados`;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center text-tertiary bg-surface-container-low rounded-xl border border-surface-variant">
        <span class="material-symbols-outlined text-4xl mb-2 text-primary">group</span>
        <p class="text-body-lg font-body-lg text-on-surface">Nenhum cliente encontrado</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(cust => `
    <div class="bg-surface-container-low rounded-xl border border-surface-variant p-3.5 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-primary-container/20 text-primary font-bold flex items-center justify-center text-body-lg border border-primary-container/30">
          ${cust.name.substring(0, 2).toUpperCase()}
        </div>
        <div>
          <h3 class="text-body-lg font-bold text-on-surface">${escapeHtml(cust.name)}</h3>
          <p class="text-body-sm text-tertiary">${escapeHtml(cust.email)} • ${escapeHtml(cust.phone || 'Sem fone')}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="openCustomerModal('${cust.id}')" title="Editar cliente" class="p-2 rounded-lg bg-surface-container-high text-tertiary hover:text-primary">
          <span class="material-symbols-outlined text-[18px]">edit</span>
        </button>
        <button onclick="deleteCustomer('${cust.id}')" title="Excluir cliente" class="p-2 rounded-lg bg-surface-container-high text-tertiary hover:text-error">
          <span class="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </div>
    </div>
  `).join('');
}

function openCustomerModal(customerId = null) {
  if (customerId) {
    const cust = state.customers.find(c => c.id === customerId);
    if (cust) {
      document.getElementById('customer-modal-title').innerText = "Editar Cliente";
      document.getElementById('cust-id').value = cust.id;
      document.getElementById('cust-name').value = cust.name;
      document.getElementById('cust-email').value = cust.email;
      document.getElementById('cust-phone').value = cust.phone || '';
    }
  } else {
    document.getElementById('customer-modal-title').innerText = "Novo Cliente";
    document.getElementById('cust-id').value = "";
    document.getElementById('cust-name').value = "";
    document.getElementById('cust-email').value = "";
    document.getElementById('cust-phone').value = "";
  }

  openModal('modal-customer');
}

async function handleCustomerSubmit(e) {
  e.preventDefault();
  const custId = document.getElementById('cust-id').value;
  const name = document.getElementById('cust-name').value.trim();
  const email = document.getElementById('cust-email').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();

  const customerData = { name, email, phone };

  if (custId) {
    const idx = state.customers.findIndex(c => c.id === custId);
    if (idx !== -1) {
      state.customers[idx] = { ...state.customers[idx], ...customerData };
      await window.supabaseClient.updateRow('customers', custId, customerData);
      showToast('Cliente atualizado!', 'success');
    }
  } else {
    const newCust = {
      id: 'cust-' + Date.now(),
      ...customerData,
      total_orders: 0,
      total_spent: 0
    };
    state.customers.unshift(newCust);
    await window.supabaseClient.insertRow('customers', newCust);
    showToast('Cliente cadastrado com sucesso!', 'success');
  }

  saveToLocalStorage();
  closeModal('modal-customer');
  renderCustomersList();
}

async function deleteCustomer(id) {
  if (confirm('Deseja excluir este cliente?')) {
    state.customers = state.customers.filter(c => c.id !== id);
    saveToLocalStorage();
    await window.supabaseClient.deleteRow('customers', id);
    showToast('Cliente removido', 'info');
    renderCustomersList();
  }
}

/* ==========================================================================
   SUPABASE SETTINGS MODAL
   ========================================================================== */

function openSettingsModal() {
  const cfg = window.supabaseClient.config;
  document.getElementById('setting-supabase-url').value = cfg.endpoint;
  document.getElementById('setting-supabase-anon').value = cfg.anonKey;
  document.getElementById('setting-supabase-secret').value = cfg.secretKey || '';
  openModal('modal-settings');
}

function handleSettingsSubmit(e) {
  e.preventDefault();
  const url = document.getElementById('setting-supabase-url').value;
  const anon = document.getElementById('setting-supabase-anon').value;
  const secret = document.getElementById('setting-supabase-secret').value;

  window.supabaseClient.saveConfig(url, anon, secret);
  showToast('Configurações Supabase salvas!', 'success');
  closeModal('modal-settings');
  refreshData();
}

/* ==========================================================================
   UTILITY & UI HELPER FUNCTIONS
   ========================================================================== */

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

function formatCurrency(val) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val || 0);
}

function formatDate(dateStr) {
  if (!dateStr) return 'N/A';
  const parts = dateStr.split('-');
  if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
  return dateStr;
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  let bg = "bg-surface-container-high border-primary-container text-on-surface";
  if (type === 'success') bg = "bg-emerald-950/90 border-emerald-500 text-emerald-200";
  if (type === 'error') bg = "bg-error-container border-error text-on-error-container";

  toast.className = `p-3 rounded-xl border shadow-xl text-body-sm font-body-sm flex items-center justify-between pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2 ${bg}`;
  toast.innerHTML = `
    <span>${escapeHtml(message)}</span>
    <button onclick="this.parentElement.remove()" class="text-tertiary hover:text-white ml-2">
      <span class="material-symbols-outlined text-[16px]">close</span>
    </button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    if (toast.parentElement) toast.remove();
  }, 4000);
}

function setupEventListeners() {
  // Global esc key listener for modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['modal-product', 'modal-category', 'modal-promotion', 'modal-coupon', 'modal-order', 'modal-customer', 'modal-new-order', 'modal-settings'].forEach(id => closeModal(id));
    }
  });
}
