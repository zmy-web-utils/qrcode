/*
 * @fileName: 二维码解析/生成器入口
 * @Date: 2020-10-10 17:36:28
 * @Author: manyao.zhu
 */

import QRDecode from './src/ultis/qrcode.analysis';
import QRCode from './src/ultis/qrcode.plugin';

import { getQrCode, setQrCode } from './src/ultis/qrcode';
import { getFileUrl } from './src/ultis/ulti';
import { qrcodeOptions } from './src/config/baseConfig';

const BaseOptions = Object.assign({}, qrcodeOptions);

/**
 * @description 初始化生成二维码
 * @param {*} id 生成二维码的盒子id
 * @param {*} options 生成二维码的基础配置 
 */
export function initCode(id, options) {
    let opt;
    if (typeof optionns === 'string') {
        opt = Object.assign(BaseOptions, { text: options });
    } else {
        opt = Object.assign(BaseOptions, options);
    }

    const reqrcode = new QRCode(id, opt);
    setQrCode(reqrcode);
}

/**
 * @description 当初始化生成二维码之后，再次出发生成新的另一个二维码时，调用
 * @param {*} text 新的内容
 */
export function makeCode(text) {
    const reqrcode = getQrCode();
    reqrcode.makeCode(text);
}

/**
 * @description 二维码的清除功能
 */
export function clearCode() {
    const reqrcode = getQrCode();
    reqrcode.clear();
}

/**
 * @description 重新设置二维码的长宽
 * @param {*} width 二维码的宽
 * @param {*} height 二维码的高
 */
export function resizeCode(width, height) {
    const reqrcode = getQrCode();
    reqrcode.resize(width, height);
}

/**
 * @description 二维码解析
 * @param {*} file 需要解析的二维码文件
 * @param {*} callback 解析二维码结果的回调函数
 */
export function deCode(file, callback) {
    const url = getFileUrl(file);
    QRDecode.decodeFromImage(url).then(res => {
        callback(res.data);
    });
}

export const CorrectLevel = QRCode.CorrectLevel;