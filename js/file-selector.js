let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
})

function showFileSelector(inHeaderLink, inCPPLink) {
    let headerButton = document.createElement("hButton");
    let cppButton = document.createElement("cppButton");

    headerButton.id = "headerButton";
    headerButton.className = "highlighted-text"
    headerButton.innerHTML = "Open Header File";

    cppButton.id = "cppButton";
    cppButton.className = "highlighted-text"
    cppButton.innerHTML = "Open CPP File";
}

function openLink(inLink) {
    window.open(inLink, "_blank");
}