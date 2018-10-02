module.exports = function wibble(string) {
    if (typeof string !== "string") throw new TypeError("Wants a string");
    return string.replace(/\s/g, "wibble");
}