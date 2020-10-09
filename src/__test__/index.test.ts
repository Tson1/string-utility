import * as strUtli from '../index';
test('empty test', async () => {
    console.log('test');
    expect(1).toBe(1);
    console.log('test');
});

test('hasChinese test', async () => {
    //还有中文字符时返回真。
    let r = strUtli.hasChinese('你好world.');
    expect(r).toBe(true);

    r = strUtli.hasChinese('world.');
    expect(r).toBe(false);
});

test('hasNotChinese test', async () => {
    //还有非中文字符时返回真。
    let r = strUtli.hasNotChinese('你好world.');
    expect(r).toBe(true);

    r = strUtli.hasNotChinese('world.');
    expect(r).toBe(true);

    r = strUtli.hasNotChinese('你好');
    expect(r).toBe(false);
});
