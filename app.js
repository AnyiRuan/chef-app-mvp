// State
let currentScreen = 'welcome';
let selectedRecipe = null;
let currentStepIdx = 0;
let timerInterval = null;
let shoppingList = JSON.parse(localStorage.getItem('chefShoppingList') || '[]');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderHome();
    renderCart();

    // Bottom Nav Listeners
    document.getElementById('nav-home').addEventListener('click', () => switchScreen('home'));
    document.getElementById('nav-cart').addEventListener('click', () => switchScreen('cart'));

    // Welcome
    switchScreen('welcome');
});

// App Start
function startApp() {
    switchScreen('home');
}

// Routing
function switchScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
        s.classList.remove('flex-active');
    });

    const target = document.getElementById(`screen-${screenId}`);
    const navBar = document.querySelector('.bottom-nav');

    if (screenId === 'welcome') {
        target.classList.add('flex-active');
        navBar.style.display = 'none';
    } else {
        target.classList.add('active');
        navBar.style.display = 'flex';
    }

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (document.getElementById(`nav-${screenId}`)) {
        document.getElementById(`nav-${screenId}`).classList.add('active');
    }
    window.scrollTo(0, 0);
}

// Render Home Grid
function renderHome() {
    const grid = document.getElementById('recipe-grid');
    grid.innerHTML = '';
    recipesData.forEach(r => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <img src="${r.image}" alt="${r.name}">
            <div class="recipe-info">
                <h3>${r.name}</h3>
                <div class="recipe-meta">
                    <span>${r.time}分钟</span>
                    <span>${r.difficulty}</span>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openDetail(r));
        grid.appendChild(card);
    });
}

// Render Recipe Detail
function openDetail(recipe) {
    selectedRecipe = recipe;
    document.getElementById('detail-img').src = recipe.image;
    document.getElementById('detail-title').innerText = recipe.name;
    document.getElementById('detail-time').innerText = recipe.time + '分钟';
    document.getElementById('detail-diff').innerText = recipe.difficulty;

    const ingList = document.getElementById('detail-ingredients');
    ingList.innerHTML = '';
    recipe.ingredients.forEach(i => {
        ingList.innerHTML += `<div class="ingredient-item"><span>${i.name}</span><span>${i.amount}</span></div>`;
    });

    // Render Timeline map
    const timeList = document.getElementById('detail-timeline');
    if (timeList) {
        timeList.innerHTML = '';
        recipe.steps.forEach((s, idx) => {
            let timeStr = s.hasTimer ? Math.ceil(s.timeSeconds / 60) + '分钟' : '快速操作';
            let parallelHTML = s.hasParallel ? `<div class="timeline-parallel">👉 顺手做: ${s.parallelTask}</div>` : '';
            timeList.innerHTML += `
                <div class="timeline-item">
                    <div class="timeline-time">${timeStr}</div>
                    <div class="timeline-title">${idx + 1}. ${s.action} - ${s.title}</div>
                    <div class="timeline-desc">${s.instruction}</div>
                    ${parallelHTML}
                </div>
            `;
        });
    }

    switchScreen('detail');
}

// Shopping List Functions
function addIngredientsToCart() {
    if (!selectedRecipe) return;
    const addedCount = selectedRecipe.ingredients.length;

    selectedRecipe.ingredients.forEach(i => {
        // Prevent exact duplicates
        const exists = shoppingList.find(item => item.name === i.name && !item.checked);
        if (!exists) {
            shoppingList.push({ id: Date.now() + Math.random(), name: i.name, amount: i.amount, checked: false });
        }
    });

    saveCart();
    renderCart();
    alert(`已将 ${addedCount} 项食材加入购物清单！`);

    // Animate cart icon
    const cartIcon = document.getElementById('nav-cart');
    cartIcon.style.transform = 'scale(1.2)';
    setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);
}

function toggleCartItem(id) {
    const item = shoppingList.find(i => i.id === id);
    if (item) {
        item.checked = !item.checked;
        saveCart();
        renderCart();
    }
}

function clearCart() {
    if (confirm('确定要清空已购买的食材吗？')) {
        shoppingList = shoppingList.filter(i => !i.checked);
        saveCart();
        renderCart();
    }
}

function saveCart() {
    localStorage.setItem('chefShoppingList', JSON.stringify(shoppingList));
}

