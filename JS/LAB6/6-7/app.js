function lockedProfile() {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach(profile => {
        const lockRadio = profile.querySelector('input[value="lock"]');
        const unlockRadio = profile.querySelector('input[value="unlock"]');
        const hiddenFields = profile.querySelector('div[id^="user"][id$="HiddenFields"]');
        const button = profile.querySelector('button');
        button.addEventListener('click', () => {
            if (unlockRadio.checked) {
                if (hiddenFields.style.display === 'none' || hiddenFields.style.display === '') {
                    hiddenFields.style.display = 'block';
                    button.textContent = 'Hide it';
                } else {
                    hiddenFields.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    });
}