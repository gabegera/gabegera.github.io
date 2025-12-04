document.addEventListener('click', function(event) {

    if (exitAllFullscreenElements())
    {
        return;
    }

   if (event.target.classList.contains('mechanics-media')) {
       enterFullscreen(event.target.id)
   }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        exitAllFullscreenElements();
    }
})

function openLink(inLink) {
    window.open(inLink, "_blank");
}

function enterFullscreen(inID) {
    const element = document.getElementById(inID);
    if (element)
    {
        element.classList.add('fullscreen-media');
        document.body.style.overflow = 'hidden';
    }
}

function exitFullscreen(inID) {
    const element = document.getElementById(inID);
    if (element)
    {
        element.classList.remove('fullscreen-media');
        document.body.style.overflow = 'auto';
    }
}

// Attempts to minimize all elements that are currently fullscreen. Returns true if successful.
function exitAllFullscreenElements() {
    let wasSuccessful = false;

    let fullscreenElements = document.getElementsByClassName('fullscreen-media')
    for (const element of fullscreenElements) {
        exitFullscreen(element.id);
        wasSuccessful = true;
    }

    return wasSuccessful;
}