let currentScreen = 'welcome';
let selectedRecipe = null;
let currentStepIdx = 0;
let timerInterval = null;
let cart = JSON.parse(localStorage.getItem('chefCart')) || [];

// V2 State
let currentLang = 'zh';
let currentCategory = 'all';
let searchQuery = '';

const i18n = {
    zh: {
        "home_title": "今天想吃什么？",
        "home_sub": "为您精选全网最热中西名菜",
        "search_place": "如搜索 '牛排', 'fish'...",
        "chip_all": "全部 All",
        "chip_sichuan": "辣风 Sichuan",
        "chip_yue": "经典粤 Yue",
        "chip_lu": "其他名菜 Chinese Other",
        "chip_italian": "意式 Italian",
        "chip_french": "法餐 French",
        "bot_nav_recipes": "菜谱",
        "bot_nav_cart": "购物清单",
        "min": "分钟",
        "prep_ing": "准备食材",
        "nav_overview": "制作总览图",
        "add_cart": "+ 一键加入购物清单",
        "start_cook": "▶ 开始烹饪导航",
        "cart_title": "采购清单",
        "cart_sub": "买好食材再去厨房哦",
        "cart_clear": "清空已购",
        "nav_cook": "正在烹饪",
        "nav_rem": "预计剩余",
        "nav_timer": "剩余时间",
        "nav_parallel": "同时可做 (并行任务)",
        "nav_next": "完成，下一步",
        "nav_done": "完成上菜！"
    },
    en: {
        "home_title": "What to eat today?",
        "home_sub": "Top structured recipes worldwide",
        "search_place": "Search 'steak', 'tofu'...",
        "chip_all": "All",
        "chip_sichuan": "Sichuan",
        "chip_yue": "Cantonese",
        "chip_lu": "Other Chinese",
        "chip_italian": "Italian",
        "chip_french": "French",
        "bot_nav_recipes": "Recipes",
        "bot_nav_cart": "Grocery List",
        "min": "mins",
        "prep_ing": "Ingredients",
        "nav_overview": "Timeline Overview",
        "add_cart": "+ Add to Grocery List",
        "start_cook": "▶ Start Cooking Nav",
        "cart_title": "Grocery List",
        "cart_sub": "Get ingredients before cooking",
        "cart_clear": "Clear",
        "nav_cook": "Cooking",
        "nav_rem": "Est.",
        "nav_timer": "Remaining",
        "nav_parallel": "Parallel Task",
        "nav_next": "Done, Next Step",
        "nav_done": "Serve!"
    }
};

function t(key) {
    return i18n[currentLang][key] || key;
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    renderAppStrings();
    if (currentScreen === 'home') renderHome();
    if (currentScreen === 'detail') renderRecipeDetail(selectedRecipe.id);
    if (currentScreen === 'cart') renderCart();
    if (document.getElementById('nav-screen').classList.contains('active')) renderNavStep();
}

function renderAppStrings() {
    document.getElementById('txt-home-title').innerText = t('home_title');
    document.getElementById('txt-home-subtitle').innerText = t('home_sub');
    document.getElementById('recipe-search').placeholder = t('search_place');

    document.querySelector('.chip[data-cat="all"]').innerText = t('chip_all');
    document.querySelector('.chip[data-cat="sichuan"]').innerText = t('chip_sichuan');
    document.querySelector('.chip[data-cat="yue"]').innerText = t('chip_yue');
    document.querySelector('.chip[data-cat="lu"]').innerText = t('chip_lu');
    document.querySelector('.chip[data-cat="italian"]').innerText = t('chip_italian');
    document.querySelector('.chip[data-cat="french"]').innerText = t('chip_french');

    document.querySelector('#nav-home span').innerText = t('bot_nav_recipes');
    document.querySelector('#nav-cart span').innerText = t('bot_nav_cart');

    document.querySelectorAll('.section-title')[0].innerText = t('prep_ing');
    document.querySelectorAll('.section-title')[1].innerText = t('nav_overview');
    document.querySelector('#screen-detail .btn-secondary').innerText = t('add_cart');
    document.querySelector('#screen-detail .btn-primary').innerText = t('start_cook');

    document.querySelector('#screen-cart .header h1').innerText = t('cart_title');
    document.querySelector('#screen-cart .header p').innerText = t('cart_sub');
    document.querySelector('#screen-cart .header button').innerText = t('cart_clear');

    document.querySelector('.timer-label').innerText = t('nav_timer');
    const pTask = document.querySelector('.parallel-task span');
    if (pTask) pTask.innerText = t('nav_parallel');
}

