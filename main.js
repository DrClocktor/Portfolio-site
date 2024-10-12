const aboutMeDark = document.querySelector(".about-me")
const footerDark = document.querySelector("footer")
const navbarDark = document.querySelector(".navbar")

function colorSwitcher(checkbox) {
    if (checkbox.checked) {
        document.body.classList.add("dark-mode");
        aboutMeDark.style.backgroundColor = "rgb(0, 0, 0)"
        footerDark.style.backgroundColor = "rgb(0, 0, 0)"
        navbarDark.style.backgroundColor = "rgb(0, 0, 0)"

    } else {
        document.body.classList.remove("dark-mode")
        aboutMeDark.style.backgroundColor = "rgb(194, 225, 255)"
        footerDark.style.backgroundColor = "rgb(194, 225, 255)"
        navbarDark.style.backgroundColor = "rgb(194, 225, 255)"
    }
}

// En lille workaround jeg blev nødt til at lave,
// da man ikke kan ændre psuedo-elementer i JS
