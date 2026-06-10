export function slugify(text: string) {
    return text
        .toString()
        .normalize('NFD')                   // Split accents from letters
        .replace(/[\u0300-\u036f]/g, '')   // Remove the accent marks
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')               // Replace spaces with -
        .replace(/[^\w\-]+/g, '')          // Remove all non-word chars
        .replace(/\-\-+/g, '-');            // Replace multiple - with single -
}

export function capitalize(text: string) {
    // Capitalize every first letter of every word
    return text.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}