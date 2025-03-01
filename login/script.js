document.addEventListener("DOMContentLoaded", function () {
    console.log("Maintenance mode is active.");

    document.getElementById("goBackBtn").addEventListener("click", function (event) {
        event.preventDefault();
        document.body.style.opacity = "0";
        setTimeout(() => {
            window.location.href = "../";
        }, 300);
    });
});