document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Script loaded successfully."); // Debugging check

    // Hero section animation
    let hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "0";
        hero.style.transform = "translateY(50px)";

        setTimeout(() => {
            hero.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            hero.style.opacity = "1";
            hero.style.transform = "translateY(0)";
        }, 500);
    }

    // Notification for "Explore Now" button
    let exploreBtn = document.querySelector(".btn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", function (event) {
            event.preventDefault();
            let userChoice = confirm(
                "This page is under construction. Stay tuned for updates!\n\nFollow us on Instagram for the latest news and updates! 📢📷\n\nClick 'OK' to visit our Instagram page."
            );
            if (userChoice) {
                window.open("https://www.instagram.com/_nebuloni_x_", "_blank");
            }
        });
    }
});