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

/**
 * 含有非中文字符时。True
 * @param str
 */
export function hasNotChinese(str: string) {
    ////非全汉字时 True
    return reg_hunhe.test(str);
}
