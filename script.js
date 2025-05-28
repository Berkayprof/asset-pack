function toggleVisibility(id) {
    var element = document.getElementById(id);

    if (element.classList.contains("hidden")) {
        element.style.maxHeight = element.scrollHeight + "px";
        element.classList.remove("hidden");
        element.classList.add("visible");
    } else {
        element.style.maxHeight = "0px";
        setTimeout(() => {
            element.classList.remove("visible");
            element.classList.add("hidden");
        }, 300); // Wacht tot animatie klaar is
    }
}
