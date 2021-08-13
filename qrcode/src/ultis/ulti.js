/*
 * @fileName: 工具包
 * @Date: 2020-10-12 10:32:03
 * @Author: manyao.zhu
 */

/**
 * @description 通过文件获取当前文件的路径
 * @param {*} file 
 */
export function getFileUrl(file) {
    let url = null;
    if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(file);
    } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

/**
 * @description 将utf-8编码转换成js代码中使用的 UCS-2 的编码  （防止乱码）
 * @param {*} utf 
 */
export function utf82str(utf) {
    var str = "";
    var tmp;

    for (let i = 0; i < utf.length; i++) {
        // 英文字符集合
        if (utf.charCodeAt(i) >> 7 === 0x00) {
            str += utf.charAt(i);
            continue;
        // 其他字符集
        } else if (utf.charCodeAt(i) >> 5 === 0x06) {
            tmp = ((utf.charCodeAt(i + 0) & 0x1f) << 6) |
                ((utf.charCodeAt(i + 1) & 0x3f) << 0);
            str += String.fromCharCode(tmp);
            i++;
            continue;
        // 中文字符集
        } else if (utf.charCodeAt(i) >> 4 === 0x0e) {
            tmp = ((utf.charCodeAt(i + 0) & 0x0f) << 12) |
                ((utf.charCodeAt(i + 1) & 0x3f) << 6) |
                ((utf.charCodeAt(i + 2) & 0x3f) << 0);
            str += String.fromCharCode(tmp);
            i += 2;
            continue;
        // 其他字符集
        } else if (utf.charCodeAt(i) >> 3 === 0x1f) {
            tmp = ((utf.charCodeAt(i + 0) & 0x07) << 18) |
                ((utf.charCodeAt(i + 1) & 0x3f) << 12) |
                ((utf.charCodeAt(i + 2) & 0x3f) << 6) |
            ((utf.charCodeAt(i + 3) & 0x3f) << 0);
            str += String.fromCharCode(tmp);
            i += 3;
            continue;
        // 非法字符集
        } else {
            throw '不是UTF-8字符集';
        }
    }
    return str;
}

/**
   * UCS-2转UTF-8
   * @param {*} str UCS-2 的编码 的字符串
   */
export function str2utf8(str) {
  // UCS-2和UTF8都是unicode的一种编码方式
  // js代码中使用的是UCS-2编码

    var code;
    var utf = "";

    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i); // 返回每个字符的Unicode 编码

        if (code < 0x0080) {
            utf += str.charAt(i); // 返回指定位置的字符
        } else if (code < 0x0800) {
            utf += String.fromCharCode(0xC0 | ((code >> 6) & 0x1F));
            utf += String.fromCharCode(0x80 | ((code >> 0) & 0x3F));
        } else if (code < 0x10000) {
            utf += String.fromCharCode(0xE0 | ((code >> 12) & 0x0F));
            utf += String.fromCharCode(0x80 | ((code >> 6) & 0x3F));
            utf += String.fromCharCode(0x80 | ((code >> 0) & 0x3F));
        } else {
            throw '不是UCS-2字符集';
        }
    }
    return utf;
}