
// таймстэмп ->  22.02.2026
export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // если timestamp в секундах

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

export function formatTimeline(timestamp: number | string | Date): string {
  const ts =
    typeof timestamp === "number"
      ? timestamp * 1000
      : new Date(timestamp).getTime();

  const date = new Date(ts);

  const day = date.toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    timeZone: "Europe/Moscow",
  });

  const time = date.toLocaleTimeString("ru-RU", {
    timeZone: "Europe/Moscow",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${day} · ${time} МСК`;
}

export function getTodayUTCBounds() {
  const now = new Date();

  const year = now.getUTCFullYear();
  const month = now.getUTCMonth();
  const day = now.getUTCDate();

  const start = new Date(Date.UTC(year, month, day, 0, 0, 0));
  const end = new Date(Date.UTC(year, month, day, 23, 59, 59));

  return {
    start: start.toISOString(), // 2026-06-11T00:00:00.000Z
    end: end.toISOString(),     // 2026-06-11T23:59:59.000Z
  };
}