// 이미지 랜덤 크기
document.querySelectorAll('.left img').forEach(img => {
    const size = Math.floor(Math.random() * 11) + 60; // 60~70%
    const margin = Math.floor(Math.random() * 20); // 0~20% 여백
    img.style.width = size + '%';
    img.style.marginLeft = margin + '%';
});

document.querySelectorAll('.right img').forEach(img => {
    const size = Math.floor(Math.random() * 11) + 60;
    const margin = Math.floor(Math.random() * 20);
    img.style.width = size + '%';
    img.style.marginLeft = margin + '%';
});

// 이미지 순서 셔플 (img만 섞기)
function shuffleImages(selector) {
    const section = document.querySelector(selector);
    const items = [...section.querySelectorAll('img, .text-card')]; // img + text-card 둘 다
    items.sort(() => Math.random() - 0.5);
    items.forEach(item => section.appendChild(item));
}

shuffleImages('.left');
shuffleImages('.right');

// footer 맨 아래 고정
const right = document.querySelector('.right');
const footer = document.querySelector('footer');
right.appendChild(footer);

// about 모달
const aboutLink = document.querySelector('a[href="#about"]');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

aboutLink.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');

    // 화면 중앙 박스 영역 (모달박스 두개 차지하는 영역 대략)
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const safeZone = {
        left: centerX - 500,
        right: centerX + 500,
        top: centerY - 250,
        bottom: centerY + 250
    };

    // 바깥 4구역 중 랜덤 배치
    const zones = [
        { x: [20, safeZone.left - 200], y: [20, window.innerHeight - 200] }, // 왼쪽
        { x: [safeZone.right, window.innerWidth - 200], y: [20, window.innerHeight - 200] }, // 오른쪽
        { x: [20, window.innerWidth - 200], y: [20, safeZone.top - 200] }, // 위
        { x: [20, window.innerWidth - 200], y: [safeZone.bottom, window.innerHeight - 200] }, // 아래
    ];

    document.querySelectorAll('.floating-img').forEach(img => {
        const zone = zones[Math.floor(Math.random() * zones.length)];
        const x = Math.random() * (zone.x[1] - zone.x[0]) + zone.x[0];
        const y = Math.random() * (zone.y[1] - zone.y[0]) + zone.y[0];
        img.style.left = x + 'px';
        img.style.top = y + 'px';
    });
});

modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
});

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// contact 모달
const contactLink = document.querySelector('a[href="#contact"]');
const contactModal = document.getElementById('contactModal');
const contactModalClose = document.getElementById('contactModalClose');

contactLink.addEventListener('click', function(e) {
    e.preventDefault();
    contactModal.classList.add('active');
});

contactModalClose.addEventListener('click', function() {
    contactModal.classList.remove('active');
});

contactModal.addEventListener('click', function(e) {
    if (e.target === contactModal) {
        contactModal.classList.remove('active');
    }
});

// 모바일에서 좌우 이미지 합치기
if (window.innerWidth <= 768) {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const allImages = [
        ...left.querySelectorAll('img'),
        ...right.querySelectorAll('img')
    ];
    
    // 랜덤 섞기
    allImages.sort(() => Math.random() - 0.5);
    
    // left에 전부 넣기
    allImages.forEach(img => left.appendChild(img));
    
    // right 숨기기
    right.style.display = 'none';
}