function renderCart() {
    const list = document.getElementById('cart-list');
    list.innerHTML = '';

    if (shoppingList.length === 0) {
        list.innerHTML = '<p style="text-align:center; color: var(--text-muted); margin-top:50px;">购物清单为空，去看看菜谱吧！</p>';
        return;
    }

    // Sort unchecked first
    const sorted = [...shoppingList].sort((a, b) => a.checked === b.checked ? 0 : a.checked ? 1 : -1);

    sorted.forEach(i => {
        const item = document.createElement('div');
        item.className = `cart-item ${i.checked ? 'checked' : ''}`;
        item.innerHTML = `
            <div class="checkbox"></div>
            <div class="cart-text" style="flex:1">
                <div style="font-weight:600">${i.name}</div>
                <div style="font-size:13px; color:var(--text-muted)">${i.amount}</div>
            </div>
        `;
        item.addEventListener('click', () => toggleCartItem(i.id));
        list.appendChild(item);
    });
}

// Cooking Navigation Logic

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playAlertSound() {
    try {
        if (audioCtx.state === 'suspended') audioCtx.resume();
        for (let i = 0; i < 4; i++) {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.5, audioCtx.currentTime + (i * 0.3));
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + (i * 0.3) + 0.15);
            osc.start(audioCtx.currentTime + (i * 0.3));
            osc.stop(audioCtx.currentTime + (i * 0.3) + 0.2);
        }
    } catch (e) { console.warn("Audio failed", e); }
}

function startNavigation() {
    if (!selectedRecipe || !selectedRecipe.steps || selectedRecipe.steps.length === 0) {
        alert("该菜谱暂无动态步骤数据！");
        return;
    }

    // On starting navigation, we definitely need user interaction to unlock audio
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    currentStepIdx = 0;
    document.getElementById('nav-screen').classList.add('active');
    renderNavStep();
}

function closeNavigation() {
    if (confirm('即将退出烹饪导航，确定吗？')) {
        clearInterval(timerInterval);
        document.getElementById('nav-screen').classList.remove('active');
    }
}

function renderNavStep() {
    const step = selectedRecipe.steps[currentStepIdx];
    const total = selectedRecipe.steps.length;

    document.getElementById('nav-step-num').innerText = `Step ${currentStepIdx + 1} / ${total}`;
    document.getElementById('nav-step-action').innerText = step.action;
    document.getElementById('nav-step-desc').innerText = step.instruction;

    // Timer handling
    clearInterval(timerInterval);
    const tc = document.getElementById('nav-timer-container');
    if (step.hasTimer) {
        tc.style.display = 'flex';
        startTimer(step.timeSeconds);
    } else {
        tc.style.display = 'none';
    }

    // Parallel task
    const pc = document.getElementById('nav-parallel-task');
    if (step.hasParallel && step.parallelTask) {
        pc.style.display = 'block';
        document.getElementById('nav-parallel-desc').innerText = step.parallelTask;
    } else {
        pc.style.display = 'none';
    }

    // Next Hint
    const nextBtn = document.getElementById('nav-next-btn');
    if (currentStepIdx < total - 1) {
        nextBtn.innerText = "完成，下一步";
        nextBtn.style.background = "var(--primary)";
    } else {
        nextBtn.innerText = "完成上菜！";
        nextBtn.style.background = "var(--success)";
    }
}

function nextNavStep() {
    if (currentStepIdx >= selectedRecipe.steps.length - 1) {
        alert('恭喜完成！去享用美食吧！');
        closeNavigation();
        return;
    }
    currentStepIdx++;
    renderNavStep();
}

function startTimer(totalSeconds) {
    let remaining = totalSeconds;
    const timeEl = document.getElementById('nav-timer-text');
    const circleEl = document.getElementById('nav-timer-circle');

    timeEl.style.color = "var(--warning)";
    circleEl.style.background = `conic-gradient(var(--warning) 100%, #222 0)`;

    const update = () => {
        const m = Math.floor(remaining / 60).toString().padStart(2, '0');
        const s = (remaining % 60).toString().padStart(2, '0');
        timeEl.innerText = `${m}:${s}`;

        const percentage = (remaining / totalSeconds) * 100;
        circleEl.style.background = `conic-gradient(var(--warning) ${percentage}%, #222 0)`;

        if (remaining <= 5 && remaining > 0) {
            timeEl.style.color = "var(--primary)";
            circleEl.style.background = `conic-gradient(var(--primary) ${percentage}%, #222 0)`;
        }

        if (remaining <= 0) {
            clearInterval(timerInterval);
            timeEl.innerText = "00:00";
            timeEl.style.color = "var(--success)";
            circleEl.style.background = `conic-gradient(var(--success) 100%, #222 0)`;
            playAlertSound();
        }
        remaining--;
    };

    update(); // first tick
    timerInterval = setInterval(update, 1000);
}
