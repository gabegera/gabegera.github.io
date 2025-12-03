document.addEventListener('click', function(event) {
   if (event.target.classList.contains('mechanics-media')) {
       if (event.target.classList.contains('fullscreen-media')) {
           exitFullscreen(event.target.id)
       }
       else {
           enterFullscreen(event.target.id)
       }
   }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        let fullscreenElements = document.getElementsByClassName('fullscreen-media')
        for (const element of fullscreenElements) {
            exitFullscreen(element.id);
        }
    }
})

function openLink(inLink) {
    window.open(inLink, "_blank");
}

function enterFullscreen(inID) {
    const element = document.getElementById(inID);

    let fullscreenElements = document.getElementsByClassName("fullscreen-media");
    if (fullscreenElements.length > 0)
    {
        // This is a very janky solution to make sure that other elements don't go fullscreen if another element is already fullscreen.
        let isFullscreenTargetCorrect = false;

        for (const element of fullscreenElements) {
            if (element.id === inID)
            {
                isFullscreenTargetCorrect = true;
            }

            if (!isFullscreenTargetCorrect)
            {
                return;
            }
        }
    }

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