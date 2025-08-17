// Small interactivity: mobile nav, lightbox, year.
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      navMenu?.classList.remove('open');
      navToggle?.setAttribute('aria-expanded','false');
    }
  });
});

// Lightbox
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = '<button class="modal__close" aria-label="Close"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round"/></svg></button><img alt="">';
document.body.appendChild(modal);
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.modal__close');

document.querySelectorAll('.lightbox').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    modalImg.src = link.getAttribute('href');
    modal.classList.add('open');
    closeBtn.focus();
  });
});

closeBtn.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => { if(e.target === modal) modal.classList.remove('open'); });

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
