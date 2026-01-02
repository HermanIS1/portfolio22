const sections = document.querySelectorAll(".section-box");

sections.forEach(section => {
    section.addEventListener("mouseenter", () => {
        document.body.classList.add("focus-active");
        section.classList.add("focus");
    });

    section.addEventListener("mouseleave", () => {
        document.body.classList.remove("focus-active");
        section.classList.remove("focus");
    });
});
