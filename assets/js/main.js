// Mobile nav toggle and active section highlighting
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (navToggle){
  navToggle.addEventListener('click', () => {
    const open = navList.classList.toggle('show');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
const links = document.querySelectorAll('.nav-list a');
const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href')));
function onScroll(){
  const pos = window.scrollY + 120;
  sections.forEach((sec, i) => {
    if (!sec) return;
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    const active = pos >= top && pos < bottom;
    links[i].classList.toggle('active', active);
  });
}
document.addEventListener('scroll', onScroll);
document.getElementById('year').textContent = new Date().getFullYear();
