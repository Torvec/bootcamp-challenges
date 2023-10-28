const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

// Check if the PWA is already installed or not
if (window.matchMedia('(display-mode: standalone)').matches) {
    butInstall.style.display = 'none';
}

// Store the event in window.deferredPrompt for later use, install button is visible
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.style.display = 'inline-block';
});

// When the install button is clicked, prompt the user to install the PWA, hide the install button
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.style.display = 'none';
});

// When the PWA is installed, nullify the deferredPrompt variable
window.addEventListener('appinstalled', () => {
    window.deferredPrompt = null;
});