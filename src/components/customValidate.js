import zh_CN from 'vee-validate/dist/locale/zh_CN'
import { Validator } from 'vee-validate';

Validator.localize('zh_CN', {
    messages: zh_CN.messages
});

Validator.extend('phone', {
    getMessage(field, params, data) {
        var messages = '';
        if (Validator.locale === 'en') {
            messages = 'this field needs 11 valid phone number';
        } else {
            messages = '必须是有效的11位手机号码';
        }
        return messages;
    },
    validate(value, args) {
        if (value === undefined || value === null) {
            return false;
        }
        return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
