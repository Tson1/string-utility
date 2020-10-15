import * as strUtli from '../index';
test('empty test', async () => {
    console.log('test');
    expect(1).toBe(1);
    console.log('test');
});

test('hasChinese test', async () => {
    //含有中文字符时返回真。
    let r = strUtli.hasChinese('你好world.');
    expect(r).toBe(true);

    r = strUtli.hasChinese('world.');
    expect(r).toBe(false);
});

test('hasNotChinese test', async () => {
    //含有非中文字符时返回真。
    let r = strUtli.mixNotChinese('你好world.');
    expect(r).toBe(true);

    r = strUtli.mixNotChinese('world.');
    expect(r).toBe(true);

    r = strUtli.mixNotChinese('你好');
    expect(r).toBe(false);
});

test('splitByChinese test', async () => {
    //含有非中文字符时返回真。
    let r = strUtli.splitByChinese('你好world.'); // [ '你好', 'world.' ]
    console.log(r);
    expect(r.length).toBe(2);

    r = strUtli.splitByChinese('我是小猪PEIQI，你好！'); // [ '我是小猪', 'PEIQI，', '你好', '！' ]
    console.log(r);
    expect(r.length).toBe(4);

    r = strUtli.splitByChinese('白日依山尽'); // [ '白日依山尽' ]
    console.log(r);
    expect(r.length).toBe(1);

    r = strUtli.splitByChinese(undefined); // undifined
    console.log(r);
    expect(r).toBe(undefined);

    r = strUtli.splitByChinese(null); // null
    console.log(r);
    expect(r).toBe(null);

    r = strUtli.splitByChinese(''); // ''
    console.log(r);
    expect(r).toBe('');
});

test('isUrlGlobal test', async () => {
    //Html 中的全局URL
    let r = strUtli.isUrlGlobal('http://xfutian.com');
    expect(r).toBe(true);
    r = strUtli.isUrlGlobal('https://xfutian.com');
    expect(r).toBe(true);
    r = strUtli.isUrlGlobal('//xfutian.com/mengxue/');
    expect(r).toBe(true);

    r = strUtli.isUrlGlobal('/xfutian.com/mengxue/');
    expect(r).toBe(false);

    r = strUtli.isUrlGlobal('./xfutian.com/mengxue/');
    expect(r).toBe(false);
    r = strUtli.isUrlGlobal('../xfutian.com/mengxue/');
    expect(r).toBe(false);
});