document.addEventListener('DOMContentLoaded', () => {
    // We intentionally do NOT call switchScreen('home') automatically anymore 
    // to preserve the Welcome screen entry requirement!
    document.getElementById('nav-home').addEventListener('click', () => switchScreen('home'));
    document.getElementById('nav-cart').addEventListener('click', () => switchScreen('cart'));

    renderAppStrings();
    renderCart();
});

function handleSearch() {
    searchQuery = document.getElementById('recipe-search').value.toLowerCase();
    renderHome();
}

function filterCategory(cat, el) {
    currentCategory = cat;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    renderHome();
}

function startApp() {
    switchScreen('home');
    renderHome(); // Initialize on explicit entry
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => {
        el.classList.remove('active', 'flex-active');
        el.style.display = 'none';
    });

    const target = document.getElementById(`screen-${screenId}`);
    if (screenId === 'welcome') {
        target.classList.add('flex-active');
        target.style.display = 'flex';
        document.querySelector('.bottom-nav').style.display = 'none';
    } else {
        target.classList.add('active');
        target.style.display = 'block';
        document.querySelector('.bottom-nav').style.display = 'flex';
    }

    currentScreen = screenId;
    window.scrollTo(0, 0);

    if (screenId === 'home') renderHome();
    if (screenId === 'cart') renderCart();

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    if (screenId === 'home' || screenId === 'detail') document.getElementById('nav-home').classList.add('active');
    if (screenId === 'cart') document.getElementById('nav-cart').classList.add('active');
}

function renderHome() {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = '';

    let filtered = recipesData_v2; // From updated recipes.js

    if (currentCategory !== 'all') {
        if (currentCategory === 'lu') {
            filtered = filtered.filter(r => r.cuisine !== 'italian' && r.cuisine !== 'french' && r.cuisine !== 'yue' && r.cuisine !== 'sichuan');
        } else {
            filtered = filtered.filter(r => r.cuisine === currentCategory);
        }
    }

    if (searchQuery) {
        filtered = filtered.filter(r =>
            r.name_zh.toLowerCase().includes(searchQuery) ||
            r.name_en.toLowerCase().includes(searchQuery) ||
            r.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }

    filtered.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.onclick = () => renderRecipeDetail(recipe.id);

        const nameText = currentLang === 'zh' ? recipe.name_zh : recipe.name_en;
        const diffText = currentLang === 'zh' ? recipe.difficulty_zh : recipe.difficulty_en;

        card.innerHTML = `
            <img src="${recipe.image}" alt="${nameText}">
            <div class="recipe-info">
                <h3 class="recipe-name">${nameText}</h3>
                <div class="recipe-meta">
                    <span>${recipe.time} ${t('min')}</span>
                    <span>${diffText}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderRecipeDetail(id) {
    selectedRecipe = recipesData_v2.find(r => r.id === id);
    if (!selectedRecipe) return;

    const nameText = currentLang === 'zh' ? selectedRecipe.name_zh : selectedRecipe.name_en;
    const diffText = currentLang === 'zh' ? selectedRecipe.difficulty_zh : selectedRecipe.difficulty_en;

    document.getElementById('detail-img').src = selectedRecipe.image;
    document.getElementById('detail-title').innerText = nameText;
    document.getElementById('detail-time').innerText = `${selectedRecipe.time} ${t('min')}`;
    document.getElementById('detail-diff').innerText = diffText;

    const ingContainer = document.getElementById('detail-ingredients');
    ingContainer.innerHTML = '';
    selectedRecipe.ingredients.forEach(ing => {
        const ingName = currentLang === 'zh' ? ing.name_zh : ing.name_en;
        const row = document.createElement('div');
        row.className = 'ingredient-row';
        row.innerHTML = `<span>${ingName}</span><span>${ing.amount}</span>`;
        ingContainer.appendChild(row);
    });

    const timelineContainer = document.getElementById('detail-timeline');
    timelineContainer.innerHTML = '';
    selectedRecipe.steps.forEach((step, idx) => {
        const descText = currentLang === 'zh' ? step.instruction_zh : step.instruction_en;
        const node = document.createElement('div');
        node.className = 'timeline-item';
        let timeStr = step.hasTimer ? `<span style="color:var(--warning)">[ ${Math.ceil(step.timeSeconds / 60)}${t('min')} ]</span> ` : '';
        node.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <strong>${step.action}</strong>
                <p>${timeStr}${descText}</p>
            </div>
        `;
        timelineContainer.appendChild(node);
    });

    switchScreen('detail');
}

