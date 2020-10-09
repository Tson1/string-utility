import * as R from 'ramda';
const reg_hasChinese = new RegExp('.*[\u4E00-\u9FA5]+.*');
const reg_hunhe = new RegExp('[^\u4e00-\u9fa5]');
/**
 * 含有中文。True
 * @param str
 */
export function hasChinese(str: string) {
    ////"含有中文"
    return reg_hasChinese.test(str);
}
export function hasNotChinese(str: string) {
    ////"含有中文"
    return !hasChinese(str);
}

/**
 * 含有非中文字符时。True
 * @param str
 */
export function mixNotChinese(str: string) {
    ////非全汉字时 True
    return reg_hunhe.test(str);
}
/**
 * 按中文与非中文分割字符串
 * 递归
 * @param str
 */
export function splitByChinese(str: any): string[] {
    if (undefined === str) return str;
    if (null === str) return str;
    if (str.length <= 0) return str;
    if (!mixNotChinese(str)) {
        let tmp = [];
        tmp.push(str);
        return tmp;
    }
    let tmp = R.splitWhen(hasChinese, str);
    if (tmp[0].length <= 0) {
        tmp = R.splitWhen(hasNotChinese, str);
    }

    let next: string[] = [];
    if (tmp.length > 1 && tmp[1] !== undefined && tmp[1].length > 0) {
        let nextStr = R.join('', tmp[1]);
        next = splitByChinese(nextStr);
    }
    let result = [];
    result.push(R.join('', tmp[0]));
    result = R.concat(result, next);
    return result;
}
