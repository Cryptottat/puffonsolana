let mouseX = 0, mouseY = 0, imgX = window.innerWidth / 2, imgY = window.innerHeight / 2, lastX = imgX;
const img = document.getElementById('follow-img');
const wave = document.getElementById('wave-effect');

// 이미지를 중앙에서 시작하도록 초기화
window.onload = () => {
    img.style.display = 'block';
    img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(1)`;
};

document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    fadeInEffect();

    // 마우스의 좌우 이동 방향에 따라 이미지 반전
    if (mouseX > lastX) {
        img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(1)`; // 기본 방향
    } else if (mouseX < lastX) {
        img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(-1)`; // 반전 방향
    }
    lastX = mouseX; // 마지막 위치 업데이트
});

function fadeInEffect() {
    wave.style.opacity = 0.8; // 물결 효과 보이기
    setTimeout(() => {
        wave.style.opacity = 0; // 물결 효과 점차 사라지도록
    }, 500);
}

function followMouse() {
    requestAnimationFrame(followMouse);
    imgX += (mouseX - imgX) * 0.1;
    imgY += (mouseY - imgY) * 0.1;
    // 이미지의 방향 유지 및 위치 갱신
    img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(${mouseX > lastX ? 1 : -1})`;
}

followMouse(); // 애니메이션 시작
