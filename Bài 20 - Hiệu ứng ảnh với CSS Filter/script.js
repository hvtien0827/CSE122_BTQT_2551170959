function applyEffect(effect, button) {
  let image = document.getElementById('rose');
  // Xoá hiệu ứng cũ để mỗi nút chỉ thể hiện một hiệu ứng.
  image.style.filter = 'none';
  image.style.transform = 'none';
  image.style.opacity = '1';
  image.style.maskImage = 'none';

  if (effect == 'Gray') image.style.filter = 'grayscale(1)';
  if (effect == 'Xray') image.style.filter = 'invert(1) grayscale(1)';
  if (effect == 'Invert') image.style.filter = 'invert(1)';
  if (effect == 'FlipH') image.style.transform = 'scaleX(-1)';
  if (effect == 'FlipV') image.style.transform = 'scaleY(-1)';
  if (effect == 'Glow') image.style.filter = 'drop-shadow(0 0 12px gold)';
  if (effect == 'Shadow') image.style.filter = 'drop-shadow(6px 6px 4px #999)';
  if (effect == 'Bold Shadow') image.style.filter = 'drop-shadow(10px 10px 1px #ddd)';
  if (effect == 'DropShadow') image.style.filter = 'drop-shadow(-8px 8px 6px #e66)';
  if (effect == 'Blur') image.style.filter = 'blur(3px)';
  if (effect == 'Wave') image.style.filter = 'url(#wave)';
  if (effect == 'Mask') image.style.maskImage = 'linear-gradient(black, transparent)';
  if (effect == 'Alpha') image.style.opacity = '0.4';

  let buttons = document.querySelectorAll('.effects button');
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
    buttons[i].setAttribute('aria-pressed', 'false');
  }
  button.classList.add('active');
  button.setAttribute('aria-pressed', 'true');
}
