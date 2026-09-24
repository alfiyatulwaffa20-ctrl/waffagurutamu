const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.pill-nav');
const navigationLinks = document.querySelectorAll('.pill-nav a');
const revealItems = document.querySelectorAll('.reveal');

menuButton.addEventListener('click', () => {
	const isOpen = navigation.classList.toggle('open');
	menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigationLinks.forEach((link) => {
	link.addEventListener('click', () => {
		navigation.classList.remove('open');
		menuButton.setAttribute('aria-expanded', 'false');
		navigationLinks.forEach((item) => item.classList.remove('active'));
		link.classList.add('active');
	});
});

const revealObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('visible');
			revealObserver.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));