function addIngredientsToCart() {
    selectedRecipe.ingredients.forEach(ing => {
        const item = {
            id: Date.now() + Math.random(),
            name_zh: ing.name_zh,
            name_en: ing.name_en,
            amount: ing.amount,
            checked: false
        };
        cart.push(item);
    });
    saveCart();

    // Play sound
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.5);

    const btn = document.querySelector('#screen-detail .btn-secondary');
    btn.innerHTML = `✓ ${currentLang === 'zh' ? '已添加' : 'Added'}`;
    btn.style.background = 'var(--success)';

    setTimeout(() => {
        btn.innerHTML = `${t('add_cart')}`;
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    }, 2000);
}

function startNavigation() {
    currentStepIdx = 0;
    const navScreen = document.getElementById('nav-screen');
    navScreen.classList.add('active');
    renderNavStep();
}

function closeNavigation() {
    clearInterval(timerInterval);
    document.getElementById('nav-screen').classList.remove('active');
}

function closeNavigationToHome() {
    clearInterval(timerInterval);
    document.getElementById('nav-screen').classList.remove('active');
    switchScreen('home');
}

const actionIcons = {
    "cut": { icon: "🔪", anim: "anim-cut" },
    "fry": { icon: "🍳", anim: "anim-fry" },
    "boil": { icon: "🍲", anim: "anim-boil" },
    "mix": { icon: "🥣", anim: "anim-boil" },
    "default": { icon: "👨‍🍳", anim: "anim-boil" }
};

function getActionStyle(actionText) {
    if (/切|配|备/.test(actionText) || /cut|prep/i.test(actionText)) return actionIcons.cut;
    if (/炒|煎|干锅|爆|烧|油/.test(actionText) || /fry|sear/i.test(actionText)) return actionIcons.fry;
    if (/煮|炖|汤|沸|蒸/.test(actionText) || /boil|simmer/i.test(actionText)) return actionIcons.boil;
    if (/拌|匀|调/.test(actionText) || /mix/i.test(actionText)) return actionIcons.mix;
    return actionIcons.default;
}

