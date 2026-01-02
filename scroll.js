let lastScrollY = window.scrollY;
let sigilTimeout = null;

const sigil = document.getElementById("scroll-sigil");

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // kierunek scrolla
    if (currentScrollY > lastScrollY) {
        sigil.style.top = "auto";
        sigil.style.bottom = "30px";
    } else {
        sigil.style.bottom = "auto";
        sigil.style.top = "30px";
    }

    // pokaż sigil NATYCHMIAST
    sigil.style.opacity = "1";

    // reset timera – klucz do wolnego scrolla
    if (sigilTimeout) clearTimeout(sigilTimeout);

    sigilTimeout = setTimeout(() => {
        sigil.style.opacity = "0";
    }, 600); // ← im większa wartość, tym lepiej przy wolnym scrollu

    lastScrollY = currentScrollY;
});
