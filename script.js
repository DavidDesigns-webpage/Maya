// Miss Maya's WhatsApp number in international format (no "+" or spaces).
const WHATSAPP_NUMBER = "27847969280";

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const waLink = document.getElementById("waLink");
if (waLink) {
    waLink.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    waLink.target = "_blank";
    waLink.rel = "noopener";
}

// Package buttons on the home page link here with ?package=..., so preselect it.
const select = document.getElementById("package");
if (select) {
    const wanted = new URLSearchParams(window.location.search).get("package");
    const option = Array.from(select.options).find((o) => o.dataset.key === wanted);
    if (option) select.value = option.value;
}

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const d = new FormData(form);
        const lines = [
            "Hi Miss Maya,",
            `My name is ${d.get("name")}.`,
            d.get("grade") ? `Grade: ${d.get("grade")}` : "",
            `Package: ${d.get("package")}`,
            "",
            d.get("message"),
        ].filter((l, i, a) => l || a[i - 1]);
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
        form.querySelector(".formStatus").textContent = "Opening WhatsApp with your message…";
    });
}
