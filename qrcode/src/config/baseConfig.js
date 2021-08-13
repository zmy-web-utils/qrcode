/*
 * @fileName: 二维码生成器初始化配置信息
 * @Date: 2020-10-12 10:03:50
 * @Author: manyao.zhu
 */

import QRCode from '../ultis/qrcode.plugin';
 
// 二维码的配置信息
export const qrcodeOptions = {
    width: 128,
    height: 128,
    colorDark: '#000',
    colorLight: '#fff',
    correctLevel: QRCode.CorrectLevel.H,
    dotScale: 1 
};

// 二维码上logo的配置
export const logoOptions = {
    logo: undefined,
    logoWidth: 45,
    logoHeight: 45,
    logoBackgroundColor: '#fff',
    logoBackgroundTransparent: false
};

// 背景色的配置信息
export const backgroundOptions = {
    backgroundImage: '', // Background Image
    backgroundImageAlpha: 1, // Background image transparency, value between 0 and 1. default is 1. 
    autoColor: false
};

// title的配置信息
export const titleOptions = {
    title: 'QR Title', // content 
    titleFont: "bold 18px Arial", // font. default is "bold 16px Arial"
    titleColor: "#004284", // color. default is "#000"
    titleBackgroundColor: "#fff", // background color. default is "#fff"
    titleHeight: 70, // height, including subTitle. default is 0
    titleTop: 25 // d
};

// 副标题配置信息
export const subTitleOptions = {
    subTitle: 'QR subTitle', // content
    subTitleFont: "14px Arial", // font. default is "14px Arial"
    subTitleColor: "#004284", // color. default is "4F4F4F"
    subTitleTop: 40 // draws y coordinates. default is 0
};