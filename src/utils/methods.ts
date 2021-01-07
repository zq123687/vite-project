/**
 * 根据类型生成26个字母
 * Generate 26 letters according to the type
 *
 * @param caseType - The type of letter to generate
 */
export const letter = (caseType: 'upper' | 'lower'): string[] => {
  let count: number = 0;
  const arr: string[] = [];
  let index: number = caseType === 'upper' ? 97 : 65;
  const length: number = caseType === 'upper' ? 123 : 91;

  for (; index < length; index++) {
    arr[count] = String.fromCharCode(index)
    count++
  }

  return arr
}

/**
 * 将字符串乱序，随机顺序
 * The string out of order, random order
 *
 * @param arr - A string or array to reorder
 */
export function shuffle (arr: Array<any> | string): Array<any> {
  let arr2_ = Object.assign([], arr);
  let length = arr.length;

  for (let index: number = 0; index < length; index++) {
    let index = Math.floor(Math.random() * (length--));

    [arr2_[index], arr2_[length]] = [arr2_[length], arr2_[index]];
  }

  return arr2_
}

