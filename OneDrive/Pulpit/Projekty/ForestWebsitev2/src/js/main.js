const navItems = document.querySelector('.nav-mobile');
const burgerBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.desktop');
const allNavItemsMobile = document.querySelectorAll('.mobile');
const footerYear = document.querySelector('.footer__year');
let sections = document.querySelectorAll('.section');

const handleNav = () => {
	navItems.classList.toggle('nav-mobile--active');

	allNavItemsMobile.forEach((item) => {
		item.addEventListener('click', () => {
			navItems.classList.remove('nav-mobile--active');
		});
	});
};

burgerBtn.addEventListener('click', handleNav);

//automatyczne dodawanie roku
const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();

const scrollSpy = () => {
	sections.forEach(() => {
		let top = window.scrollY + 92;

		if (top < 350) {
			allNavItems[0].classList.add('active');
		} else if (top > 351 && top < 1000) {
			allNavItems[0].classList.remove('active');
			allNavItems[1].classList.add('active');
		} else if (top > 1000) {
			allNavItems[1].classList.remove('active');
			allNavItems[2].classList.add('active');
		} 
	});
};

window.addEventListener('scroll', scrollSpy);
