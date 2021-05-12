// 过滤器,过滤特殊字符,按需设置

export function stripscript(str) {
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
        var rs = "";
        for (var i = 0; i < str.length; i++) {
                rs = rs + str.substr(i, 1).replace(pattern, '');
            }
        return rs;
        }


    // 邮箱正则表达式
    export function validateEmail(value){
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        // 三元运算符也可以
        return !reg.test(value) ? true : false

        // if(!reg.test(value)){
        //     return true
        // }else{
        //     return false
        // }
    }

// 密码正则校验表达式

export function validatePasswords(value){
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/
    return !reg.test(value) ? true : false
}



    // 验证码正则表达式
    export function validateCodes(value){
        let reg = /^[a-z0-9]{6}$/gi;

        return !reg.test(value) ? true : false
        // if(!reg.test(value)){
        //     return true
        // }else{
        //     return false
        // }
    }
    