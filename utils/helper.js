export const setDate = (date = '') => {
    if(!date) return

    const [datePart, timePart] = date.split(' ');
    const [hours, minutes] = timePart.split(':');

    return `${hours}:${minutes}`;
}

export const mbToMmHg = (pressure_mb = null) => {
    if(!pressure_mb) return
    return (pressure_mb * 0.750062).toFixed(0);
}

export const kmhToMs = (speed_kmh=null) => {
    if(!speed_kmh) return
    return (speed_kmh/3.6).toFixed(1);
}

export const getDateInfo = (dateString) => {
    const date = new Date(dateString);

    const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const weekdayName = weekdays[date.getDay()];

    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
    const monthShortName = months[date.getMonth()];

    const day = date.getDate();

    return {
        weekdayName,
        monthShortName,
        day
    };
}