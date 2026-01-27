const revealSections = document.querySelectorAll("section");

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

revealSections.forEach(section => {
    section.classList.add("hidden");
    revealObserver.observe(section);
});
