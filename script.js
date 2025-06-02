document.addEventListener("DOMContentLoaded", function () {
    const text = "TEAM";
    const container = document.getElementById("team-text");

    text.split("").forEach((char, index) => {
        let span = document.createElement("span");
        span.textContent = char;
        span.classList.add("letter");
        span.style.animationDelay = `${index * 0.3}s`; // ทำให้ตัวอักษรปรากฏทีละตัว
        container.appendChild(span);
    });
});