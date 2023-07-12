window.onload = function() {
  let text = document.getElementById('text');

  // 폭죽 애니메이션 시작
  const fireworks = new Fireworks({
    target: document.querySelector('#fireworks')
  });
  fireworks.start();

  setTimeout(function() {
    text.style.opacity = "1";
    fireworks.stop();  // 3초 후에 폭죽 애니메이션을 멈춥니다.
  }, 3000);
};
