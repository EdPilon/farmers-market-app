import dayjs from 'dayjs';

export function formatDate(date, format = 'MMMM D, YYYY') {
  return dayjs(date).format(format);
}

export function isWeekend(date) {
  const day = dayjs(date).day();
  return day === 0 || day === 6;
}

export function addDays(date, days) {
  return dayjs(date).add(days, 'day').toDate();
}
