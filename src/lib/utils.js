/**
 * Corrects javascript object to be used in the browser
 * @param {JavaScript Object} obj 
 * @returns {JavaScript Object} Structured clone of the object
 */
export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj);
};