export function validation(elem: any, value: string) {

    let reg = ''
    const pattern = {
        login: '[a-zA-Z0-9-_]{3,20}',
        password: '(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*',
        name: '/^[A-ZА-Я-][a-zа-я-]+/gi',
        email: '/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi',
        phone: '/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,15}$/gi'
    }

    switch (elem.props.pattern) {
        case 'login':
            reg = pattern.login
            break;
        case 'password':
            reg = pattern.password
            break;
        case 'name':
            reg = pattern.name
            break;
        case 'email':
            reg = pattern.email
            break;
        case 'phone':
            reg = pattern.phone
            break;
    }

    const re = new RegExp(reg);
    if (re.test(value)) {
        return true;
    } else {
        return false;
    }

}