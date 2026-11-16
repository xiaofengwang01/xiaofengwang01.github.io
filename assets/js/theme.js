(function () {
    var root = document.documentElement;
    var button = document.getElementById("theme-toggle");

    function currentTheme() {
        return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    }

    function updateButton() {
        if (!button) return;
        var icon = button.querySelector("i");
        var dark = currentTheme() === "dark";
        if (icon) icon.className = dark ? "fas fa-sun" : "fas fa-moon";
        button.title = dark ? "Switch to light mode" : "Switch to dark mode";
        button.setAttribute("aria-label", button.title);
    }

    function setTheme(theme, persist) {
        root.setAttribute("data-theme", theme);
        if (persist) {
            try { localStorage.setItem("theme", theme); } catch (error) {}
        }
        updateButton();
        document.dispatchEvent(new CustomEvent("themechange", { detail: { theme: theme } }));
    }

    if (button) {
        button.addEventListener("click", function () {
            setTheme(currentTheme() === "dark" ? "light" : "dark", true);
        });
    }

    if (window.matchMedia) {
        var media = window.matchMedia("(prefers-color-scheme: dark)");
        var listener = function (event) {
            var stored = null;
            try { stored = localStorage.getItem("theme"); } catch (error) {}
            if (!stored) setTheme(event.matches ? "dark" : "light", false);
        };
        if (media.addEventListener) media.addEventListener("change", listener);
        else if (media.addListener) media.addListener(listener);
    }

    updateButton();
})();
