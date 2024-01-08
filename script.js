const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const navItems = document.querySelectorAll('.navbar-links ul li');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navbarLinks.classList.remove('active');
  });
});

// scroll animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.leftR');
hiddenElements2.forEach((el) => observer.observe(el));

const hiddenElements3 = document.querySelectorAll('.rightL');
hiddenElements3.forEach((el) => observer.observe(el));

const hiddenElements4 = document.querySelectorAll('.down');
hiddenElements4.forEach((el) => observer.observe(el));


