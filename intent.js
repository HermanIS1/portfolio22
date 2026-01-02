const boxes = document.querySelectorAll(".section-box");

boxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("intent");
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("intent");
    });
});
