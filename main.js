const iconTheme = document.querySelector(".iconTheme");

if (JSON.parse(localStorage.getItem("darkTheme"))) addDarkTheme();

iconTheme.addEventListener("click", () => {
    if (document.body.classList.contains("darktheme")) {
        removeDarkTheme();
        localStorage.setItem("darkTheme", false);
        return;
    }

    addDarkTheme();
    localStorage.setItem("darkTheme", true);
});

function removeDarkTheme() {
    document.body.classList.remove("darktheme");
    iconTheme.textContent = "🌑";
}

function addDarkTheme() {
    document.body.classList.add("darktheme");
    iconTheme.textContent = "☀️";
}
