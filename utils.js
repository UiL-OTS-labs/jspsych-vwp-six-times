
/**
 * Returns the value of a query string parameter
 * @param {string} name The name of the parameter
 *
 * @returns {string|null} the value of the parameter when it is defined
 * undefined otherwise
 */
function getQueryStringParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

/**
 * Returns the value of the list num
 *
 * @returns {int} the value of the list parameter in the url parameters when it is
 * @throws {Error} when the list isn't defined or is not a valid number
 */
function getListNum() {
    let num = getQueryStringParameter("list");
    if (typeof num === "undefined") {
        throw new Error("Oops: list is not specified, invalid URL");
    }
    num = Number(num);

    if (!Number.isInteger(num)) {
        throw new Error("Oops: list is not a valid integer ");
    }
    return num;
}

function getShort() {
    let short_version = getQueryStringParameter("short");
    return Boolean(short_version);
}
