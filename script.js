
function comprar(produto) {
    const encodedProduto = encodeURIComponent(produto);
    window.location.href = `purchase.html?produto=${encodedProduto}`;
}
function scrollLeft() {
    const slider = document.getElementById('product-slider');
    slider.scrollBy({ left: -200, behavior: 'smooth' });
}

function scrollRight() {
    const slider = document.getElementById('product-slider');
    slider.scrollBy({ left: 200, behavior: 'smooth' });
}
/*
// Alternância de imagens no banner
let currentBannerIndex = 0;
const banners = document.querySelectorAll('.banner-container a');
const bannerInterval = 2000; // 2 segundos

function switchBanner() {
    banners[currentBannerIndex].querySelector('img').classList.remove('active');
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    banners[currentBannerIndex].querySelector('img').classList.add('active');
}

setInterval(switchBanner, bannerInterval);
*/
let currentBannerIndex = 0;
const banners = document.querySelectorAll('.banner-container a');
const bannerInterval = 2000; // 2 segundos
let interval;
// Alternância automática de imagens no banner
function switchBanner() {
    banners[currentBannerIndex].querySelector('img').classList.remove('active');
    currentBannerIndex = (currentBannerIndex + 1) % banners.length;
    banners[currentBannerIndex].querySelector('img').classList.add('active');
}

// Iniciar alternância
function startBannerRotation() {
    interval = setInterval(switchBanner, bannerInterval);
}

// Parar alternância
function stopBannerRotation() {
    clearInterval(interval);
}

// Adicionar eventos de pausa e retomada
const bannerContainer = document.querySelector('.banner-container');
bannerContainer.addEventListener('mouseenter', stopBannerRotation);
bannerContainer.addEventListener('mouseleave', startBannerRotation);

// Iniciar a alternância ao carregar
startBannerRotation();

