let navbar = document.createElement('nav');
navbar.className = 'navbar sticky-top navbar-light';
navbar.innerHTML = '<a class="navbar-brand">SOPHIA CELESTE</a>';
navbar.innerHTML += '<a class="nav-link nav-work-link" href="/">WORK</a>';
navbar.innerHTML += '<a class="nav-link nav-about-link" href="/about">ABOUT</a>';
//navbar.innerHTML += '<a class="nav-link nav-contact-link" href="/contact">CONTACT</a>';
document.body.appendChild(navbar);
