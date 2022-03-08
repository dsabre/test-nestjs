const sidebarId   = "#sidebar";
const activeClass = "bg-slate-600";
const menuLinks   = `${sidebarId} nav a`;

function setLinkActive(href) {
	const activeLink = document.querySelector(`${menuLinks}[href="${href}"]`);
	
	document.querySelectorAll(menuLinks).forEach(i => i.classList.remove(activeClass));
	
	if (activeLink) {
		activeLink.classList.add(activeClass);
	}
	
	return !!activeLink;
}

(function() {
	const mobileMenuButtons = document.querySelectorAll(".mobile-menu-button");
	const sidebar           = document.querySelector(sidebarId);
	
	mobileMenuButtons.forEach(btn => btn.addEventListener("click", () => sidebar.classList.toggle("-translate-x-full")));
	
	if (!setLinkActive(location.pathname)) {
		const re = new RegExp("^\/news\/");
		if (re.exec(location.pathname)) {
			setLinkActive("/news");
		}
	}
})();