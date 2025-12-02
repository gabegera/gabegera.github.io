function openLink(inLink) {
    window.open(inLink, "_blank");
}

function toggleFullscreen(inID) {
    const element = document.getElementById(inID);

    if (element) {
        if (element.classList.contains("fullscreen-media")) {
            element.classList.remove("fullscreen-media");
            element.classList.add("mechanics-media");
        }
        else {
            element.classList.remove("mechanics-media");
            element.classList.add("fullscreen-media");
        }
    }
}