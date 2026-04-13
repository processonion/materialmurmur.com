const projectDesc = {
    project1: { title: '뾰족한 손잡이 — object, 2026', desc: '재료와 형태에 대한 탐구' },
    project2: { title: '온실 — architecture, 2026', desc: '공간과 빛에 대한 실험' },
    project3: { title: '부드러운 손잡이 — object, 2025', desc: '촉각적 경험을 위한 오브젝트' }
};

function showProject(id) {
    document.querySelectorAll('.project-content').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.works-table tbody tr').forEach(r => r.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    event.currentTarget.classList.add('active');

    const desc = document.getElementById('projectDesc');
    const text = document.getElementById('projectDescText');
    text.innerHTML = `<strong>${projectDesc[id].title}</strong><p>${projectDesc[id].desc}</p>`;
    desc.style.display = 'block';

    // 랜덤 색상
    const colors = ['lightcyan', 'lightyellow', 'lightpink', 'lightgreen', 'lavender', 'peachpuff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    desc.style.background = randomColor;
}