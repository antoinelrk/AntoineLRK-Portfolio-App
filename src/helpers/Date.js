export function toHumans (dateString) {
    const date = new Date(dateString)
    const arrayDayOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const arrayMonth = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
    const dayName = arrayDayOfWeek[date.getDay()];
    const numberOfDay = date.getDate();
    const monthName = arrayMonth[date.getMonth()];
    const fullYear = date.getFullYear();
    return `${dayName} ${numberOfDay} ${monthName} ${fullYear}`
}