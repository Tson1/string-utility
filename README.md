# string-utility

![travis-ci](https://travis-ci.org/Tson1/string-utility.svg?branch=main)
![language](https://img.shields.io/badge/language-typescript-orange.svg)
![license-MIT](https://img.shields.io/badge/license-MIT-green.svg)
![npm-version](https://img.shields.io/badge/npm-v1.0.5-green.svg)
![npm](https://nodei.co/npm/@tson1/string-utils.png?mini=true)

### 字符串儿的一些基本操作。

### 环境 Node10 以上

### 使用方法。

```
import * as strUtli from '@tson1/string-utils';
```

1. hasChinese //含有中文字符时返回真。

```
strUtli.hasChinese('你好world.'); // true
strUtli.hasChinese('world.'); // false
```

2. mixNotChinese //含有非中文字符时。True

```
strUtli.mixNotChinese('你好world.'); // true
strUtli.mixNotChinese('world.'); // true
strUtli.mixNotChinese('你好'); // false
```

3. splitByChinese // 按中文与非中文分割字符串

```
strUtli.splitByChinese('你好world.'); // [ '你好', 'world.' ]

strUtli.splitByChinese('我是小猪PEIQI，你好！'); // [ '我是小猪', 'PEIQI，', '你好', '！' ]
strUtli.splitByChinese('白日依山尽'); // [ '白日依山尽' ]
strUtli.splitByChinese(undefined); // undifined
strUtli.splitByChinese(null); // null
strUtli.splitByChinese(''); // ''
```

4. isUrlGlobal // 全局参照 [//] or [http] or [https]

```
strUtli.isUrlGlobal('http://xfutian.com'); // true
strUtli.isUrlGlobal('//xfutian.com'); // true
strUtli.isUrlGlobal('../xfutian.com'); // false
```

<!-- https://nodei.co/npm/@tson1/string-utils.png?compact=true -->

---

### 发布履历

-   1.0.5

    -   isUrlGlobal // 全局参照

-   1.0.4 之前，初版

    -   splitByChinese // 按中文与非中文分割字符串
