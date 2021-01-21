let changePw = document.getElementById('changePasswd'),
    sign_in = document.getElementById('sign_in'),
    sign_up = document.getElementById('sign_up'),
    c2_sign_up = document.getElementById('c2_sign_up'),
    c2_sign_in = document.getElementById('c2_sign_in'),
    panels=Array.from(document.getElementById('form').children)

function changePasswd() {
    panels.forEach(v=>{
        v.classList.add('hide')
    })
    changePw.classList.remove('hide')
}

function gb2_sign_in() {
    let newPw = document.forms['cpw']['np'].value,
        sPw = document.forms['cpw']['cp'].value
    if (newPw !== sPw) {
        alert('密码不一致!')
    } else if (/[0-9]{2,}/.test(newPw) &&
        /[A-Z]+/.test(newPw) && /[a-z]+/.test(newPw) &&
        /[#&*?@]+/.test(newPw)) {
        alert('修改成功!')
        changePw.classList.add('hide')
        sign_in.classList.remove('hide')
    } else {
        alert('格式错误!')
    }
}

function signIn() {
    let tel = document.forms['tel_pw']['tel'].value
    if (/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/.test(tel)) {
        alert('登录成功!')
    } else {
        alert('手机号格式错误!')
    }
}

function check(str) {
    let f = true
    str.forEach(v => {
        if (v === ' ') f = false
    })
    return f
}

function signUp() {
    let tel = document.forms['info']['tel'].value,
        name = document.forms['info']['name'].value,
        pw = document.forms['info']['pw'].value
    if (/^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/.test(tel) &&
        /[0-9]{2,}/.test(pw) &&
        /[A-Z]+/.test(pw) && /[a-z]+/.test(pw) &&
        /[#&*?@]+/.test(pw) && name.length > 5 && check(name)) {
        alert('修改成功!')
    } else {
        alert('格式错误!')
    }
}

function c2_signUp() {
    panels.forEach(v=>{
        v.classList.add('hide')
    })
    sign_up.classList.remove('hide')
    c2_sign_up.classList.add('hide')
    c2_sign_in.classList.remove('hide')
}

function c2_signIn() {
    panels.forEach(v=>{
        v.classList.add('hide')
    })
    sign_in.classList.remove('hide')
    c2_sign_up.classList.remove('hide')
    c2_sign_in.classList.add('hide')
}