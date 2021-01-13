const objProto = Object.prototype;
export const { toString, hasOwnProperty } = objProto;

/**
 * Determines whether the passed value is an Array.
 * 
 * @param {*} val - The value to be tested for being an array.
 * @returns { boolean }
 */
export const isArray: Function = Array.isArray || function (val: any): val is Array<any> {
  return toString.call(val) === '[object, Array]';
};
