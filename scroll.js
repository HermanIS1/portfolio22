let lastScroll = window.scrollY;
const sigil = document.getElementById("scroll-sigil");

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > lastScroll) {
        sigil.style.top = "auto";
        sigil.style.bottom = "30px";
    } else {
        sigil.style.bottom = "auto";
        sigil.style.top = "30px";
    }

    sigil.style.opacity = "1";

    clearTimeout(window.sigilTimeout);
    window.sigilTimeout = setTimeout(() => {
        sigil.style.opacity = "0";
    }, 300);

    lastScroll = current;
});
