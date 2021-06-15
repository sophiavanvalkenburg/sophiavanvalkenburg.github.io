let navbar = document.createElement('nav');
navbar.className = 'navbar sticky-top navbar-light';
navbar.innerHTML = '<a class="navbar-brand">SOPHIA CELESTE</a>';
navbar.innerHTML += '' +
    '<div class="navbar-link-container">' +
        '<a class="nav-link nav-work-link" href="/">WORK</a>' +
        '<a class="nav-link nav-about-link" href="/about">ABOUT</a>'+
    '</div>';
//navbar.innerHTML += '<a class="nav-link nav-contact-link" href="/contact">CONTACT</a>';
document.body.appendChild(navbar);
