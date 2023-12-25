let result = document.querySelector('#result');

function s(n) {
    if (n > 1) return 's';
    return '';
}

function formatDuration (seconds) {
    if (seconds == 0) return 'now';
    const YEAR = 31536000; 
    const DAY = 86400;
    const HOUR = 3600; 
    const MINUTE = 60;
    let years = Math.floor(seconds / YEAR);
    seconds = seconds % YEAR;
    let days = Math.floor(seconds / DAY);
    seconds = seconds % DAY;
    let hours = Math.floor(seconds / HOUR);
    seconds = seconds % HOUR;
    let minutes = Math.floor(seconds / MINUTE);
    seconds = seconds % MINUTE;
    let str = '';
    let components = [];
    
    if (years != 0) components.push(`${years} year${s(years)}`);
    if (days != 0) components.push(`${days} day${s(days)}`);
    if (hours != 0) components.push(`${hours} hour${s(hours)}`);
    if (minutes != 0) components.push(`${minutes} minute${s(minutes)}`);
    if (seconds != 0) components.push(`${seconds} second${s(seconds)}`);
    
    switch (components.length) {
        case 1:
            str = components[0];
            break;
        case 2:
            str = components.join(' and ');
            break;
        default:
            let last = components.splice(-1, 1);
            str = components.join(', ') + ' and ' + last;
            break;
    }
    return str;
}

result.innerHTML = 1;