function attachEventsListeners() {
    const conversions = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };
    const buttons = document.querySelectorAll('input[type="button"]');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const inputType = button.previousElementSibling.id;
            const inputValue = Number(document.getElementById(inputType).value);
            if (isNaN(inputValue) || inputValue < 0) {
                return;
            }
            const days = inputValue / conversions[inputType];
            document.getElementById('days').value = days * conversions.days;
            document.getElementById('hours').value = days * conversions.hours;
            document.getElementById('minutes').value = days * conversions.minutes;
            document.getElementById('seconds').value = days * conversions.seconds;
        });
    });
}