function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', convertFromDays);
    hoursBtn.addEventListener('click', convertFromHours);
    minutesBtn.addEventListener('click', convertFromMinutes);
    secondsBtn.addEventListener('click', convertFromSeconds);
}

function convertFromDays() {
    const daysInput = document.getElementById('days');
    const days = parseFloat(daysInput.value);

    if (isNaN(days)) {
        return;
    }

    const hours = days * 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    updateTimeFields(days, hours, minutes, seconds);
}

function convertFromHours() {
    const hoursInput = document.getElementById('hours');
    const hours = parseFloat(hoursInput.value);

    if (isNaN(hours)) {
        return;
    }

    const days = hours / 24;
    const minutes = hours * 60;
    const seconds = minutes * 60;

    updateTimeFields(days, hours, minutes, seconds);
}

function convertFromMinutes() {
    const minutesInput = document.getElementById('minutes');
    const minutes = parseFloat(minutesInput.value);

    if (isNaN(minutes)) {
        return;
    }

    const hours = minutes / 60;
    const days = hours / 24;
    const seconds = minutes * 60;

    updateTimeFields(days, hours, minutes, seconds);
}

function convertFromSeconds() {
    const secondsInput = document.getElementById('seconds');
    const seconds = parseFloat(secondsInput.value);

    if (isNaN(seconds)) {
        return;
    }

    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;

    updateTimeFields(days, hours, minutes, seconds);
}

function updateTimeFields(days, hours, minutes, seconds) {
    document.getElementById('days').value = days;
    document.getElementById('hours').value = hours;
    document.getElementById('minutes').value = minutes;
    document.getElementById('seconds').value = seconds;
}