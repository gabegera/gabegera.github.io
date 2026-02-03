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

function setTargetGithubCode(inHeaderLink, inCPPLink) {

    fetchRawGithubText(inHeaderLink).then(text => {
        if (text != null) {
            localStorage.setItem('headerLink', inHeaderLink);
            localStorage.setItem('headerCode', text);
        }
    });

    fetchRawGithubText(inCPPLink).then(text => {
        if (text != null) {
            localStorage.setItem('headerLink', inCPPLink);
            localStorage.setItem('cppCode', text);
        }
    });
}

async function fetchRawGithubText(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch Github Raw Text');
        }

        const rawText = await response.text();
        rawText.replaceAll('<', '&lt;')
        rawText.replaceAll('>', '&gt;')
        rawText.replaceAll('&', '&amp;')
        return rawText;

    } catch (error) {
        console.error("Fetch Failed: ", error);
        return null;
    }
}