function renderNavStep() {
    const step = selectedRecipe.steps[currentStepIdx];
    const total = selectedRecipe.steps.length;

    const actionData = getActionStyle(step.action);
    const iconEl = document.getElementById('nav-step-icon');
    iconEl.innerText = actionData.icon;
    iconEl.className = `nav-step-icon ${actionData.anim}`;

    const descText = currentLang === 'zh' ? step.instruction_zh : step.instruction_en;
    document.getElementById('nav-step-num').innerText = `Step ${currentStepIdx + 1} / ${total}`;
    document.getElementById('nav-step-action').innerText = step.action;
    document.getElementById('nav-step-desc').innerText = descText;

    const pb = document.getElementById('nav-progress-bar');
    pb.innerHTML = '';
    let remainingSeconds = 0;

    selectedRecipe.steps.forEach((s, idx) => {
        const bar = document.createElement('div');
        bar.className = 'nav-progress-step';
        if (idx < currentStepIdx) bar.classList.add('completed');
        else if (idx === currentStepIdx) bar.classList.add('active');
        pb.appendChild(bar);

        if (idx >= currentStepIdx) {
            remainingSeconds += s.timeSeconds || 60;
        }
    });

    const timeTitle = t('nav_cook');
    const remStr = t('nav_rem');
    const minStr = t('min');
    document.querySelector('#nav-screen .nav-top div').innerHTML =
        `${timeTitle} <span id="nav-total-time" style="font-size:13px; color:var(--text-muted); font-weight:normal; margin-left: 10px;">(${remStr}: ${Math.ceil(remainingSeconds / 60)} ${minStr})</span>`;

    clearInterval(timerInterval);
    const tc = document.getElementById('nav-timer-container');
    if (step.hasTimer) {
        tc.style.display = 'flex';
        startTimer(step.timeSeconds);
    } else {
        tc.style.display = 'none';
    }

    const pc = document.getElementById('nav-parallel-task');
    if (step.hasParallel) {
        pc.style.display = 'block';
        const pDesc = currentLang === 'zh' ? step.parallelTask_zh : step.parallelTask_en;
        document.getElementById('nav-parallel-desc').innerText = pDesc;
    } else {
        pc.style.display = 'none';
    }

    const nextBtn = document.getElementById('nav-next-btn');
    if (currentStepIdx < total - 1) {
        nextBtn.innerText = t('nav_next');
        nextBtn.style.background = "var(--primary)";
    } else {
        nextBtn.innerText = t('nav_done');
        nextBtn.style.background = "var(--success)";
    }
}

function startTimer(seconds) {
    let remain = seconds;
    const txt = document.getElementById('nav-timer-text');
    const circle = document.getElementById('nav-timer-circle');

    function update() {
        if (remain <= 0) {
            clearInterval(timerInterval);
            txt.innerText = "00:00";
            circle.style.background = "var(--primary)";
            playAlarm();
            return;
        }

        const m = Math.floor(remain / 60).toString().padStart(2, '0');
        const s = (remain % 60).toString().padStart(2, '0');
        txt.innerText = `${m}:${s}`;

        const percent = ((seconds - remain) / seconds) * 100;
        circle.style.background = `conic-gradient(var(--warning) ${percent}%, transparent ${percent}%)`;

        remain--;
    }

    update();
    timerInterval = setInterval(update, 1000);
}

function playAlarm() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, ctx.currentTime);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.2);
    osc.frequency.setValueAtTime(400, ctx.currentTime + 0.4);
    osc.frequency.setValueAtTime(600, ctx.currentTime + 0.6);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.5, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 1);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1);
}

function nextNavStep() {
    const total = selectedRecipe.steps.length;
    if (currentStepIdx < total - 1) {
        currentStepIdx++;
        renderNavStep();
    } else {
        closeNavigation();
    }
}

// Cart Logic
function renderCart() {
    const list = document.getElementById('cart-list');
    list.innerHTML = '';

    if (cart.length === 0) {
        list.innerHTML = `<p style="text-align:center; color:var(--text-muted); margin-top:50px;">清单空空如也~</p>`;
        return;
    }

    cart.forEach(item => {
        const itemText = currentLang === 'zh' ? item.name_zh : item.name_en;
        const div = document.createElement('div');
        div.className = `cart-item ${item.checked ? 'checked' : ''}`;
        div.innerHTML = `
            <div>
                <strong style="color:var(--text-color); margin-right: 15px;">${itemText}</strong>
                <span style="color:var(--primary)">${item.amount}</span>
            </div>
            <div class="cart-checkbox" onclick="toggleCartItem(${item.id})"></div>
        `;
        list.appendChild(div);
    });
}

function toggleCartItem(id) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        saveCart();
        renderCart();
    }
}

function clearCart() {
    cart = cart.filter(i => !i.checked);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem('chefCart', JSON.stringify(cart));
}
