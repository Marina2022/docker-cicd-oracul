import countries from "i18n-iso-countries";
import ru from "i18n-iso-countries/langs/ru.json";

countries.registerLocale(ru);

const fallbackMap: Record<string, string> = {
  "Занзибар": "TZ",
  "Zanzibar": "TZ",
  "США": "US",
  "USA": "US",
  "United States": "US",
  "Россия": "RU",
  "Россия Федерация": "RU",
  "Великобритания": "GB",
  "UK": "GB",
  "United Kingdom": "GB",
  "Германия": "DE",
  "Франция": "FR",
};

export function getCountryCode(country: string): string | null {
  if (!country) return null;

  const normalized = country.trim();

  const code =
    countries.getAlpha2Code(normalized, "ru") ||
    countries.getAlpha2Code(normalized, "en");

  return code || fallbackMap[normalized] || null;
}