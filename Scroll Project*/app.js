// setdate
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// toggle with calculating height

const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  //   linkContainer.classList.toggle('show-links');
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) linkContainer.style.height = `${linkHeight}px`;
  else linkContainer.style.height = 0;
});

// fixed nav-bar
const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
window.addEventListener('scroll', function () {
  const scrollheight = window.pageYOffset;
  const navheight = navbar.getBoundingClientRect().height;

  if (scrollheight > navheight) {
    navbar.classList.add('fixed-nav');
  } else navbar.classList.remove('fixed-nav');

  if (scrollheight > 500) {
    toplink.classList.add('show-link');
  } else toplink.classList.remove('show-link');
});

// smooth scroll

const scrollLinks = document.querySelectorAll('.scroll-links');

scrollLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const ele = document.getElementById(id);

    const navheight = navbar.getBoundingClientRect().height;
    const containerHeight = linkContainer.getBoundingClientRect().height;
    const fixednav = navbar.classList.contains('fixed-nav');
    let position = ele.offsetTop - navheight;
    // console.log('fjdhfjd');
    if (!fixednav) {
      position = position - navheight;
    }
    if (navheight > 82) {
      position = position + containerHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    linkContainer.style.height = 0;
  });
});
