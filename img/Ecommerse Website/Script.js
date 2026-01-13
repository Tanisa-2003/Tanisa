const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.onclick = () => nav.classList.add('active');
}

if (close) {
  close.onclick = () => nav.classList.remove('active');
}
