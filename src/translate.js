/**
 * @param {number|string|number[]|string[]} x 
 * @param {number|string} y 
 */
export function translate(x, y) {
    if (Array.isArray(x)) {
        y = x[1];
        x = x[0];
    }
    return `translate(${x || 0},${y || 0})`;
}