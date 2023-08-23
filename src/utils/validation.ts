
export function validation (elem: any, value: string) {
    let reg = ''
    const pattern = {
        login: '/^[a-zA-Z0-9-_]{3,20}$/',
        password: '(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*',
        name: '/^[А-ЯA-Z][a-zа-яё-]$',
        email: '[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]',
        phone: '',
        message: '',
    }
    switch(elem.props.pattern) {
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
        case 'message':
        reg = pattern.message
        break;
    }

    const re = new RegExp(reg);
    
        if (re.test(value)) {
            return true;
        } else {
            return false;
        }
        
}