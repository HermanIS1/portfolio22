const trail = document.getElementById("cursor-trail");

document.addEventListener("mousemove", (e) => {
    trail.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
