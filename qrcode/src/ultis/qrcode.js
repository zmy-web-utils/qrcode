/*
 * @fileName: 二维码生成器
 * @Date: 2020-10-12 09:46:46
 * @Author: manyao.zhu
 */
let qrcode;

export function getQrCode() {
    return qrcode || null;
}

export function setQrCode(code) {
    qrcode = code;
}