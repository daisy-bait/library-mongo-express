
const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
  timeZone: 'America/Bogota'
};

export default function timeFormat(date: Date) {
    return Intl.DateTimeFormat('es-CO', options).format(date);
}