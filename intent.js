const intentSections = document.querySelectorAll(".section-box");

intentSections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        section.classList.add("intent");
    });

    section.addEventListener("mouseleave", () => {
        section.classList.remove("intent");
    });
});
