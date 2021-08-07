export const isValidJson = (rawText) => {
    if (!!rawText) {
        try {
            JSON.parse(rawText);
            return true;
        } catch (e) {
            return false;
        }
    }
    return false
}
