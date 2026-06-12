export function getCountryData(
    data,
    country
) {
    return data
        .filter(item => item.country === country)
        .sort((a, b) => a.year - b.year);
}