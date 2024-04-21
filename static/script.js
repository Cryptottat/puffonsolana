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

});



function followMouse() {
    requestAnimationFrame(followMouse);
    if (Math.abs(mouseX - imgX) > 1 || Math.abs(mouseY - imgY) > 1) {
        imgX += (mouseX - imgX) * 0.1;
        imgY += (mouseY - imgY) * 0.1;
        img.style.transform = `translate(${imgX - img.width / 2}px, ${imgY - img.height / 2}px) scaleX(${lastDirection})`;
    }
}

followMouse();
