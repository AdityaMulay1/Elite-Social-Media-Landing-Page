// JavaScript for scroll effect
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.backgroundColor = "#555"; // Change the color on scroll
    } else {
        nav.style.backgroundColor = "#333"; // Default color
    }
});

// JavaScript for hover effect
const menuItems = document.querySelectorAll("nav a");

menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        item.style.color = "red"; // Change text color on hover
    });

    item.addEventListener("mouseout", () => {
        item.style.color = "white"; // Restore default text color
    });
});
