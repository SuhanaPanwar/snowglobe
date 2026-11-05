const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
    "This is a chapter, not your whole story.",
    "Every good thing in this world started with a dream.",
    "You are stronger than you think.",
    "Little by little, day by day, what's meant for you will find its way.",
    "What good are wings without the courage to fly?",
    "People only see the decisions you make, not the choices you had.",
    "You have to be odd to be number one.",
    "Before Alice got to Wonderland, she had to fall.",
    "If plan A doesen't work, the alphabet has 25 more letters.",
];

button.addEventListener("click", () => {
    globe.classList.add("shaking");
    setTimeout(() => globe.classList.remove("shaking"), 600);

    const pick = Math.floor(Math.random() * messages.length);
    message.textContent = messages[pick];
});