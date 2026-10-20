document.getElementById('theme-toggle').onclick = function () {
  document.body.classList.toggle('toi');
  let dark = document.body.classList.contains('toi');
  this.setAttribute('aria-checked', dark);
  let label = document.getElementById('theme-label');
  if (dark) {
    label.textContent = 'Đang ở chế độ tối.';
  } else {
    label.textContent = 'Đang ở chế độ sáng.';
  }
};
