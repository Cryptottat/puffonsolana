let mouseX = 0, mouseY = 0, imgX = window.innerWidth / 2, imgY = window.innerHeight / 2, lastX = window.innerWidth / 2;
let lastDirection = 1; // 초기 방향을 오른쪽으로 설정
const img = document.getElementById('follow-img');
const waveContainer = document.getElementById('wave-effect');
let lastWaveTime = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log('Mouse moved to:', mouseX, mouseY); // 마우스 위치 로그 출력

    if (mouseX !== lastX) {
        lastDirection = mouseX > lastX ? 1 : -1;
        img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(${lastDirection})`;
        lastX = mouseX;
    }
    if (Date.now() - lastWaveTime > 500) {
        createWave(mouseX, mouseY);
        lastWaveTime = Date.now();
    }
});

function createWave(x, y) {
    console.log('Creating wave at:', x, y); // 파문 생성 로그 출력
    const wave = document.createElement('div');
    wave.className = 'wave';
    wave.style.left = `${x - 150}px`; // 중앙 정렬을 위해 조정
    wave.style.top = `${y - 150}px`; // 중앙 정렬을 위해 조정
    wave.style.width = '300px'; // 원 크기 설정
    wave.style.height = '300px'; // 원 크기 설정
    waveContainer.appendChild(wave);
    console.log('Wave added to container'); // DOM에 원 추가 로그 출력
    setTimeout(() => {
        wave.remove();
        console.log('Wave removed'); // 원 제거 로그 출력
    }, 500);
}

function followMouse() {
    requestAnimationFrame(followMouse);
    if (Math.abs(mouseX - imgX) > 1 || Math.abs(mouseY - imgY) > 1) {
        imgX += (mouseX - imgX) * 0.1;
        imgY += (mouseY - imgY) * 0.1;
        img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(${lastDirection})`;
    }
}

followMouse();
