document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    const contentSections = document.querySelectorAll('.content-section');

    function setActiveSection(sectionId) {
        navLinks.forEach(l => l.classList.remove('active'));
        contentSections.forEach(section => section.classList.remove('active'));

        const activeLink = document.querySelector(`.nav-links a[data-section="${sectionId}"]`);
        const activeSection = document.getElementById(sectionId);

        if (activeLink && activeSection) {
            activeLink.classList.add('active');
            activeSection.classList.add('active');

            // Trigger animation by removing and re-adding the class
            activeSection.style.animation = 'none';
            activeSection.offsetHeight; // Force reflow
            activeSection.style.animation = '';
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const sectionId = this.getAttribute('data-section');
            setActiveSection(sectionId);
        });
    });

    // Set default active section
    setActiveSection('home');
});
