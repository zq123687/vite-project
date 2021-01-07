import { shuffle } from '/@/utils/methods';

class Hash {
  startValue: number;
  endValue: number;
  constructor() {
    /**
     * Default first initial seed;
     */
    this.startValue = 0;

    /**
     * Default second initial seed;
     */
    this.endValue = 0;
  }

  /**
   * Computes and returns 32-bit hash of given message;
   */
  hash32(msg: any): string {
    const h = lookup3(msg, this.startValue, this.endValue);
    return (h.c).toString(16);
  }

  /**
   * Computes and returns 64-bit hash of given message;
   */
  hash64(msg: any): string {
    const h = lookup3(msg, this.startValue, this.endValue);
    return (h.c).toString(16) + shuffle((h.c).toString(16));
  }
}

/**
   * Implementation of lookup3 algorithm.
   */
function lookup3(k: any, start: number, end: number): any {
  let length: number = k.length;
  let a, b, c;

  a = b = c = 0xdeadbeef + length + start;
  c += end;

  let offset: number = 0;

  while (length > 12) {
    a += k.charCodeAt(offset + 0);
    a += k.charCodeAt(offset + 1) << 8;
    a += k.charCodeAt(offset + 2) << 16;
    a += k.charCodeAt(offset + 3) << 24;

    b += k.charCodeAt(offset + 4);
    b += k.charCodeAt(offset + 5) << 8;
    b += k.charCodeAt(offset + 6) << 16;
    b += k.charCodeAt(offset + 7) << 24;

    c += k.charCodeAt(offset + 8);
    c += k.charCodeAt(offset + 9) << 8;
    c += k.charCodeAt(offset + 10) << 16;
    c += k.charCodeAt(offset + 11) << 24;

    const mixed = mix(a, b, c);
    a = mixed.a;
    b = mixed.b;
    c = mixed.c;

    length -= 12;
    offset += 12;
  }

  switch (length) {
    case 12:
      c += k.charCodeAt(offset + 11) << 24;
    case 11:
      c += k.charCodeAt(offset + 10) << 16;
    case 10:
      c += k.charCodeAt(offset + 9) << 8;
    case 9:
      c += k.charCodeAt(offset + 8);

    case 8:
      b += k.charCodeAt(offset + 7) << 24;
    case 7:
      b += k.charCodeAt(offset + 6) << 16;
    case 6:
      b += k.charCodeAt(offset + 5) << 8;
    case 5:
      b += k.charCodeAt(offset + 4);

    case 4:
      a += k.charCodeAt(offset + 3) << 24;
    case 3:
      a += k.charCodeAt(offset + 2) << 16;
    case 2:
      a += k.charCodeAt(offset + 1) << 8;
    case 1:
      a += k.charCodeAt(offset + 0);
      break;

    case 0:
      return { c: c >>> 0, b: b >>> 0 };
  }

  // Final mixing of three 32-bit values in to c
  const mixed = finalMix(a, b, c)
  a = mixed.a;
  b = mixed.b;
  c = mixed.c;

  return { c: c >>> 0, b: b >>> 0 };
}

/**
 * Mixes 3 32-bit integers reversibly but fast.
 */
function mix(a: any, b: any, c: any): any {
  a -= c;
  a ^= rot(c, 4);
  c += b;
  b -= a;
  b ^= rot(a, 6);
  a += c;
  c -= b;
  c ^= rot(b, 8);
  b += a;
  a -= c;
  a ^= rot(c, 16);
  c += b;
  b -= a;
  b ^= rot(a, 19);
  a += c;
  c -= b;
  c ^= rot(b, 4);
  b += a;
  return { a: a, b: b, c: c };
}

/**
 * Final mixing of 3 32-bit values (a,b,c) into c
 */
function finalMix(a: any, b: any, c: any): any {
  c ^= b;
  c -= rot(b, 14);
  a ^= c;
  a -= rot(c, 11);
  b ^= a;
  b -= rot(a, 25);
  c ^= b;
  c -= rot(b, 16);
  a ^= c;
  a -= rot(c, 4);
  b ^= a;
  b -= rot(a, 14);
  c ^= b;
  c -= rot(b, 24);
  return { a: a, b: b, c: c };
}

/**
* Rotate x by k distance.
*/
function rot(x: any, k: any): any {
  return (((x) << (k)) | ((x) >> (32 - (k))));
}

export default Hash
