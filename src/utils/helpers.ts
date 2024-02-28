export function makeSafeName(input: string) {
    // Remove any characters that are not letters, digits, or underscores
    const sanitized = input.replace(/[^a-zA-Z0-9_]/g, '_');

    // Ensure the name starts with a letter or underscore
    if (/^[0-9_]/.test(sanitized)) {
        return `_${sanitized}`;
    }

    return sanitized;
}
