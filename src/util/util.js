import CryptoJS from 'crypto-js'

export default {

    /**
    
    * @param {*需要加密的字符串 注：对象转化为json字符串再加密} word
    
    * @param {*aes加密需要的key值，这个key值后端同学会告诉你} keyStr
    
    */

    encrypt(word, keyStr, iv) { // 加密

        var key = CryptoJS.enc.Utf8.parse(keyStr);

        var iv = CryptoJS.enc.Utf8.parse(iv);


        var encrypted = CryptoJS.AES.encrypt(word, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })

        return encrypted.toString()

    },

    decrypt(word, keyStr, iv) { // 解密

        var key = CryptoJS.enc.Utf8.parse(keyStr)

        var iv = CryptoJS.enc.Utf8.parse(iv);

        var decrypt = CryptoJS.AES.decrypt(word, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })

        return CryptoJS.enc.Utf8.stringify(decrypt).toString()

    }

}
